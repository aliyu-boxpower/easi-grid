import React, { useState } from 'react';
import Sidebardata from '../home/Sideebar'
import Header from '../home/header'
import Hero from './Hero'
import Actioncard from './Actioncard'
import SystemArchitecture from './SystemArchitecture'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Config from '../../utils/Config';

export default function Index() {
    const { scenario_id } = useParams();
    const user = useSelector((state) => state.user.profile);
    const navigate = useNavigate();
    const [ scenario, setScenario ] = React.useState({});

    React.useEffect(() => {
        fetch(`${Config.API.URL}/scenarios/${scenario_id}`, {
            method: 'GET',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
        }).then((res) => {
            // if 401 error (unauthenticated user, then log user out)
            if ((res.status) === 401) {
                console.log("401 Error: Unauthenticated");

                localStorage.removeItem('user');
                navigate('/login');
            }
            return res;
        }).then((res) => res.json()).then( async (res) => {
            console.log('res.scenario:', res.data);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                setScenario(res.data);

            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
        });
        
    }, [scenario_id, user, navigate]);
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
                        <Actioncard scenario={scenario} />
                        <SystemArchitecture scenario={scenario} />
                    </div>
                </div>
            </div>
        </>
    )
}
