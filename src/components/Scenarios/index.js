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
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function Index() {
    const user = useSelector((state) => state.user.profile);
    const navigate = useNavigate();
    const { site_id } = useParams();
    const [ site, setSite ] = React.useState({});

    React.useEffect(() => {
        fetch(`${Config.API.URL}/sites/${site_id}`, {
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
        
    }, [site_id, user, navigate]);

    const _onDelete = () => {
        console.log("site:", site);

        swal({
            title: `Are you sure?`,
            text: `You want to delete "${site.site_name}"? because once deleted, you will not be able to recover this site!`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {

                fetch(`${Config.API.URL}/sites/${site.id}`, {
                    method: 'DELETE',
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
                    console.log('res:', res);
              
                    // if request is succesful, alert user that project has been cloned
                    if (res.status) {
                        
                        navigate(`/project/view/${site.project_id}`);
                        //swal(`The "${site.site_name}" site has been successfully deleted!`, { icon: "success" });
              
                    } else {
                      swal("Oh no!", res.message, "error");
                    }
                }).catch((error) => {
                    console.log('Error: ', error);
                    
                    swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
                });

                // swal("Poof! Your imaginary file has been deleted!", {
                //     icon: "success",
                // });
            }
        });
    }

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
                        <Projectsite onDelete={_onDelete} scenarios={site?.scenarios} />
                        { site ?
                            <>
                                <Actioncard site={site} />
                                <ElectricloadCrd site={site} />
                            </>
                        : null }
                    </div>
                </div>
            </div>
        </>
    )
}
