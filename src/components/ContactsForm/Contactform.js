import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
//import PhoneInput from 'react-phone-number-input'
//import flags from 'react-phone-number-input/flags';
import Config from '../../utils/Config';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Contactform() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.profile);

    //const [value, setValue] = useState();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ label, setLabel ] = useState('');

    const submitContact = () => {
        
        const payload = {
            title: title,
            first_name: firstName,  
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            label: label,
            company: company
        }

        // console.log("payload:", payload);

        // const token = localStorage.getItem('token');
        // const url   = `${Config.API.URL}/projects`;
        const url   = `${Config.API.URL}/contacts`;

        // console.log('url:', url);

        // console.log(`Bearer ${token}`);

        fetch(url, {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
            body: JSON.stringify(payload),
        }).then((res) => {
            // if 401 error (unauthenticated user, then log user out)
            if ((res.status) === 401) {
                console.log("401 Error: Unauthenticated");

                //localStorage.removeItem('token');
                //localStorage.removeItem('user');
                //history.push('/login');
            }
            return res;
        }).then((res) => res.json()).then( async (res) => {
            // console.log('res:', res);
            //setShowModal(false);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                // const data = [ ...contacts ];

                // data.push({ ...res.data, checked: true });
                
                // setContacts(data);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setCompany('');
                setTitle('');
                setLabel('');
                
                navigate('/contacts');

                //swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });    
            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
    }

    return (
        <div>

            <div className='bg-white rounded-[8px] p-4 mt-3 shadow-lg ' >
                <h3 className=' text-center text-3xl text-black f-f-sm mt-6 ' >
                    Create Contact
                </h3>

                <div className="   md:mt-8  w-10/12 sm:w-9/12 ml-auto mr-auto " >
                    <div className="grid grid-cols-12   ">
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                First Name
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Last Name
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setLastName(e.target.value)} value={lastName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Email
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setEmail(e.target.value)} value={email} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Phone Number
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            {/* <input  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />*/}

                            <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />

                            {/* <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                onChange={setValue}
                                className="w-full phone-input  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none "
                                flags={flags}
                                defaultCountry="US"
                            /> */}


                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Company
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setCompany(e.target.value)} value={company} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Title
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setTitle(e.target.value)} value={title} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}
                        {/*  col started */}
                        <div className=" col-span-12 lg:col-span-3 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Label
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-9 mt-5 ">
                            <input onChange={(e) => setLabel(e.target.value)} value={label} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>

                        {/* col ended */}

                    </div>
                    <div className=' mt-10 text-end  ' >
                        <button onClick={submitContact} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
