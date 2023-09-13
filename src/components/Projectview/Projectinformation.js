import React, { useEffect } from 'react'
import Dropdownproject from './Dropwdownpro'


export default function Projectinformation(props) {
  const { project } = props;
  const [ projectServices, setProjectServices ] = React.useState([]);
  useEffect(() => {
    const services = project?.project_services ? [ ...project?.project_services ] : [];
    for (let i = 0; i < services.length; i++) {
      let service     = { ...services[i] };
      let key         = Object.keys(service)[0];

      service.checked = service[key];
      service.title   = key.replace(/_/g, ' ').replace(/(?: |\b)(\w)/g, (key) => key.toUpperCase() );

      services[i]     = service;
    }
    setProjectServices(services);
    //console.log("services:", services);
  }, [project]);
  return (
    <div className=' bg-white rounded-[10px] shadow-lg p-[10px] my-6 ' >
      <div className="grid grid-cols-12 mt-5 gap-4 xl:gap-2  ">
        <div className="   col-span-8  ">
          <ul className=' inline-flex my-2 ml-2 ' >
            <li>
              <h3 className=' text-black text-2xl f-f-r ' >Project Information</h3>
            </li>
            <li className=' ml-3 mt-3' >
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.6326 7.10198C6.83058 7.31646 7.16942 7.31646 7.3674 7.10198L13 1" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </li>
          </ul>
        </div>
        {/* <div className="   col-span-4  ">
          <div className='relative' >
            <Dropdownproject />
          </div>
        </div> */}
      </div>

      {/* card section started */}
      <div className="grid grid-cols-12 mt-5 gap-4 xl:gap-2  ">
        {/* card one started */}
        <div className="   col-span-12 sm:col-span-6 xl:col-span-3 relative ">
          <button className="absolute top-1 right-1 border bg-primary w-[45px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
            Edit
          </button>
          <div className=' bg-grey-vlight rounded-[8px] border border-grey p-3 shadow-lg h-full ' >
            <h2 className=' f-f-m text-tiny text-grey-vdark  ' >Project Name:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.project_name }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-5 ' >Project Summary:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.project_summary }</h3>
          </div>
        </div>
        {/* card one ended */}
        {/* card one started */}
        <div className="   col-span-12 sm:col-span-6 xl:col-span-3 relative ">
          <button className="absolute top-1 right-1 border bg-primary w-[45px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
            Edit
          </button>
          <div className=' bg-grey-vlight rounded-[8px] border border-grey p-3 shadow-lg h-full ' >
            <h2 className=' f-f-m text-tiny text-grey-vdark  ' >Project Contacts:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.contacts.map((contact, i) => <span key={i}>{ contact.first_name } { contact.last_name }, </span>) }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-5 ' >Project Type:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.project_type }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-5 ' >Customer Type:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.customer_type }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-5 ' >Project Budgets:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >${ project?.project_budget }</h3>
          </div>
        </div>
        {/* card one ended */}
        {/* card one started */}
        <div className="   col-span-12 sm:col-span-6 xl:col-span-3 relative ">
          <button className="absolute top-1 right-1 border bg-primary w-[45px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
            Edit
          </button>
          <div className=' bg-grey-vlight rounded-[8px] border border-grey p-3 shadow-lg h-full ' >
            <h2 className=' f-f-m text-tiny text-grey-vdark  ' >Contract Value:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >${ project?.contract_value }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-4 ' >Contract Date:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.contract_date }</h3>
            <h2 className=' f-f-m text-tiny text-grey-vdark  mt-5 ' >Project Notes:</h2>
            <h3 className='f-f-r text-base text-black my-2 ' >{ project?.project_notes }</h3>

          </div>
        </div>
        {/* card one ended */}
        {/* card one started */}
        <div className="   col-span-12 sm:col-span-6 xl:col-span-3 relative ">
          <button className="absolute top-1 right-1 border bg-primary w-[45px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
            Edit
          </button>
          <div className=' bg-grey-vlight rounded-[8px] border border-grey p-3 shadow-lg h-full ' >
            <h2 className=' f-f-m  text-black  text-lg text-center ' >Service Provided By BoxPower</h2>
            {/* ul started */}
            { projectServices?.map((service, i) => (
              <div key={i}>
                <ul className=' inline-flex   w-full  ' >
                  <li className='w-full ' >
                    <h3 className='f-f-r text-base text-black ' >{service.title}</h3>
                  </li>
                  <li className=' mt-1 ' >
                    { service.checked ? 
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58173 0 0 3.58173 0 8C0 12.4183 3.58173 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0ZM8 1.73828C11.4583 1.73828 14.2607 4.54261 14.2607 8C14.2607 11.4574 11.4583 14.2607 8 14.2607C4.54173 14.2607 1.73925 11.4574 1.73925 8C1.73927 4.54261 4.54173 1.73828 8 1.73828ZM11.0654 4.20117L6.42871 8.83887L4.9248 7.33496L3.44921 8.80957L4.95312 10.3135L6.43847 11.7988L7.91309 10.3232L12.5508 5.68652L11.0654 4.20117Z" fill="#0F9B0C" />
                      </svg>
                    :
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.334958 10.0461C-0.111978 10.4931 -0.111978 11.2177 0.334958 11.6646C0.781895 12.1116 1.50652 12.1116 1.95346 11.6646L5.9998 7.6183L10.0463 11.6648C10.4932 12.1117 11.2179 12.1117 11.6648 11.6648C12.1117 11.2178 12.1117 10.4932 11.6648 10.0463L7.6183 5.9998L11.6645 1.95364C12.1114 1.5067 12.1114 0.782077 11.6645 0.335141C11.2175 -0.111795 10.4929 -0.111795 10.046 0.335141L5.9998 4.3813L1.95379 0.335295C1.50685 -0.111641 0.782226 -0.111641 0.335289 0.335295C-0.111647 0.782231 -0.111647 1.50686 0.335289 1.95379L4.3813 5.9998L0.334958 10.0461Z" fill="#FA3030" />
                      </svg>
                    }
                  </li>
                </ul>
                <div className=' border border-grey my-1 ' ></div>
              </div>
            )) }
            
            

            
            
          </div>
        </div>
        {/* card one ended */}
      </div>
      {/* card section ended */}

    </div>
  )
}

