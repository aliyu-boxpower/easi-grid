import React from 'react';

import { useParams } from 'react-router-dom';

import Config from '../../utils/Config';

import Sidebardata from '../home/Sideebar';
import Header from '../home/header';
import Hero from './Hero';
import Projectsite from './Projectsite';
import Actioncard from './Actioncard';
import ElectricloadCrd from './ElectricloadCrd';
import { useSelector } from 'react-redux';

export default function Index() {
    const user = useSelector((state) => state.user.profile);
    const { site_id } = useParams();
    const [ site, setSite ] = React.useState({});
    // const [ scenarios, setScenarios ] = React.useState([]);

    React.useEffect(() => {
        // const token = localStorage.getItem('token');

        fetch(`${Config.API.URL}/sites/${site_id}`, {
            method: 'GET',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
        }).then((res) => {
            // if 401 error (unauthenticated user, then log user out)
            if ((res.status) === 401) {
                console.log("401 Error: Unauthenticated");

                //localStorage.removeItem('token');
                //localStorage.removeItem('user');
                //history.push('/login');
            }
            return res;
        }).then((res) => res.json()).then( async (res) => {
            //console.log('res.site:', res.data);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                setSite(res.data);
                
                // setScenarios(res.data.data);

            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
        });
        
    }, [site_id, user]);

    if (!site) {
        <p>Loading...</p>
    }

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
                        <Projectsite scenarios={site?.scenarios} />
                        <Actioncard site={site} />
                        <ElectricloadCrd site={site} />
                    </div>
                </div>
            </div>
        </>
    )
}
