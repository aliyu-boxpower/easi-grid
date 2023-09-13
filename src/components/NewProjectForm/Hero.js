import React from 'react'
import Dilogbox from './Dilogbox';
import Config from '../../utils/Config';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Hero() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.profile);
    // const { id } = useParams();

    const [ projectName, setProjectName ] = React.useState('');
    const [ projectSummary, setProjectSummary ] = React.useState('');
    const [ projectContacts, setProjectContacts ] = React.useState([]);
    const [ projectType, setProjectType ] = React.useState('');
    const [ customerType, setCustomerType ] = React.useState('');
    const [ projectBudget, setProjectBudget ] = React.useState(0);
    const [ contactValue, setContactValue ] = React.useState(0);
    //const [ averageDemand, setAverageDemand ] = React.useState('');
    const [ contractDate, setContractDate ] = React.useState('');
    const [ projectNotes, setProjectNotes ] = React.useState('');

    const [ projectServices, setProjectServices ] = React.useState([
        { title: 'Foundation Design', key: 'foundational_design', checked: false },
        { title: 'Structural Calculations', key: 'structural_calculations', checked: false },
        { title: 'Structural Drawings', key: 'structural_drawings', checked: false },
        { title: 'Equipment Elevations', key: 'equipment_elevations', checked: false },
        { title: 'AC/DC Single Line Diagrams', key: 'single_line', checked: false },
        { title: 'Site Layout', key: 'layout', checked: false },
        { title: '3D SketchUp Rendering Installation Training', key: 'sketch_up', checked: false },
        { title: 'Installation Training', key: 'install_training', checked: false },
        { title: 'Installation Management', key: 'install_management', checked: false },
        { title: 'Permit Submission (Turnkey only)', key: 'permit_submission', checked: false },
        { title: 'Commissioning', key: 'commissioning', checked: false }
    ]);

    // React.useEffect(() => {
    //     console.log("id:", id);
    // }, [id]);

    const _onChangeProjectServices = (e) => {
        const data = [ ...projectServices ];
        
        data[e.target.id].checked  = !data[e.target.id].checked;

        setProjectServices(data);
    }
    const submitProject = () => {
        const project_services = [];
        for (let i = 0; i < projectServices.length; i++) {
            const serv = projectServices[i];
            const item = {};

            item[serv.key] = serv.checked;

            project_services.push(item);
        }

        const project_contacts = [];
        for (let i = 0; i < projectContacts.length; i++) {
            const contact = projectContacts[i];
            project_contacts.push(contact.id);
        }
        const payload = {
            project_name     : projectName,
            project_summary  : projectSummary,  
            project_contacts : project_contacts,
            project_type     : projectType,
            customer_type    : customerType,
            project_budget   : projectBudget,
            contract_value   : contactValue,
            contract_date    : contractDate,
            project_notes    : projectNotes,
            project_services : project_services,
        }

        console.log("payload:", payload);

        // const token = localStorage.getItem('token');
        const url   = `${Config.API.URL}/projects`;

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
            //console.log('res:', res);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                //swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });
                
                
                navigate('/dashboard');
            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
    }
    const _onReceiveContact = (contacts) => {
        setProjectContacts(contacts);
        // console.log('contacts:', contacts);
    }
    return (
        <>
            <div className='bg-white rounded-[8px] p-6  mt-[90px] lg:mt-3 ' >
                <h2 className=" f-f-sm text-3xl text-black text-center " >Create New Project </h2>
                <div className='2xl:px-20 ' >
                    <div className="grid grid-cols-12 mt-10   ">

                        {/* .....................  Electric input started ..............*/}

                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Name
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <input onChange={e => setProjectName(e.target.value)} value={projectName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>
                        {/* input section ended */}
                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Summary
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <textarea onChange={e => setProjectSummary(e.target.value)} value={projectSummary} className=' w-full  border border-grey bg-white-dark rounded-[4px] p-4 outline-none  ' id="w3review" name="w3review" rows="4" cols="50">

                            </textarea>
                        </div>
                        {/* input section ended */}
                        {/* input section started */}
                        {/* <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Average Demand (kW)
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <input onChange={e => setAverageDemand(e.target.value)} value={averageDemand} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div> */}
                        {/* input section ended */}
                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 " >
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Site Contacts
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">

                            { projectContacts.length ?
                                <div  style={{ display: "inline-block", verticalAlign: "middle", width: "68%" }}>
                                    { projectContacts.map((contact, i) => <span key={i}>{contact.first_name}, </span> ) }
                                </div>
                            : null }
                            <div style={{ display: "inline-block", verticalAlign: "middle", width: "30%" }}>
                                <Dilogbox onReceiveContact={_onReceiveContact} />
                            </div>
                        </div>
                        {/* input section ended */}


                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Type
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">

                            <select onChange={e => setProjectType(e.target.value)} value={projectType} className='border border-grey bg-white-dark rounded-[4px] px-4 outline-none w-full h-[56px] ' >
                                <option value="0"></option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                                <option value="5">Honda</option>
                            </select>
                        </div>
                        {/* input section ended */}
                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Type of Customer
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <input onChange={e => setCustomerType(e.target.value)} value={customerType} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                        </div>
                        {/* input section ended */}
                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Budget (in USD)
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">

                            <form>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z" fill="black" />
                                        </svg>

                                    </div>
                                    <input onChange={e => setProjectBudget(e.target.value)} value={projectBudget} type='number' className=' w-full z-10  h-[56px] border border-grey bg-white-dark rounded-[4px] pl-12 outline-none  ' required />

                                </div>
                            </form>

                        </div>
                        {/* input section ended */}
                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Contact Value (in USD)
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">

                            <form>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z" fill="black" />
                                        </svg>

                                    </div>
                                    <input onChange={e => setContactValue(e.target.value)} value={contactValue} type='number' className=' w-full z-0 h-[56px] border border-grey bg-white-dark rounded-[4px] pl-12 outline-none  ' required />

                                </div>
                            </form>

                        </div>
                        {/* input section ended */}


                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Target Delivery Date
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            {/* date picker */}
                            <form action="/action_page.php">

                                <input onChange={e => setContractDate(e.target.value)} value={contractDate} type="date" id="birthday" name="birthday" className=" w-full z-0 relative h-[56px] border border-grey bg-white-dark rounded-[4px] pl-[47px] pr-4 outline-none" placeholder="Select date" />
                            </form>

                            {/* date picker ended */}

                        </div>

                        {/* input section ended */}

                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Notes
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <textarea onChange={e => setProjectNotes(e.target.value)} value={projectNotes} className=' w-full  border border-grey bg-white-dark rounded-[4px] p-4 outline-none  ' id="w3review" name="w3review" rows="4" cols="50">

                            </textarea>
                        </div>
                        {/* input section ended */}

                        {/* input section started */}
                        <div className=" col-span-12 lg:col-span-5 mt-5 ">
                            <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                Project Services
                            </h2>
                        </div>
                        <div className=" col-span-12 lg:col-span-7 mt-5 ">
                            <ul>
                                { projectServices.map((service, i) => (
                                    <li key={i}>
                                        <div className="flex items-center mb-4">
                                            <input id={i} value={service.key} onChange={_onChangeProjectServices} type="checkbox" checked={service.checked} className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px]" />
                                            <label htmlFor={i} className="ml-4 f-f-r text-2xl text-black">{ service.title }</label>
                                        </div>
                                    </li>
                                )) }
                                {/* <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox" className="ml-4 f-f-r text-2xl text-black  ">Foundation Design</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox1" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox1" className="ml-4 f-f-r text-2xl text-black  ">Structural Calculations</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox2" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox2" className="ml-4 f-f-r text-2xl text-black  ">Structural Drawings</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox3" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox3" className="ml-4 f-f-r text-2xl text-black  ">Equipment Elevations</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox4" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox4" className="ml-4 f-f-r text-2xl text-black  ">AC/DC Single Line Diagrams</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox5" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox5" className="ml-4 f-f-r text-2xl text-black  ">Site Layout</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox6" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox6" className="ml-4 f-f-r text-2xl text-black  ">3D SketchUp Rendering Installation Training</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox7" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox7" className="ml-4 f-f-r text-2xl text-black  ">Installation Training</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox8" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox8" className="ml-4 f-f-r text-2xl text-black  ">Installation Management</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox9" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox9" className="ml-4 f-f-r text-2xl text-black  ">Permit Submission (Turnkey only)</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox10" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                        <label htmlFor="default-checkbox10" className="ml-4 f-f-r text-2xl text-black  ">Commissioning</label>
                                    </div>
                                </li> */}

                            </ul>




                        </div>
                        {/* input section ended */}
                    </div>
                </div>

                {/* button started */}
                <div className=' mt-32 text-end  ' >
                    <ul className=' inline-flex  ' >
                        <li>
                            <button onClick={submitProject} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Done</button>
                        </li>
                        <li className=' ml-6 ' >
                            <button className=' border border-primary text-lg f-f-r text-primary  w-[127px] h-[48px] rounded-[8px] captilize ' >Back</button>
                        </li>
                    </ul>
                </div>
                {/* button ended */}
            </div>

        </>
    )
}








