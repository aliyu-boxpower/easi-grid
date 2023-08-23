import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function MyDropdown() {
  return (
    <>

      <Menu  >
        <Menu.Button className=' absolute top-[12px] right-0 cursor-pointer ' >  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.99286 7.80488C11.1833 7.80488 12.1357 8.78049 12.1357 10C12.1357 11.2195 11.1833 12.1951 9.99286 12.1951C8.80239 12.1951 7.85001 11.2195 7.85001 10C7.85001 8.78049 8.80239 7.80488 9.99286 7.80488ZM7.85001 2.19512C7.85001 3.41463 8.80239 4.39024 9.99286 4.39024C11.1833 4.39024 12.1357 3.41463 12.1357 2.19512C12.1357 0.97561 11.1833 0 9.99286 0C8.80239 0 7.85001 0.97561 7.85001 2.19512ZM7.85001 17.8049C7.85001 19.0244 8.80239 20 9.99286 20C11.1833 20 12.1357 19.0244 12.1357 17.8049C12.1357 16.5854 11.1833 15.6098 9.99286 15.6098C8.80239 15.6098 7.85001 16.5854 7.85001 17.8049Z" fill="black" />
        </svg>
        </Menu.Button>
        <Menu.Items>
          <Link to="/projectview" >
            <div id="dropdown" className="z-10 px-3 absolute  right-[10px] top-[30px]  w-[143px] bg-white divide-y divide-gray-100 rounded-lg shadow ">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">

                <li className=' profilebrdr2 mt-1' >
                  {/* inner ul started */}
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
                  {/* inner ul ended */}
                </li>




                <li className=' profilebrdr2 mt-1' >
                  {/* inner ul started */}
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
                  {/* inner ul ended */}
                </li>

              </ul>

            </div>
          </Link>
        </Menu.Items>

      </Menu>


    </>
  )
}