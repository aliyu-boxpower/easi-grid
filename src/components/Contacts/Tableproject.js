import React from 'react'
import { Link } from 'react-router-dom'

export default function Tableproject(props) {
    const { contacts } = props;
    return (
        
        <div className=' mt-7 bg-white rounded-[8px] p-4 ' >
            <h3 className=' text-primary text-2xl f-f-r ' >
                Contact Library
            </h3>
            {/* new div started */}
            <div className=' mt-8' >
                <div className="grid grid-cols-12 mt-5 gap-4  ">


                    <div className="   col-span-12 md:col-span-6">
                        <ul className=' w-full md:inline-flex' >
                            <li>
                                {/* search started */}

                                <form className="flex items-center">
                                    <label for="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 border w-full outline-none border-gray-300 text-black-light text-lg rounded-[4px] block md:w-[231px] pl-10 p-2.5  " placeholder="Search By Anything" required />
                                    </div>

                                </form>
                                {/* search ended */}
                            </li>
                            <li className=' mt-3 md:mt-0 md:ml-3' >
                                {/* form started */}
                                <form action="/action_page.php">

                                    <select name="cars" id="cars" className="bg-gray-50 border outline-none relative border-gray-300 text-black-light text-lg rounded-[4px] block w-full  md:w-[152px]  p-2.5  ">
                                        <option value="volvo">Filters</option>
                                        <option value="saab">Saab</option>
                                        <option value="opel">Opel</option>
                                        <option value="audi">Audi</option>

                                    </select>

                                </form>
                            </li>
                        </ul>
                    </div>

                    <div className="   col-span-12 md:col-span-6">

                        <div className=' text-center md:text-end ' >



                            <ul className=' inline-flex ' >
                                {/* list started */}
                                <li>
                                    <button className=' f-f-r text-lg text-black w-[169px] h-[44px] shadow-lg bg-white rounded-[4px]  ' >
                                        <ul className=' inline-flex ' >
                                            <li className=' mt-2 ' >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.0002 2.66667H9.3335" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.66667 2.66667H2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M14 8H8" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M5.33333 8H2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M13.9998 13.3333H10.6665" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M8 13.3333H2" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.3335 1.33333V4" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M5.3335 6.66667V9.33333" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10.6665 12V14.6667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </li>
                                            <li className=' ml-3 mt-1 ' >
                                                Edit Columns
                                            </li>
                                        </ul>


                                    </button>
                                </li>
                                <li className=' ml-3 ' >
                                    <Link to="/contact/create" >
                                    
                                    <button className=' f-f-r text-lg text-white w-[169px] h-[44px] shadow-lg bg-primary rounded-[8px]  ' >
                                        <ul className=' inline-flex ' >
                                            <li className=' mt-1 ' >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18 13H13V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H11V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13Z" fill="white" />
                                                </svg>

                                            </li>
                                            <li className=' ml-3 mt-1 ' >
                                                Add New
                                            </li>
                                        </ul>


                                    </button>
                                    </Link>
                                </li>
                                {/* list ended */}
                            </ul>
                        </div>

                    </div>

                </div>





            </div>
            {/* new div ended */}

            {/* table started */}


            <div className="relative overflow-x-auto py-8  ">
                <table className="w-full  text-left  ">
                    <thead className=" text-black  bg-grey-light shadow-lg  ">
                        <tr className='tabel-home f-f-r text-base text-black-dark ' >
                            <th className="px-6 py-3    ">
                                Contact Name
                            </th>
                            <th className="px-6 py-3   ">
                                Email
                            </th>
                            <th className="px-6 py-3   ">
                                Phone Number
                            </th>
                            <th className="px-6 py-3   ">
                                Company
                            </th>
                            <th className="px-6 py-3   ">
                                Title
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { contacts.map((contact, i) => (
                            <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                                <td className="px-6 py-3   ">
                                    { `${contact.first_name} ${contact.last_name}` }
                                </td>
                                <td className="px-6 py-3   ">
                                    {contact.email}
                                </td>
                                <td className="px-6 py-3   ">
                                    {contact.phone_number}
                                </td>
                                <td className="px-6 py-3   ">
                                    {contact.company}
                                </td>

                                <td className="px-6 py-3  relative ">
                                    {contact.title}
                                    <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                    </svg>

                                </td>
                            </tr>
                        )) }
                        
                        {/* <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Jenny Wilson
                            </td>
                            <td className="px-6 py-3   ">
                                curtis.weaver@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (629) 555-0129
                            </td>
                            <td className="px-6 py-3   ">
                                Gillette
                            </td>

                            <td className="px-6 py-3  relative ">
                                Marketing Coordinator
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Bessie Cooper
                            </td>
                            <td className="px-6 py-3   ">
                                deanna.curtis@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (302) 555-0107
                            </td>
                            <td className="px-6 py-3   ">
                                Facebook
                            </td>

                            <td className="px-6 py-3  relative ">
                                Medical Assistant
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Eleanor Pena
                            </td>
                            <td className="px-6 py-3   ">
                                deanna.curtis@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (252) 555-0126
                            </td>
                            <td className="px-6 py-3   ">
                                Starbucks
                            </td>

                            <td className="px-6 py-3  relative ">
                                President of Sales
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Dianne Russell
                            </td>
                            <td className="px-6 py-3   ">
                                kenzi.lawson@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (308) 555-0121
                            </td>
                            <td className="px-6 py-3   ">
                                Apple
                            </td>

                            <td className="px-6 py-3  relative ">
                                Nursing Assistant
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Devon Lane
                            </td>
                            <td className="px-6 py-3   ">
                                sara.cruz@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (239) 555-0108
                            </td>
                            <td className="px-6 py-3   ">
                                Nintendo
                            </td>

                            <td className="px-6 py-3  relative ">
                                President of Sales
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr>
                        <tr className="bg-white border-b  f-f-r text-base text-black-dark ">
                            <td className="px-6 py-3   ">
                                Arlene McCoy
                            </td>
                            <td className="px-6 py-3   ">
                                tim.jennings@example.com
                            </td>
                            <td className="px-6 py-3   ">
                                (207) 555-0119
                            </td>
                            <td className="px-6 py-3   ">
                                Louis Vuitton
                            </td>

                            <td className="px-6 py-3  relative ">
                                Web Designer
                                <svg className=' absolute top-[12px] right-0 cursor-pointer ' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
                                </svg>

                            </td>
                        </tr> */}


                    </tbody>
                </table>


            </div>
            <div className=' tabel-home py-5 px-3 w-full  mb-20 ' >
                <ul className=' inline-flex  w-full  justify-end ' >
                    <li>
                        <h2 className=' inline-flex f-f-m text-tiny  text-black-vdark ' >Rows per page: 10  <svg width="8" className=' mt-2 ml-2 ' height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.87636 5L0 0H7.75273L3.87636 5Z" fill="#808080" />
                        </svg>
                        </h2>
                    </li>
                    <li className=' ml-5 ' >
                        <h2 className=' inline-flex f-f-m text-tiny  text-black-vdark ' >1-7 of 276
                        </h2>
                    </li>
                    <li className=' ml-5 ' >
                        {/* inner icon list started */}
                        <ul className=' inline-flex ' >
                            <li>
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.62044 1.10636C6.22943 0.51287 5.2652 -0.426818 4.65621 0.216126L0.190308 4.51891C-0.0634362 4.7662 -0.0634362 5.21131 0.190308 5.4586L4.65621 9.81084C5.2652 10.4043 6.22943 9.46464 5.62044 8.87115L1.66203 5.01348L5.62044 1.10636Z" fill="#808080" />
                                </svg>

                            </li>
                            <li className=' ml-8 ' >
                                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.65983 1.10636C0.0508423 0.51287 1.01507 -0.426818 1.62406 0.216126L6.08996 4.51891C6.34371 4.7662 6.34371 5.21131 6.08996 5.4586L1.62406 9.81084C1.01507 10.4043 0.0508423 9.46464 0.65983 8.87115L4.61825 5.01348L0.65983 1.10636Z" fill="#808080" />
                                </svg>

                            </li>
                        </ul>
                        {/* inner icon listended */}
                    </li>
                </ul>

            </div>

            {/* table ended */}




        </div>
    )
}
