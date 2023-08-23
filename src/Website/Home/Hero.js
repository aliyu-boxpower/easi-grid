import React from 'react'
import Heroimg from '../../assets/images/Slice 1.svg'

export default function Hero() {
  return (
    <div className='mt-16  relative ' >


      <div className=' w-11/12  2xl:max-w-[1256px] ml-auto mr-auto  ' >
        <div className='grid grid-cols-12 mt-5 gap-4  ' >
          <div className=' text-center xl:text-start  col-span-12  xl:col-span-6 2xl:col-span-5 py-10 sm:py-20 2xl:py-32 ' >
            <h2 className=' f-f-b text-4xl sm:text-5xl md:text-[51px] xl:text-6xl text-primary ' >
              Design <span className=' text-black ' > Reliable </span> Microgrids <span className=' text-black ' > with EASIGRID </span>
            </h2>
            <h3 className=' f-f-r text-black text-lg  sm:text-2xl ' >focus on high-value project tasks while leaving time-consuming manual tasks to us.</h3>
            <ul className='mt-4 sm:mt-8 inline-flex items-center ' >
              <li>
                <button className='text-white w-[129px] h-[40px]  text-lg f-f-r  bg-primary rounded-[9px]  text-center   ' >
                  Get Started
                </button>
              </li>
              <li className=' ml-4' >
                <button className='text-primary w-[152px] h-[40px]  text-lg f-f-r  bg-white border border-primary rounded-[9px]  text-center   ' >
                  <ul className=' inline-flex items-center ' >
                    <li>
                      Learn More
                    </li>
                    <li className=' ml-2 ' >
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="#ED583B" />
                      </svg>
                    </li>
                  </ul>


                </button>
              </li>
            </ul>
          </div>

        </div>
        <img src={Heroimg} className=' hidden xl:block h-auto w-[633px] 2xl:w-[720px] 2xl:h-[638px] absolute right-0 top-0 ' />
      </div>
    </div>
  )
}
