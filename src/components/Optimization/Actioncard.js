import React from 'react'

export default function Actioncard() {
        return (
                <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
                        <h3 className=' text-black text-2xl f-f-r mt-10 ' >
                                Optimization 1
                        </h3>
                        <div className="grid grid-cols-12 mt-5 gap-4  ">

                                {/* second grid started */}
                                <div className="   col-span-12 sm:col-span-6">
                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] ' >
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Information</h2>
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >PV Tilt<span className=' float-right text-black ' >30</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >PV Azimuth<span className=' float-right text-black ' >180</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>

                                        </div>

                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-2  ' >
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Optimization Summary</h2>
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Solar PV Capacity (kW)<span className=' float-right text-black ' >15.7</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Battery Storage Capacity (kWh)<span className=' float-right text-black ' >35.84</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Battery Inverter Capacity (kW)<span className=' float-right text-black ' >27.2</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Quantity<span className=' float-right text-black ' >1</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Size (kW)<span className=' float-right text-black ' >22.3</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Renewable Fraction (%)<span className=' float-right text-black ' >70</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Generator Runtime (hours)<span className=' float-right text-black ' >295</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Fuel Consumption (litres)<span className=' float-right text-black ' >287</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2   ' >Fuel Tank Size (gallons)<span className=' float-right text-black ' >1000</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>


                                        </div>

                                </div>
                                {/* second grid ended */}

                                <div className="   col-span-12 sm:col-span-6">
                                        {/* crd started */}
                                        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] ' >
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Solar  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >S48LT<span className=' float-right text-black ' >1</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >SGMT<span className=' float-right text-black ' >15</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Battery  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >B3.8LFP<span className=' float-right text-black ' >15</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Inverter  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >ISP27<span className=' float-right text-black ' >4</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}
                                                {/* inner stated */}
                                                <h2 className=' text-center f-f-sm text-lg text-black mb-2 mt-7  ' >Container  Product(s)</h2>
                                                <h3 className='  f-f-m text-lg text-primary mt-2  ' >Name <span className=' float-right  ' >Quantity</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* start */}
                                                <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >C3Box<span className=' float-right text-black ' >1</span> </h3>
                                                <div className=' border border-white-vlight my-1 ' ></div>
                                                {/* inner ended */}

                                        </div>

                                </div>


                        </div>
                </div>
        )
}
