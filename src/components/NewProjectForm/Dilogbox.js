import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
// import flags from 'react-phone-number-input/flags';
import Config from '../../utils/Config';
import { useSelector } from 'react-redux';

export default function TestingDilog(props) {
    const user = useSelector((state) => state.user.profile);

    const [ showModal, setShowModal ] = useState(false);
    const [ on, seton ] = useState("Add");
    // const [ value, setValue ] = useState();
    const data = (get) => seton(get);
    const [ contacts, setContacts ] = useState([]);

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ company, setCompany ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ label, setLabel ] = useState('');

    useEffect(() => {
        
        //const token = localStorage.getItem('token');
        const url   = `${Config.API.URL}/contacts`;

        //const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDhiOTU5OTZmZWNkMTc1ZDk0YzUyZTljNzFjNDhiNGMxNjVkMjUxM2QxODQxZjhjMThiMzU1OTE5NmU1ZjY1OTY2YTdiNjc0ZWVjYjZlNGMiLCJpYXQiOjE2ODkxODU5NzkuMzc0MDEyLCJuYmYiOjE2ODkxODU5NzkuMzc0MDE0LCJleHAiOjE3MjA4MDgzNzkuMzY3Niwic3ViIjoiMiIsInNjb3BlcyI6W119.OH0K3Qs3Rmni7Vz-aZJcRAZ6uLhu4D7Plmropd91jCzKeuUAntD6ojFsJcy_RqOgsCxDL1VaU94Y2hPsMUwbjzwJMCOKrs32QMsCLD_euuLKmqEmXPLK7lHOapAJQi-u55sY_KRof9CgZtJFcNXA3ACPDy1IzO9tbrP33w_023fgzwKDC6-52hNUvI68ppdYENvgaLE-cONCypfYtgRc6ahyI8O5Cd3W3OIZ4jWSflxmVKF9rptnlR2hCnFp1HP8sNXNjYNavCk8-EwUnrE149Y009mX1IhL4wZPp151hxkzgaBWGhCfiNXzl1dbt4Xce8b0ifhZE42Wt9l8h5Yv7uJwBygdUp3G93ljceE1pbgyZ4z1X3C1LpHj2jV4mLlt3qEQm-5LG4maPxr9lONkvnUpEahc2D5a_rApGhDT6DaTrV9UA4iAt_TtYPeuyOMKtSFgx-gHFbTpskBK0NFITGiyr9EBN0GSJBYxkeVmhxauNhSjaD6tA68nUDblb-f1CjAdqMTdx0UidhIov2lKKGBJKRPMM2LOOe0mag5s098A4LwEzcvIfXSUubu5yvfjnCfdzV-xsGMlu0y_6WCI4CDHKg3K-kgR_lvbrit7TxAdwfUeVSCBbQS1unloYnm2nT8Lk5BhmjDrMXV3PXF5VGW1DK1HPPFAjqnils7DrIE';

        //console.log('url:', url);

        //console.log(`Bearer ${token}`);

        fetch(url, {
            method: 'GET',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
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
            if (res.status) {
                //swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });
                setContacts(res.data.data);   
            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
    }, []);

    useEffect(() => {
        const project_contacts = [];
        for (let i = 0; i < contacts.length; i++) {
            const contact = contacts[i];

            if (contact.checked) {
                // project_contacts.push(contact.id);
                project_contacts.push(contact);
            }
        }
        
        props.onReceiveContact(project_contacts);
    }, [contacts]);

    const contact_selected = contacts.find(x => x.checked);

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
            setShowModal(false);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                const data = [ ...contacts ];

                data.push({ ...res.data, checked: true });
                
                setContacts(data);

                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setCompany('');
                setTitle('');
                setLabel('');

                //swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });    
            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
    }
    const _onChangeContact = (e) => {
        const data = [ ...contacts ];
        
        data[e.target.id].checked  = !data[e.target.id].checked;

        setContacts(data);
    }
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="relative border bg-primary w-[222px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
                <svg className=" absolute left-[20px] top-[11px] " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13H13V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H11V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13Z" fill="white" />
                </svg>

                { contact_selected ? 'Another Contact' : 'Select Contact' }
            </button>

                { showModal ? (
                <>
                    <div className="dilog-box" onClick={() => setShowModal(false)} >

                    </div>
                    <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-[16%] lg:top-0  right-0 z-50  ml-auto w-[85%] md:w-[93%] lg:w-full  p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative w-full max-w-2xl max-h-full ml-auto mr-auto ">

                            <div className="relative bg-white rounded-lg shadow  p-10 ">
                                <button type="button" onClick={() => setShowModal(false)} className=" absolute top-[8px] right-[19px]  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.918759 13.0577C0.360088 13.6164 0.360088 14.5222 0.918759 15.0809C1.47743 15.6395 2.38321 15.6395 2.94189 15.0809L7.99981 10.0229L13.0579 15.0811C13.6166 15.6397 14.5224 15.6397 15.081 15.0811C15.6397 14.5224 15.6397 13.6166 15.081 13.0579L10.0229 7.99982L15.0806 2.94213C15.6393 2.38346 15.6393 1.47767 15.0806 0.919002C14.522 0.360332 13.6162 0.360333 13.0575 0.919003L7.99981 5.9767L2.9423 0.919193C2.38363 0.360523 1.47784 0.360523 0.919172 0.919193C0.360502 1.47786 0.360503 2.38365 0.919174 2.94232L5.97668 7.99982L0.918759 13.0577Z" fill="#FA3030" />
                                    </svg>

                                </button>
                                {/* button started */}
                                <div className="grid grid-cols-12  mt-8  ">

                                    <div className=" col-span-12 sm:col-span-6 ">
                                        <button onClick={() => data("create")} className={` ${on === "create" ? " bg-white-light" : " bg-white"} w-full f-f-r text-2xl text-black    h-[60px] border border-grey `}  >
                                            Create New
                                        </button>

                                    </div>
                                    <div className=" col-span-12 sm:col-span-6 ">
                                        <button onClick={() => data("Add")} className={`${on === "Add" ? " bg-white-light" : " bg-white"} w-full f-f-r text-2xl text-black    h-[60px] border border-grey `} >
                                            Add Existing
                                        </button>

                                    </div>
                                </div>
                                {/*button edned  */}
                                {on === "Add" ? <>
                                    {/*.................  add exisiting started ................*/}



                                    <div className=" mt-8 " >
                                        {/* started */}
                                        <input className=' w-full  h-[46px] border border-grey bg-white rounded-[8px] px-4 outline-none  ' />
                                        <h4 className=" text-black-vlight text-tiny f-f-r mt-2 " >{contacts.length} Results</h4>
                                        <ul className=" mt-6 " >
                                            {/* li started */}
                                            { contacts.map((contact, i) => (
                                                <li key={i}>
                                                    <div className="flex items-center mb-4">
                                                        <input id={i} type="checkbox" value="" onChange={_onChangeContact} checked={contact.checked ? contact.checked : false} className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                                        <label htmlFor={i} className="ml-4 f-f-r text-lg text-black  ">{`${contact.title} ${contact.first_name} ${contact.last_name}`} ({contact.email})</label>
                                                    </div>
                                                </li>
                                            )) }
                                            {/* <li>
                                                <div className="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                                    <label htmlFor="default-checkbox" className="ml-4 f-f-r text-lg text-black  ">Binu Antony (binu@gmail.com)</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex items-center mb-4">
                                                    <input id="default-checkbox1" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                                    <label htmlFor="default-checkbox1" className="ml-4 f-f-r text-lg text-black  ">Alex Antony (alex@gmail.com)</label>
                                                </div>
                                            </li> */}
                                            {/* li ended */}
                                        </ul>
                                        {/* ended */}
                                    </div>

                                    {/* button started */}
                                    <div className=' mt-32 text-end  ' >
                                        <button onClick={() => setShowModal(false)} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Done</button>
                                    </div>




                                    {/* .......................... addd existing ended ............... */}

                                </> : <>

                                    <div className=" mt-8 " >
                                        <div className="grid grid-cols-12   ">
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >First Name</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >Last Name</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >Email</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input onChange={(e) => setEmail(e.target.value)} value={email} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >Phone Number</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                {/* <input  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />*/}
                                                
                                                <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                                {/* <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={phoneNumber}
                                                    onChange={setPhoneNumber}
                                                    className="w-full phone-input  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none "
                                                    flags={flags}
                                                    defaultCountry="US"
                                                /> */}


                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' > Company</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input onChange={(e) => setCompany(e.target.value)} value={company} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >Title</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input  onChange={(e) => setTitle(e.target.value)} value={title}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >Label</h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input onChange={(e) => setLabel(e.target.value)} value={label}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}

                                        </div>
                                        <div className=' mt-10 text-end  ' >
                                            <button onClick={submitContact} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Save</button>
                                        </div>
                                    </div>
                                </>



                                }



                            </div>
                        </div>
                    </div>
                </>
            ) : null}






        </div>
    )
}
