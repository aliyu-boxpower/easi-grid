import React, { Fragment, useRef, useState, useEffect } from "react";

import { Dialog, Transition } from '@headlessui/react';
import { useSelector } from "react-redux";
import Config from "../../utils/Config";

export default function ElectricloadCrd(props) {
  const { site } = props;
  const user = useSelector((state) => state.user.profile);
  const [ editElectricLoadModel, setEditElectricLoadModel ] = useState(false);
  const [ editLogisticsModel, setEditLogisticsModel ] = useState(false);
  const [ editPowerDistributionSummaryModel, setEditPowerDistributionSummaryModel ] = useState(false);
  
  const [ averageDailyUsage, setAverageDailyUsage ] = React.useState(site?.average_daily_usage);
  const [ peakDemand, setPeakDemand ] = React.useState(site?.peak_demand);
  const [ averageDemand, setAverageDemand ] = React.useState(site?.average_demand);

  const [ targetDeliveryDate, setTargetDeliveryDate ] = React.useState('');
  const [ equipment, setEquipment ] = React.useState('');
  const [ loadingMethod, setLoadingMethod ] = React.useState('');
  const [ shippingMethod, setShippingMethod ] = React.useState('');
  const [ unloadingMethod, setUnloadingMethod ] = React.useState('');
  const [ systemPlacement, setSystemPlacement ] = React.useState('');
  const [ preferredUnloadingMethod, setPreferredUnloadingMethod ] = React.useState('');
  const [ customerShippingMaxBudget, setCustomerShippingMaxBudget ] = React.useState('');
  const [ miscellaneousItemsBeingShipped, setMiscellaneousItemsBeingShipped ] = React.useState('');

  const [ PCCToTransformerType, setPCCToTransformerType ] = React.useState('');
  const [ PCCToTransformerInstall, setPCCToTransformerInstall ] = React.useState('Existing');
  const [ PCCToTransformerDistanceFeet, setPCCToTransformerDistanceFeet] = React.useState('');
  const [ transformerToMeterType, setTransformerToMeterType ] = React.useState('');
  const [ transformerToMeterInstall, setTransformerToMeterInstall ] = React.useState('Exist');
  const [ transformerToMeterDistanceFeet, setTransformerToMeterDistanceFeet] = React.useState('');

  const cancelButtonRef = useRef(null);
  useEffect(() => {
    setAverageDailyUsage(site?.average_daily_usage)
    setPeakDemand(site?.peak_demand)
    setAverageDemand(site?.average_demand)

    setTargetDeliveryDate(site?.target_delivery_date)
    setEquipment(site?.equipment)
    setLoadingMethod(site?.loading)
    setShippingMethod(site?.shipping)
    setUnloadingMethod(site?.unloading)
    setSystemPlacement(site?.system_placement)
    setPreferredUnloadingMethod(site?.preferred_unloading_method)
    setCustomerShippingMaxBudget(site?.customer_shipping_max_budget)
    setMiscellaneousItemsBeingShipped(site?.miscellaneous_items_being_shipped)

    setPCCToTransformerType(site?.pcc_to_transformer_type)
    setPCCToTransformerInstall(site?.pcc_to_transformer_install)
    setPCCToTransformerDistanceFeet(site?.pcc_to_transformer_distance)

    setTransformerToMeterType(site?.transformer_to_meter_type)
    setTransformerToMeterInstall(site?.transformer_to_meter_install)
    setTransformerToMeterDistanceFeet(site?.transformer_to_meter_distance)

    // console.log("site?.contacts:", site?.contacts);
  }, [site]);

  const editPowerDistributionSummary = () => {
    const payload = {
      ...site,
      "additional_links": site?.additional_links ? site?.additional_links : [],
      "preferred_unloading_method": site?.preferred_unloading_method ? site?.preferred_unloading_method : "Nill",
      "pcc_to_transformer_type": PCCToTransformerType,
      "pcc_to_transformer_install": PCCToTransformerInstall,
      "pcc_to_transformer_distance": PCCToTransformerDistanceFeet,
      "transformer_to_meter_type": transformerToMeterType,
      "transformer_to_meter_install": transformerToMeterInstall,
      "transformer_to_meter_distance": transformerToMeterDistanceFeet,
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
        setEditPowerDistributionSummaryModel(false);
      } else {
        // swal("Oh no!", res.message, "error");
      }
    }).catch((error) => {
      console.log('Error: ', error);
      
      //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
    });
  }

  const editLogistics = () => {
    const payload = {
      ...site,
      "additional_links": site?.additional_links ? site?.additional_links : [],
      "target_delivery_date": targetDeliveryDate,
      "equipment": equipment,
      "loading": loadingMethod,
      "shipping": shippingMethod,
      "unloading": unloadingMethod,
      "system_placement": systemPlacement,
      "preferred_unloading_method": preferredUnloadingMethod,
      "customer_shipping_max_budget": customerShippingMaxBudget,
      "miscellaneous_items_being_shipped": miscellaneousItemsBeingShipped,
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
        setEditLogisticsModel(false);
      } else {
        // swal("Oh no!", res.message, "error");
      }
    }).catch((error) => {
      console.log('Error: ', error);
      
      //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
    });
  }

  const editElectricLoad = () => {
    const payload = {
      ...site,
      "additional_links": site?.additional_links ? site?.additional_links : [],
      "preferred_unloading_method": site?.preferred_unloading_method ? site?.preferred_unloading_method : "Nill",
      "average_daily_usage": averageDailyUsage,
      "peak_demand": peakDemand,
      "average_demand": averageDemand,
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
        setEditElectricLoadModel(false);
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
        {/* crd started */}
        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
          <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Electric Load</h2>
          {/* button started */}
          <button onClick={() => setEditElectricLoadModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
            Edit
          </button>
          {/* buttons ended */}


          <h3 className='  f-f-r text-lg text-black-vlight mt-14  ' >Average Daily Usage (kWh/day) <span className=' float-right text-black ' >{ site?.average_daily_usage }</span> </h3>
          <div className=' border border-white-vlight my-1 ' ></div>
          {/* start */}
          <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Peak  Demand (kW)<span className=' float-right text-black ' >{ site?.peak_demand }</span> </h3>
          <div className=' border border-white-vlight my-1 ' ></div>
          {/* start */}
          <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Average Demand (kW)<span className=' float-right text-black ' >{ site?.average_demand }</span> </h3>
          <div className=' border border-white-vlight my-1 ' ></div>


        </div>
        {/* card ended */}


        <div className="grid grid-cols-12 mt-5 gap-4  ">
          <div className="   col-span-12 sm:col-span-6">
            {/* crd started */}
            <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
              <button type='button' className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white  ">
                Edit
              </button>
              <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Directory of Links</h2>



              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Clickup Spaces <span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >PSA Contact<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Consulting Contact<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Sharepoint<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Invoices<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project  BOM Worksheet<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Pricing Worksheet<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Project Schedule<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Assumptions  & Exclusions<span className=' float-right text-black ' >www.example.com</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>


            </div>
            {/* card ended */}
          </div>
          <div className="   col-span-12 sm:col-span-6">
            {/* crd started */}
            <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] mt-6  relative ' >
              <button type='button' onClick={() => setEditLogisticsModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white">
                Edit
              </button>
              <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Logistics</h2>
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Target Delivery Date<span className=' float-right text-black ' >{ site?.target_delivery_date }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Equipment<span className=' float-right text-black ' >{ site?.equipment }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Loading Method<span className=' float-right text-black ' >{ site?.loading }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Shipping Method<span className=' float-right text-black ' >{ site?.shipping }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Unloading Method<span className=' float-right text-black ' >{ site?.unloading }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >System Placement<span className=' float-right text-black ' >{ site?.system_placement }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Preferred Unloading Method<span className=' float-right text-black ' >{ site?.preferred_unloading_method }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Customer Shipping Max Budget<span className=' float-right text-black ' >${ site?.customer_shipping_max_budget }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>
              {/* start */}
              <h3 className='  f-f-r text-lg text-black-vlight mt-4  ' >Miscellaneous Items  Being Shipped<span className=' float-right text-black ' >{ site?.miscellaneous_items_being_shipped }</span> </h3>
              <div className=' border border-white-vlight my-1 ' ></div>


            </div>
            {/* card ended */}
          </div>

        </div>

        {/* table started */}
        {/* crd started */}
        <div className=' bg-white  shadow-lg p-[20px] rounded-[8px] my-6  relative ' >
          <button type='button' onClick={() => setEditPowerDistributionSummaryModel(true)} className="absolute top-3 right-3 border bg-primary w-[50px] text-center h-[30px] rounded-[15px] f-f-r text-sm text-white">
            Edit
          </button>
          <h2 className=' text-center f-f-sm text-lg text-black my-2  ' >Power Distribution Summary</h2>

          <div className='overflow-x-auto' >


            <table className=' w-full text-left power-table ' >
              <thead>
                <tr>
                  <th className='f-f-r text-lg text-primary' >Service Conductor Path</th>
                  <th className='f-f-r text-lg text-primary' >Type</th>
                  <th className='f-f-r text-lg text-primary' >New/Existing</th>
                  <th className='f-f-r text-lg text-primary' >Distance</th>
                  <th className='f-f-r text-lg text-primary' >Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='f-f-r text-lg text-black-vlight' >PCC to Transformer</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.pcc_to_transformer_type }</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.pcc_to_transformer_install }</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.pcc_to_transformer_distance }</td>
                  <td className='f-f-r text-lg text-black-vlight' >Feet</td>
                </tr>
                <tr>
                  <td className='f-f-r text-lg text-black-vlight' >Transformer to  Meter</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.transformer_to_meter_type }</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.transformer_to_meter_install }</td>
                  <td className='f-f-r text-lg text-black-vlight' >{ site?.transformer_to_meter_distance }</td>
                  <td className='f-f-r text-lg text-black-vlight' >Feet</td>
                </tr>
              </tbody>
              
              
            </table>
          </div>


        </div>
        {/* card ended */}
        {/* table ended */}
      </div>
      <Transition.Root show={editPowerDistributionSummaryModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditPowerDistributionSummaryModel}>
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
                          Edit Power Distribution Summary
                        </Dialog.Title>
                        <div className="mt-2" style={{ width: "100%" }}>
                          <h3 className=" f-f-r text-lg text-black-vlight text-center " >
                            Service Conductor Path <br />
                            (PCC To Transformer)
                          </h3>

                          <div class="mt-0 sm:col-span-12">
                            <label class="block text-sm font-medium leading-6 text-gray-900">Type</label>
                            <div class="mt-0">
                              <select onChange={e => setPCCToTransformerType(e.target.value)} value={PCCToTransformerType}  class="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value=""></option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                                <option value="5">Honda</option>
                              </select>
                            </div>
                          </div>
                          
                          <div class="mt-3 space-y-0">
                            <div class="flex items-center gap-x-3">
                              <input type="radio" checked={PCCToTransformerInstall === "New"} onChange={(e) => setPCCToTransformerInstall(e.target.value)} value="New" name="PCCToTransformerInstall" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label class="block text-sm font-medium leading-6 text-gray-900">New</label>
                            </div>

                            <div class="mt-0 flex items-center gap-x-3">
                              <input type="radio" checked={PCCToTransformerInstall === "Existing"} onChange={(e) => setPCCToTransformerInstall(e.target.value)} value="Existing" name="PCCToTransformerInstall" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label class="block text-sm font-medium leading-6 text-gray-900">Existing</label>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Distance (Feet)</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setPCCToTransformerDistanceFeet(e.target.value)} value={PCCToTransformerDistanceFeet} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <h3 className="mt-10 f-f-r text-lg text-black-vlight text-center " >(Transformer To Meter)</h3>

                          <div class="mt-0 sm:col-span-12">
                            <label class="block text-sm font-medium leading-6 text-gray-900">Type</label>
                            <div class="mt-0">
                              <select onChange={e => setTransformerToMeterType(e.target.value)} value={transformerToMeterType}  class="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value=""></option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                                <option value="3">Citroen</option>
                                <option value="4">Ford</option>
                                <option value="5">Honda</option>
                              </select>
                            </div>
                          </div>
                          
                          <div class="mt-3 space-y-0">
                            <div class="flex items-center gap-x-3">
                              <input type="radio" checked={transformerToMeterInstall === "New"} onChange={(e) => setTransformerToMeterInstall(e.target.value)} value="New" name="transformerToMeterInstall" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label class="block text-sm font-medium leading-6 text-gray-900">New</label>
                            </div>

                            <div class="mt-0 flex items-center gap-x-3">
                              <input type="radio" checked={transformerToMeterInstall === "Existing"} onChange={(e) => setTransformerToMeterInstall(e.target.value)} value="Existing" name="transformerToMeterInstall" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                              <label class="block text-sm font-medium leading-6 text-gray-900">Existing</label>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Distance (Feet)</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setTransformerToMeterDistanceFeet(e.target.value)} value={transformerToMeterDistanceFeet} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                      onClick={editPowerDistributionSummary}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setEditPowerDistributionSummaryModel(false)}
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

      <Transition.Root show={editLogisticsModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditLogisticsModel}>
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
                          Edit Logistics
                        </Dialog.Title>
                        <div className="mt-2" style={{ width: "100%" }}>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Target Delivery Date</label>
                              <div className="mt-0 relative">
                                <input type="date" onChange={e => setTargetDeliveryDate(e.target.value)} value={targetDeliveryDate} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Equipment</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setEquipment(e.target.value)} value={equipment} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Loading Method</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setLoadingMethod(e.target.value)} value={loadingMethod} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Shipping Method</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setShippingMethod(e.target.value)} value={shippingMethod} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Unloading Method</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setUnloadingMethod(e.target.value)} value={unloadingMethod} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">System Placement</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setSystemPlacement(e.target.value)} value={systemPlacement} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Preferred Unloading Method</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setPreferredUnloadingMethod(e.target.value)} value={preferredUnloadingMethod} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Customer Shipping Max Budget</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setCustomerShippingMaxBudget(e.target.value)} value={customerShippingMaxBudget} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Miscellaneous Items Being Shipped</label>
                              <div className="mt-0">
                                <input type="text" onChange={e => setMiscellaneousItemsBeingShipped(e.target.value)} value={miscellaneousItemsBeingShipped} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                      onClick={editLogistics}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setLoadingMethod(false)}
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

      <Transition.Root show={editElectricLoadModel} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setEditElectricLoadModel}>
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
                          Edit Logistics
                        </Dialog.Title>
                        <div className="mt-2" style={{ width: "100%" }}>
                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Average Daily Usage</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setAverageDailyUsage(e.target.value)} value={averageDailyUsage} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Peak Demand</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setPeakDemand(e.target.value)} value={peakDemand} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                              <label className="block text-sm font-medium leading-6 text-gray-900">Average Demand</label>
                              <div className="mt-0">
                                <input type="number" onChange={e => setAverageDemand(e.target.value)} value={averageDemand} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                      onClick={editElectricLoad}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setEditElectricLoadModel(false)}
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
