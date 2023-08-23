import React from 'react';
import { useParams } from 'react-router-dom';

import Config from '../../utils/Config';

import Sidebardata from '../home/Sideebar'
import Header from '../home/header'
import Hero from './Hero'
import Projectsite from './Projectsite'
import Projectinformation from './Projectinformation';
import { useSelector } from 'react-redux';

export default function Index () {
    const user = useSelector((state) => state.user.profile);
    // Get the userId param from the URL.
    const { id } = useParams();
    const [ project, setProject ] = React.useState(null);

    React.useEffect(() => {
        // const token = localStorage.getItem('token');
        // const url   = `${Config.API.URL}/projects/${id}`;

        // console.log("url:", url);

        fetch(`${Config.API.URL}/projects/${id}`, {
            method: 'GET',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` }
        }).then((res) => {
            // if 401 error (unauthenticated user, then log user out)
            if ((res.status) === 401) {
                console.log("401 Error: Unauthenticated");

                // localStorage.removeItem('token');
                // localStorage.removeItem('user');
                // history.push('/login');
            }
            return res;
        }).then((res) => res.json()).then( async (res) => {
            // console.log('res:', res);

            // if request is succesful, alert user that project has been cloned
            if (res.status) {
                setProject(res.data);
                // setProjects(res.data.data);
                // swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });

            } else {
                //swal("Oh no!", res.message, "error");
            }
        }).catch((error) => {
            console.log('Error: ', error);
            
            //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
        });
        
    }, [id]);

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
                        <Projectsite project={project} />
                        <Projectinformation project={project} />
                    </div>
                </div>
            </div>
        </>
    )
}
