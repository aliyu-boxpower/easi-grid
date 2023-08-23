import React from 'react';
import Esgridman from '../../assets/images/esgridman.svg'
import Navbar from './Navbar';
export default function ButtonAppBar() {

  return (
    <div className='bg-white rounded-b-[8px] p-3 fixed lg:relative w-full top-0 z-[999] lg:z-0 ' >
      <div className="grid grid-cols-12    ">
        <div className="   col-span-3 sm:col-span-4 lg:hidden ">
          <svg className=' w-[106%] sm:w-[70%] h-auto   mt-3 sm:mt-2' viewBox="0 0 196 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_459_415)">
              <path d="M0 0.160248C0.263768 0.177418 0.524638 0.208896 0.788406 0.208896C6.54493 0.208896 12.2986 0.220343 18.0551 0.197449C18.6812 0.197449 18.9072 0.360564 18.8261 0.970096C18.7826 1.30205 18.8174 1.64545 18.8174 2.089H0V0.160248Z" fill="#ED583B" />
              <path d="M0 26.8852C0.243478 26.8938 0.486957 26.911 0.733333 26.911C6.48986 26.911 12.2435 26.911 18 26.911H18.8145C18.8145 27.4776 18.8319 27.9927 18.8 28.5049C18.7942 28.6022 18.6116 28.7282 18.487 28.7654C18.3391 28.8111 18.1652 28.7768 18 28.7768C12.2435 28.7768 6.48986 28.7768 0.733333 28.7768C0.489855 28.7768 0.246377 28.7968 0.00289855 28.8083C0.00289855 28.1673 0.00289855 27.5234 0.00289855 26.8824L0 26.8852Z" fill="#ED583B" />
              <path d="M0 13.404C1.44928 13.3954 2.89565 13.3811 4.34493 13.3811C8.87536 13.3782 13.4058 13.3811 17.9362 13.3811H18.771V15.1839H18.058C12.2841 15.1839 6.50725 15.1839 0.733333 15.1839C0.489855 15.1839 0.246377 15.2011 0 15.2097L0 13.404Z" fill="#ED583B" />
              <path d="M169.055 2.08901V0.257554C169.148 0.234661 169.241 0.188875 169.333 0.188875C173.681 0.217491 178.038 0.0744086 182.371 0.320511C189.023 0.695388 194.446 5.16815 195.667 11.3407C197.461 20.4036 191.777 27.4204 183.33 28.5708C182.183 28.7281 181.015 28.7739 179.855 28.7854C176.487 28.814 173.119 28.794 169.751 28.794H169.061V14.5229H171.139V26.8566C171.371 26.8738 171.53 26.8938 171.69 26.8938C174.832 26.8938 177.977 26.9453 181.119 26.8681C185.035 26.7708 188.484 25.5231 191.078 22.4955C193.197 20.0259 193.98 17.1012 193.849 13.9334C193.69 10.0759 192.183 6.86225 188.928 4.56434C186.562 2.896 183.872 2.15197 180.997 2.10904C177.284 2.05181 173.568 2.08901 169.852 2.08615C169.609 2.08615 169.365 2.08615 169.052 2.08615L169.055 2.08901Z" fill="#ED583B" />
              <path d="M115.493 14.6488H117.467C117.478 14.8749 117.499 15.0695 117.499 15.2641C117.499 18.4348 117.493 21.6026 117.51 24.7733C117.51 25.1997 117.362 25.4744 117.041 25.7406C114.725 27.6579 111.997 28.5908 109.041 28.8827C105.42 29.2375 101.948 28.7138 98.8029 26.7994C94.6667 24.284 92.4 20.6096 92 15.8507C91.7043 12.3251 92.4087 9.02566 94.5304 6.09532C97.029 2.64417 100.496 0.752614 104.71 0.183145C108.449 -0.323368 112.041 0.183145 115.322 2.13479C116.133 2.61841 116.858 3.24225 117.693 3.85465C117.194 4.37833 116.771 4.82189 116.325 5.2912C114.907 3.98628 113.357 2.99901 111.528 2.51539C107.267 1.3879 103.151 1.67693 99.4551 4.1866C95.2319 7.05398 93.6406 11.1748 94.1449 16.1083C94.7478 22.0233 99.8377 26.6992 106.148 27.0283C109.304 27.1943 112.281 26.6992 114.939 24.8821C115.348 24.6016 115.525 24.3098 115.519 23.8061C115.493 20.9988 115.507 18.1887 115.507 15.3814C115.507 15.1467 115.507 14.9121 115.507 14.6459L115.493 14.6488Z" fill="#ED583B" />
              <path d="M142.171 18.7896C144.597 22.132 146.974 25.4029 149.435 28.7911C148.606 28.7911 147.901 28.8169 147.203 28.7711C147.035 28.7596 146.852 28.5336 146.73 28.3676C144.638 25.5002 142.548 22.63 140.478 19.7454C140.206 19.3677 139.936 19.2818 139.472 19.2904C136.33 19.362 133.191 19.3877 130.049 19.4278C129.725 19.4306 129.4 19.4278 129 19.4278V28.7396H126.896V17.602C127.156 17.602 127.394 17.602 127.635 17.602C130.797 17.602 133.962 17.6478 137.125 17.582C138.481 17.5534 139.867 17.4303 141.18 17.1156C145.012 16.1941 147.064 13.2266 146.817 9.3433C146.51 4.48422 143.041 2.47247 139.325 2.2464C135.461 2.01175 131.574 2.12335 127.699 2.08329C127.435 2.08329 127.174 2.08329 126.872 2.08329V0.240382C127.006 0.22035 127.104 0.194595 127.2 0.194595C131.139 0.22035 135.078 0.206042 139.014 0.297615C140.864 0.34054 142.641 0.829883 144.275 1.72272C146.87 3.13924 148.443 5.27117 148.841 8.18147C149.223 10.9916 148.783 13.6215 146.907 15.8908C145.835 17.19 144.423 18.0084 142.841 18.5664C142.649 18.6322 142.455 18.6952 142.168 18.7896H142.171Z" fill="#ED583B" />
              <path d="M74.0232 2.57263C73.7565 3.13638 73.5189 3.64003 73.2551 4.20091C72.9594 4.03207 72.7044 3.87754 72.4435 3.73732C68.8261 1.76851 65.0203 1.22765 61.0522 2.44672C58.1247 3.34528 56.6638 5.80058 57.1826 8.63934C57.4116 9.8956 58.1334 10.8628 59.2145 11.4352C60.458 12.0934 61.7942 12.6199 63.1421 13.0434C65.5073 13.7875 67.9218 14.3827 70.2986 15.0924C71.6957 15.5102 72.8406 16.3515 73.8232 17.4017C75.4116 19.0987 75.6928 22.092 74.5044 24.47C73.4261 26.6334 71.5508 27.8439 69.2841 28.4048C64.7565 29.5237 60.3768 29.1316 56.2957 26.7507C55.6522 26.3759 55.0986 25.855 54.4986 25.4058C54.2348 25.2083 54.229 25.0051 54.4145 24.7419C54.6667 24.3842 54.8841 24.0036 55.1073 23.6487C59.0087 26.9997 63.4986 27.738 68.371 26.7622C70.2899 26.3787 71.8638 25.3972 72.716 23.5714C73.6928 21.4767 73.0551 19.1702 71.1855 17.7852C69.829 16.7807 68.2232 16.383 66.6377 15.9394C64.4261 15.3213 62.2029 14.7318 59.9971 14.0908C59.4377 13.9277 58.9044 13.6501 58.3826 13.3782C53.5131 10.8256 54.2493 4.28104 58.058 1.8286C59.7305 0.749757 61.5739 0.251829 63.5247 0.0858532C67.0319 -0.21462 70.3479 0.40922 73.4029 2.18631C73.5942 2.29791 73.7797 2.42096 74.0261 2.57549L74.0232 2.57263Z" fill="#ED583B" />
              <path d="M23.0232 28.7768C23.1536 28.4706 23.2406 28.2531 23.3391 28.0442C27.5652 19.0157 31.7971 9.98718 36.0029 0.950073C36.2754 0.366295 36.6116 0.237521 37.229 0.174565C38.2232 0.0772684 38.6232 0.489346 39.0116 1.32781C43.1449 10.2447 47.3246 19.1387 51.4899 28.0413C51.5884 28.2531 51.6754 28.4706 51.8058 28.7711C51.0783 28.7711 50.429 28.8054 49.7913 28.7482C49.629 28.7339 49.4435 28.4534 49.3536 28.2588C47.2754 23.7947 45.2058 19.3276 43.1362 14.8577C41.3304 10.9544 39.5246 7.05112 37.7188 3.14782C37.6348 2.96754 37.542 2.79012 37.4029 2.51254C37.2725 2.76722 37.1739 2.94751 37.087 3.13638C33.2638 11.4209 29.4319 19.6996 25.6319 27.9956C25.3536 28.5994 25.0522 28.8827 24.371 28.7882C23.9565 28.731 23.5304 28.7768 23.0261 28.7768H23.0232Z" fill="#ED583B" />
              <path d="M82.4899 0.231796H84.5015V28.7339H82.4899V0.231796Z" fill="#ED583B" />
              <path d="M158.846 28.7625H156.832V0.231796H158.846V28.7625Z" fill="#ED583B" />
            </g>
            <defs>
              <clipPath id="clip0_459_415">
                <rect width="196" height="29" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div className="   col-span-9 sm:col-span-8 lg:col-span-12 ">
          <ul className='inline-flex w-full justify-end ' >
            <li>
              <h2 className='f-f-sm sm:text-xl text-tiny text-black mt-3 sm:mt-2 ' >
                Bessie Cooper
              </h2>

            </li>
            <li className=' ml-4' >
              <img alt='' src={Esgridman} />
            </li>
            <li className=' sm:ml-4 mr-6 lg:mr-0' >
              <svg className='w-[44px] h-[46px] ' viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 34.3056C22.42 34.2955 22.823 34.131 23.1377 33.8413C23.4525 33.5515 23.6588 33.1551 23.72 32.7222H20.2133C20.2763 33.1669 20.4922 33.5726 20.8209 33.8638C21.1495 34.1551 21.5685 34.3121 22 34.3056Z" fill="black" />
                <path d="M31.6733 29.8264C31.0305 29.2294 30.4676 28.545 30 27.7917C29.4895 26.7518 29.1835 25.6161 29.1 24.4514V21.0208C29.0973 20.6041 29.0616 20.1884 28.9933 19.7778C28.4686 19.6685 27.9643 19.4715 27.5 19.1944C27.677 19.7881 27.7669 20.4062 27.7667 21.0278V24.4583C27.8484 25.8792 28.2236 27.2649 28.8667 28.5208C29.3269 29.2806 29.8731 29.98 30.4933 30.6042H13.42C14.0403 29.98 14.5864 29.2806 15.0467 28.5208C15.6897 27.2649 16.065 25.8792 16.1467 24.4583V21.0208C16.1432 20.2171 16.2919 19.4206 16.5843 18.6769C16.8767 17.9331 17.3071 17.2568 17.8508 16.6866C18.3945 16.1163 19.0409 15.6634 19.7529 15.3538C20.4648 15.0441 21.2285 14.8838 22 14.8819C23.1292 14.8829 24.233 15.2307 25.1733 15.8819C25.0697 15.4854 25.0115 15.0775 25 14.6667V14.2292C24.3039 13.8725 23.5561 13.6378 22.7867 13.5347V12.6597C22.7867 12.4138 22.6929 12.178 22.526 12.0042C22.3591 11.8303 22.1327 11.7326 21.8967 11.7326C21.6606 11.7326 21.4343 11.8303 21.2673 12.0042C21.1004 12.178 21.0067 12.4138 21.0067 12.6597V13.5694C19.2838 13.8226 17.7071 14.7165 16.5675 16.0861C15.4279 17.4556 14.8025 19.2084 14.8067 21.0208V24.4514C14.7232 25.6161 14.4172 26.7518 13.9067 27.7917C13.4473 28.5433 12.8935 29.2276 12.26 29.8264C12.1889 29.8915 12.1319 29.9716 12.0928 30.0614C12.0537 30.1512 12.0335 30.2486 12.0333 30.3472V31.2917C12.0333 31.4758 12.1036 31.6525 12.2286 31.7827C12.3536 31.9129 12.5232 31.9861 12.7 31.9861H31.2333C31.4102 31.9861 31.5797 31.9129 31.7047 31.7827C31.8298 31.6525 31.9 31.4758 31.9 31.2917V30.3472C31.8999 30.2486 31.8796 30.1512 31.8405 30.0614C31.8014 29.9716 31.7445 29.8915 31.6733 29.8264Z" fill="black" />
                <path d="M30 18.1389C31.841 18.1389 33.3333 16.5843 33.3333 14.6667C33.3333 12.749 31.841 11.1944 30 11.1944C28.1591 11.1944 26.6667 12.749 26.6667 14.6667C26.6667 16.5843 28.1591 18.1389 30 18.1389Z" fill="#ED583B" />
              </svg>

            </li>
            <li className=' ml-4 mt-3 relative lg:hidden ' >
              <Navbar />
            </li>
          </ul>
        </div>
      </div>


    </div>
  );
}
