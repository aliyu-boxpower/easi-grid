import React from 'react'
import { Link } from 'react-router-dom'

export default function Projectsite(props) {
  const { project } = props;
  return (
    <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >
      <div className=' mt-10 ' >
        <ul className=' inline-flex ' >
          <li>
            <h3 className=' text-black text-2xl f-f-r ' >
              Project Sites
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
          { project?.sites?.map((site, i) => (
            <div key={i} className="col-span-12 sm:col-span-6 xl:col-span-3 ">
              <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
                <ul className='inline-flex w-full' >
                  <li className='w-full mt-1' >
                    <h2 className='f-f-r text-base text-black ' >{site.site_name}</h2>
                  </li>
                  <li>
                    <button className=' bg-grey-dark text-sm f-f-dm-r w-[70px] h-[19px] rounded-[6px]  ' >
                      2 Scenarios
                    </button>
                  </li>
                </ul>
                <h2 className=' f-f-md-it text-tiny text-grey-vdark uppercase ' >{ project?.contacts.map((contact, i) => <span key={i}>{ contact.first_name } { contact.last_name }, </span>) }</h2>
                <h2 className=' f-f-r  text-grey-vdark text-base ' >{site.site_address}</h2>
                <ul className='inline-flex w-full mt-4 ' >
                  <li className='w-full mt-2' >
                    <h2 className='f-f-r text-sm text-grey-vdark ' >Last Modified 5 Months Ago</h2>
                  </li>
                  <li>
                    <Link to={`/scenarios/view/${site.id}`} >
                      <button className='text-primary f-f-r text-tiny'>Details</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )) }
          

          {/* <div className="col-span-12 sm:col-span-6 xl:col-span-3 ">
            <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
              <ul className='inline-flex w-full' >
                <li className='w-full mt-1' >
                  <h2 className='f-f-r text-base text-black ' >Maroon Corgi Ranch</h2>
                </li>
                <li>
                  <button className=' bg-grey-dark text-sm f-f-dm-r w-[70px] h-[19px] rounded-[6px]  ' >
                    2 Scenarios
                  </button>
                </li>
              </ul>
              <h2 className=' f-f-md-it text-tiny text-grey-vdark uppercase ' >Kevin Wagner</h2>
              <h2 className=' f-f-r  text-grey-vdark text-base ' >4517 Washington, Manchester,
                Kentucky, US 39495</h2>
              <ul className='inline-flex w-full mt-4 ' >
                <li className='w-full mt-2' >
                  <h2 className='f-f-r text-sm text-grey-vdark ' >Last Modified 5 Months Ago</h2>
                </li>
                <li>
                  <Link to="/Scenarios" >

                    <button className='  text-primary f-f-r text-tiny   ' >
                      Details
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 ">
            <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px]' >
              <ul className='inline-flex w-full' >
                <li className='w-full mt-1' >
                  <h2 className='f-f-r text-base text-black ' >Maroon Corgi Ranch</h2>
                </li>
                <li>
                  <button className=' bg-grey-dark text-sm f-f-dm-r w-[70px] h-[19px] rounded-[6px]  ' >
                    2 Scenarios
                  </button>
                </li>
              </ul>
              <h2 className=' f-f-md-it text-tiny text-grey-vdark uppercase ' >Kevin Wagner</h2>
              <h2 className=' f-f-r  text-grey-vdark text-base ' >4517 Washington, Manchester,
                Kentucky, US 39495</h2>
              <ul className='inline-flex w-full mt-4 ' >
                <li className='w-full mt-2' >
                  <h2 className='f-f-r text-sm text-grey-vdark ' >Last Modified 5 Months Ago</h2>
                </li>
                <li>
                  <Link to="/Scenarios" >

                    <button className='  text-primary f-f-r text-tiny   ' >
                      Details
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="col-span-12 sm:col-span-6 xl:col-span-3 ">
            <Link to={`/site/create/${project?.id}`} >
              <div className=' w-[85%] ml-auto mr-auto xl:ml-0 xl:w-full bg-white rounded-[10px] shadow-lg p-[10px] text-center h-[175px] sm:h-full ' >

                <button className='  text-primary f-f-r text-lg  relative top-[41%] left-[10px] ' >
                  <svg width="14" className=' absolute left-[-21px] top-[5px]  ' height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 8H8V13C8 13.2652 7.89464 13.5196 7.70711 13.7071C7.51957 13.8946 7.26522 14 7 14C6.73478 14 6.48043 13.8946 6.29289 13.7071C6.10536 13.5196 6 13.2652 6 13V8H1C0.734784 8 0.48043 7.89464 0.292893 7.70711C0.105357 7.51957 0 7.26522 0 7C0 6.73478 0.105357 6.48043 0.292893 6.29289C0.48043 6.10536 0.734784 6 1 6H6V1C6 0.734784 6.10536 0.480429 6.29289 0.292893C6.48043 0.105357 6.73478 0 7 0C7.26522 0 7.51957 0.105357 7.70711 0.292893C7.89464 0.480429 8 0.734784 8 1V6H13C13.2652 6 13.5196 6.10536 13.7071 6.29289C13.8946 6.48043 14 6.73478 14 7C14 7.26522 13.8946 7.51957 13.7071 7.70711C13.5196 7.89464 13.2652 8 13 8Z" fill="#ED583B" />
                  </svg>
                  Add new Site
                </button>

              </div>
            </Link>
          </div>
          
        </div>
        {/* grid ended */}
      </div>

    </div>
  )
}
