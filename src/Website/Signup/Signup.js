import React, { Fragment, useRef, useState } from "react";

import { Dialog, Transition } from '@headlessui/react';
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

  const [ loading, setLoading ] = React.useState(false);
  // const [ submit, setSubmit ] = React.useState()
  const [ message, setMessage ] = React.useState(null)
  const [ user, setUser ] = React.useState({
    first_name            : "",
    last_name             : "",
    email                 : "",
    email_confirmation    : "",
    password              : "",
    password_confirmation : ""
  });

  // const [ goToLogin, setGoToLogin ] = React.useState();
  
  const [ accountActivateModel, setAccountActivateModel ] = useState(false)

  const cancelButtonRef = useRef(null);
  const pin = useRef();
  const userInfo = useSelector((state) => state.user.profile);

  if (userInfo?.id) {
    navigate('/dashboard');
  }

  React.useEffect(() => {
    // setAccountActivateModel(true)
    if (localStorage.getItem('temp-signup')) {
      const res  = JSON.parse(localStorage.getItem('temp-signup'));
      user.email = res.data.email;

      // setSubmit(false); 
      setLoading(true);
      setUser(user);

      // this.setState({ submit: false, loading: true, user });
      
      setAccountActivateModel(true)
      // verifyEmailModel.show();
    } else {
      if (localStorage.getItem('user')) {
        navigate('/auth');
      }
    }
  }, []);

  const _onChange = (e) => {
    const user2  = { ...user };
    const target = e.target;
    
    user2[target.id] = target.value;

    if (e.target.id === 'email') {
      user2.email_confirmation = target.value;
    }
    
    setUser(user2);
  }

  /**
     * validate inputs before sending values to server
     */
  const validateInputs = (e) => {
    e.preventDefault();
    //console.log('user', user);
    
    const { first_name, last_name, email, email_confirmation, password, password_confirmation } = user;

    if (first_name && last_name && email && email_confirmation && password && password_confirmation) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == true) {
        fetch(Config.API.URL+'/auth/email-exists', {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }).then((res) => {
          // if 401 error (unauthenticated user, then log user out)
          if ((res.status) == 401) {
            console.log("401 Error: Unauthenticated");

            localStorage.removeItem('user');
            navigate('/login');
          }
          return res;
        }).then((res) => res.json()).then( async (res) => {
            console.log('Email res: ', res);
            if (res.data) {
              reportMessage(res.message);
            } else {
              if (password === password_confirmation && password.length >= 8) {
                // setMessage(null);
                handleSignup();
              } else if (password.length < 8) {
                reportMessage('Password most be at least 8 character or more');
              } else {
                reportMessage('Password most match with confirm password');
              }

            }
        }).catch((error) => {
          console.log('Error: ', error);
          reportMessage('An error occurred! while trying to validate your email, please try again');
        });
      } else {
        reportMessage('Invalid e-mail address');
      }
    } else {
      reportMessage('All fields are required');
    }

    // console.log("message", message);
  }

  /**
   * Creates user account
   */
  const handleSignup = () => {
    console.log('handleSignup...');
    // const user2 = { ...user };
    // setSubmit(false);
    setLoading(true);

    console.log("loading:", loading);

    // submit API request to sign user up and create account
    fetch(Config.API.URL+'/auth/signup', {
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
      console.log("Register res", res);

      // if successful, ask user to verify email
      if (res.status) {
        //user2.email = res.data.email;
        localStorage.setItem('temp-signup', JSON.stringify(res));
        //this.verifyEmailModel.show();

        setAccountActivateModel(true);

        //setUser(user2);
      } else {
        reportMessage(res.message);
      }
      
      //setSubmit(true);
      setLoading(false);
    }).catch((error) => {
      console.log('Error: ', error);
      
      // setSubmit(true);
      setLoading(false);
      reportMessage('An error occurred!!! while connecting to server. Please try again');
    });
  }

  /**
   * Confirms user email
   * 
   * @param {*} value - email verification code
   */
  const _onComplete = (value) => {
    // const self     = this;
    //const { user } = this.state;
    
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
        
      console.log('Res: ', res);
      if (res.status) {
        // setGoToLogin(true);
        setAccountActivateModel(false);
        localStorage.removeItem('temp-signup');
        navigate('/login');
        // self.setState({ goToLogin: true });
        // this.verifyEmailModel.hide();
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
    // console.log('Login Success:', res.profileObj);

    // Submit API request to confirm google login information
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
      console.log("res", res);

      // if successful, log user in
      if (res.status) {
        localStorage.setItem('user', JSON.stringify(res.data));

        navigate('/auth');

      } 
      // if unsucessful, verify user email
      else {
        if (res.message === "Pls verify your email address. A confirmation email has been resent to your email.") {
          setAccountActivateModel(true);
          //this.verifyEmailModel.show();
        } else {
          reportMessage(res.message);
          //this.setState({ message: res.message });
        }
      }

      // console.log('res: ', res);
      
    }).catch((error) => {
      console.log('Error: ', error);

      reportMessage('An error occurred!!! while connecting to server. Please try again');

      // this.setState({ message: 'An error occurred!!! while connecting to server. Please try again' });
    });
  };

  /**
   * Handles failed Google login
   * 
   * @param {*} res - response from Google login
   */
  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  };

  /**
   * Handles logging out of application
   */
  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    //console.clear();
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
              <div className='w-11/12 sm:w-8/12 ml-auto mr-auto  py-20 relative lg:top-[10%] ' >
                <img src={Logo} className=" w-[190px] h-auto sm:w-[241px] sm:h-[36px]  " alt="" />
                <h2 className='f-f-sm text-black text-4xl  sm:text-3xl mt-4 ' >Sign up for a new account</h2>
                <h4 className=' text-black-vlight f-f-r text-lg ' >Sign up with your email address below</h4>
                { message ?
                  <div style={{ 
                    color: "white", 
                    fontSize: 12, 
                    //position: "absolute",
                    backgroundColor: "darkred", 
                    height: 40, 
                    //width: 200, 
                    right: 0, 
                    //display: "flex", 
                    //flexDirection: "row", 
                    borderRadius: 5, 
                    //alignItems: "center", 
                    padding: 10 
                  }}>{ message }</div> :
                null }
                <h4 className='  text-black-vlight f-f-r  text-base mt-8 ' >First Name</h4>
                <input type="text" name="first_name"
                                              id="first_name" 
                                              value={user.first_name}
                                              onChange={_onChange} 
                                              placeholder="First Name"
                                              autoComplete="first_name" class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none" />

                <h4 className='  text-black-vlight f-f-r  text-base mt-4 ' >Last Name</h4>
                <input type='text' name="last_name"
                                              id="last_name" 
                                              value={user.last_name}
                                              onChange={_onChange} 
                                              placeholder="Last Name"
                                              autoComplete="last_name" class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />

                <h4 className='  text-black-vlight f-f-r  text-base mt-4 ' >Email</h4>
                <input id="email"
                                              name="email"
                                              type="email"
                                              value={user.email}
                                              onChange={_onChange} 
                                              placeholder="E-mail"
                                              autoComplete="easi-email" class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />

                <h4 className='  text-black-vlight f-f-r  text-base mt-4 ' >Password</h4>
                <div className=' relative' >
                  <input type='password' name="password"
                                              id="password"
                                              value={user.password}
                                              onChange={_onChange} 
                                              placeholder="Password"
                                              autoComplete="password" class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />
                  <svg className='absolute top-[16px] right-[11px] ' width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.0001 2.45833C12.6856 2.45273 14.3385 2.92288 15.7687 3.81475C17.1989 4.70661 18.3484 5.98398 19.0851 7.5C17.5726 10.5892 14.4834 12.5417 11.0001 12.5417C7.51675 12.5417 4.42758 10.5892 2.91508 7.5C3.65173 5.98398 4.80124 4.70661 6.23147 3.81475C7.6617 2.92288 9.31457 2.45273 11.0001 2.45833ZM11.0001 0.625C6.41675 0.625 2.50258 3.47583 0.916748 7.5C2.50258 11.5242 6.41675 14.375 11.0001 14.375C15.5834 14.375 19.4976 11.5242 21.0834 7.5C19.4976 3.47583 15.5834 0.625 11.0001 0.625ZM11.0001 5.20833C11.6079 5.20833 12.1908 5.44978 12.6205 5.87955C13.0503 6.30932 13.2917 6.89221 13.2917 7.5C13.2917 8.10779 13.0503 8.69068 12.6205 9.12045C12.1908 9.55022 11.6079 9.79167 11.0001 9.79167C10.3923 9.79167 9.8094 9.55022 9.37963 9.12045C8.94986 8.69068 8.70842 8.10779 8.70842 7.5C8.70842 6.89221 8.94986 6.30932 9.37963 5.87955C9.8094 5.44978 10.3923 5.20833 11.0001 5.20833ZM11.0001 3.375C8.72675 3.375 6.87508 5.22667 6.87508 7.5C6.87508 9.77333 8.72675 11.625 11.0001 11.625C13.2734 11.625 15.1251 9.77333 15.1251 7.5C15.1251 5.22667 13.2734 3.375 11.0001 3.375Z" fill="#DED2D9" />
                  </svg>

                </div>
                <h4 className='  text-black-vlight f-f-r  text-base mt-4 ' >Password</h4>
                <div className=' relative' >
                  <input type='password' name="password_confirmation"
                                              id="password_confirmation" 
                                              value={user.password_confirmation}
                                              onChange={_onChange} 
                                              placeholder="Confirm Password"
                                              autoComplete="password_confirmation" class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />

                  <svg className='absolute top-[16px] right-[11px] ' width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83341 5.33082L3.00675 4.16666L18.3334 19.4933L17.1692 20.6667L14.3459 17.8433C13.2917 18.1917 12.1734 18.375 11.0001 18.375C6.41675 18.375 2.50258 15.5242 0.916748 11.5C1.54925 9.88666 2.55758 8.46582 3.84091 7.33832L1.83341 5.33082ZM11.0001 8.74999C11.7294 8.74999 12.4289 9.03972 12.9446 9.55545C13.4604 10.0712 13.7501 10.7706 13.7501 11.5C13.7505 11.8122 13.6978 12.1222 13.5942 12.4167L10.0834 8.90582C10.3779 8.80222 10.6879 8.74953 11.0001 8.74999ZM11.0001 4.62499C15.5834 4.62499 19.4976 7.47582 21.0834 11.5C20.3353 13.4004 19.064 15.05 17.4167 16.2575L16.1151 14.9467C17.3827 14.0698 18.4051 12.8833 19.0851 11.5C18.344 9.98743 17.1935 8.71311 15.7642 7.82187C14.335 6.93063 12.6844 6.45821 11.0001 6.45832C10.0009 6.45832 9.02008 6.62332 8.10342 6.91666L6.69175 5.51416C8.01175 4.94582 9.46925 4.62499 11.0001 4.62499ZM2.91508 11.5C3.65615 13.0125 4.80669 14.2869 6.23592 15.1781C7.66515 16.0694 9.31574 16.5418 11.0001 16.5417C11.6326 16.5417 12.2559 16.4775 12.8334 16.3492L10.7434 14.25C10.1056 14.1816 9.51034 13.897 9.05673 13.4433C8.60311 12.9897 8.31845 12.3945 8.25008 11.7567L5.13342 8.63082C4.22591 9.40999 3.46508 10.3817 2.91508 11.5Z" fill="#DED2D9" />
                  </svg>

                </div>



                <button type="button" onClick={validateInputs} class=" text-white w-full h-[52px] f-f-sm  text-lg 2xl:text-xl bg-primary  rounded-[9px]  text-center mt-10  ">{ loading ? 'Loading...' : 'Sign up' }</button>
                <h2 className=' text-black-vlight f-f-r  text-lg 2xl:text-xl mt-8 text-center ' >Already have an account?  <Link to="/login" > <span className=' f-f-sm  text-primary ' >Login</span> </Link></h2>
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
                            <img src={logo} style={{marginBottom: 20, width: 50}} alt="" />
                            <p className="notice-board">We emailed you a five-digit code to <strong>{ user.email }</strong>, Enter the code below to confirm your email address.</p>
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
