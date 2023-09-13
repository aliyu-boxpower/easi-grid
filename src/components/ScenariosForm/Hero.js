import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Config from '../../utils/Config';
import { useSelector } from 'react-redux';


export default function Hero() {
  const user = useSelector((state) => state.user.profile);

  const navigate = useNavigate();
  const { site_id } = useParams();

  const [ PVTilt, setPVTilt ] = React.useState('');
  const [ PVAzimuth, setPVAzimuth ] = React.useState('');
  const [ solarPVCapacity, setSolarPVCapacity ] = React.useState('');
  const [ batteryStorageCapacity, setBatteryStorageCapacity ] = React.useState('');
  const [ batteryInverterCapacity, setBatteryInverterCapacity ] = React.useState('');
  const [ generatorQuantity, setGeneratorQuantity ] = React.useState('');
  const [ generatorSize, setGeneratorSize ] = React.useState('');
  const [ renewableFraction, setRenewableFraction ] = React.useState('');
  const [ generatorRuntime, setGeneratorRuntime ] = React.useState('');
  const [ fuelConsumption, setFuelConsumption ] = React.useState('');
  const [ fuelTankSize, setFuelTankSize ] = React.useState('');

  const [ solarProducts, setSolarProducts ] = React.useState([{ solar_product_name: '', solar_product_quantity: 1 }]);
  const [ batteryProducts, setBatteryProducts ] = React.useState([{ battery_product_name: '', battery_product_quantity: 1 }]);
  const [ inverterProducts, setInverterProducts ] = React.useState([{ inverter_product_name: '', inverter_product_quantity: 1 }]);
  const [ generatorProducts, setGeneratorProducts ] = React.useState([{ generator_product_name: '', generator_product_quantity: 1 }]);
  const [ containerProducts, setContainerProducts ] = React.useState([{ container_product_name: '', container_product_quantity: 1 }]);

  const submitScenarios = () => {
    
    const payload = {
      "site_id": site_id,
      "pv_tilt": PVTilt,
      "pv_azimuth": PVAzimuth,
      "solar_pv_capacity": solarPVCapacity,
      "battery_storage_capacity": batteryStorageCapacity,
      "battery_inverter_capacity": batteryInverterCapacity,
      "generator_quantity": generatorQuantity,
      "generator_size": generatorSize,
      "model_renewable_fraction": renewableFraction,
      "generator_runtime": generatorRuntime,
      "fuel_consumption": fuelConsumption,
      "fuel_tank_size": fuelTankSize,
      "solar_product": solarProducts,
      "battery_product": batteryProducts,
      "inverter_product": inverterProducts,
      "container_product": containerProducts,
      "generator_product": generatorProducts
    }

    console.log("payload:", payload);

    //const token = localStorage.getItem('token');
    const url   = `${Config.API.URL}/scenarios`;

    console.log('url:', url);

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
          
        navigate(`/scenarios/view/${site_id}`);
      } else {
        // swal("Oh no!", res.message, "error");
      }
    }).catch((error) => {
      console.log('Error: ', error);
      
      //swal("Oh no!", 'An error occured!!! while connecting to server. Please try again', "error");
    });
  }

  const _onChangeSolarProducts = (e) => {
    const data = { ...solarProducts[0] };

    data[e.target.name] = e.target.value;

    setSolarProducts([ data ])
  }

  const _onChangeBatteryProducts = (e) => {
    const data = { ...batteryProducts[0] };

    data[e.target.name] = e.target.value;

    setBatteryProducts([ data ])
  }

  const _onChangeInverterProducts = (e) => {
    const data = { ...inverterProducts[0] };

    data[e.target.name] = e.target.value;

    setInverterProducts([ data ])
  }

  const _onChangeGeneratorProducts = (e) => {
    const data = { ...generatorProducts[0] };

    data[e.target.name] = e.target.value;

    setGeneratorProducts([ data ])
  }

  const _onChangeContainerProducts = (e) => {
    const data = { ...containerProducts[0] };

    data[e.target.name] = e.target.value;

    setContainerProducts([ data ]);
  }
  
  return (
    <>
      <div className='bg-white rounded-[8px] p-6  mt-[90px] lg:mt-3 ' >
        <h2 className=" f-f-sm text-3xl text-black text-center " >Create New Scenario</h2>
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Optimization Parameters</h2>
          <div className="grid grid-cols-12  ">


            {/* .....................  Electric input started ..............*/}


            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                PV Tilt
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setPVTilt(e.target.value) } value={PVTilt} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                PV Azimuth
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setPVAzimuth(e.target.value) } value={PVAzimuth} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}


          </div>
        </div>
        {/* .....................  Electric input ended ..............*/}
        {/* ................ Parameters started */}

        <div className='2xl:px-20 ' >
          <div className="grid grid-cols-12 mt-10   ">

            <div className=" col-span-12  ">
              <h2 className=" f-f-sm text-lg capitalize  text-primary text-center " >Optimization Summary</h2>
            </div>
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Solar PV Capacity (kW)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setSolarPVCapacity(e.target.value) } value={solarPVCapacity}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Battery Storage Capacity (kWh)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setBatteryStorageCapacity(e.target.value) } value={batteryStorageCapacity} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Battery Inverter Capacity (kW)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setBatteryInverterCapacity(e.target.value) } value={batteryInverterCapacity} className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Generator Quantity
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setGeneratorQuantity(e.target.value) } value={generatorQuantity}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Generator Size (kW)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setGeneratorSize(e.target.value) } value={generatorSize}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Renewable Fraction (%)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setRenewableFraction(e.target.value) } value={renewableFraction}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Generator Runtime (hours)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setGeneratorRuntime(e.target.value) } value={generatorRuntime}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Fuel Consumption (litres)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setFuelConsumption(e.target.value) } value={fuelConsumption}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}
            {/* input section started */}
            <div className=" col-span-12 lg:col-span-5 mt-5 ">
              <h2 className=' f-f-r  xl:text-2xl text-xl  text-black-vlight mt-3 ' >
                Fuel Tank Size (gallons)
              </h2>
            </div>
            <div className=" col-span-12 lg:col-span-7 mt-5 ">
              <input type='number' onChange={(e) => setFuelTankSize(e.target.value) } value={fuelTankSize}  className=' w-full  h-[56px] border border-grey bg-white-dark rounded-[4px] px-4 outline-none  ' />
            </div>
            {/* input section ended */}

          </div>
        </div>

        {/* ..............Design Parameters end .................... */}

        {/*  Solar product section started */}
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Battery Product(s)</h2>
          { solarProducts.map((product, i) => (
            <div key={i} className="grid grid-cols-12 mt-10 gap-4 sm:gap-0    ">
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Name</h2>
                <input onChange={_onChangeSolarProducts} value={product.solar_product_name} name='solar_product_name' className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Quantity</h2>
                <input type='number' onChange={_onChangeSolarProducts} value={product.solar_product_quantity} name='solar_product_quantity' className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
            </div>
          )) }
          
          <div className=' my-4 text-center ' >
            <button className=' f-f-r text-lg text-primary border border-primary  w-[204px] h-[38px]  ' >+ Add new Row</button>
          </div>
        </div>
        {/* Solar product section edned */}


        {/*  Battery product section started */}
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Battery Product(s)</h2>
          { batteryProducts.map((product, i) => (
            <div key={i} className="grid grid-cols-12 mt-10 gap-4 sm:gap-0    ">
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Name</h2>
                <input onChange={_onChangeBatteryProducts} value={product.battery_product_name} name="battery_product_name" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Quantity</h2>
                <input type='number' onChange={_onChangeBatteryProducts} value={product.battery_product_quantity} name="battery_product_quantity" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
            </div>
          )) }
          
          <div className=' my-4 text-center ' >
            <button className=' f-f-r text-lg text-primary border border-primary  w-[204px] h-[38px]  ' >+ Add new Row</button>
          </div>
        </div>
        {/* Battery product section edned */}

        {/*  Inverter Product(s) section started */}
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Inverter Product(s)</h2>
          { inverterProducts.map((product, i) => (
            <div key={i} className="grid grid-cols-12 mt-10 gap-4 sm:gap-0    ">
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Name</h2>
                <input onChange={_onChangeInverterProducts} value={product.inverter_product_name} name='inverter_product_name' className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Quantity</h2>
                <input type='number' onChange={_onChangeInverterProducts} value={product.inverter_product_quantity} name='inverter_product_quantity' className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
            </div>
          )) }
          
          <div className=' my-4 text-center ' >
            <button className=' f-f-r text-lg text-primary border border-primary  w-[204px] h-[38px]  ' >+ Add new Row</button>
          </div>


        </div>
        {/* Inverter Product(s) section edned */}
        {/*  Generator Product(s) section started */}
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Generator Product(s)</h2>
          { generatorProducts.map((product, i) => (
            <div key={i} className="grid grid-cols-12 mt-10 gap-4 sm:gap-0    ">
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Name</h2>
                <input onChange={_onChangeGeneratorProducts} value={product.generator_product_name} name="generator_product_name" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Quantity</h2>
                <input type='number' onChange={_onChangeGeneratorProducts} value={product.generator_product_quantity} name="generator_product_quantity" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
            </div>
          )) }
          
          <div className=' my-4 text-center ' >
            <button className=' f-f-r text-lg text-primary border border-primary  w-[204px] h-[38px]  ' >+ Add new Row</button>
          </div>


        </div>
        {/* Generator Product(s) section edned */}
        {/*  Container Product(s) section started */}
        <div className='2xl:px-20 ' >
          <h2 className=" f-f-sm text-lg capitalize  text-primary  mt-10  text-center " >Container Product(s)</h2>
          { containerProducts.map((product, i) => (
            <div key={i} className="grid grid-cols-12 mt-10 gap-4 sm:gap-0    ">
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Name</h2>
                <input onChange={_onChangeContainerProducts} value={product.container_product_name} name="container_product_name" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
              <div className="  col-span-12 sm:col-span-6  ">
                <h2 className=' f-f-sm text-2xl text-black  text-center mb-4 ' >Quantity</h2>
                <input type='number' onChange={_onChangeContainerProducts} value={product.container_product_quantity} name="container_product_quantity" className=" w-full  h-[56px] border border-grey bg-white-dark  px-4 outline-none  "></input>
              </div>
            </div>
          )) }
          
          <div className=' my-4 text-center ' >
            <button className=' f-f-r text-lg text-primary border border-primary  w-[204px] h-[38px]  ' >+ Add new Row</button>
          </div>


        </div>
        {/* Container Product(s) section edned */}

        {/* button started */}
        <div className=' mt-32 text-end  ' >
          <ul className=' inline-flex  ' >
            <li>
              <button onClick={submitScenarios} className=' bg-primary text-lg f-f-r text-white  w-[127px] h-[48px] rounded-[8px] captilize ' >Done</button>
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
