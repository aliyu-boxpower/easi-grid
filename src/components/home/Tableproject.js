import React from 'react'
// import { Link } from 'react-router-dom'
import Dropwdownhome from './Dropwdownhome';

export default function Tableproject(props) {

    return (
        <div className=' mt-7 ' >
            <ul className=' inline-flex ' >
                <li>
                    <h3 className=' text-black text-2xl f-f-r ' >
                        All Projects ({props.projects?.length})
                    </h3>
                </li>
                <li className=' ml-2 mt-1' >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.99988 16.5001C13.142 16.5001 16.4999 13.1422 16.4999 9.00006C16.4999 4.85793 13.142 1.50006 8.99988 1.50006C4.85774 1.50006 1.49988 4.85793 1.49988 9.00006C1.49988 13.1422 4.85774 16.5001 8.99988 16.5001Z" stroke="#D0D1D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 6.00006V9.00006" stroke="#D0D1D2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8.99988" cy="12" r="0.75" fill="#D0D1D2" />
                    </svg>

                </li>
            </ul>
            {/* new div started */}
            <div className=' mt-8' >
                <ul className=' w-full sm:inline-flex' >
                    <li>
                        {/* search started */}

                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className="bg-gray-50 border w-full outline-none border-gray-300 text-black-light text-lg rounded-[4px] block sm:w-[231px] pl-10 p-2.5  " placeholder="Search By Anything" required />
                            </div>

                        </form>
                        {/* search ended */}
                    </li>
                    <li className=' mt-3 sm:mt-0 sm:ml-3' >
                        {/* form started */}
                        <form action="/action_page.php">

                            <select name="cars" id="cars" className="bg-gray-50 border outline-none relative border-gray-300 text-black-light text-lg rounded-[4px] block w-full sm:w-[152px]  p-2.5  ">
                                <option value="volvo">Filters</option>
                                <option value="saab">Saab</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>

                            </select>

                        </form>
                    </li>
                </ul>

            </div>
            {/* new div ended */}

            {/* table started */}


            <div className="relative overflow-x-auto mt-8 ">
                <table className="w-full  text-left  ">
                    <thead className=" text-black  bg-grey-light shadow-lg  ">
                        <tr className='tabel-home f-f-r text-base text-black-dark ' >
                            <th className="px-6 py-3">Project Contacts</th>
                            <th className="px-6 py-3">Project Name</th>
                            <th className="px-6 py-3">Project Type</th>
                            <th className="px-6 py-3">Number of Sites</th>
                            <th className="px-6 py-3">Date Added</th>
                            <th className="px-6 py-3"> Last Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.projects.map((project, i) => (
                            <tr key={i} className="bg-white border-b  f-f-r text-base text-black-dark ">
                                <td className="px-6 py-3">{ project.contacts.length }</td>
                                <td className="px-6 py-3">{ project.project_name }</td>
                                <td className="px-6 py-3">{ project.project_type }</td>
                                <td className="px-6 py-3">{ project.sites.length }</td>
                                <td className="px-6 py-3">{ project.created_at }</td>
                                <td className="px-6 py-3 relative">{ project.updated_at } <Dropwdownhome id={project.id} /></td>
                            </tr>
                        )) }
                        {/* <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Darrell Williamson
                            </td>
                            <td className="px-6 py-3   ">
                                Ohio Running Spring
                            </td>
                            <td className="px-6 py-3   ">
                                Equipment Sale
                            </td>
                            <td className="px-6 py-3   ">
                                2
                            </td>
                            <td className="px-6 py-3   ">
                                03/03/12 22:43
                            </td>
                            <td className="px-6 py-3  relative ">
                                01/22/15 17:15

                                <Dropwdownhome />



                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Darrell Williamson
                            </td>
                            <td className="px-6 py-3   ">
                                Ohio Running Spring
                            </td>
                            <td className="px-6 py-3   ">
                                Equipment Sale
                            </td>
                            <td className="px-6 py-3   ">
                                2
                            </td>
                            <td className="px-6 py-3   ">
                                03/03/12 22:43
                            </td>
                            <td className="px-6 py-3  relative ">
                                01/22/15 17:15

                                <Dropwdownhome />
                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Darrell Williamson
                            </td>
                            <td className="px-6 py-3   ">
                                Ohio Running Spring
                            </td>
                            <td className="px-6 py-3   ">
                                Equipment Sale
                            </td>
                            <td className="px-6 py-3   ">
                                2
                            </td>
                            <td className="px-6 py-3   ">
                                03/03/12 22:43
                            </td>
                            <td className="px-6 py-3  relative ">
                                01/22/15 17:15

                                <Dropwdownhome />

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Darrell Williamson
                            </td>
                            <td className="px-6 py-3   ">
                                Ohio Running Spring
                            </td>
                            <td className="px-6 py-3   ">
                                Equipment Sale
                            </td>
                            <td className="px-6 py-3   ">
                                2
                            </td>
                            <td className="px-6 py-3   ">
                                03/03/12 22:43
                            </td>
                            <td className="px-6 py-3  relative ">
                                01/22/15 17:15

                                <Dropwdownhome />

                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>

            {/* table ended */}




        </div>
    )
}
