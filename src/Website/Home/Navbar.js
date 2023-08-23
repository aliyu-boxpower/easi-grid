import React, { useState } from 'react'
import Logo from '../../assets/images/Logo 2.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [navbarshow, setnavbarshow] = useState("false")

  return (
    <div  >


      <nav className=" bg-primary-dark  fixed w-full z-20 top-0 left-0  ">
        <div className='  w-11/12  2xl:max-w-[1256px] ml-auto mr-auto ' >
          <div className=" flex flex-wrap items-center justify-between mx-auto py-4">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={Logo} className="  w-[145px] h-auto 2xl:w-[196px] 2xl:h-[29px]  " alt="" />

            </a>
            <div className="flex md:order-2">
              <Link to="/signup" >
                <button type="button" className=" hidden sm:block text-primary w-[82px] h-[40px] 2xl:w-[97px] 2xl:h-[44px] f-f-r text-base 2xl:text-lg border border-primary  rounded-[9px]  text-center mr-3 md:mr-0 ">Sign Up</button>
              </Link>
              <Link to="/login" >
                <button type="button" className="hidden sm:block text-white w-[82px] h-[40px] 2xl:w-[97px] 2xl:h-[44px] f-f-r text-base 2xl:text-lg bg-primary  rounded-[9px]  text-center mr-3 md:mr-0 ml-3  ">Log in</button>
              </Link>
              <button onClick={() => setnavbarshow(!navbarshow)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center  rounded-lg md:hidden " aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#ED583B" viewBox="0 0 17 14">
                  <path stroke="#ED583B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div className={` ${navbarshow ? " hidden" : "block"}  items-center justify-between  w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
              <ul className="  flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-6 lg:space-x-8 md:mt-0 md:border-0  ">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-primary f-f-r  text-lg  2xl:text-xl  rounded  md:p-0 " aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-primary  f-f-r  text-lg  2xl:text-xl rounded md:p-0 ">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-primary  f-f-r  text-lg  2xl:text-xl rounded md:p-0 ">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-white hover:text-primary  f-f-r  text-lg  2xl:text-xl rounded md:p-0 ">Contact</a>
                </li>
                <Link to="/signup" >
                  <li>
                    <a href="#" className="block text-center py-2 pl-3 pr-4 sm:hidden text-primary border border-primary f-f-r  text-lg  2xl:text-xl rounded md:p-0 ">Sign Up</a>
                  </li>
                </Link>
                <Link to="/login" >
                  <li  >
                    <a href="#" className=" mt-3 text-center block py-2 pl-3 pr-4 sm:hidden text-white bg-primary f-f-r  text-lg  2xl:text-xl rounded md:p-0 ">Log in</a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
