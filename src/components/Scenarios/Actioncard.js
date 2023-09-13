import React, { Fragment, useRef, useState, useEffect } from "react";

import { Dialog, Transition } from '@headlessui/react';
import { useSelector } from "react-redux";
import Config from "../../utils/Config";

import Dilogbox from '../NewProjectForm/Dilogbox';

export default function Actioncard(props) {
       const { site } = props;
       
       const user = useSelector((state) => state.user.profile);

       const [ editDesignParametersModel, setEditDesignParametersModel ] = useState(false);
       const [ editSiteInformationModel, setEditSiteInformationModel ] = useState(false);
       const [ editSiteConditionsModel, setEditSiteConditionsModel ] = useState(false);
       
       const cancelButtonRef = useRef(null);

       const [ minimumTemperature, setMinimumTemperature ] = React.useState('');
       const [ maximumTemperature, setMaximumTemperature ] = React.useState('');
       const [ minimumHumidity, setMinimumHumidity ] = React.useState('');
       const [ maximumHumidity, setMaximumHumidity ] = React.useState('');
       const [ snowLoad, setSnowLoad ] = React.useState('');
       const [ windSpeed, setWindSpeed ] = React.useState('');
       const [ soilType, setSoilType ] = React.useState('');
       const [ spectralResponseShort, setSpectralResponseShort ] = React.useState('');
       const [ spectralResponseSecond, setSpectralResponseSecond ] = React.useState('');
       const [ seismicImportanceFactor, setSeismicImportanceFactor ] = React.useState('');
       const [ seismicSiteClass, setSeismicSiteClass ] = React.useState('');
       const [ designSpectralResponseDS, setDesignSpectralResponseDS ] = React.useState('');
       const [ designSpectralResponseD1, setDesignSpectralResponseD1 ] = React.useState('');
       const [ seismicDesignCategory, setSeismicDesignCategory ] = React.useState('');

       const [ siteName, setSiteName ] = React.useState("");
       const [ siteContacts, setSiteContacts ] = React.useState(site?.contacts ? site?.contacts : []);
       const [ siteAddress, setSiteAddress ] = React.useState("");
       const [ GPSCoordinates, setGPSCoordinates ] = React.useState("");
       const [ renewableFractionTarget, setRenewableFractionTarget ] = React.useState("");

       const [ foundationType, setFoundationType ] = React.useState(site?.foundation_type);
       const [ additionalFoundationRequirements, setAdditionalFoundationRequirements ] = React.useState(site?.foundation_requirements);
       const [ serviceVoltage, setServiceVoltage ] = React.useState(site?.service_voltage);
       const [ connectionType, setConnectionType ] = React.useState(site?.connection_type);

       // const [ PCCToTransformerType, setPCCToTransformerType ] = React.useState('');
       // const [ PCCToTransformerInstall, setPCCToTransformerInstall ] = React.useState('Existing');
       // const [ PCCToTransformerDistanceFeet, setPCCToTransformerDistanceFeet] = React.useState('');
       // const [ transformerToMeterType, setTransformerToMeterType ] = React.useState('');
       // const [ transformerToMeterInstall, setTransformerToMeterInstall ] = React.useState('Exist');
       // const [ transformerToMeterDistanceFeet, setTransformerToMeterDistanceFeet] = React.useState('');
       // const [ clickupSpaces, setClickupSpaces ] = React.useState('');
       // const [ PSAContact, setPSAContact ] = React.useState('');
       // const [ consultingContact, setConsultingContact ] = React.useState('');
       // const [ projectSharepoint, setProjectSharepoint ] = React.useState('');
       // const [ invoices, setInvoices ] = React.useState('');
       // const [ projectBOMWorksheet, setProjectBOMWorksheet ] = React.useState('');
       // const [ projectPricingWorksheet, setProjectPricingWorksheet ] = React.useState('');
       // const [ projectSchedule, setProjectSchedule ] = React.useState('');
       // const [ assumptionsAndExclusions, setAssumptionsAndExclusions ] = React.useState('');

       useEffect(() => {
              setMinimumTemperature(site?.location_minimum_temperature)
              setMaximumTemperature(site?.location_maximum_temperature)
              setMinimumHumidity(site?.location_minimum_humidity)
              setMaximumHumidity(site?.location_maximum_humidity)
              setSnowLoad(site?.snow_load)
              setWindSpeed(site?.wind_speed)
              setSoilType(site?.soil_type)
              setSpectralResponseShort(site?.seismic_spectral_response_short)
              setSpectralResponseSecond(site?.seismic_spectral_response_second)
              setSeismicImportanceFactor(site?.seismic_importance_factor)
              setSeismicSiteClass(site?.seismic_site_class)
              setDesignSpectralResponseDS(site?.design_spectral_response_short)
              setDesignSpectralResponseD1(site?.design_spectral_response_second)
              setSeismicDesignCategory(site?.seismic_design_category)

              setSiteName(site?.site_name)
              setSiteAddress(site?.site_address)
              setGPSCoordinates(site?.site_gps)
              setRenewableFractionTarget(site?.target_renewable)

              setFoundationType(site?.foundation_type)
              setAdditionalFoundationRequirements(site?.foundation_requirements)
              setServiceVoltage(site?.service_voltage)
              setConnectionType(site?.connection_type)

              if (site?.contacts) {
                     setSiteContacts(site?.contacts)
              }

              console.log("site:", site);
       }, [site]);


       const _onReceiveContact = (contacts) => {
              setSiteContacts(contacts);
              // console.log('contacts:', contacts);
       }

       const editSiteConditions = () => {
              const payload = {
                     ...site,
                     "additional_links": site?.additional_links ? site?.additional_links : [],
                     "preferred_unloading_method": site?.preferred_unloading_method ? site?.preferred_unloading_method : "Nill",
                     "foundation_type": foundationType,
                     "foundation_requirements": additionalFoundationRequirements,
                     "service_voltage": serviceVoltage,
                     "connection_type": connectionType,
              }
              console.log("payload:", payload);
              const url   = `${Config.API.URL}/sites/${site.id}`;
          
              console.log('url:', url);
          
              fetch(url, {
                     method: 'PATCH',
                     headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                     body: JSON.stringify(payload),
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
                     console.log('res:', res);
              
                     // if request is succesful, alert user that project has been cloned
                     if (res.status) {
                            setEditSiteConditionsModel(false);
                     } else {
                            // swal("Oh no!", res.message, "error");
                     }
              }).catch((error) => {
                     console.log('Error: ', error);
                     
                     //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
              });
       }

       const editSiteInformation = () => {
              const site_contacts = [];
              for (let i = 0; i < siteContacts.length; i++) {
                const contact = siteContacts[i];
                site_contacts.push(contact.id);
              }
              const payload = {
                     ...site,
                     "additional_links": site?.additional_links ? site?.additional_links : [],
                     "preferred_unloading_method": site?.preferred_unloading_method ? site?.preferred_unloading_method : "Nill",
                     "site_name": siteName,
                     "site_address": siteAddress,
                     "site_gps": GPSCoordinates, // "39.2216489,-121.0130471",
                     "site_contacts": site_contacts,
                     "target_renewable": renewableFractionTarget,
              }
              console.log("payload:", payload);
              const url   = `${Config.API.URL}/sites/${site.id}`;
          
              console.log('url:', url);
          
              fetch(url, {
                     method: 'PATCH',
                     headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                     body: JSON.stringify(payload),
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
                     console.log('res:', res);
              
                     // if request is succesful, alert user that project has been cloned
                     if (res.status) {
                            setEditSiteInformationModel(false);
                     } else {
                            // swal("Oh no!", res.message, "error");
                     }
              }).catch((error) => {
                     console.log('Error: ', error);
                     
                     //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
              });
       }

       const editDesignParameters = () => {
              // const site_contacts = [];
              // for (let i = 0; i < siteContacts.length; i++) {
              //   const contact = siteContacts[i];
              //   site_contacts.push(contact.id);
              // }
              const payload = {
                     ...site,
                     "additional_links": site?.additional_links ? site?.additional_links : [],
                     "preferred_unloading_method": site?.preferred_unloading_method ? site?.preferred_unloading_method : "Nill",
                     "location_minimum_temperature": minimumTemperature,
                     "location_maximum_temperature": maximumTemperature,
                     "location_minimum_humidity": minimumHumidity,
                     "location_maximum_humidity": maximumHumidity,
                     "wind_speed": windSpeed,
                     "snow_load": snowLoad,
                     "soil_type": soilType,
                     "seismic_spectral_response_short": spectralResponseShort,
                     "seismic_spectral_response_second": spectralResponseSecond,
                     "seismic_importance_factor": seismicImportanceFactor,
                     "seismic_site_class": seismicSiteClass,
                     "design_spectral_response_short": designSpectralResponseD1,
                     "design_spectral_response_second": designSpectralResponseDS,
                     "seismic_design_category": seismicDesignCategory,
              }
              console.log("payload:", payload);
              const url   = `${Config.API.URL}/sites/${site.id}`;
          
              console.log('url:', url);
          
              fetch(url, {
                     method: 'PATCH',
                     headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
                     body: JSON.stringify(payload),
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
                     console.log('res:', res);
              
                     // if request is succesful, alert user that project has been cloned
                     if (res.status) {
                            setEditDesignParametersModel(false);
                     } else {
                            // swal("Oh no!", res.message, "error");
                     }
              }).catch((error) => {
                     console.log('Error: ', error);
                     
                     //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
              });
       }

       return (
              <>
                     <div className=' w-11/12 lg:w-full ml-auto mr-auto ' >

                            <div className="grid grid-cols-12 mt-5 gap-4  ">
                                   <div className="   col-span-12 sm:col-span-6">
                                          {/* crd started */}
                                          <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] relative' >
                                                 <button  onClick={() => setEditDesignParametersModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                 </button>
                                                 {/* <button type='button' onClick={() => setEditDesignParametersModel(true)} style={{ position: "absolute", top: 10, right: 10 }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                               <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                                        </svg>
                                                 </button> */}
                                                 <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Design Parameters</h2>
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Minimum Temperature (C) <span className=' float-right text-black ' >{ site?.location_minimum_temperature }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Maximum Temperature (C) <span className=' float-right text-black ' >{ site?.location_maximum_temperature }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Minimum Humidity (%) <span className=' float-right text-black ' >{ site?.location_minimum_humidity }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Maximum Humidity (%) <span className=' float-right text-black ' >{ site?.location_maximum_humidity }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Show Load (lb/sqft)<span className=' float-right text-black ' >{ site?.snow_load }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Wind Speed (mph)<span className=' float-right text-black ' >{ site?.wind_speed }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Soil Type<span className=' float-right text-black ' >{ site?.soil_type }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Spectral Response (Short, S/S)<span className=' float-right text-black ' >{ site?.seismic_spectral_response_short }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Spectral Response (1 Sec, S/1)<span className=' float-right text-black ' >{ site?.seismic_spectral_response_second }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Importance Factor<span className=' float-right text-black ' >{ site?.seismic_importance_factor }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Site Class<span className=' float-right text-black ' >{ site?.seismic_site_class }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Design Spectral Response (S/DS)<span className=' float-right text-black ' >{ site?.design_spectral_response_short }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Design Spectral Response (S/D1)<span className=' float-right text-black ' >{ site?.design_spectral_response_second }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-2  ' >Seismic Design Category<span className=' float-right text-black ' >{ site?.seismic_design_category }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                          </div>
                                   </div>

                                   {/* second grid started */}
                                   <div className="   col-span-12 sm:col-span-6">
                                          {/* crd started */}
                                          <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] '  style={{ position: "relative" }} >
                                                 <button type='button' onClick={() => setEditSiteInformationModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                 </button>
                                                 <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Information</h2>
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Name<span className=' float-right text-black ' >{ site?.site_name }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Contacts<span className=' float-right text-black ' >{ site?.contacts?.map((contact, i) => <span key={i}>{ contact.first_name } { contact.last_name }, </span>) }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Site Address <span className=' float-right text-black ' >{ site?.site_address }<span className='hidden  2xl:contents ' > CA 9521 </span> </span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >GPS Coordinates<span className=' float-right text-black ' >{ site?.site_gps }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Renewable Fraction Target (%)<span className=' float-right text-black ' >{ site?.target_renewable }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>

                                          </div>

                                          {/* crd started */}
                                          <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-[18px] ' style={{ position: "relative" }} >
                                                 <button type='button' onClick={() => setEditSiteConditionsModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                                                        Edit
                                                 </button>
                                                 <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Site Conditions</h2>
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Foundation Type<span className=' float-right text-black ' >{ site?.foundation_type }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Additional Foundation Requirements<span className=' float-right text-black ' >{ site?.foundation_requirements }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Service Voltage<span className=' float-right text-black ' >{ site?.service_voltage }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                                 {/* start */}
                                                 <h3 className='  f-f-r text-lg text-black-vlight mt-[18px]  ' >Connection Type<span className=' float-right text-black ' >{ site?.connection_type }</span> </h3>
                                                 <div className=' border border-white-vlight my-1 ' ></div>
                                          </div>
                                   </div>
                                   {/* second grid ended */}
                            </div>
                     </div>
                     
                     <Transition.Root show={editSiteConditionsModel} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditSiteConditionsModel}>
                                   <Transition.Child
                                          as={Fragment}
                                          enter="ease-out duration-300"
                                          enterFrom="opacity-0"
                                          enterTo="opacity-100"
                                          leave="ease-in duration-200"
                                          leaveFrom="opacity-100"
                                          leaveTo="opacity-0"
                                   >
                                          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                   </Transition.Child>

                                   <div className="fixed inset-0 z-10 overflow-y-auto">
                                          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                 <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                 >
                                                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                               <div className="sm:items-start">
                                                                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                                      </div> */}
                                                                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                                             <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                                    Edit Site Conditions
                                                                             </Dialog.Title>
                                                                             <div className="mt-2" style={{ width: "100%" }}>
                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Foundation Type</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="text" onChange={e => setFoundationType(e.target.value)} value={foundationType} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>


                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Additional Foundation Requirements</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="text" onChange={e => setAdditionalFoundationRequirements(e.target.value)} value={additionalFoundationRequirements} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Service Voltage</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setServiceVoltage(e.target.value)} value={serviceVoltage} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Connection Type</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="text" onChange={e => setConnectionType(e.target.value)} value={connectionType} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                               <button
                                                                      type="button"
                                                                      className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                                                                      onClick={editSiteConditions}
                                                               >
                                                                      Save
                                                               </button>
                                                               <button
                                                                      type="button"
                                                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                      onClick={() => setEditSiteConditionsModel(false)}
                                                                      ref={cancelButtonRef}
                                                               >
                                                                      Cancel
                                                               </button>
                                                        </div>
                                                        </Dialog.Panel>
                                                 </Transition.Child>
                                          </div>
                                   </div>
                            </Dialog>
                     </Transition.Root>

                     <Transition.Root show={editSiteInformationModel} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditSiteInformationModel}>
                                   <Transition.Child
                                          as={Fragment}
                                          enter="ease-out duration-300"
                                          enterFrom="opacity-0"
                                          enterTo="opacity-100"
                                          leave="ease-in duration-200"
                                          leaveFrom="opacity-100"
                                          leaveTo="opacity-0"
                                   >
                                          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                   </Transition.Child>

                                   <div className="fixed inset-0 z-10 overflow-y-auto">
                                          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                 <Transition.Child
                                                        as={Fragment}
                                                        enter="ease-out duration-300"
                                                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                        leave="ease-in duration-200"
                                                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                 >
                                                 <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                               <div className="sm:items-start">
                                                                      {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                                      </div> */}
                                                                      <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                                             <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                                    Edit Site Information
                                                                             </Dialog.Title>
                                                                             <div className="mt-2" style={{ width: "100%" }}>
                                                                                           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                  <div className="col-span-full">
                                                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Site Name</label>
                                                                                                         <div className="mt-0">
                                                                                                                <input type="text" onChange={e => setSiteName(e.target.value)} value={siteName} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>

                                                                                           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                  <div className="col-span-full">
                                                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Site Contacts</label>
                                                                                                         <div className="mt-0">
                                                                                                                { site?.contacts?.length ?
                                                                                                                       <div  style={{ display: "inline-block", verticalAlign: "middle", width: "55%" }}>
                                                                                                                              { site?.contacts?.map((contact, i) => <span key={i}>{contact.first_name}, </span> ) }
                                                                                                                       </div>
                                                                                                                : null }
                                                                                                                
                                                                                                                <div style={{ display: "inline-block", verticalAlign: "middle", width: "45%" }}>
                                                                                                                       <Dilogbox onReceiveContact={_onReceiveContact} />
                                                                                                                </div>
                                                                                                                {/* <input type="number" onChange={e => setMaximumTemperature(e.target.value)} value={maximumTemperature} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>

                                                                                           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                  <div className="col-span-full">
                                                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Site Address</label>
                                                                                                         <div className="mt-0">
                                                                                                                <input type="text" onChange={e => setSiteAddress(e.target.value)} value={siteAddress} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>

                                                                                           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                  <div className="col-span-full">
                                                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">GPS Coordinates</label>
                                                                                                         <div className="mt-0">
                                                                                                                <input type="text" onChange={e => setGPSCoordinates(e.target.value)} value={GPSCoordinates} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>

                                                                                           <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                  <div className="col-span-full">
                                                                                                         <label className="block text-sm font-medium leading-6 text-gray-900">Renewable Fraction Target (%)</label>
                                                                                                         <div className="mt-0">
                                                                                                                <input type="number" onChange={e => setRenewableFractionTarget(e.target.value)} value={renewableFractionTarget} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                         </div>
                                                                                                  </div>
                                                                                           </div>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                               <button
                                                                      type="button"
                                                                      className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                                                                      onClick={editSiteInformation}
                                                               >
                                                                      Save
                                                               </button>
                                                               <button
                                                                      type="button"
                                                                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                      onClick={() => setEditSiteInformationModel(false)}
                                                                      ref={cancelButtonRef}
                                                               >
                                                                      Cancel
                                                               </button>
                                                        </div>
                                                        </Dialog.Panel>
                                                 </Transition.Child>
                                          </div>
                                   </div>
                            </Dialog>
                     </Transition.Root>

                     <Transition.Root show={editDesignParametersModel} as={Fragment}>
                            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditDesignParametersModel}>
                            <Transition.Child
                                   as={Fragment}
                                   enter="ease-out duration-300"
                                   enterFrom="opacity-0"
                                   enterTo="opacity-100"
                                   leave="ease-in duration-200"
                                   leaveFrom="opacity-100"
                                   leaveTo="opacity-0"
                            >
                                   <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-10 overflow-y-auto">
                                   <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                          <Transition.Child
                                                 as={Fragment}
                                                 enter="ease-out duration-300"
                                                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                 enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                 leave="ease-in duration-200"
                                                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                          >
                                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                 <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                        <div className="sm:items-start">
                                                               {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                               <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                               </div> */}
                                                               <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                                                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                             Edit Design Parameters
                                                                      </Dialog.Title>
                                                                      <div className="mt-2" style={{ width: "100%" }}>
                                                                             <form >
                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Minimum Temperature (C)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setMinimumTemperature(e.target.value)} value={minimumTemperature} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Maximum Temperature (C)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setMaximumTemperature(e.target.value)} value={maximumTemperature} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Minimum Humidity (%)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setMinimumHumidity(e.target.value)} value={minimumHumidity} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Maximum Humidity (%)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setMaximumHumidity(e.target.value)} value={maximumHumidity} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Snow Load (lb/sqft)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='number' onChange={e => setSnowLoad(e.target.value)} value={snowLoad} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Wind Speed (mph)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='number' onChange={e => setWindSpeed(e.target.value)} value={windSpeed} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Soil Type</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='text' onChange={e => setSoilType(e.target.value)} value={soilType} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Spectral Response (Short, S/S)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='number' onChange={e => setSpectralResponseShort(e.target.value)} value={spectralResponseShort} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Seismic Importance Factor</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='number' onChange={e => setSeismicImportanceFactor(e.target.value)} value={seismicImportanceFactor} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Seismic Site Class</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="text" onChange={e => setSeismicSiteClass(e.target.value)} value={seismicSiteClass} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Spectral Response (1 Sec, S/1)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type='number' onChange={e => setSpectralResponseSecond(e.target.value)} value={spectralResponseSecond} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Design Spectral Response (S/DS)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setDesignSpectralResponseDS(e.target.value)} value={designSpectralResponseDS} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Design Spectral Response (S/D1)</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="number" onChange={e => setDesignSpectralResponseD1(e.target.value)} value={designSpectralResponseD1} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>

                                                                                    <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                           <div className="col-span-full">
                                                                                                  <label className="block text-sm font-medium leading-6 text-gray-900">Seismic Design Category</label>
                                                                                                  <div className="mt-0">
                                                                                                         <input type="text" onChange={e => setSeismicDesignCategory(e.target.value)} value={seismicDesignCategory} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                                                                                  </div>
                                                                                           </div>
                                                                                    </div>
                                                                             </form>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                        <button
                                                               type="button"
                                                               className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 sm:ml-3 sm:w-auto"
                                                               onClick={editDesignParameters}
                                                        >
                                                               Save
                                                        </button>
                                                        <button
                                                               type="button"
                                                               className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                               onClick={() => setEditDesignParametersModel(false)}
                                                               ref={cancelButtonRef}
                                                        >
                                                               Cancel
                                                        </button>
                                                 </div>
                                                 </Dialog.Panel>
                                          </Transition.Child>
                                   </div>
                            </div>
                            </Dialog>
                     </Transition.Root>
              </>
       )
}
