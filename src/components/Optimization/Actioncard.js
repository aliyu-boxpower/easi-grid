import React from 'react'

export default function Actioncard(props) {
        const { scenario } = props
        return (
                <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
                        <h3 className=' text-black text-2xl f-f-r mt-10 ' >
                                Optimization 1
                        </h3>
                        <div className="grid grid-cols-12 mt-5 gap-4  ">

                                {/* second grid started */}
                                <div className="   col-span-12 sm:col-span-6">
                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] relative' >
                                                <button className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                </button>
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Information</h2>
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >PV Tilt<span className=' float-right text-black ' >{scenario?.pv_tilt}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >PV Azimuth<span className=' float-right text-black ' >{scenario?.pv_azimuth}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>

                                        </div>

                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-2 relative  ' >
                                                <button className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                </button>
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Optimization Summary</h2>
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Solar PV Capacity (kW)<span className=' float-right text-black ' >{scenario?.solar_pv_capacity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Battery Storage Capacity (kWh)<span className=' float-right text-black ' >{scenario?.battery_storage_capacity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Battery Inverter Capacity (kW)<span className=' float-right text-black ' >{scenario?.battery_inverter_capacity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Quantity<span className=' float-right text-black ' >{scenario?.generator_quantity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Size (kW)<span className=' float-right text-black ' >{scenario?.generator_size}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Renewable Fraction (%)<span className=' float-right text-black ' >{scenario?.model_renewable_fraction}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Runtime (hours)<span className=' float-right text-black ' >{scenario?.generator_runtime}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Fuel Consumption (litres)<span className=' float-right text-black ' >{scenario?.fuel_consumption}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Fuel Tank Size (gallons)<span className=' float-right text-black ' >{scenario?.fuel_tank_size}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>


                                        </div>

                                </div>
                                {/* second grid ended */}

                                <div className="   col-span-12 sm:col-span-6">
                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] relative ' >
                                                <button className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                </button>
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Solar  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >{scenario?.solar_product?.solar_product_name}<span className=' float-right text-black ' >{scenario?.solar_product?.solar_product_quantity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Battery  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >{scenario?.battery_product?.battery_product_name}<span className=' float-right text-black ' >{scenario?.battery_product?.battery_product_quantity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Inverter  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >{scenario?.inverter_product?.inverter_product_name}<span className=' float-right text-black ' >{scenario?.inverter_product?.inverter_product_quantity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Container  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >{scenario?.container_product?.container_product_name}<span className=' float-right text-black ' >{scenario?.container_product?.container_product_quantity}</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}

                                        </div>

                                </div>


                        </div>
                </div>
        )
}
