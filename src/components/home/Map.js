import React from 'react'
import Mapdata from '../../assets/images/Map.svg';

import Config from '../../utils/Config';

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const google = window.google;

export default function Map({ site_gps }) {
  const navigate = useNavigate();

  const [ location, setLocation ] = React.useState({
    street_address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    latitude: 39.652239,
    longitude: -122.726481
  });
  
  const user = useSelector((state) => state.user.profile);

  React.useEffect(() => {
    // console.log("site_gps 3:", site_gps)
    initMap();
  }, []);
  /**
     * Initializes Google Maps Interface
     */
  const initMap = () => {

    // const lat = location.latitude; 
    // const lng = location.longitude;

    
    // marker for embedded Google Maps interface
    // const marker  = new google.maps.Marker({ 
    //   position: { lat: lat, lng: lng }, 
    //   map: map,
    //   // title: 'Location found.',
    //   //draggable: true,
    //   animation: google.maps.Animation.DROP
    // });

    // var map = new google.maps.Map(document.getElementById('map-view'), {
    //   zoom: 10,
    //   center: new google.maps.LatLng(-33.92, 151.25),
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // });

    // var infowindow = new google.maps.InfoWindow();

    // var marker, i;

    let default_gps_lat = 39.2216489; 
    let default_gps_lng = -121.0130471;

    if (site_gps && site_gps[0] && site_gps[0][0] && site_gps[0][1]) {
      default_gps_lat = parseFloat(site_gps[0][0]); 
      default_gps_lng = parseFloat(site_gps[0][1]);
    }

    const mapView = document.getElementById("map-view");
    const map = new google.maps.Map(mapView,
      { center: { lat: default_gps_lat, lng: default_gps_lng }, zoom: 2 }
    );

    var infowindow = new google.maps.InfoWindow();

    var markers, i;
    
    for (i = 0; i < site_gps.length; i++) {  
      // console.log(i, "site_gps:", site_gps[i]);

      const gps_lat = parseFloat(site_gps[i][0]); 
      const gps_lng = parseFloat(site_gps[i][1]);

      // console.log("gps_lat", gps_lat);
      // console.log("gps_lng", gps_lng);

      markers = new google.maps.Marker({ 
        position: { lat: gps_lat, lng: gps_lng }, 
        map: map,
        animation: google.maps.Animation.DROP
      });

      map.panTo({ lat: gps_lat, lng: gps_lng });
      map.setCenter({ lat: gps_lat, lng: gps_lng });
      //markers.setAnimation(google.maps.Animation.BOUNCE);
      markers.setPosition({ lat: gps_lat, lng: gps_lng });
      
      google.maps.event.addListener(markers, 'click', (function(markers, i) {
        return function() {
          infowindow.setContent(gps_lat.toString());
          infowindow.open(map, markers);
        }
      })(markers, i));
    }

    // var bounds = new google.maps.LatLngBounds();

    // if (markers.length>0) { 
    //   for (var i = 0; i < markers.length; i++) {
    //      bounds.extend(markers[i].getPosition());
    //   }    
    //   mapView.fitBounds(bounds);
    // }

  }

  /**
   * Creates options for Google Maps
   * 
   * @param {*} maps - the embedded Google Map
   * @returns options for embedded Google Maps interface
   */
  return (
    <div>
      <div className="map-view" id="map-view"></div>
      {/* <img src={Mapdata} id="map-view" alt='' className=' w-full h-[290px] ' /> */}
      {/* <div class="mapouter"><div class="gmap_canvas"><iframe  className=' w-full h-[290px]  rounded-[18px] my-4 ' id="gmap_canvas" src="https://maps.google.com/maps?q=california&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2yu.co"></a>
        </div></div> */}
    </div>
  )
}
