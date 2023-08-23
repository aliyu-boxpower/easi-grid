import React from 'react'

export default function ElectricloadCrd(props) {
  const { site } = props;
  return (
    <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
      {/* crd started */}
      <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
        <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Electric Load</h2>
        {/* button started */}
        <button className="absolute top-[17px] right-[20px]  border bg-primary w-[222px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">

          <svg className=" absolute left-[14px] top-[14px] " width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6428 11.5714L17.2143 10.9286L17.8571 13.5" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.2143 10.9286C16.6432 12.5468 15.6059 13.9597 14.2331 14.9894C12.8602 16.019 11.2134 16.6192 9.49997 16.7143C7.91611 16.7146 6.37056 16.2273 5.07323 15.3187C3.7759 14.4101 2.78969 13.1243 2.24854 11.6357M4.35711 6.42857L1.78568 7.07143L1.14282 4.5" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.78564 7.07142C2.86564 4.11428 6.18279 1.28571 9.49993 1.28571C11.0915 1.29018 12.6427 1.78682 13.941 2.70755C15.2392 3.62827 16.2208 4.92801 16.7514 6.42856" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          Update load Basis
        </button>
        {/* buttons ended */}


        <h3 className='  f-f-r text-lg text-black-vlight mt-14  ' >Average Daily Usage (kWh/day) <span className=' float-right text-black ' >{ site.average_daily_usage }</span> </h3>
        <div className=' border border-white-vlight my-1 ' ></div>
        {/* start */}
        <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Peak  Demand (kW)<span className=' float-right text-black ' >{ site.peak_demand }</span> </h3>
        <div className=' border border-white-vlight my-1 ' ></div>
        {/* start */}
        <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Average Demand (kW)<span className=' float-right text-black ' >{ site.average_demand }</span> </h3>
        <div className=' border border-white-vlight my-1 ' ></div>


      </div>
      {/* card ended */}


      <div className="grid grid-cols-12 mt-5 gap-4  ">
        <div className="   col-span-12 sm:col-span-6">
          {/* crd started */}
          <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
            <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Directory of Links</h2>



            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Clickup Spaces <span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >PSA Contact<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Consulting Contact<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Sharepoint<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Invoices<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project  BOM Worksheet<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Pricing Worksheet<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Schedule<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Assumptions  & Exclusions<span className=' float-right text-black ' >www.example.com</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>


          </div>
          {/* card ended */}
        </div>
        <div className="   col-span-12 sm:col-span-6">
          {/* crd started */}
          <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
            <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Logistics</h2>



            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Target Delivery Date<span className=' float-right text-black ' >{ site.target_delivery_date }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Equipment<span className=' float-right text-black ' >{ site.equipment }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Loading Method<span className=' float-right text-black ' >{ site.loading }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Shipping Method<span className=' float-right text-black ' >{ site.shipping }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Unloading Method<span className=' float-right text-black ' >{ site.unloading }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >System Placement<span className=' float-right text-black ' >{ site.system_placement }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Preferred Unloading Method<span className=' float-right text-black ' >{ site.preferred_unloading_method }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Customer Shipping Max Budget<span className=' float-right text-black ' >${ site.customer_shipping_max_budget }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>
            {/* start */}
            <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Miscellaneous Items  Being Shipped<span className=' float-right text-black ' >{ site.miscellaneous_items_being_shipped }</span> </h3>
            <div className=' border border-white-vlight my-1 ' ></div>


          </div>
          {/* card ended */}
        </div>

      </div>

      {/* table started */}
      {/* crd started */}
      <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] my-6  relative ' >
        <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Power Distribution Summary</h2>

        <div className='overflow-x-auto' >


          <table className=' w-full text-left power-table ' >
            <thead>
              <tr>
                <th className='f-f-r text-lg text-primary' >Service Conductor Path</th>
                <th className='f-f-r text-lg text-primary' >Type</th>
                <th className='f-f-r text-lg text-primary' >New/Existing</th>
                <th className='f-f-r text-lg text-primary' >Distance</th>
                <th className='f-f-r text-lg text-primary' >Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='f-f-r text-lg text-black-vlight' >PCC to Transformer</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.pcc_to_transformer_type }</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.pcc_to_transformer_install }</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.pcc_to_transformer_distance }</td>
                <td className='f-f-r text-lg text-black-vlight' >Feet</td>
              </tr>
              <tr>
                <td className='f-f-r text-lg text-black-vlight' >Transformer to  Meter</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.transformer_to_meter_type }</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.transformer_to_meter_install }</td>
                <td className='f-f-r text-lg text-black-vlight' >{ site.transformer_to_meter_distance }</td>
                <td className='f-f-r text-lg text-black-vlight' >Feet</td>
              </tr>
            </tbody>
            
            
          </table>
        </div>


      </div>
      {/* card ended */}
      {/* table ended */}


    </div>
  )
}
