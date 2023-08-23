import React, { useEffect, useState } from 'react';
import Map from './Map';
import Tableproject from './Tableproject';
import { Link } from 'react-router-dom';

import Config from "../../utils/Config";

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"; 

export default function Hero() {
  const navigate = useNavigate();
  const [ projects, setProjects ] = useState([]);
  const [ site_gps, setSite_gps ] = useState([]);
  const user = useSelector((state) => state.user.profile);
  useEffect(() => {
    // console.log("site_gps 2:", site_gps);

    const url   = `${Config.API.URL}/projects`;
    // const url  = `${Config.API.URL}/contacts`;

    // console.log('user:', user);

    fetch(url, {
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
      // console.log('res:', res);

      // if request is succesful, alert user that project has been cloned
      if (res.status) {
        setProjects(res.data.data);
        // swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });

      } else {
        //swal("Oh no!", res.message, "error");
      }
    }).catch((error) => {
      console.log('Error: ', error);
      
      //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
    });
  }, [user, navigate]);
  useEffect(() => {

    fetch(`${Config.API.URL}/sites`, {
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
      // console.log('sites-res:', res);
      if (res.status) {
        const sites = res?.data?.data;
        // const site_gps = [];
        // const site_gps = [
        //   [39.909736, -98.522109],
        //   [40.744656, -74.005966],
        //   [34.052234, -118.243685],
        //   [37.4419, -122.1419],
        //   [-33.92, 151.25],
        //   [-33.890542, 151.274856],
        //   [-33.923036, 151.259052],
        //   [-34.028249, 151.157507],
        //   [-33.80010128657071, 151.28747820854187],
        //   [-33.950198, 151.259302],
        //   [39.2216489, -121.0130471]
        // ]

        for (let i = 0; i < sites.length; i++) {
          const site = sites[i];
          const gps  = site.site_gps.split(",");
          
          const gps_lat = parseFloat(gps[0]); 
          const gps_lng = parseFloat(gps[1]);

          if (!site_gps.find(x => x[0] === gps_lat)) {
            site_gps.push([gps_lat, gps_lng]);
          }

        }

        setSite_gps(site_gps);

      } else {
        //swal("Oh no!", res.message, "error");
      }
    }).catch((error) => {
      console.log('Error: ', error);
      
      //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
    });
  }, [user, navigate]);
  return (
    <div className='bg-white rounded-[8px] p-4 mt-[90px] lg:mt-3 ' >
      <div className="grid grid-cols-12    ">
        <div className="   col-span-12 lg:col-span-6 ">
          <ul className=' inline-flex w-full ' >
            <li className=' mt-3' >
              <h3 className=' text-grey f-f-r text-base  ' >
                Dashboard
              </h3>
            </li>
            <li className=' ml-3 mt-3  ' >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 16.5L13.75 11L8.25 5.5" stroke="#D0D1D2" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </li>
            <li className=' ml-3 mt-3  w-full ' >
              <h3 className=' text-primary f-f-r text-base  ' >
                All Projects and Sites
              </h3>
            </li>

          </ul>

        </div>
        <div className="   col-span-12 lg:col-span-6  ">
          <div className=' lg:float-right ' >
            <ul className=' lg:inline-flex w-full ' >

              <li className=' mt-5 lg:mt-0 ml-3 ' >
                <button className="relative border border-primary w-full lg:w-[186px]  text-center h-[56px] rounded-[8px] f-f-r text-lg text-primary  ">
                  <svg className='absolute left-[6px]' width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 13H13.5V18C13.5 18.2652 13.3946 18.5196 13.2071 18.7071C13.0196 18.8946 12.7652 19 12.5 19C12.2348 19 11.9804 18.8946 11.7929 18.7071C11.6054 18.5196 11.5 18.2652 11.5 18V13H6.5C6.23478 13 5.98043 12.8946 5.79289 12.7071C5.60536 12.5196 5.5 12.2652 5.5 12C5.5 11.7348 5.60536 11.4804 5.79289 11.2929C5.98043 11.1054 6.23478 11 6.5 11H11.5V6C11.5 5.73478 11.6054 5.48043 11.7929 5.29289C11.9804 5.10536 12.2348 5 12.5 5C12.7652 5 13.0196 5.10536 13.2071 5.29289C13.3946 5.48043 13.5 5.73478 13.5 6V11H18.5C18.7652 11 19.0196 11.1054 19.2071 11.2929C19.3946 11.4804 19.5 11.7348 19.5 12C19.5 12.2652 19.3946 12.5196 19.2071 12.7071C19.0196 12.8946 18.7652 13 18.5 13Z" fill="#ED583B" />
                  </svg>

                  New Customer</button>
              </li>
              <li className='mt-5 lg:mt-0 ml-3 ' >
                <Link to="/project/create" >
                  <button className="relative border bg-primary  w-full lg:w-[186px] text-center h-[56px] rounded-[8px] f-f-r text-lg text-white  ">
                    <svg className='absolute left-[6px]' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13H13V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H11V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13Z" fill="white" />
                    </svg>
                    New Project</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* map section started */}
      { site_gps.length ?
        <div className='my-4 '>
          <Map site_gps={site_gps} />
        </div>
      : null }

      {/* map section ended */}

      {/* table  section started */}
      <Tableproject projects={projects} />
      {/* table section ended */}

    </div>
  )
}
