import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Projectsite(props) {
  
  const { site_id } = useParams();
  const [drop, setdrop] = useState(false);
  const { scenarios } = props;
  return (
    <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
      <div className=' mt-10 ' >
        <ul className=' inline-flex ' >
          <li>
            <h3 className=' text-black text-2xl f-f-r ' >
              Scenarios
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

        {/* grid started */}
        <div className="grid grid-cols-12 mt-5 gap-4 xl:gap-2  ">
          {scenarios?.map((scenario, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 xl:col-span-3">
              <Link to={`/scenarios/optimization/${scenario.id}`} >

                <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
                  <ul className='inline-flex w-full' >
                    <li className='w-full mt-1' >
                      <h2 className='f-f-m text-base text-black ' >Optimization 1</h2>
                    </li>
                    <li className='mt-3' >
                      <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.1951 2.14286C12.1951 3.33333 11.2195 4.28571 10 4.28571C8.78049 4.28571 7.80488 3.33333 7.80488 2.14286C7.80488 0.95238 8.78049 -4.9042e-07 10 -4.37114e-07C11.2195 -3.83807e-07 12.1951 0.952381 12.1951 2.14286ZM17.8049 -9.59518e-08C16.5854 -1.49258e-07 15.6098 0.952381 15.6098 2.14286C15.6098 3.33333 16.5854 4.28571 17.8049 4.28571C19.0244 4.28571 20 3.33333 20 2.14286C20 0.952381 19.0244 -4.26453e-08 17.8049 -9.59518e-08ZM2.19512 -7.78276e-07C0.975609 -8.31583e-07 -4.16299e-08 0.95238 -9.36673e-08 2.14286C-1.45705e-07 3.33333 0.975609 4.28571 2.19512 4.28571C3.41463 4.28571 4.39024 3.33333 4.39024 2.14286C4.39024 0.95238 3.41463 -7.24969e-07 2.19512 -7.78276e-07Z" fill="black" />
                      </svg>

                    </li>
                  </ul>
                  <h2 className=' f-f-r  text-grey-vdark text-base mt-3  ' >Solar Capacity (kW) <span className=' float-right ' >:{ scenario.solar_pv_capacity }</span> </h2>
                  <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Inverter Capacity (kW)<span className=' float-right ' >:{ scenario.battery_inverter_capacity }</span> </h2>
                  <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Battery Capacity (kWh)<span className=' float-right ' >:{ scenario.battery_storage_capacity }</span> </h2>
                  <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Generator Capacity (kW)<span className=' float-right ' >:{ scenario.generator_size }</span> </h2>
                  <div className=' text-center ' >
                    <ul className='inline-flex  ' >
                      <li>
                        <h2 className='f-f-md-it text-primary text-tiny mt-3  ' >Active Scenario </h2>
                      </li>
                      <li className=' ml-4 mt-2 ' >
                        <label className="flex items-center relative w-max cursor-pointer select-none">
                          <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-[61px] h-7 rounded-full focus:outline-none   bg-gray-200" />
                          <span className="absolute font-medium text-xs uppercase right-1 text-white">  </span>
                          <span className="absolute font-medium text-xs uppercase right-9 text-white"> <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.67587 4.98419C1.48741 4.81543 1.24183 4.72386 0.988394 4.72786C0.734961 4.73186 0.492419 4.83113 0.309421 5.00575C0.126422 5.18037 0.0165037 5.41743 0.00171272 5.66938C-0.0130783 5.92133 0.0683524 6.16953 0.229671 6.36419L2.45922 8.69419C2.55257 8.79169 2.66474 8.86941 2.78899 8.92268C2.91325 8.97595 3.04704 9.00368 3.18232 9.00419C3.31689 9.00497 3.45024 8.97882 3.57446 8.92729C3.69867 8.87575 3.81122 8.79988 3.90542 8.70419L10.7146 1.70419C10.8069 1.60964 10.8796 1.49791 10.9286 1.37537C10.9775 1.25284 11.0018 1.12191 10.9999 0.990049C10.998 0.85819 10.9701 0.727988 10.9177 0.606876C10.8653 0.485765 10.7895 0.376117 10.6945 0.284192C10.5995 0.192266 10.4873 0.119864 10.3643 0.0711197C10.2412 0.0223752 10.1097 -0.00175758 9.97728 9.95945e-05C9.84486 0.00195677 9.7141 0.0297673 9.59246 0.0819434C9.47083 0.13412 9.36071 0.20964 9.26839 0.304192L3.19236 6.56419L1.67587 4.98419Z" fill="white" />
                          </svg>
                          </span>
                          <span className="w-6 h-6 right-8 absolute rounded-full transform transition-transform bg-white" />
                        </label>



                      </li>
                    </ul>
                  </div>

                </div>
              </Link>
            </div>
          ))}
          

          {/* <div className="   col-span-12 sm:col-span-6 xl:col-span-3 ">
            <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
              <ul className='inline-flex w-full' >
                <li className='w-full mt-1' >
                  <h2 className='f-f-m text-base text-black ' >Optimization 2</h2>
                </li>
                <li className='mt-3 ' >
                  <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1951 2.14286C12.1951 3.33333 11.2195 4.28571 10 4.28571C8.78049 4.28571 7.80488 3.33333 7.80488 2.14286C7.80488 0.95238 8.78049 -4.9042e-07 10 -4.37114e-07C11.2195 -3.83807e-07 12.1951 0.952381 12.1951 2.14286ZM17.8049 -9.59518e-08C16.5854 -1.49258e-07 15.6098 0.952381 15.6098 2.14286C15.6098 3.33333 16.5854 4.28571 17.8049 4.28571C19.0244 4.28571 20 3.33333 20 2.14286C20 0.952381 19.0244 -4.26453e-08 17.8049 -9.59518e-08ZM2.19512 -7.78276e-07C0.975609 -8.31583e-07 -4.16299e-08 0.95238 -9.36673e-08 2.14286C-1.45705e-07 3.33333 0.975609 4.28571 2.19512 4.28571C3.41463 4.28571 4.39024 3.33333 4.39024 2.14286C4.39024 0.95238 3.41463 -7.24969e-07 2.19512 -7.78276e-07Z" fill="black" />
                  </svg>

                </li>
              </ul>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-3  ' >Solar Capacity (kW) <span className=' float-right ' >:25.2</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Inverter Capacity (kW)<span className=' float-right ' >:27.7</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Battery Capacity (kWh)<span className=' float-right ' >:61.4</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Generator Capacity (kW)<span className=' float-right ' >:24</span> </h2>
              <div className=' text-center ' >
                <ul className='inline-flex  ' >
                  <li>
                    <h2 className='f-f-md-it text-primary text-tiny mt-3  ' >Active Scenario </h2>
                  </li>
                  <li className=' ml-4 mt-2 ' >
                    <label className="flex items-center relative w-max cursor-pointer select-none">
                      <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-[61px] h-7 rounded-full focus:outline-none   bg-gray-200" />
                      <span className="absolute font-medium text-xs uppercase right-1 text-white">  </span>
                      <span className="absolute font-medium text-xs uppercase right-9 text-white"> <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.67587 4.98419C1.48741 4.81543 1.24183 4.72386 0.988394 4.72786C0.734961 4.73186 0.492419 4.83113 0.309421 5.00575C0.126422 5.18037 0.0165037 5.41743 0.00171272 5.66938C-0.0130783 5.92133 0.0683524 6.16953 0.229671 6.36419L2.45922 8.69419C2.55257 8.79169 2.66474 8.86941 2.78899 8.92268C2.91325 8.97595 3.04704 9.00368 3.18232 9.00419C3.31689 9.00497 3.45024 8.97882 3.57446 8.92729C3.69867 8.87575 3.81122 8.79988 3.90542 8.70419L10.7146 1.70419C10.8069 1.60964 10.8796 1.49791 10.9286 1.37537C10.9775 1.25284 11.0018 1.12191 10.9999 0.990049C10.998 0.85819 10.9701 0.727988 10.9177 0.606876C10.8653 0.485765 10.7895 0.376117 10.6945 0.284192C10.5995 0.192266 10.4873 0.119864 10.3643 0.0711197C10.2412 0.0223752 10.1097 -0.00175758 9.97728 9.95945e-05C9.84486 0.00195677 9.7141 0.0297673 9.59246 0.0819434C9.47083 0.13412 9.36071 0.20964 9.26839 0.304192L3.19236 6.56419L1.67587 4.98419Z" fill="white" />
                      </svg>
                      </span>
                      <span className="w-6 h-6 right-8 absolute rounded-full transform transition-transform bg-white" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="   col-span-12 sm:col-span-6 xl:col-span-3 ">
            <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
              <ul className='inline-flex w-full' >
                <li className='w-full mt-1' >
                  <h2 className='f-f-m text-base text-black ' >Optimization 3</h2>
                </li>
                <li className=' mt-3 ' >
                  <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1951 2.14286C12.1951 3.33333 11.2195 4.28571 10 4.28571C8.78049 4.28571 7.80488 3.33333 7.80488 2.14286C7.80488 0.95238 8.78049 -4.9042e-07 10 -4.37114e-07C11.2195 -3.83807e-07 12.1951 0.952381 12.1951 2.14286ZM17.8049 -9.59518e-08C16.5854 -1.49258e-07 15.6098 0.952381 15.6098 2.14286C15.6098 3.33333 16.5854 4.28571 17.8049 4.28571C19.0244 4.28571 20 3.33333 20 2.14286C20 0.952381 19.0244 -4.26453e-08 17.8049 -9.59518e-08ZM2.19512 -7.78276e-07C0.975609 -8.31583e-07 -4.16299e-08 0.95238 -9.36673e-08 2.14286C-1.45705e-07 3.33333 0.975609 4.28571 2.19512 4.28571C3.41463 4.28571 4.39024 3.33333 4.39024 2.14286C4.39024 0.95238 3.41463 -7.24969e-07 2.19512 -7.78276e-07Z" fill="black" />
                  </svg>

                </li>
              </ul>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-3  ' >Solar Capacity (kW) <span className=' float-right ' >:25.2</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Inverter Capacity (kW)<span className=' float-right ' >:27.7</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Battery Capacity (kWh)<span className=' float-right ' >:61.4</span> </h2>
              <h2 className=' f-f-r  text-grey-vdark text-base mt-2  ' >Generator Capacity (kW)<span className=' float-right ' >:24</span> </h2>
              <div className=' text-center ' >
                <ul className='inline-flex  ' >
                  <li>
                    <h2 className='f-f-md-it text-primary text-tiny mt-3  ' >Active Scenario </h2>
                  </li>
                  <li className=' ml-4 mt-2 ' >
                    <label className="flex items-center relative w-max cursor-pointer select-none">
                      <input type="checkbox" className="appearance-none transition-colors cursor-pointer w-[61px] h-7 rounded-full focus:outline-none   bg-gray-200" />
                      <span className="absolute font-medium text-xs uppercase right-1 text-white">  </span>
                      <span className="absolute font-medium text-xs uppercase right-9 text-white"> <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.67587 4.98419C1.48741 4.81543 1.24183 4.72386 0.988394 4.72786C0.734961 4.73186 0.492419 4.83113 0.309421 5.00575C0.126422 5.18037 0.0165037 5.41743 0.00171272 5.66938C-0.0130783 5.92133 0.0683524 6.16953 0.229671 6.36419L2.45922 8.69419C2.55257 8.79169 2.66474 8.86941 2.78899 8.92268C2.91325 8.97595 3.04704 9.00368 3.18232 9.00419C3.31689 9.00497 3.45024 8.97882 3.57446 8.92729C3.69867 8.87575 3.81122 8.79988 3.90542 8.70419L10.7146 1.70419C10.8069 1.60964 10.8796 1.49791 10.9286 1.37537C10.9775 1.25284 11.0018 1.12191 10.9999 0.990049C10.998 0.85819 10.9701 0.727988 10.9177 0.606876C10.8653 0.485765 10.7895 0.376117 10.6945 0.284192C10.5995 0.192266 10.4873 0.119864 10.3643 0.0711197C10.2412 0.0223752 10.1097 -0.00175758 9.97728 9.95945e-05C9.84486 0.00195677 9.7141 0.0297673 9.59246 0.0819434C9.47083 0.13412 9.36071 0.20964 9.26839 0.304192L3.19236 6.56419L1.67587 4.98419Z" fill="white" />
                      </svg>
                      </span>
                      <span className="w-6 h-6 right-8 absolute rounded-full transform transition-transform bg-white" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="   col-span-12 sm:col-span-6 xl:col-span-3 ">
            {/* crd started */}
            <Link to={`/scenarios/create/${site_id}`}>
              <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px] text-center h-[175px] sm:h-full ' >

                <button className='  text-primary f-f-r text-lg  relative top-[41%] left-[10px] ' >
                  <svg width="14" className=' absolute left-[-21px] top-[5px]  ' height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.480429 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.480429 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z" fill="#ED583B" />
                  </svg>
                  Add new Site
                </button>

              </div>
            </Link>
            {/* crd ended */}
          </div>
        </div>
        {/* grid ended */}
      </div>

      <div className=' relative ' >
        <div className=' text-end ' >
          <button  onClick={() => props.onDelete()} className=" mt-8 relative border bg-primary w-[186px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
            Delete
          </button>
        </div>
        
        {/* <div className=' text-end ' >
          <button onClick={() => { setdrop(!drop) }} className=" mt-8 relative border bg-primary w-[186px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
            Action

          </button>
        </div> */}

        {/* {drop ? <>

          <div id="dropdown" className="z-10 px-3 absolute  right-[20%] top-[70%]   w-[143px] bg-white divide-y divide-gray-100 rounded-lg shadow ">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">


              <li className=' profilebrdr2 mt-1' >
                <ul className=' inline-flex ' >
                  <li  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.4217 2.75 18.8923 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.655 21.1083 7.11733 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="black" />
                    </svg>
                  </li>
                  <li className=' ml-2 ' >
                    <h2 className=' text-lg text-black f-f-r   ' >Edit</h2>
                  </li>
                </ul>
              </li>

              <li className=' profilebrdr2 mt-1' >
                <ul className=' inline-flex ' >
                  <li  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="black" />
                    </svg>


                  </li>
                  <li className=' ml-2 ' >
                    <h2 className=' text-lg text-black f-f-r   ' >Delete</h2>
                  </li>
                </ul>
              </li>

            </ul>

          </div>
        </> : null} */}


      </div>
    </div>
  )
}
