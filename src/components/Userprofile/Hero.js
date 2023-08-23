import React from 'react'


export default function Hero() {
  return (
    <div className='bg-white rounded-[8px] p-4  mt-[90px] lg:mt-3 shadow-lg ' >

      <ul className=' md:inline-flex w-full ' >
        <li className='  mt-1 md:mt-3' >
          <h3 className=' text-grey f-f-r text-base  ' >
            Dashboard
          </h3>
        </li>
        <li className=' md:ml-3  mt-1 md:mt-3  ' >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </li>
        <li className=' md:ml-3  mt-1 md:mt-3  ' >
          <h3 className=' text-grey f-f-r text-base  ' >
            Library
          </h3>
        </li>
        <li className=' md:ml-3  mt-1 md:mt-3  ' >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="#D0D1D2" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </li>

        <li className=' md:ml-3  mt-1 md:mt-3  ' >
          <h3 className=' text-primary f-f-r text-base  ' >
            Contact Library
          </h3>
        </li>


      </ul>


    </div>
  )
}
