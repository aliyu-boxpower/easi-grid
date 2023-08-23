import React from 'react'
import Systemimg from '../../assets/images/arch_photo_easigrid 1.svg'
import Graph from '../../assets/images/graph.svg'


export default function SystemArchitecture() {
  return (
    <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
      <div className=' bg-white  shadow-lg p-[20px] rounded-[8px]   mt-5' >
        <h3 className=' f-f-sm text-4xl sm:text-3xl text-center text-primary  mt-4 ' >System Architecture</h3>
        <img src={Systemimg} className=' ml-auto mr-auto my-4 w-[60%]  ' />
      </div>
      <div className=' bg-white  shadow-lg p-[27px] rounded-[8px]   mt-5' >
        <h3 className=' f-f-sm text-4xl sm:text-3xl text-center text-primary  mt-4 ' >System Simulation & Microgrid Optimization</h3>
        <ul className=' inline-flex w-full mt-5 ' >
          <li className=' w-full ' >
            <h2 className=' f-f-r text-2xl text-black mt-2  ' >
              Overview
            </h2>

          </li>
          <li>
            <select class="border border-grey bg-white-dark rounded-[4px] px-4 outline-none w-[179px] sm:w-[224px] h-[53px] ">
              <option value="0"> Sort </option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
            </select>
          </li>
        </ul>

        <img src={Graph} className=' ml-auto mr-auto my-4  w-full h-auto  ' />

      </div>
    </div>
  )
}
