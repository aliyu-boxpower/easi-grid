// import { useEffect, useState } from "react";
import Sidebardata from './Sideebar';
import Header from './header';
import Hero from './Hero';


export default function Index() {
    return (
        <>
            <div className='grid grid-cols-12  ' >
                <div className=' lg:col-span-2'>
                    <Sidebardata />
                </div>
                <div className=" transition-none col-span-12 lg:col-span-12 mr-3  ">
                    <div className=' w-[82%] sm:w-[92%] ml-auto ' >
                        <Header />
                        <Hero />

                    </div>
                </div>
            </div>
        </>
    )
}
