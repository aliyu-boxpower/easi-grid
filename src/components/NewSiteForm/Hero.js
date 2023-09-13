import React from 'react'
import Slectdilog from './Dilogbox';
import { useParams } from 'react-router-dom';

import Dilogbox from '../NewProjectForm/Dilogbox';

import Config from '../../utils/Config';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Hero() {
  const user = useSelector((state) => state.user.profile);
  const navigate = useNavigate();
  const { project_id } = useParams();

  const [ averageDailyUsage, setAverageDailyUsage ] = React.useState('');
  const [ peakDemand, setPeakDemand ] = React.useState('');
  const [ averageDemand, setAverageDemand ] = React.useState('');
  const [ minimumTemperature, setMinimumTemperature ] = React.useState('');
  const [ maximumTemperature, setMaximumTemperature ] = React.useState('');
  const [ minimumHumidity, setMinimumHumidity ] = React.useState('');
  const [ maximumHumidity, setMaximumHumidity ] = React.useState('');
  const [ snowLoad, setSnowLoad ] = React.useState('');
  const [ windSpeed, setWindSpeed ] = React.useState('');
  const [ spectralResponseShort, setSpectralResponseShort ] = React.useState('');
  const [ spectralResponseSecond, setSpectralResponseSecond ] = React.useState('');
  const [ seismicImportanceFactor, setSeismicImportanceFactor ] = React.useState('');
  const [ seismicSiteClass, setSeismicSiteClass ] = React.useState('');
  const [ designSpectralResponseDS, setDesignSpectralResponseDS ] = React.useState('');
  const [ designSpectralResponseD1, setDesignSpectralResponseD1 ] = React.useState('');
  const [ seismicDesignCategory, setSeismicDesignCategory ] = React.useState('');
  const [ siteName, setSiteName ] = React.useState('');
  const [ siteContacts, setSiteContacts ] = React.useState([]);
  const [ siteAddress, setSiteAddress ] = React.useState('');
  const [ GPSCoordinates, setGPSCoordinates ] = React.useState('');
  const [ renewableFractionTarget, setRenewableFractionTarget ] = React.useState('');
  const [ foundationType, setFoundationType ] = React.useState('');
  const [ additionalFoundationRequirements, setAdditionalFoundationRequirements ] = React.useState('');
  const [ serviceVoltage, setServiceVoltage ] = React.useState('');
  const [ connectionType, setConnectionType ] = React.useState('');
  const [ PCCToTransformerType, setPCCToTransformerType ] = React.useState('');
  const [ PCCToTransformerInstall, setPCCToTransformerInstall ] = React.useState('Existing');
  const [ PCCToTransformerDistanceFeet, setPCCToTransformerDistanceFeet] = React.useState('');
  const [ transformerToMeterType, setTransformerToMeterType ] = React.useState('');
  const [ transformerToMeterInstall, setTransformerToMeterInstall ] = React.useState('Exist');
  const [ transformerToMeterDistanceFeet, setTransformerToMeterDistanceFeet] = React.useState('');
  const [ targetDeliveryDate, setTargetDeliveryDate ] = React.useState('');
  const [ equipment, setEquipment ] = React.useState('');
  const [ loadingMethod, setLoadingMethod ] = React.useState('');
  const [ shippingMethod, setShippingMethod ] = React.useState('');
  const [ unloadingMethod, setUnloadingMethod ] = React.useState('');
  const [ systemPlacement, setSystemPlacement ] = React.useState('');
  const [ preferredUnloadingMethod, setPreferredUnloadingMethod ] = React.useState('');
  const [ customerShippingMaxBudget, setCustomerShippingMaxBudget ] = React.useState('');
  const [ miscellaneousItemsBeingShipped, setMiscellaneousItemsBeingShipped ] = React.useState('');
  const [ clickupSpaces, setClickupSpaces ] = React.useState('https://example.com');
  const [ PSAContact, setPSAContact ] = React.useState('https://example.com');
  const [ consultingContact, setConsultingContact ] = React.useState('https://example.com');
  const [ projectSharepoint, setProjectSharepoint ] = React.useState('https://example.com');
  const [ invoices, setInvoices ] = React.useState('https://example.com');
  const [ projectBOMWorksheet, setProjectBOMWorksheet ] = React.useState('https://example.com');
  const [ projectPricingWorksheet, setProjectPricingWorksheet ] = React.useState('https://example.com');
  const [ projectSchedule, setProjectSchedule ] = React.useState('https://example.com');
  const [ assumptionsAndExclusions, setAssumptionsAndExclusions ] = React.useState('https://example.com');

  const _onReceiveContact = (contacts) => {
    setSiteContacts(contacts);
    //console.log('contacts:', contacts);
  }

  const submitSite = () => {
    const site_contacts = [];
    for (let i = 0; i < siteContacts.length; i++) {
      const contact = siteContacts[i];
      site_contacts.push(contact.id);
    }
    const payload = {
      "project_id": project_id,
      "site_name": siteName,
      "site_address": siteAddress,
      "site_gps": GPSCoordinates, // "39.2216489,-121.0130471",
      "site_contacts": site_contacts,
      "target_renewable": renewableFractionTarget,
  
      "target_delivery_date": targetDeliveryDate,
      "equipment": equipment,
      "loading": loadingMethod,
      "shipping": shippingMethod,
      "unloading": unloadingMethod,
      "system_placement": systemPlacement,
      "customer_shipping_max_budget": customerShippingMaxBudget,
      "miscellaneous_items_being_shipped": miscellaneousItemsBeingShipped,

      "location_minimum_temperature": minimumTemperature,
      "location_maximum_temperature": maximumTemperature,
      "location_minimum_humidity": minimumHumidity,
      "location_maximum_humidity": maximumHumidity,
      "wind_speed": windSpeed,
      "snow_load": snowLoad,
      "soil_type": "Soil Type",
      "seismic_spectral_response_short": spectralResponseShort,
      "seismic_spectral_response_second": spectralResponseSecond,
      "seismic_importance_factor": seismicImportanceFactor,
      "seismic_site_class": seismicSiteClass,
      "design_spectral_response_short": designSpectralResponseD1,
      "design_spectral_response_second": designSpectralResponseDS,
      "seismic_design_category": seismicDesignCategory,

      "average_daily_usage": averageDailyUsage,
      "peak_demand": peakDemand,
      "average_demand": averageDemand,

      "foundation_type": foundationType,
      "foundation_requirements": additionalFoundationRequirements,
      "service_voltage": serviceVoltage,
      "connection_type": connectionType,
      "pcc_to_transformer_type": PCCToTransformerType,
      "pcc_to_transformer_install": PCCToTransformerInstall,
      "pcc_to_transformer_distance": PCCToTransformerDistanceFeet,
      "transformer_to_meter_type": transformerToMeterType,
      "transformer_to_meter_install": transformerToMeterInstall,
      "transformer_to_meter_distance": transformerToMeterDistanceFeet,
      "additional_links": [
        { "name": "Clickup Space", "value": "https://example.com" },
        { "name": "PSA Contract", "value": "https://example.com" },
        { "name": "Consulting Contract", "value": "https://example.com" },
        { "name": "Project Sharepoint", "value": "https://example.com" },
        { "name": "Invoices", "value": "https://example.com" },
        { "name": "Project BOM Worksheet", "value": "https://example.com" },
        { "name": "Project Pricing Worksheet", "value": "https://example.com" },
        { "name": "Project Schedule", "value": "https://example.com" },
        { "name": "Assumptions & Exclusions", "value": "https://example.com" },
      ],

      // "clickup_space": clickupSpaces,
      // "psa_contract": PSAContact,
      // "consulting_contract": consultingContact,
      // "project_sharepoint": projectSharepoint,
      // "invoices": invoices,
      // "project_bom_worksheet": projectBOMWorksheet,
      // "project_pricing_worksheet": projectBOMWorksheet,
      // "project_schedule": projectSchedule,
      // "assumptions_and_exclusions": assumptionsAndExclusions
    }

    // console.log("payload:", payload);

    // const token = localStorage.getItem('token');
    const url   = `${Config.API.URL}/sites`;

    // console.log('url:', url);

    // console.log(`Bearer ${token}`);

    fetch(url, {
      method: 'POST',
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
      // console.log('res:', res);

      // if request is succesful, alert user that project has been cloned
      if (res.status) {
        // swal('The "' + payload.name + '" project has been successfully cloned!', { icon: "success" });
          
        navigate(`/project/view/${project_id}`);
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
      <div className='bg-white rounded-[8px] p-6  mt-[90px] lg:mt-3 ' >
        <h2 className=" f-f-sm text-3xl text-black text-center " > Create New Site </h2>
        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">
            <div className=" col-span-12 lg:col-span-5 ">
            </div>
            <div className=" col-span-12 lg:col-span-7 ">
              <ul className="inline-flex w-full"  >
                <li className=' w-full mt-2 ' >
                  <h2 className=" f-f-sm text-lg capitalize  text-primary " >Electric Load</h2>
                </li>
                <li>
                  <Slectdilog />
                </li>
              </ul>
            </div>

            {/* .....................  Electric input started ..............*/}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Average Daily Usage (kWh/day)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setAverageDailyUsage(e.target.value)} value={averageDailyUsage} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Peak Demand (kW)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setPeakDemand(e.target.value)} value={peakDemand} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Average Demand (kW)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setAverageDemand(e.target.value)} value={averageDemand} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

          </div>
        </div>
        {/* .....................  Electric input ended ..............*/}
        {/* ................ Parameters started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >Design Parameters</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Minimum Temperature (C)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setMinimumTemperature(e.target.value)} value={minimumTemperature} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Maximum Temperature (C)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setMaximumTemperature(e.target.value)} value={maximumTemperature} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Minimum Humidity (%)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setMinimumHumidity(e.target.value)} value={minimumHumidity} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Maximum Humidity (%)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setMaximumHumidity(e.target.value)} value={maximumHumidity} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Snow Load (lb/sqft)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setSnowLoad(e.target.value)} value={snowLoad} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Wind Speed (mph) Soil Type
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setWindSpeed(e.target.value)} value={windSpeed} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Spectral Response (Short, S/S)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setSpectralResponseShort(e.target.value)} value={spectralResponseShort} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Seismic Importance Factor
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setSeismicImportanceFactor(e.target.value)} value={seismicImportanceFactor} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Seismic Site Class
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setSeismicSiteClass(e.target.value)} value={seismicSiteClass} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Spectral Response (1 Sec, S/1)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setSpectralResponseSecond(e.target.value)} value={spectralResponseSecond} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Design Spectral Response (S/DS)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setDesignSpectralResponseDS(e.target.value)} value={designSpectralResponseDS} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Design Spectral Response (S/D1)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setDesignSpectralResponseD1(e.target.value)} value={designSpectralResponseD1} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Seismic Design Category
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setSeismicDesignCategory(e.target.value)} value={seismicDesignCategory} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
          </div>
        </div>

        {/* ..............Design Parameters end .................... */}
        {/* ................ Site Information started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >Site Information</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Site Name
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setSiteName(e.target.value)} value={siteName} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Site Contacts
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              { siteContacts.length ?
                <div  style={{ display: "inline-block", verticalAlign: "middle", width: "68%" }}>
                  { siteContacts.map((contact, i) => <span key={i}>{contact.first_name}, </span> ) }
                </div>
              : null }
              <div style={{ display: "inline-block", verticalAlign: "middle", width: "30%" }}>
                <Dilogbox onReceiveContact={_onReceiveContact} />
              </div>
              {/* <button className="relative border bg-primary w-[222px] text-center h-[48px] rounded-[8px] f-f-r text-lg text-white  ">
                <svg className=" absolute left-[20px] top-[11px] " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 13H13V18C13 18.2652 12.8946 18.5196 12.7071 18.7071C12.5196 18.8946 12.2652 19 12 19C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V13H6C5.73478 13 5.48043 12.8946 5.29289 12.7071C5.10536 12.5196 5 12.2652 5 12C5 11.7348 5.10536 11.4804 5.29289 11.2929C5.48043 11.1054 5.73478 11 6 11H11V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13Z" fill="white" />
                </svg>

                Select Contact
              </button> */}
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Site Address
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setSiteAddress(e.target.value)} value={siteAddress} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                GPS Coordinates
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setGPSCoordinates(e.target.value)} value={GPSCoordinates} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Renewable Fraction Target (%)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setRenewableFractionTarget(e.target.value)} value={renewableFractionTarget} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}



          </div>
        </div>

        {/* ..............Site Information end .................... */}

        {/* ................ Site Conditions started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >Site Conditions</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Foundation Type
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setFoundationType(e.target.value)} value={foundationType} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Additional Foundation Requirements
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setAdditionalFoundationRequirements(e.target.value)} value={additionalFoundationRequirements} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Service Voltage
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setServiceVoltage(e.target.value)} value={serviceVoltage} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Connection Type
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setConnectionType(e.target.value)} value={connectionType} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}



          </div>
        </div>

        {/* ..............Site Conditions end .................... */}
        {/* ................ Service conductor started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-r text-lg text-black-vlight text-center " >Service Conductor Path <br />
                (PCC To Transformer)</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Type
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">

              <select onChange={e => setPCCToTransformerType(e.target.value)} value={PCCToTransformerType} className='border border-grey bg-white-dark rounded-[4px] px-4 outline-none w-full h-[56px] ' >
                <option value="0"></option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
              </select>
            </div>
            {/* input section ended */}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                New/Existing
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">

              <ul className=' inline-flex mt-5 ' >
                <li>
                  <div className="flex items-center mb-4">
                    <input onChange={(e) => setPCCToTransformerInstall(e.target.value)} id="default-radio-1" type="radio" value="New" name="PCCToTransformerInstall" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label htmlFor="default-radio-1" className="ml-2 f-f-r text-lg  ">New</label>
                  </div>
                </li>
                <li className=' ml-10' >
                  <div className="flex items-center">
                    <input onChange={(e) => setPCCToTransformerInstall(e.target.value)} id="default-radio-2" type="radio" value="Existing" name="PCCToTransformerInstall" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label htmlFor="default-radio-2" className="ml-2 f-f-r text-lg  ">Existing</label>
                  </div>
                </li>
              </ul>

            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Distance (Feet)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setPCCToTransformerDistanceFeet(e.target.value)} value={PCCToTransformerDistanceFeet} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

          </div>
        </div>
        {/* ..............Service conductor end .................... */}
        {/* ................  Transformer to meter started */}
        <div className='2xl:px-20 ' >

          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-r text-lg text-black-vlight text-center " > Transformer to meter Path <br />
                (Transformer To Meter)</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Type
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">

              <select onChange={e => setTransformerToMeterType(e.target.value)} value={transformerToMeterType} className='border border-grey bg-white-dark rounded-[4px] px-4 outline-none w-full h-[56px] ' >
                <option value="0"></option>
                <option value="1">Audi</option>
                <option value="2">BMW</option>
                <option value="3">Citroen</option>
                <option value="4">Ford</option>
                <option value="5">Honda</option>
              </select>
            </div>
            {/* input section ended */}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                New/Existing
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">

              <ul className=' inline-flex mt-5 ' >
                <li>
                  <div className="flex items-center mb-4">
                    <input onChange={(e) => setTransformerToMeterInstall(e.target.value)} id="default-radio-1" type="radio" value="New" name="transformerToMeterInstall" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label htmlFor="default-radio-1" className="ml-2 f-f-r text-lg  ">New</label>
                  </div>
                </li>
                <li className=' ml-10' >
                  <div className="flex items-center">
                    <input onChange={(e) => setTransformerToMeterInstall(e.target.value)} id="default-radio-2" type="radio" value="Existing" name="transformerToMeterInstall" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                    <label htmlFor="default-radio-2" className="ml-2 f-f-r text-lg  ">Existing</label>
                  </div>
                </li>
              </ul>

            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Distance (Feet)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={e => setTransformerToMeterDistanceFeet(e.target.value)} value={transformerToMeterDistanceFeet} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

          </div>
        </div>
        {/* .............. Transformer to meter end .................... */}

        {/* ................ Logistics started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >Logistics</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Target Delivery Date
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              {/* date picker */}
              {/* <form action="/action_page.php"> */}

                <input  onChange={e => setTargetDeliveryDate(e.target.value)} value={targetDeliveryDate} type="date" id="birthday" name="birthday" className=" w-full  relative h-[56px] border border-grey bg-white-dark rounded-[4px] pl-[47px] pr-4 outline-none" placeholder="Select date" />
              {/* </form> */}

              {/* date picker ended */}

            </div>
            {/* input section ended */}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Equipment
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setEquipment(e.target.value)} value={equipment} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Loading Method
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setLoadingMethod(e.target.value)} value={loadingMethod} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Shipping Method
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setShippingMethod(e.target.value)} value={shippingMethod} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Unloading Method
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setUnloadingMethod(e.target.value)} value={unloadingMethod} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                System Placement
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setSystemPlacement(e.target.value)} value={systemPlacement} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Preferred Unloading Method
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setPreferredUnloadingMethod(e.target.value)} value={preferredUnloadingMethod} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Customer Shipping Max Budget
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type="number" onChange={e => setCustomerShippingMaxBudget(e.target.value)} value={customerShippingMaxBudget} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Miscellaneous Items Being Shipped
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setMiscellaneousItemsBeingShipped(e.target.value)} value={miscellaneousItemsBeingShipped} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}



          </div>
        </div>
        {/* ..............Logistics end .................... */}

        {/* ................ directory of Links started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >directory of Links</h2>
            </div>



            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Clickup Spaces
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setClickupSpaces(e.target.value)} value={clickupSpaces} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                PSA Contact
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setPSAContact(e.target.value)} value={PSAContact} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Consulting Contact
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setConsultingContact(e.target.value)} value={consultingContact} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Project Sharepoint
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setProjectSharepoint(e.target.value)} value={projectSharepoint} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Invoices
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setInvoices(e.target.value)} value={invoices} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Project BOM Worksheet
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setProjectBOMWorksheet(e.target.value)} value={projectBOMWorksheet} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Project Pricing Worksheet
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setProjectPricingWorksheet(e.target.value)} value={projectPricingWorksheet} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Project Schedule
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setProjectSchedule(e.target.value)} value={projectSchedule} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Assumptions & Exclusions
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input onChange={e => setAssumptionsAndExclusions(e.target.value)} value={assumptionsAndExclusions} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}



          </div>
        </div>
        {/* ..............directory of Links end .................... */}

        {/* button started */}
        <div className=' mt-32 text-end  ' >
          <ul className=' inline-flex  ' >
            <li>
              <button onClick={submitSite} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Done</button>
            </li>
            <li className=' ml-6 ' >
              <button className=' border border-primary text-lg f-f-r text-primary  w-[127px] h-[48px] rounded-[8px] captilize ' >Back</button>
            </li>
          </ul>
        </div>
        {/* button ended */}

      </div>
    </>
  )
}
