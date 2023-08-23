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

          <h2 className='f-f-sm text-black text-4xl  sm:text-3xl mt-4 ' >Reset Your Password</h2>
          <h4 className=' text-black-vlight f-f-r text-lg ' >Set a new password</h4>

          <h4 className='  text-black-vlight f-f-r  text-base mt-8 text-start ' >New Password</h4>
          <input type='password' class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />
          <h4 className='  text-black-vlight f-f-r  text-base mt-4 text-start ' >Confirm Password</h4>
          <input type='password' class=" w-full  h-[47px] border border-grey  bg-white rounded-[4px] px-4 outline-none  " />
          <Link to="/dashboard" >
            <button type="button" class="mt-8 text-white w-full h-[52px] f-f-sm  text-lg 2xl:text-xl bg-primary  rounded-[9px]  text-center  ">Save</button>
          </Link>

        </div>

      </div>
    </div>
  )
}
