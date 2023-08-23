import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
export default function TestingDilog() {
    const [showModal, setShowModal] = useState(false);
    const [on, seton] = useState("Add");
    const [value, setValue] = useState()
    const data = (get) => {

        seton(get)
    }
    return (
        <div>


            <button onClick={() => setShowModal(true)} className="relative border bg-primary w-[222px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
                <svg className=" absolute left-[20px] top-[11px] " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13H13V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H11V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13Z" fill="white" />
                </svg>

                Select  Contact</button>


            {showModal ? (
                <>
                    <div className="dilog-box" onClick={() => setShowModal(false)} >

                    </div>




                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-[50%] right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-2xl max-h-full ml-auto mr-auto ">

                            <div class="relative bg-white rounded-lg shadow  p-10 ">
                                <button type="button" onClick={() => setShowModal(false)} class=" absolute top-[8px] right-[19px]  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918759 13.0577C0.360088 13.6164 0.360088 14.5222 0.918759 15.0809C1.47743 15.6395 2.38321 15.6395 2.94189 15.0809L7.99981 10.0229L13.0579 15.0811C13.6166 15.6397 14.5224 15.6397 15.081 15.0811C15.6397 14.5224 15.6397 13.6166 15.081 13.0579L10.0229 7.99982L15.0806 2.94213C15.6393 2.38346 15.6393 1.47767 15.0806 0.919002C14.522 0.360332 13.6162 0.360333 13.0575 0.919003L7.99981 5.9767L2.9423 0.919193C2.38363 0.360523 1.47784 0.360523 0.919172 0.919193C0.360502 1.47786 0.360503 2.38365 0.919174 2.94232L5.97668 7.99982L0.918759 13.0577Z" fill="#FA3030" />
                                    </svg>

                                </button>
                                {/* button started */}
                                <div className="grid grid-cols-12  mt-8  ">

                                    <div className=" col-span-6 ">
                                        <button onClick={() => data("create")} className={` ${on === "create" ? " bg-white-light" : " bg-white"} w-full f-f-r text-2xl text-black    h-[60px] border border-grey `}  >
                                            Create New
                                        </button>

                                    </div>
                                    <div className=" col-span-6 ">
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
                                        <h4 className=" text-black-vlight text-tiny f-f-r mt-2 " >2 Results</h4>
                                        <ul className=" mt-6 " >
                                            {/* li started */}
                                            <li>
                                                <div className="flex items-center mb-4">
                                                    <input id="default-checkbox" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                                    <label for="default-checkbox" className="ml-4 f-f-r text-lg text-black  ">Binu Antony (binu@gmail.com)</label>
                                                </div>
                                            </li>
                                            {/* li ended */}
                                            {/* li started */}
                                            <li>
                                                <div className="flex items-center mb-4">
                                                    <input id="default-checkbox1" type="checkbox" value="" className="w-5 h-5 text-primary  bg-gray-100 border-gray-300 rounded-[4px] " />
                                                    <label for="default-checkbox1" className="ml-4 f-f-r text-lg text-black  ">Alex Antony (alex@gmail.com)</label>
                                                </div>
                                            </li>
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
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    First Name
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Last Name
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Email
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Phone Number
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                {/* <input  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
  */}

                                                <PhoneInput
                                                    placeholder="Enter phone number"
                                                    value={value}
                                                    onChange={setValue}
                                                    className="w-full phone-input  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none "
                                                    flags={flags}
                                                    defaultCountry="US"
                                                />


                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Company
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Title
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}
                                            {/*  col started */}
                                            <div className=" col-span-12 lg:col-span-3 mt-5 ">
                                                <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                                                    Label
                                                </h2>
                                            </div>
                                            <div className=" col-span-12 lg:col-span-9 mt-5 ">
                                                <input className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
                                            </div>

                                            {/* col ended */}

                                        </div>
                                        <div className=' mt-10 text-end  ' >
                                            <button onClick={() => setShowModal(false)} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Save</button>
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
