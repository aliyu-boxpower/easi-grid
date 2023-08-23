import React, { Fragment, useRef, useState } from "react";

import { Dialog, Transition } from '@headlessui/react';
import Loginimg from '../../assets/images/Login-side.svg'
import Logo from '../../assets/images/Logo 2.svg';
import { Link, useNavigate } from 'react-router-dom';
import Config from '../../utils/Config';

import logo from "../../assets/boxpower-logo.png";

import PinInput from 'react-pin-input';

import { setUserMiniProfile } from "../../redux/slices/userSlice";

import { useDispatch, useSelector } from 'react-redux';

export default function Login() {
  
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [ userData, setUserData ] = useState({ email: "", password: "" });
  const [ loading, setLoading   ] = useState(false);
  const [ message, setMessage   ] = useState(null);
  const [ accountActivateModel, setAccountActivateModel ] = useState(false);

  const pin  = useRef();
  const user = useSelector((state) => state.user.profile);
  
  const cancelButtonRef = useRef(null);

  React.useEffect(() => {
    if (user?.id) {
      navigate('/dashboard');
    }
  }, )

  /**
     * Handles changes to login input fields
     * 
     * @param {*} e - The HTML entity containing the relevant input field
     */
  const _onChange = (e) => {
    const user   = { ...userData };
    const target = e.target;
    
    user[target.id] = target.value;
    
    setUserData(user);
  }

  const validateInputs = (e) => {
    e.preventDefault();
    // console.log('user', userData);
    
    const { email, password } = userData;

    if (email && password) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == true) {
        handleLogin();
      } else {
        reportMessage('Invalid e-mail address');
      }
    } else {
      reportMessage('All fields are required');
    }

    //console.log("message", message);
  }

  /**
   * Logs user into the application
   */
  const handleLogin = (e) => {
    // e.preventDefault();
    // if (submit) {
    const user = { ...userData };
    // console.log("userData", userData);
    if (user.email && user.password) {

      // setSubmit(true);
      setLoading(true);

      // console.log('url:', Config.API.URL+'/auth/login');

      // submit API request to confirm login information
      fetch(Config.API.URL+'/auth/login', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      }).then((res) => {
        // if 401 error (unauthenticated user, then log user out)
        if ((res.status) === 401) {
          console.log("401 Error: Unauthenticated");

          localStorage.removeItem('user');
          navigate('/login');
        }
        return res;
      }).then((res) => res.json()).then( async (res) => {
        console.log("res", res);

        // if successful, log user in
        if (res.status) {
          setUserData({ email: "", password: "" });
          const data  = { ...res.data };
          
          localStorage.setItem('user', JSON.stringify(data));
          dispatch(setUserMiniProfile(data));
          navigate('/dashboard');

        } 
        // if unsucessful, verify user email
        else {
          if (res.message === "Pls verify your email address. A confirmation email has been resent to your email.") {
            setAccountActivateModel(true);
          } else {
            reportMessage(res.message);
          }
        }
        setLoading(false);
        // console.log('res: ', res);
          
      }).catch((error) => {
        console.log('Error: ', error);
        setLoading(false);
        reportMessage('An error occurred!!! while connecting to server. Please try again');
      });
    } else {
        reportMessage('E-mail address and password are required to login');
    }
  }

  /**
   * Confirms user email
   * 
   * @param {*} value - email verification code
   */
  const _onComplete = (value) => {
    const user = userData;
    
    // send API request to confirm email
    fetch(Config.API.URL+'/auth/confirm-email', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user.email, confirmation_code: `${value}`  }),
    }).then((res) => {
      // if 401 error (unauthenticated user, then log user out)
      if ((res.status) === 401) {
        console.log("401 Error: Unauthenticated");

        localStorage.removeItem('user');
        navigate('/login');
      }
      return res;
    }).then((res) => res.json()).then( async (res) => {
        
      //console.log('Res: ', res);

      // if successful, log user into app
      if (res.status) {
        //self.setState({ goToLogin: true });
        //verifyEmailModel.hide();
        setAccountActivateModel(false)
        handleLogin();
      } else {
        // pin.clear();
      }
        
    }).catch((error) => {
      console.log('Error: ', error);
      _onComplete();
    });
  }

  /**
   * Handles successful Google login
   * 
   * @param {*} res - response from Google login
   */
  const onLoginSuccess = (res) => {
    //console.log('Login Success:', res.profileObj);

    // submit API request to confirm google login information
    fetch(Config.API.URL+'/auth/login-with-google', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(res.profileObj),
    }).then((res) => {
      // if 401 error (unauthenticated user, then log user out)
      if ((res.status) == 401) {
        console.log("401 Error: Unauthenticated");

        localStorage.removeItem('user');
        navigate('/login');
      }
      return res;
    }).then((res) => res.json()).then( async (res) => {
      // console.log("res", res);

      // if successful, log user in
      if (res.status) {
        const data  = { ...res.data };
        const token = data.token;

        delete data.token;

        console.log("data:", data);
        console.log("token:", token);

        // const user  = 
        // localStorage.setItem('user', JSON.stringify(res.data));
        // navigate('/auth/home');
      } 
      // if unsucessful, verify user email
      else {
        if (res.message === "Pls verify your email address. A confirmation email has been resent to your email.") {
          setAccountActivateModel(true);
          // verifyEmailModel.show();
        } else {
          reportMessage(res.message);
        }
      }

      //console.log('res: ', res);
      
    }).catch((error) => {
      console.log('Error: ', error);

      reportMessage('An error occurred!!! while connecting to server. Please try again');
    });
  };

  const reportMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 5000);
  }

  return (
    <>
      
      <div className=' login-bg ' >
        <div className='grid grid-cols-12   ' >
          <div className=' col-span-6 hidden xl:block ' > </div>
          <div className=' col-span-12 xl:col-span-6 ' >

            <div className=' bg-white shadow-lg   xl:rounded-l-[35px] items-center  h-[1032px]' >
              <div className='w-11/12 sm:w-8/12 ml-auto mr-auto  py-20 relative top-[18%] ' >
                <img src={Logo} className=" w-[190px] h-auto sm:w-[241px] sm:h-[36px]  " alt="" />
                <h2 className='f-f-sm text-black text-4xl  sm:text-3xl mt-4 ' >Login to your Account</h2>
                <h4 className=' text-black-vlight f-f-r text-lg ' >Access your EasiGrid Dashboard</h4>
                { message ?
                  <div style={{ 
                    color: "white", 
                    fontSize: 12, 
                    // position: "absolute",
                    backgroundColor: "darkred", 
                    height: 40, 
                    //width: 200, 
                    //right: 0, 
                    display: "flex", 
                    flexDirection: "row", 
                    borderRadius: 5, 
                    alignItems: "center", 
                    padding: 10 
                  }}>{ message }</div> :
                null }
                <h4 className='  text-black-vlight f-f-r  text-base mt-8 ' >Email</h4>
                <input id="email" name="email" type="email" value={userData.email} autoComplete="email" onChange={ _onChange } className=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />

                <h4 className='  text-black-vlight f-f-r  text-base mt-4 ' >Password</h4>
                <input id="password" name="password" type='password' value={userData.password} autoComplete="current-password" onChange={ _onChange } required className=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />

                {/* remember check started */}

                <div className='grid grid-cols-12  mt-4 ' >
                  <div className=' col-span-6 ' >
                    <div className="flex items-center mb-4" bis_skin_checked="1">
                      <input id="default-checkbox" type="checkbox" className="w-4 h-4 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " value="" />
                      <label htmlFor="default-checkbox" className="ml-4  text-black-vlight f-f-r  text-base  ">Remember Me</label>
                    </div>
                  </div>
                  <div className=' col-span-6 ' >
                    <Link to="/forgotpassword" >
                      <h2 className=' f-f-sm text-base text-primary text-end ' >Forgot Password?</h2>
                    </Link>
                  </div>
                </div>
                {/* reme,ber check ended */}
                <Link to="/dashboard" >
                  <button type="button" onClick={validateInputs} className=" text-white w-full h-[52px] f-f-sm  text-lg 2xl:text-xl bg-primary  rounded-[9px]  text-center  ">{ loading ? 'Loading...' : 'Log in' }</button>
                </Link>
                <h2 className=' text-black-vlight f-f-r  text-lg 2xl:text-xl mt-8 text-center ' >Not Registered Yet? <Link to="/signup" > <span className=' f-f-sm  text-primary ' >Create an account</span></Link> </h2>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Transition.Root show={accountActivateModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setAccountActivateModel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                      </div> */}
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        {/* <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Deactivate account
                        </Dialog.Title> */}
                        <div className="mt-2">
                          <form style={{ textAlign: 'center' }}>
                            <img src={logo} style={{marginBottom: 20, width: 50}} />
                            <p className="notice-board">We emailed you a five-digit code to <strong>{ userData.email }</strong>, Enter the code below to confirm your email address.</p>
                            <PinInput 
                              length={5} 
                              initialValue=""
                              focus
                              type="numeric" 
                              inputMode="number"
                              ref={pin}
                              style={{ padding: 10, fontSize: 24 }}  
                              inputStyle={{ borderColor: '#aaa', borderRadius: 7 }}
                              inputFocusStyle={{borderColor: 'rgb(228, 162, 86)'}}
                              onComplete={_onComplete}
                              autoSelect={true}
                              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                          </form>
                          <p className='sticker-bottom'>Make sure to keep this window open while you check your email</p>
                          {/* <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All of your data will be permanently
                          removed. This action cannot be undone.
                          </p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                      onClick={() => setAccountActivateModel(false)}
                    >
                      Activate
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setAccountActivateModel(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
