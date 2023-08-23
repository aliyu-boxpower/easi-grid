import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
export default function TestingDilog() {
    const [showModal, setShowModal] = useState(false);
    const [on, seton] = useState("Add");
    const [value, setValue] = useState()
    const data = (get) => {

        seton(get)
    }
    return (
        <div>

            <button onClick={() => setShowModal(true)} className="relative border bg-primary w-[262px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
                <svg width="19" className=' absolute left-[18px] top-[13px] ' height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6428 11.5714L17.2143 10.9286L17.8571 13.5" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.2143 10.9286C16.6432 12.5468 15.6059 13.9597 14.2331 14.9894C12.8602 16.019 11.2134 16.6192 9.49997 16.7143C7.91611 16.7146 6.37056 16.2273 5.07323 15.3187C3.7759 14.4101 2.78969 13.1243 2.24854 11.6357M4.35711 6.42857L1.78568 7.07143L1.14282 4.5" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.78564 7.07148C2.86564 4.11434 6.18279 1.28577 9.49993 1.28577C11.0915 1.29024 12.6427 1.78688 13.941 2.70761C15.2392 3.62833 16.2208 4.92807 16.7514 6.42862" stroke="white" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                Generate Load Basis</button>


            {showModal ? (
                <>
                    <div className="dilog-box" onClick={() => setShowModal(false)} >

                    </div>




                    <div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-[16%]   right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative w-full max-w-3xl max-h-full ml-auto mr-auto ">

                            <div class="relative bg-grey-light  rounded-lg shadow  p-10 ">
                                <button type="button" onClick={() => setShowModal(false)} class=" absolute top-[8px] right-[19px]  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.918759 13.0577C0.360088 13.6164 0.360088 14.5222 0.918759 15.0809C1.47743 15.6395 2.38321 15.6395 2.94189 15.0809L7.99981 10.0229L13.0579 15.0811C13.6166 15.6397 14.5224 15.6397 15.081 15.0811C15.6397 14.5224 15.6397 13.6166 15.081 13.0579L10.0229 7.99982L15.0806 2.94213C15.6393 2.38346 15.6393 1.47767 15.0806 0.919002C14.522 0.360332 13.6162 0.360333 13.0575 0.919003L7.99981 5.9767L2.9423 0.919193C2.38363 0.360523 1.47784 0.360523 0.919172 0.919193C0.360502 1.47786 0.360503 2.38365 0.919174 2.94232L5.97668 7.99982L0.918759 13.0577Z" fill="#FA3030" />
                                    </svg>

                                </button>

                                <h3 className=' f-f-r text-2xl text-black  text-center ' >How would you like to generate the load profiles for the modules you are adding to the <span className=' f-f-m' > "Maroon Corgi Ranch" </span> project?</h3>
                                <div className=' w-10/12 ml-auto mr-auto ' >


                                    <div className="grid grid-cols-12 mt-10 gap-4  ">
                                        <div className="   col-span-12 sm:col-span-6 lg:col-span-4  ">
                                            <div className=' bg-white  loard-crd h-[163px] p-5 ' >
                                                <svg width="64" height="63" className=' ml-auto mr-auto ' viewBox="0 0 64 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M43.517 0C43.8174 0 44.2804 0.112948 44.5558 0.250996C44.8436 0.401594 45.2566 0.778088 45.532 1.16713C45.8073 1.51853 47.7348 4.35478 49.8374 7.46713C51.94 10.5669 53.7298 13.3404 53.8174 13.6165C53.905 13.9052 53.9425 14.3444 53.8925 14.6456C53.8424 15.0472 53.6797 15.3359 53.2917 15.7626C52.9663 16.1014 52.5783 16.3775 52.3155 16.4528C52.0777 16.5155 51.4394 16.5657 49.9375 16.5657V19.7032L53.0414 19.7283C55.9075 19.7659 56.1703 19.791 56.6334 20.0295C56.9087 20.1801 57.3092 20.4938 57.5095 20.7323C57.7097 20.9833 57.9475 21.3974 58.0351 21.661C58.1102 21.9371 58.2104 22.5143 58.2604 22.9661C58.298 23.4179 58.3606 23.9325 58.4482 24.4721L60.1127 24.5098C61.4269 24.5349 61.8524 24.5851 62.2029 24.7733C62.4407 24.8988 62.8286 25.1749 63.0539 25.4008C63.2917 25.6141 63.5671 25.953 63.6672 26.1663C63.7798 26.3797 63.9175 26.706 63.9801 26.9193C64.0427 27.1452 63.9551 31.2114 63.7548 37.3984C63.5045 44.8906 63.3668 47.6014 63.2417 47.9151C63.129 48.1787 62.9663 48.3418 62.741 48.392C62.5408 48.4422 62.2529 48.4297 62.0777 48.3669C61.9025 48.3042 61.7022 48.1034 61.6271 47.9402C61.527 47.7018 61.5771 45.104 61.8399 37.5867C62.1403 29.3916 62.1778 27.4841 62.0527 27.1829C61.9651 26.9695 61.7148 26.706 61.5145 26.5805C61.1641 26.3671 60.7135 26.3546 49.9375 26.3546L49.8749 34.7253L49.5495 35.2147C49.3618 35.5034 48.9988 35.8171 48.6734 35.9803C48.1353 36.2564 48.0351 36.2689 43.5545 36.2689C39.3117 36.2689 38.9488 36.2438 38.4857 36.0305C38.2103 35.8924 37.8098 35.541 37.2341 34.7253L37.1715 26.3546H33.7297C31.6021 26.3546 30.1628 26.3044 29.95 26.2165C29.7497 26.1538 29.4619 25.953 29.2867 25.7898C29.0989 25.6141 28.4106 24.2211 27.6096 22.3763C26.8586 20.6695 26.1202 19.1384 25.9825 18.9753C25.8323 18.8122 25.5194 18.6365 25.2816 18.5737C25.0188 18.4984 21.4769 18.4482 16.7084 18.4482C10.5006 18.4482 8.49814 18.4859 8.27286 18.6114C8.11015 18.6867 7.85984 18.9 7.73468 19.0757C7.5094 19.3769 7.45934 20.5566 6.79601 39.6574C6.40802 50.8016 6.12016 60.0759 6.17022 60.2767C6.22029 60.4649 6.43305 60.7285 6.67085 60.8665C7.07135 61.1175 7.30915 61.1175 33.5795 61.1175C50.9513 61.1175 60.1878 61.0799 60.3881 60.992C60.5633 60.9167 60.7761 60.741 60.8762 60.5779C61.0139 60.3645 61.089 59.3104 61.2016 56.0349C61.3143 52.8096 61.4019 51.6926 61.527 51.4793C61.6271 51.3287 61.8399 51.153 62.0151 51.0777C62.2237 50.994 62.4323 50.994 62.6409 51.0777C62.8161 51.153 63.0164 51.3287 63.0915 51.4793C63.1916 51.6926 63.1916 52.9351 63.079 56.1604C62.9663 59.348 62.8787 60.6908 62.7536 61.0548C62.6534 61.3309 62.3906 61.745 62.1653 61.9709C61.94 62.2094 61.502 62.5357 60.5758 63H6.6333L6.04507 62.6988C5.70714 62.5357 5.2691 62.2094 5.04381 61.9709C4.81853 61.745 4.5557 61.3434 4.45558 61.0799C4.3179 60.7787 3.5169 54.0896 2.12766 41.6653C0.963706 31.2365 0 22.5645 0 22.3637C0 22.1755 0.125157 21.7739 0.262829 21.4602C0.400501 21.1464 0.638299 20.7574 0.788487 20.6068C0.938675 20.4436 1.28911 20.1926 1.56446 20.042C1.98999 19.8161 2.32791 19.7785 5.63205 19.7032V19.3518C5.63205 19.1635 5.78224 18.6992 5.96997 18.3227C6.19526 17.8835 6.52066 17.4944 6.88362 17.2309C7.19651 17.005 7.73468 16.7665 8.07261 16.6912C8.51065 16.5908 11.3142 16.5657 25.7197 16.6285L26.4456 16.9673C26.9337 17.2058 27.2842 17.4944 27.5345 17.8458C27.7472 18.147 28.0476 18.6867 28.4731 19.7032H37.1715V16.5657H36.1452C35.4193 16.5657 34.9563 16.4904 34.6058 16.3273C34.3305 16.2143 33.955 15.9257 33.7673 15.7124C33.567 15.4865 33.3543 15.0974 33.2792 14.8339C33.2041 14.5829 33.1665 14.1562 33.2166 13.8926C33.2666 13.5914 33.7673 12.7004 34.6434 11.3827C35.3943 10.2657 36.1077 9.26175 36.2329 9.16136C36.358 9.06096 36.6083 8.97311 36.7961 8.97311C36.9963 8.97311 37.2717 9.08606 37.4093 9.2241C37.5845 9.38725 37.6847 9.6257 37.6722 9.87669C37.6722 10.1904 37.3467 10.7803 36.333 12.2612C35.3067 13.7922 35.0314 14.2817 35.1315 14.4323C35.2316 14.5829 35.6071 14.6331 36.8712 14.6582C38.3355 14.6958 38.5107 14.7209 39.0614 15.248L39.0489 24.6604C39.0489 32.0898 39.0739 34.1104 39.1991 34.2359C39.3242 34.3488 40.338 34.3865 43.567 34.3865C46.7585 34.3865 47.7973 34.3488 47.91 34.2233C48.0351 34.1104 48.0602 31.889 48.0602 15.3108L48.3731 14.997C48.6609 14.6958 48.736 14.6833 50.2129 14.6833C51.4644 14.6958 51.7898 14.6582 51.94 14.495C52.0777 14.3444 52.0902 14.2315 52.0026 14.0683C51.94 13.9428 50.0752 11.1819 47.8724 7.93147C45.6697 4.68108 43.7798 1.98287 43.6797 1.94522C43.5796 1.90757 43.4169 1.95777 43.3167 2.03307C43.2291 2.12092 42.4406 3.23785 41.5896 4.51793C40.726 5.79801 39.925 6.91494 39.8123 7.00279C39.6997 7.09064 39.4244 7.15339 39.2116 7.15339C38.9112 7.15339 38.736 7.06554 38.5483 6.80199C38.3981 6.61375 38.2854 6.36275 38.2979 6.23725C38.2979 6.1243 39.0989 4.83167 40.0877 3.36335C41.527 1.20478 41.965 0.64004 42.4281 0.351394C42.8161 0.112948 43.154 0 43.517 0V0ZM1.93993 22.2508C1.90238 22.4014 2.46559 27.7727 3.1915 34.1982C3.9174 40.6112 4.53067 45.8946 4.56822 45.9323C4.59325 45.9699 4.64331 45.744 4.68086 45.4303C4.71841 45.1165 4.89363 40.4355 5.06885 35.0139C5.24406 29.5924 5.4318 24.3592 5.48186 23.3677L5.56947 21.5857C3.1164 21.5982 2.59074 21.6484 2.34043 21.7739C2.15269 21.8743 1.97748 22.0877 1.93993 22.2382V22.2508ZM30.0001 23.1669L30.6008 24.4972L37.1715 24.4847V21.5982C30.7885 21.5982 29.4118 21.6484 29.4118 21.7237C29.4118 21.7865 29.6746 22.439 30.0001 23.1669ZM49.9375 24.4847H56.5708C56.4832 24.0454 56.4206 23.5811 56.3831 23.1669C56.3455 22.7528 56.283 22.3135 56.2454 22.188C56.2204 22.0751 56.0201 21.8869 55.8199 21.7865C55.5195 21.6359 54.8937 21.5982 52.691 21.5982H49.9375V24.4847Z" fill="black" />
                                                </svg>

                                                <h3 className=' f-f-r text-base text-black text-center my-5 ' >Upload Hourly Load Data</h3>
                                            </div>

                                        </div>
                                        <div className="   col-span-12 sm:col-span-6 lg:col-span-4  ">
                                            <div className=' bg-white  loard-crd h-[163px] p-5 ' >
                                                <svg width="64" height="64" className=' ml-auto mr-auto ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.875 0.00153497C33.3625 -0.0109672 34.1 0.0515435 35.0625 0.239076C35.75 0.376599 36.7375 0.61414 37.25 0.751663C37.7625 0.901689 38.6625 1.22674 39.25 1.47679C39.8375 1.72683 40.7875 2.21441 41.375 2.55197C41.9625 2.88953 42.975 3.60215 43.625 4.12724C44.275 4.63983 45.1875 5.48998 45.6375 6.00256C46.1 6.51515 46.775 7.35279 47.1375 7.86538C47.5125 8.37797 48.1 9.36564 48.4625 10.0533C48.8125 10.7409 49.2625 11.7786 49.475 12.3662C49.675 12.9538 49.975 14.0164 50.1375 14.7416C50.4 15.8918 50.4375 16.3793 50.4375 18.5547C50.425 20.6426 50.3875 21.2552 50.1625 22.2428C50.0125 22.893 49.75 23.8806 49.5625 24.4307C49.375 24.9808 48.9875 25.9435 48.6875 26.5561C48.4 27.1687 47.8 28.2189 47.3625 28.869C46.8625 29.6316 46.0375 30.5943 45.075 31.5694C44.1 32.5321 43.1375 33.3573 42.375 33.8573C41.725 34.2949 40.7375 34.87 40.1875 35.1451C39.6375 35.4201 38.625 35.8327 37.9375 36.0702C37.25 36.2952 36.2625 36.5703 35.75 36.6828C35.2375 36.7953 34.1625 36.9329 33.375 36.9829C32.5625 37.0454 31.3125 37.0454 30.5 36.9829C29.7125 36.9204 28.55 36.7453 27.9375 36.6078C27.325 36.4578 26.3375 36.1702 25.75 35.9702C25.1625 35.7577 24.2625 35.3826 23.75 35.1201C23.2375 34.8575 22.275 34.2949 21.625 33.8573C20.8625 33.3573 19.9 32.5321 18.925 31.5694C17.9625 30.5943 17.1375 29.6316 16.6375 28.869C16.2 28.2189 15.6 27.1687 15.3125 26.5561C15.0125 25.9435 14.5875 24.8933 14.375 24.2432C14.1625 23.5931 13.875 22.3804 13.725 21.5552C13.5125 20.2925 13.4875 19.7174 13.5375 17.9296C13.5875 16.2793 13.675 15.5042 13.9125 14.4915C14.0875 13.7664 14.4 12.7037 14.6125 12.1161C14.8375 11.5285 15.2875 10.5158 15.6375 9.86572C15.9875 9.21561 16.5875 8.22794 16.975 7.67785C17.3625 7.14026 18.25 6.12758 18.9375 5.42746C19.7625 4.58982 20.675 3.85219 21.625 3.21459C22.4125 2.6895 23.5375 2.02688 24.125 1.76434C24.7125 1.48929 25.6625 1.11423 26.25 0.926693C26.8375 0.739161 27.9 0.451612 28.625 0.301586C29.6375 0.0765478 30.3875 0.0140371 31.875 0.00153497ZM27.5 4.05223C26.9125 4.23976 25.925 4.63983 25.3125 4.95238C24.7 5.26494 23.775 5.80253 23.2625 6.15259C22.75 6.51515 21.9375 7.20277 21.45 7.67785C20.95 8.15293 20.3 8.89056 19.9875 9.30313C19.675 9.7157 19.2125 10.3908 18.9625 10.8034C18.725 11.216 18.3625 11.8911 18.1875 12.3036C18 12.7162 17.7125 13.4788 17.55 13.9914C17.375 14.504 17.1625 15.4417 17.0625 16.0543C16.9625 16.6669 16.875 17.7921 16.875 18.5547C16.875 19.3173 16.9625 20.4175 17.0625 21.0301C17.1625 21.6302 17.4 22.5804 17.575 23.1555C17.7625 23.7181 18.175 24.7183 18.5 25.3684C18.825 26.0185 19.425 27.0062 19.8375 27.5563C20.25 28.1063 21.05 28.994 21.6 29.5316C22.1625 30.0567 23.1125 30.8193 23.725 31.2069C24.325 31.6069 25.325 32.1445 25.9375 32.4071C26.55 32.6821 27.6 33.0322 28.25 33.1947C28.9 33.3697 30 33.5573 30.6875 33.6198C31.4875 33.6948 32.4125 33.6948 33.25 33.6198C33.975 33.5573 35.125 33.3573 35.8125 33.1822C36.5 33.0072 37.5375 32.6571 38.125 32.3946C38.7125 32.132 39.675 31.6069 40.2875 31.2069C40.8875 30.8193 41.8375 30.0567 42.4 29.5316C42.95 28.994 43.725 28.1314 44.1125 27.6188C44.5 27.1062 45.1 26.1185 45.4625 25.4309C45.8125 24.7433 46.25 23.7181 46.425 23.1555C46.6 22.5804 46.8375 21.6302 46.9375 21.0301C47.0375 20.4175 47.125 19.3173 47.125 18.5547C47.125 17.7921 47.0375 16.6669 46.9375 16.0543C46.8375 15.4417 46.6125 14.479 46.4375 13.9289C46.2625 13.3788 45.8625 12.4287 45.575 11.8036C45.275 11.191 44.675 10.2033 44.25 9.61568C43.8125 9.02808 43.0625 8.15293 42.575 7.67785C42.0875 7.20277 41.175 6.46514 40.5625 6.04007C39.9375 5.6275 39.0125 5.08991 38.5 4.83986C37.9875 4.60232 37.2 4.27727 36.75 4.13974C36.3 3.98972 35.5125 3.77718 35 3.66466C34.4875 3.55214 33.3 3.43962 32.375 3.41462C31.3 3.38962 30.3 3.43962 29.625 3.55214C29.0375 3.63966 28.0875 3.8772 27.5 4.05223ZM0 3.73968H12.875V7.11525H3.375V48.7474H60.625V39.7708C60.625 34.845 60.5875 25.4809 60.4375 7.11525H52V3.73968H64V52.123H41V60.6244H49.625V64H14.375V60.6244H23V52.123H0V3.73968ZM26.375 60.3744H37.625V52.123H26.375V60.3744ZM30.25 12.7412H33.625V18.1171L37.1375 20.1425C39.075 21.2677 40.675 22.2053 40.7 22.2428C40.725 22.2804 40.3875 22.918 39.95 23.6806C39.5125 24.4307 39.1 25.0558 39.0375 25.0558C38.975 25.0558 36.975 23.9306 30.25 20.055V12.7412Z" fill="black" />
                                                </svg>

                                                <h3 className=' f-f-r text-base text-black text-center my-5 ' >Add Device time-of-use info</h3>
                                            </div>

                                        </div>
                                        <div className="   col-span-12 sm:col-span-6 lg:col-span-4  ">
                                            <div className=' bg-white  loard-crd h-[163px] p-5 ' >
                                                <svg width="64" height="64" className=' ml-auto mr-auto ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6774 0C24.1161 0 24.129 0 24.7742 0.645161V15.4839H25.8064V4.77419L26.129 4.45161C26.4387 4.12903 26.4516 4.12903 28.9032 4.12903C31.3419 4.12903 31.3548 4.12903 32 4.77419V15.4839H44.6452L44 14.5419C43.6387 14.0387 43.1742 13.1742 42.9806 12.6452C42.7742 12.1161 42.5419 11.2387 42.4516 10.7097C42.3484 10.1161 42.3226 9.30323 42.3742 8.60645C42.4129 7.9871 42.5806 7.05806 42.7484 6.55484C42.9161 6.03871 43.2645 5.2129 43.5484 4.70968C43.8581 4.14194 44.4387 3.40645 45.0839 2.76129C45.729 2.11613 46.4645 1.53548 47.0323 1.22581C47.5355 0.941935 48.3742 0.580645 48.9032 0.4C49.729 0.129032 50.129 0.0774194 51.5484 0.0774194C52.9677 0.0645161 53.3806 0.116129 54.1935 0.36129C54.7226 0.529032 55.5613 0.877419 56.0645 1.13548C56.6839 1.45806 57.329 1.96129 58.0774 2.70968C58.8 3.41935 59.3548 4.11613 59.6903 4.70968C59.9613 5.2129 60.3097 6.03871 60.4774 6.55484C60.6452 7.05806 60.8129 7.9871 60.8516 8.61936C60.9032 9.30323 60.8774 10.1161 60.7742 10.7097C60.6839 11.2387 60.4516 12.1161 60.2452 12.6452C60.0516 13.1742 59.6 14.0258 58.6452 15.4452L59.8064 15.5097C60.8129 15.5613 61.071 15.6258 61.7935 16.0129C62.2452 16.2581 62.7613 16.6194 62.9419 16.8387C63.1226 17.0581 63.4323 17.5742 64 18.7742L63.9355 51.6774L63.6 52.3226C63.4064 52.6839 63.1097 53.1484 62.9419 53.3548C62.7613 53.5613 62.2452 53.9484 60.9677 54.6452L38.5806 54.7097L39.9613 58.7742L41.9226 58.8387C43.8323 58.9032 43.8968 58.9161 44.1419 59.2258C44.3613 59.4968 44.4 59.7548 44.3871 61.9355H55.0968L55.4194 62.2581C55.6258 62.4645 55.7419 62.7226 55.7419 62.9677C55.7419 63.2 55.6258 63.4839 55.1097 64H8.90323L8.58064 63.6774C8.37419 63.471 8.25806 63.2129 8.25806 62.9677C8.25806 62.7355 8.37419 62.4516 8.89032 61.9355H19.6129V60.7484C19.6 59.7548 19.6387 59.4968 19.8581 59.2258C20.1032 58.9161 20.1677 58.9032 24.0387 58.7742L25.4194 54.7097L3.03226 54.6452L2.20645 54.1935C1.75484 53.9484 1.23871 53.5613 1.05806 53.3548C0.877419 53.1484 0.567742 52.6194 0 51.4194L0.0645161 18.5161L0.4 17.871C0.593548 17.5226 0.890323 17.0581 1.05806 16.8387C1.23871 16.6194 1.75484 16.2452 3.03226 15.5484L11.3548 15.4839L11.3677 7.85806L11.6774 7.54839C11.9871 7.22581 12.0129 7.22581 14.4516 7.22581C16.8903 7.22581 16.9032 7.22581 17.5484 7.87097V15.4839H18.5806L18.5935 0.632258L18.9032 0.322581C19.2129 0 19.2387 0 21.6774 0V0ZM20.6452 25.8064H22.7097V2.06452H20.6452V25.8064ZM47.871 3.10968C47.5484 3.30323 46.9419 3.79355 46.5161 4.21935C46.0903 4.64516 45.5613 5.32903 45.3419 5.75484C45.1226 6.16774 44.8258 6.83871 44.6968 7.22581C44.5161 7.74194 44.4516 8.30968 44.4516 9.29032C44.4516 10.271 44.5161 10.8387 44.6968 11.3548C44.8258 11.7419 45.071 12.3226 45.2387 12.6452C45.4065 12.9677 45.6 13.3161 45.6645 13.4194C45.7806 13.5742 46.2581 13.1613 48.1935 11.2258L50.5806 8.83871V2.19355C50.129 2.20645 49.6516 2.33548 49.2258 2.49032C48.8 2.64516 48.1935 2.92903 47.871 3.10968ZM52.6452 8.25806C58.6194 8.25806 58.7097 8.24516 58.7097 8C58.7097 7.85806 58.5806 7.38064 58.4129 6.94194C58.2581 6.49032 57.9742 5.87097 57.7806 5.54839C57.6 5.22581 57.1226 4.63226 56.7226 4.23226C56.3226 3.81935 55.729 3.32903 55.3935 3.13548C55.0452 2.94194 54.4129 2.64516 53.9742 2.49032C53.5226 2.32258 53.0452 2.19355 52.9032 2.19355C52.6581 2.19355 52.6452 2.28387 52.6452 5.22581V8.25806ZM27.871 25.8064H29.9355V6.19355H27.871V25.8064ZM13.4194 25.8064H15.4839V9.29032H13.4194V25.8064ZM47.2903 15.071C48.2968 15.6903 48.9548 16 49.4194 16.1677C50.0774 16.3871 50.5548 16.4516 51.6129 16.4516C52.5935 16.4516 53.1613 16.3871 53.6774 16.2065C54.0645 16.0774 54.7355 15.7806 55.1484 15.5613C55.5742 15.3419 56.2452 14.8387 56.6452 14.4516C57.0452 14.0645 57.5355 13.4581 57.7419 13.0968C57.9484 12.7484 58.2581 12.0903 58.4129 11.6516C58.5806 11.2 58.7097 10.7226 58.7097 10.5806C58.7097 10.3355 58.6194 10.3226 55.3806 10.3226H52.0645L47.2903 15.071ZM2.55484 18.1935C2.43871 18.3613 2.27097 18.671 2.19355 18.8645C2.10323 19.1097 2.06452 23.4968 2.06452 32.8387V46.4516H61.9355L61.871 18.8774C61.2645 18.1032 60.9032 17.8065 60.671 17.7161C60.3871 17.6 59.5742 17.5355 58.0903 17.5355C56.0645 17.5355 55.8839 17.5613 55.0968 17.871C54.6323 18.0645 53.8323 18.2968 53.3161 18.4C52.8 18.4903 52.0387 18.5806 51.6129 18.5806C51.1871 18.5806 50.4129 18.4903 49.8968 18.4C49.3806 18.2968 48.5935 18.0645 48.129 17.871L47.2903 17.5355L32 17.5484V25.8064H33.0323V19.2258C33.6645 18.5806 33.6645 18.5806 36.1161 18.5806C38.5677 18.5806 38.5806 18.5806 38.9032 18.9032L39.2258 19.2258V27.2258L38.5935 27.871H4.77419L4.12903 27.2258V19.2258C4.76129 18.5806 4.76129 18.5806 7.2129 18.5806C9.66452 18.5806 9.67742 18.5806 10 18.9032L10.3226 19.2258V25.8064H11.3548V17.5484C4.76129 17.5484 3.54839 17.6 3.22581 17.7161C2.98065 17.8065 2.68387 18.0258 2.55484 18.1935ZM17.5484 25.8064H18.5806V17.5484H17.5484V25.8064ZM24.7742 25.8064H25.8064V17.5484H24.7742V25.8064ZM6.19355 25.8064H8.25806V20.6452H6.19355V25.8064ZM35.0968 25.8064H37.1613V20.6452H35.0968V25.8064ZM2.06452 49.7419C2.06452 50.4516 2.12903 51.1355 2.23226 51.3806C2.32258 51.6129 2.61935 51.9742 2.90323 52.1935L3.39355 52.5806C60.4258 52.5806 60.6323 52.5677 60.9677 52.3226C61.1613 52.1806 61.4452 51.8968 61.6 51.6903C61.8323 51.3806 61.871 51.1226 61.8968 49.9226L61.9355 48.5161H2.06452V49.7419ZM26.8387 56.929L26.1935 58.8387H37.8064L36.4258 54.7742C28.5548 54.7097 27.6 54.7355 27.5484 54.8645C27.5097 54.9548 27.1871 55.8839 26.8387 56.929ZM21.6774 61.9355H42.3226V60.9032H21.6774V61.9355ZM47.0323 19.6129H57.1613L57.4839 19.9355C57.6774 20.129 57.8064 20.4 57.8064 20.6452C57.8064 20.8774 57.6774 21.1484 57.1742 21.6774H47.9613L45.8839 23.729C44.0645 25.5355 43.7548 25.7935 43.3806 25.7935C43.1097 25.7935 42.8516 25.6903 42.6452 25.4839C42.4129 25.2516 42.3226 25.0323 42.3484 24.7355C42.3742 24.3871 42.7355 23.9484 44.7097 21.9613L47.0323 19.6129ZM4.74839 28.9032H16.8903L17.2129 29.2258C17.4194 29.4323 17.5355 29.7032 17.5355 29.9355C17.5355 30.1806 17.4194 30.4516 16.9032 30.9677H4.76129L4.43871 30.6452C4.23226 30.4387 4.11613 30.1806 4.12903 29.9355C4.12903 29.7032 4.25806 29.4194 4.43871 29.2258L4.74839 28.9032ZM20.1161 28.9032C20.9032 28.9032 21.0581 28.9419 21.3419 29.2258C21.5484 29.4194 21.6645 29.6903 21.6645 29.9355C21.6645 30.1677 21.5484 30.4516 21.3548 30.6452C21.071 30.929 20.9161 30.9677 20.129 30.9677C19.329 30.9677 19.1742 30.929 18.8903 30.6452C18.6839 30.4387 18.5677 30.1806 18.5806 29.9226C18.5806 29.6903 18.7097 29.4065 18.8903 29.2129C19.1613 28.9419 19.3161 28.9032 20.1161 28.9032ZM40.1806 29.9484C40.4645 29.9484 40.929 30.0129 41.2129 30.0903C41.5226 30.1806 41.9871 30.5032 42.3871 30.9032C42.8 31.3032 43.071 31.7032 43.1355 31.9613C43.2129 32.3613 43.5226 32.5677 54.0516 38.7097L54.671 38.0903C55.0323 37.729 55.4839 37.4194 55.7935 37.3161C56.0774 37.2387 56.5161 37.1613 56.7613 37.1613C57.0065 37.1613 57.4452 37.2387 57.729 37.3161C58.0516 37.4194 58.5032 37.729 58.8903 38.129C59.2903 38.5161 59.6 38.9677 59.7032 39.2903C59.7806 39.5742 59.8581 40.0129 59.8581 40.2581C59.8581 40.5032 59.7806 40.9419 59.7032 41.2258C59.6 41.5355 59.2903 41.9871 58.8903 42.3871C58.5032 42.7871 58.0516 43.0968 57.729 43.2C57.4452 43.2774 57.0065 43.3548 56.7613 43.3548C56.5161 43.3548 56.0774 43.2774 55.7935 43.2C55.4839 43.0968 55.0194 42.7871 54.6194 42.3871C54.2064 41.9871 53.9355 41.5871 53.8839 41.3161C53.7935 40.929 53.4968 40.7226 42.9548 34.5806L42.3484 35.2C41.9742 35.5613 41.5226 35.871 41.2129 35.9613C40.929 36.0516 40.4903 36.129 40.2452 36.129C40 36.129 39.5613 36.0516 39.2903 35.9613C39.0065 35.871 38.5161 35.5613 37.6 34.7484L32.1806 38.8258C27.3806 42.4387 26.7484 42.9548 26.6452 43.3548C26.5677 43.6129 26.2452 44.0774 25.871 44.4516C25.471 44.8516 25.0194 45.1613 24.6968 45.2645C24.4129 45.3419 23.9742 45.4194 23.729 45.4194C23.4839 45.4194 23.0452 45.3419 22.7742 45.2516C22.4903 45.1613 22.0258 44.8903 21.7419 44.6323C21.4452 44.3742 21.0968 43.9097 20.671 43.0323L10.0516 38.5806L9.38064 39.2645C8.95484 39.6903 8.50323 40 8.18064 40.1032C7.89677 40.1806 7.45806 40.2581 7.2129 40.2581C6.96774 40.2581 6.52903 40.1806 6.24516 40.1032C5.93548 40 5.48387 39.6903 5.08387 39.2903C4.68387 38.8903 4.37419 38.4387 4.27097 38.129C4.19355 37.8452 4.11613 37.4065 4.11613 37.1613C4.11613 36.9161 4.20645 36.4516 4.30968 36.129C4.42581 35.7935 4.73548 35.3161 5.05806 35.0065C5.35484 34.7097 5.85806 34.3742 6.18064 34.2581C6.50323 34.1419 6.96774 34.0645 7.2129 34.0645C7.45806 34.0645 7.89677 34.1419 8.16774 34.2323C8.45161 34.3097 8.91613 34.5935 9.2 34.8516C9.49677 35.0968 9.85806 35.5613 10.2839 36.4516L20.8903 40.9032L21.5742 40.2194C21.9871 39.7935 22.4387 39.4839 22.7613 39.3806C23.0452 39.3032 23.4839 39.2258 23.729 39.2258C23.9742 39.2258 24.4129 39.3032 24.6968 39.3935C24.9677 39.471 25.4581 39.7806 26.3742 40.6065L31.7935 36.529C36.5935 32.9161 37.2258 32.4 37.3419 32C37.4064 31.7419 37.7419 31.2645 38.1161 30.8903C38.4645 30.5419 38.9677 30.1806 39.2129 30.1032C39.4581 30.0258 39.8968 29.9613 40.1806 29.9484ZM39.2258 33.0194C39.2129 33.2774 39.329 33.5355 39.5355 33.7419C39.7419 33.9484 40 34.0645 40.2581 34.0645C40.5032 34.0645 40.7613 33.9484 40.9677 33.7419C41.1613 33.5484 41.2774 33.2645 41.2774 33.0323C41.2774 32.7871 41.1613 32.5161 40.9548 32.3226C40.7484 32.1161 40.4903 32 40.2452 32C40 32 39.729 32.1161 39.5355 32.3097C39.3548 32.5032 39.2258 32.7871 39.2258 33.0194ZM6.19355 37.1484C6.18064 37.4064 6.29677 37.6645 6.50323 37.871C6.70968 38.0774 6.96774 38.1935 7.22581 38.1935C7.47097 38.1935 7.72903 38.0774 7.93548 37.871C8.12903 37.6774 8.24516 37.3935 8.24516 37.1613C8.24516 36.9161 8.12903 36.6452 7.92258 36.4516C7.71613 36.2452 7.45806 36.129 7.2129 36.129C6.96774 36.129 6.69677 36.2452 6.50323 36.4387C6.32258 36.6323 6.19355 36.9161 6.19355 37.1484ZM55.7419 40.2452C55.729 40.5032 55.8452 40.7613 56.0516 40.9677C56.2581 41.1742 56.5161 41.2903 56.7742 41.2903C57.0194 41.2903 57.2774 41.1742 57.4839 40.9677C57.6774 40.7742 57.7935 40.4903 57.7935 40.2581C57.7935 40.0129 57.6774 39.7419 57.471 39.5484C57.2645 39.3419 57.0065 39.2258 56.7613 39.2258C56.5161 39.2258 56.2452 39.3419 56.0516 39.5355C55.871 39.729 55.7419 40.0129 55.7419 40.2452ZM22.7097 42.3097C22.6968 42.5677 22.8129 42.8258 23.0194 43.0323C23.2258 43.2387 23.4839 43.3548 23.7419 43.3548C23.9871 43.3548 24.2452 43.2387 24.4516 43.0323C24.6452 42.8387 24.7613 42.5548 24.7613 42.3226C24.7613 42.0774 24.6452 41.8064 24.4387 41.6129C24.2323 41.4065 23.9742 41.2903 23.729 41.2903C23.4839 41.2903 23.2129 41.4064 23.0194 41.6C22.8387 41.7935 22.7097 42.0774 22.7097 42.3097ZM46.9548 40.2581C48.8516 40.2581 48.9032 40.2581 49.2129 40.5806C49.4194 40.7742 49.5355 41.0452 49.5355 41.2903C49.5355 41.5226 49.4194 41.8064 49.2258 42C48.9161 42.3097 48.8645 42.3226 46.9677 42.3226C45.0581 42.3226 45.0194 42.3097 44.6968 42C44.4903 41.7935 44.3742 41.5355 44.3871 41.2774C44.3871 41.0452 44.5161 40.7613 44.6968 40.5677C45.0065 40.271 45.0581 40.2581 46.9548 40.2581ZM40.8774 43.3548H48.8903L49.2129 43.6774C49.4194 43.871 49.5355 44.1419 49.5355 44.3871C49.5355 44.6194 49.4194 44.9032 48.9032 45.4194H40.8903L40.5677 45.0968C40.3613 44.8903 40.2452 44.6323 40.2581 44.3742C40.2581 44.1419 40.3871 43.8581 40.5677 43.6645L40.8774 43.3548ZM4.74839 49.5484H11.729L12.0516 49.871C12.2581 50.0774 12.3742 50.3484 12.3742 50.5806C12.3742 50.8258 12.2581 51.0968 11.7419 51.6129H4.76129L4.43871 51.2903C4.23226 51.0839 4.11613 50.8387 4.11613 50.5806C4.12903 50.3484 4.25806 50.0645 4.43871 49.871L4.74839 49.5484ZM14.9419 49.5484C15.7419 49.5484 15.8968 49.5871 16.1806 49.871C16.3742 50.0774 16.5032 50.3355 16.5032 50.5806C16.5032 50.8129 16.3742 51.0968 16.1806 51.2903C15.9097 51.5742 15.7548 51.6129 14.9548 51.6129C14.1677 51.6129 14.0129 51.5742 13.729 51.2903C13.5226 51.0839 13.4065 50.8258 13.4065 50.5806C13.4194 50.3355 13.5355 50.0516 13.729 49.871C14 49.5871 14.1548 49.5484 14.9419 49.5484Z" fill="black" />
                                                </svg>

                                                <h3 className=' f-f-r text-base text-black text-center my-5 ' >Provide Monthly Consumption data</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            ) : null}






        </div>
    )
}