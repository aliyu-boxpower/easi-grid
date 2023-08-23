import React from 'react'
import Sidebardata from '../home/Sideebar'
import Header from '../home/header'
import Hero from './Hero'
import Tableproject from './Tableproject';
import Config from '../../utils/Config';

import { useSelector } from 'react-redux';


export default function Index() {
    
    const [ contacts, setContacts ] = React.useState([]);
    const user = useSelector((state) => state.user.profile);
    React.useEffect(() => {
        
        // const token = localStorage.getItem('token');
        const url   = `${Config.API.URL}/contacts`;

        // console.log('user:', user);

        fetch(url, {
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
            // console.log('res:', res);
            if (res.status) {
                //swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });
                setContacts(res.data.data);   
            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
    }, []);
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
                        <Tableproject contacts={contacts} />
                    </div>
                </div>
            </div>
        </>
    )
}
