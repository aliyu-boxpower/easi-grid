import React from 'react'
import heroimg from '../../assets/images/hero-img1.svg'
import heroimg2 from '../../assets/images/hero-img2.svg'
import heroimg3 from '../../assets/images/hero-img3.png'
import heroimg4 from '../../assets/images/hero-img4.svg'
import heroimg5 from '../../assets/images/hero-img5.png'
import heroimg6 from '../../assets/images/heroimg-new.svg'


export default function Automate() {
     return (

          <div className=' w-11/12  2xl:max-w-[1256px] ml-auto mr-auto pb-40 sm:pb-64 lg:pb-44  ' >
               <h2 className=' text-center f-f-sm text-4xl sm:text-3xl xl:text-[48px] text-black sm:py-10 ' >Automate engineering.<br /> Develop microgrids faster</h2>

               <div className='grid grid-cols-12 mt-5 gap-8  items-center ' >
                    {/* one started */}
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg} className=' w-full h-auto ' />

                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-right ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >Create Microgrid Model</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our Microgrid Model feature enables users to simulate a viable system for all possible combinations of the equipment that would be deployed as part of the microgrid platform to meet a given load profile.</h4>
                         </div>
                    </div>
                    {/* one ended */}
                    {/* one started */}

                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-start ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >Bill of Materials</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our Bill of Materials feature enables users to create an extensive list of all the individual components and materials included in the products that make up the power generation system. Users can also add other items at the project site which do not necessarily form a part of the power system.</h4>
                         </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg2} className=' w-full h-auto ' />

                    </div>
                    {/* one ended */}
                    {/* one started */}
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg3} className=' w-full h-auto ' />

                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-right ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >Basis of Design</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our Basis of Design feature enables users to create a document record of the thought processes and assumptions behind major design decisions made to meet the given project requirements. The Basis of Design enables users to understand the assumptions made and the limitations of the power system.</h4>
                         </div>
                    </div>
                    {/* one ended */}
                    {/* one started */}

                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-start ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >General Contractor Scope of Work</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our General Contractor Scope of Work feature enables users to streamline the creation of a document outlining the responsibilities of general contractors on the project. The scopes of works generated on EASIGRID are highly customizable and can be shared with all users in the organization for inputs.</h4>
                         </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg4} className=' w-full h-auto ' />

                    </div>
                    {/* one ended */}
                    {/* one started */}
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg5} className=' w-full h-auto ' />

                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-right ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >General Site Plan</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our Microgrid Model feature enables users to simulate a viable system for all possible combinations of the equipment that would be deployed as part of the microgrid platform to meet a given load profile.</h4>
                         </div>
                    </div>
                    {/* one ended */}
                    {/* one started */}

                    <div className=' col-span-12 lg:col-span-6   lg:py-20 text-center lg:text-start ' >
                         <div className=' 2xl:w-10/12 ml-auto ' >
                              <h2 className=' f-f-sm text-3xl text-black ' >Single Line Diagram</h2>
                              <h4 className='f-f-r text-black text-lg ' >Our Bill of Materials feature enables users to create an extensive list of all the individual components and materials included in the products that make up the power generation system. Users can also add other items at the project site which do not necessarily form a part of the power system.</h4>
                         </div>
                    </div>
                    <div className=' col-span-12 lg:col-span-6   lg:py-20 ' >
                         <img src={heroimg6} className=' w-full h-auto ' />

                    </div>
                    {/* one ended */}
               </div>




          </div>
     )
}
