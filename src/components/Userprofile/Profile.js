import React from 'react'
import profileimg from '../../assets/images/profile.svg'


export default function Profile() {
    return (
        <div className="bg-white rounded-[8px] p-4  mt-4 shadow-lg " >
            <div className=' text-center ' >
                <button className=' relative mt-4 ml-auto mr-auto  ' >
                    <img src={profileimg} className=' h-[92px] w-[92px] relative ' />

                    <svg className='absolute  right-0 top-[-7px] ' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.5" cy="14.5" r="14.5" fill="white" />
                        <circle cx="14.5" cy="14.5" r="14" stroke="#A3A3A3" stroke-opacity="0.25" />
                        <path d="M8.375 20.625H9.6L17.1469 13.0781L15.9219 11.8531L8.375 19.4V20.625ZM20.8875 11.8094L17.1687 8.13437L18.3937 6.90938C18.7292 6.57396 19.1413 6.40625 19.6301 6.40625C20.119 6.40625 20.5308 6.57396 20.8656 6.90938L22.0906 8.13437C22.426 8.46979 22.601 8.87462 22.6156 9.34887C22.6302 9.82312 22.4698 10.2277 22.1344 10.5625L20.8875 11.8094ZM19.6187 13.1L10.3437 22.375H6.625V18.6562L15.9 9.38125L19.6187 13.1ZM16.5344 12.4656L15.9219 11.8531L17.1469 13.0781L16.5344 12.4656Z" fill="black" />
                    </svg>

                </button>
                <h2 className=' f-f-sm text-2xl text-black my-1  ' >Bessie Cooper</h2>
                <h2 className=' f-f-r text-lg text-black-vlight my-1  ' >Microgrid</h2>

            </div>
            {/* grid started */}
            <div className='  sm:px-8 ' >


                <div className="grid grid-cols-12 mt-5 gap-4  ">

                    <div className=" col-span-3  ">

                        <h2 className=' f-f-r text-xl sm:text-2xl text-black-vlight   ' > Name </h2>
                    </div>
                    <div className=" col-span-9 ">
                        <ul className=' inline-flex  w-full ' >
                            <li className=' w-[100%] ' >
                                <h2 className=' f-f-r text-xl sm:text-2xl text-black   ' > Bassie Cooper </h2>
                            </li>
                            <li>
                                <h2 className=' f-f-sm text-2xl text-primary cursor-pointer   ' > Edit </h2>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='profilebrdr my-3 ' >

            </div>
            {/* Grid ended */}
            {/* grid started */}
            <div className='  sm:px-8 ' >

                <div className="grid grid-cols-12 mt-5 gap-4  ">

                    <div className=" col-span-3  ">

                        <h2 className=' f-f-r text-xl sm:text-2xl text-black-vlight   ' > Job Title </h2>
                    </div>
                    <div className=" col-span-9 ">
                        <ul className=' inline-flex  w-full ' >
                            <li className=' w-[100%] ' >
                                <h2 className=' f-f-r text-xl sm:text-2xl text-black   ' > Engineer </h2>
                            </li>
                            <li>
                                <h2 className=' f-f-sm text-2xl text-primary cursor-pointer   ' > Edit </h2>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='profilebrdr my-3 ' >

            </div>
            {/* Grid ended */}
            {/* grid started */}

            <div className='  sm:px-8 ' >
                <div className="grid grid-cols-12 mt-5 gap-4  ">

                    <div className=" col-span-3  ">

                        <h2 className=' f-f-r text-xl sm:text-2xl text-black-vlight   ' > Country </h2>
                    </div>
                    <div className=" col-span-9 ">
                        <ul className=' inline-flex  w-full ' >
                            <li className=' w-[100%] ' >
                                <h2 className=' f-f-r text-xl sm:text-2xl text-black   ' >United States</h2>
                            </li>
                            <li>
                                <h2 className=' f-f-sm text-2xl text-primary cursor-pointer   ' > Edit </h2>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='profilebrdr my-3 ' >

            </div>
            {/* Grid ended */}
            {/* grid started */}

            <div className='  sm:px-8 ' >
                <div className="grid grid-cols-12 mt-5 gap-4  ">

                    <div className=" col-span-3  ">

                        <h2 className=' f-f-r text-xl sm:text-2xl text-black-vlight   ' > Phone Number </h2>
                    </div>
                    <div className=" col-span-9 ">
                        <ul className=' inline-flex  w-full ' >
                            <li className=' w-[100%] ' >
                                <h2 className=' f-f-r text-xl sm:text-2xl text-black   ' > (505) 555-0125</h2>
                            </li>
                            <li>
                                <h2 className=' f-f-sm text-2xl text-primary cursor-pointer   ' > Edit </h2>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='profilebrdr my-3 ' >

            </div>
            {/* Grid ended */}
            {/* grid started */}
            <div className='  sm:px-8 ' >

                <div className="grid grid-cols-12 mt-5 gap-4  ">

                    <div className=" col-span-3  ">

                        <h2 className=' f-f-r text-xl sm:text-2xl text-black-vlight   ' > Email </h2>
                    </div>
                    <div className=" col-span-9 ">
                        <ul className=' inline-flex  w-full ' >
                            <li className=' w-[100%] ' >
                                <h2 className=' f-f-r text-xl sm:text-2xl text-black   ' > alma.lawson@example.com </h2>
                            </li>
                            <li>
                                {/* <h2 className=' f-f-sm text-2xl text-primary cursor-pointer   ' > Edit </h2> */}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='profilebrdr my-3 ' >

            </div>
            {/* Grid ended */}



        </div>
    )
}
