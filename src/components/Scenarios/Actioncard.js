import React from 'react'

export default function Actioncard(props) {
       const { site } = props 
       return (
              <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >

                     <div className="grid grid-cols-12 mt-5 gap-4  ">
                            <div className="   col-span-12 sm:col-span-6">
                                   {/* crd started */}
                                   <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] ' >
                                          <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Design Parameters</h2>
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Minimum Temperature (C) <span className=' float-right text-black ' >{ site?.location_minimum_temperature }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Maximum Temperature (C) <span className=' float-right text-black ' >{ site?.location_maximum_temperature }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Minimum Humidity (%) <span className=' float-right text-black ' >{ site?.location_minimum_humidity }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Maximum Humidity (%) <span className=' float-right text-black ' >{ site?.location_maximum_humidity }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Show Load (lb/sqft)<span className=' float-right text-black ' >{ site?.snow_load }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Wind Speed (mph)<span className=' float-right text-black ' >{ site?.wind_speed }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Soil Type<span className=' float-right text-black ' >{ site?.soil_type }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Spectral Response (Short, S/S)<span className=' float-right text-black ' >{ site?.seismic_spectral_response_short }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Spectral Response (1 Sec, S/1)<span className=' float-right text-black ' >{ site?.seismic_spectral_response_second }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Importance Factor<span className=' float-right text-black ' >{ site?.seismic_importance_factor }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Site Class<span className=' float-right text-black ' >{ site?.seismic_site_class }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Design Spectral Response (S/DS)<span className=' float-right text-black ' >{ site?.design_spectral_response_short }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Design Spectral Response (S/D1)<span className=' float-right text-black ' >{ site?.design_spectral_response_second }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Design Category<span className=' float-right text-black ' >{ site?.seismic_design_category }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                   </div>
                            </div>

                            {/* second grid started */}
                            <div className="   col-span-12 sm:col-span-6">
                                   {/* crd started */}
                                   <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] ' >
                                          <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Information</h2>
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Name<span className=' float-right text-black ' >{ site?.site_name }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Contacts<span className=' float-right text-black ' >{ site?.contacts?.map((contact, i) => <span key={i}>{ contact.first_name } { contact.last_name }, </span>) }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Address <span className=' float-right text-black ' >{ site?.site_address }<span className='hidden  2xl:contents ' > CA 9521 </span> </span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >GPS Coordinates<span className=' float-right text-black ' >{ site?.site_gps }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Renewable Fraction Target (%)<span className=' float-right text-black ' >{ site?.target_renewable }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>

                                   </div>

                                   {/* crd started */}
                                   <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-[18px] ' >
                                          <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Conditions</h2>
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Foundation Type<span className=' float-right text-black ' >{ site?.foundation_type }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Additional Foundation Requirements<span className=' float-right text-black ' >{ site?.foundation_requirements }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Service Voltage<span className=' float-right text-black ' >{ site?.service_voltage }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>
                                          {/* start */}
                                          <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Connection Type<span className=' float-right text-black ' >{ site?.connection_type }</span> </h3>
                                          <div className=' border border-white-vlight my-1 ' ></div>


                                   </div>

                            </div>
                            {/* second grid ended */}


                     </div>
              </div>
       )
}
