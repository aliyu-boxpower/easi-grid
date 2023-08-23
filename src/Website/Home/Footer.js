import React from 'react'
import Logo from '../../assets/images/Logo 2.svg'
import signupvector from '../../assets/images/Vector 1.svg'
export default function Footer() {
    return (
        <>
            <div className=' relative ' >
                <div className=' absolute w-full top-[-38%] ' >
                    {/* signup vector started */}
                    <div className=' relative  w-full lg:w-[884px] ml-auto mr-auto   text-center ' >
                        <img src={signupvector} className='w-full h-[353px]  ' />
                        <div className=' absolute top-[35%] md:top-[24%] lg:top-[17%]  ' >
                            <h2 className=' f-f-sm  text-base md:text-[26px] lg:text-3xl w-11/12 ml-auto mr-auto text-white ' >Ready to streamline your engineering design process and generate bankable microgrids in minutes?</h2>
                            <button className=' w-[100px] h-[35px] sm:h-[40px] md:w-[179px] md:h-[55px]  rounded-[15px] f-f-r text-primary text-base md:text-2xl bg-white mt-2 md:mt-6 ' >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {/* sign up vector ended */}
                </div>
                <div className=' bg-primary-dark pb-20  pt-32 sm:pt-60 ' >
                    <div className=' w-11/12  2xl:max-w-[1256px] ml-auto mr-auto   ' >

                        <div className='grid grid-cols-12 mt-5 gap-8   ' >
                            <div className=' col-span-12 md:col-span-4 ' >
                                <img src={Logo} className=' ml-auto mr-auto md:ml-0 w-[230px] h-auto 2xl:w-[320px] 2xl:h-[47px]  ' />

                            </div>
                            <div className=' col-span-6 md:col-span-4 ' >
                                <h2 className=' f-f-b  text-2xl 2xl:text-[24px] text-white ' >Important Links</h2>
                                <ul className='mt-4 ' >
                                    <li>
                                        <button className=' f-f-r text-base  sm:text-lg 2xl:text-2xl text-grey-darkest ' >About Us</button>
                                    </li>
                                    <li className='mt-2 ' >
                                        <button className=' f-f-r text-base  sm:text-lg 2xl:text-2xl text-grey-darkest ' >Our Services</button>
                                    </li>
                                    <li className='mt-2 ' >
                                        <button className=' f-f-r text-base  sm:text-lg 2xl:text-2xl text-grey-darkest ' >Privacy & Policies</button>
                                    </li>
                                    <li className='mt-2 ' >
                                        <button className=' f-f-r text-base  sm:text-lg 2xl:text-2xl text-grey-darkest ' >Terms and Conditions</button>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-span-6 md:col-span-4 ' >
                                <h2 className=' f-f-b  text-2xl 2xl:text-[24px] text-white ' >Contact Us</h2>
                                <h2 className=' mt-4 f-f-r text-base  sm:text-lg 2xl:text-2xl text-grey-darkest ' >
                                    Office Address 450 Lexington Ave, New York, NY 10017 USA (888)123-4587
                                </h2>
                                <ul className=' inline-flex mt-8 ' >
                                    <li>
                                        <a>
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.59 4.87333C22.6733 1.97167 19.11 0.5 15 0.5C10.8517 0.5 7.27833 1.97333 4.37833 4.875C1.47333 7.77667 0 11.3533 0 15.5C0 19.6083 1.47167 23.1717 4.37333 26.09C7.275 29.0167 10.85 30.5 15 30.5C19.1117 30.5 22.675 29.0167 25.5933 26.095C28.5183 23.1733 30 19.6083 30 15.5C30 11.3533 28.5167 7.77667 25.59 4.87333ZM23.2367 23.7383C21.3417 25.6367 19.1767 26.7183 16.6667 27.0467V18.8333H20V15.5H16.6667V13.1667C16.6667 13.0352 16.6926 12.905 16.7429 12.7836C16.7933 12.6622 16.8671 12.5518 16.9601 12.459C17.0532 12.3661 17.1636 12.2925 17.2851 12.2423C17.4067 12.1922 17.5369 12.1664 17.6683 12.1667H20V8.83333H17.6717C16.435 8.83333 15.4033 9.28833 14.5767 10.2033C13.75 11.115 13.3333 12.2283 13.3333 13.55V15.5H10V18.8333H13.3333V27.05C10.7967 26.725 8.62333 25.6417 6.73833 23.7433C4.44667 21.4367 3.33333 18.74 3.33333 15.5C3.33333 12.2233 4.445 9.52 6.73667 7.23333C9.02 4.945 11.7233 3.83333 15 3.83333C18.2417 3.83333 20.9367 4.94667 23.2417 7.23833C25.5467 9.525 26.6667 12.2283 26.6667 15.5C26.6667 18.735 25.545 21.4317 23.2367 23.7383Z" fill="white" />
                                            </svg>

                                        </a>
                                    </li>
                                    <li className=' ml-3 ' >
                                        <a>
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.7217 21H9.055V12.335H11.7217V21ZM10.3883 11.2233C9.42667 11.2233 8.945 10.7783 8.945 9.89C8.94202 9.71173 8.97772 9.53493 9.04965 9.37179C9.12159 9.20864 9.22803 9.06304 9.36167 8.945C9.63958 8.68571 10.0084 8.54621 10.3883 8.55667C11.35 8.55667 11.8317 9.00333 11.8317 9.89167C11.8317 10.78 11.3517 11.2233 10.3883 11.2233ZM21.6117 21H18.89V16.1667C18.89 14.9083 18.4433 14.2783 17.555 14.2783C16.8517 14.2783 16.39 14.63 16.165 15.3333C16.0933 15.445 16.055 15.6683 16.055 16V21H13.3333V15.1117C13.3333 13.7783 13.3133 12.8533 13.2783 12.335H15.6117L15.7783 13.5C16.39 12.5733 17.2783 12.1117 18.5 12.1117C19.4283 12.1117 20.1767 12.435 20.75 13.0833C21.3267 13.7317 21.6133 14.6667 21.6133 15.89V21H21.6117ZM15 30.5C6.72833 30.5 0 23.7717 0 15.5C0 7.22833 6.72833 0.5 15 0.5C23.2717 0.5 30 7.22833 30 15.5C30 23.7717 23.2717 30.5 15 30.5ZM15 3.83333C8.56833 3.83333 3.33333 9.06833 3.33333 15.5C3.33333 21.9317 8.56833 27.1667 15 27.1667C21.4317 27.1667 26.6667 21.9317 26.6667 15.5C26.6667 9.06833 21.4317 3.83333 15 3.83333Z" fill="white" />
                                            </svg>


                                        </a>
                                    </li>
                                    <li className=' ml-3 ' >
                                        <a>
                                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15 0.5C6.66667 0.5 0 7.16667 0 15.5C0 23.8333 6.66667 30.5 15 30.5C23.3333 30.5 30 23.8333 30 15.5C30 7.16667 23.3333 0.5 15 0.5ZM15 12.1667C16.8333 12.1667 18.3333 13.6667 18.3333 15.5C18.3333 17.3333 16.8333 18.8333 15 18.8333C13.1667 18.8333 11.6667 17.3333 11.6667 15.5C11.6667 13.6667 13.1667 12.1667 15 12.1667ZM19.6667 8.83333C19.6667 7.66667 20.6667 6.83333 21.6667 6.83333C22.6667 6.83333 23.6667 7.83333 23.6667 8.83333C23.6667 9.83333 22.8333 10.8333 21.6667 10.8333C20.5 10.8333 19.6667 10 19.6667 8.83333ZM15 27.1667C8.5 27.1667 3.33333 22 3.33333 15.5H8.33333C8.33333 19.1667 11.3333 22.1667 15 22.1667C18.6667 22.1667 21.6667 19.1667 21.6667 15.5H26.6667C26.6667 22 21.5 27.1667 15 27.1667Z" fill="white" />
                                            </svg>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        {/* border started */}
                        <div className=' border border-grey-darkest w-8/12 ml-auto mr-auto my-7  ' ></div>
                        {/* border ended */}
                        <h2 className=' text-center text-grey-darkest text-lg f-f-r  ' >
                            Copyright© 2023 | EASIGRID®</h2>


                    </div>
                </div>
            </div>
        </>
    )
}
