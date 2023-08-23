import React from 'react'
import Loginimg from '../../assets/images/Login-side.svg'
import Logo from '../../assets/images/Logo 2.svg'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='relative' >
      <div className=' my-20 bg-white shadow-lg  w-11/12 md:w-[558px] ml-auto mr-auto rounded-[10px] items-center  ' >
        <div className='w-11/12 sm:w-8/12 ml-auto mr-auto  py-20 text-center ' >
          <img src={Logo} className=" w-[190px] h-auto sm:w-[196px] sm:h-[29px] ml-auto mr-auto  " alt="" />
          <svg className=' ml-auto mr-auto mt-16 ' width="134" height="73" viewBox="0 0 134 73" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M122.833 0H50.25C44.1083 0 39.0833 5.025 39.0833 11.1667V61.4167C39.0833 64.3783 40.2598 67.2185 42.354 69.3127C44.4481 71.4069 47.2884 72.5833 50.25 72.5833H122.833C129.031 72.5833 134 67.6142 134 61.4167V11.1667C134 8.20508 132.824 5.3648 130.729 3.27064C128.635 1.17648 125.795 0 122.833 0ZM122.833 61.4167H50.25V20.4908L86.5417 39.0833L122.833 20.4908V61.4167ZM86.5417 29.6475L50.25 11.1667H122.833L86.5417 29.6475ZM27.9167 61.4167C27.9167 62.3658 28.0842 63.2592 28.1958 64.2083H5.58333C2.50133 64.2083 0 61.6958 0 58.625C0 55.5542 2.50133 53.0417 5.58333 53.0417H27.9167V61.4167ZM16.75 8.375H28.1958C28.0842 9.32417 27.9167 10.2175 27.9167 11.1667V19.5417H16.75C13.6792 19.5417 11.1667 17.0292 11.1667 13.9583C11.1667 10.8875 13.6792 8.375 16.75 8.375ZM5.58333 36.2917C5.58333 33.2208 8.09583 30.7083 11.1667 30.7083H27.9167V41.875H11.1667C8.09583 41.875 5.58333 39.3625 5.58333 36.2917Z" fill="#ED583B" />
          </svg>

          <h2 className='f-f-sm text-black text-4xl  sm:text-3xl mt-4 ' >Email sent</h2>
          <h4 className=' text-black-vlight f-f-r text-lg ' >An Email with a password reset link was sent to your email. </h4>
          <Link to="/resetpassword" >
            <button type="button" class="mt-8 text-white w-full h-[52px] f-f-sm  text-lg 2xl:text-xl bg-primary  rounded-[9px]  text-center  ">Continue</button>
          </Link>
          <h2 className=' text-black-vlight f-f-r  text-lg 2xl:text-xl mt-8 text-center ' >Remember Password? <Link to="/login" > <span className=' f-f-sm  text-primary ' >Login</span></Link> </h2>
        </div>

      </div>
    </div>
  )
}
