"use client"
import { mappls, mappls_plugin } from "mappls-web-maps";
import { useEffect, useRef, useState } from "react";

const mapplsClassObject = new mappls();
const mapplsPluginObject = new mappls_plugin();


export default function Map() {
  const mapRef:any = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const element=document.getElementById("mmiPickerBot")
  element!.style.background="red"
  const auto = {
    width: "300px",
    position: "absolute",
    zIndex: 999,
    fontSize: "15px",
    padding: "10px",
    border: "1px solid #ddd",
    outline: "none !important",
  };

  const loadObject = { map: true, plugins: ["search"] };
 

  useEffect(() => {
    mapplsClassObject.initialize("c77a0630-af59-4451-b734-62c7638f34bb", loadObject, () => {
      const newMap = mapplsClassObject.Map({
        id: "map",
        properties: {
          center: [28.633, 77.2194],
          zoom: 4,
        },
      });
        console.log(mapplsClassObject)
      newMap.on("load", () => {
        setIsMapLoaded(true);
      });
      mapRef.current = newMap;
    });
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className="px-4 h-full">
    <div
      id="map"
    className="w-full h-3/4"
    >
         <input
        style={{
            width: "300px",
            position: "absolute",
            zIndex: 999,
            fontSize: "15px",
            padding: "10px",
            border: "1px solid #ddd",
            outline: "none !important",
          }}
        type="text"
        id="auto"
        name="auto"
        className="search-outer form-control as-input"
        placeholder="Search places or eLoc's..."
        
        spellCheck="false"
      />
      {isMapLoaded  && <PlacePickerPlugin map={mapRef.current}/>}
    </div>
    </div>
  );
};


  const PlacePickerPlugin = ({ map }:{map:any}) => {
    const placePickerRef = useRef(null);
  
    useEffect(() => {
      if (map && placePickerRef.current) {
        mapplsClassObject.removeLayer({ map, layer: placePickerRef.current });
      }
      var options = {
        map: map,
        location: { lat: 28.8787, lng: 77.08888 },
        search: true,
      };
      placePickerRef.current = mapplsPluginObject.placePicker(
        options,
        callback_method
      );
  
      function callback_method(e:any) {
        if (e.data) console.log(e.data);
        else console.log(e);
      }
  
      return () => {
        if (map && placePickerRef.current) {
          mapplsClassObject.removeLayer({ map, layer: placePickerRef.current });
        }
      };
    }, [map]);
    return null
 };


const PlaceSearchPlugin = ({ map }:{map:any}) => {
  const placeSearchRef = useRef(null);
  const placedetailsRef = useRef(null);

  const [loc,setLoc]=useState("")
    useEffect(() => {
    if (map && placeSearchRef.current && placedetailsRef.current) {
      mapplsClassObject.removeLayer({ map, layer: placeSearchRef.current });
      mapplsClassObject.removeLayer({ map, layer: placedetailsRef.current });

    }

    
    var optional_config = {
      location: [28.61, 77.23],
      region: "IND",
      height: 300,
    };
    var  callback = (data:any) => {
    console.log(data[0].eLoc);
    setLoc(data[0].eLoc) /* get search data in console */
    console.log(loc)
  };
    placeSearchRef.current = mapplsPluginObject.search(
      document.getElementById("auto"),
      optional_config,
      callback
    );
 
    placedetailsRef.current = mapplsPluginObject.getPinDetails({map: map,
        pin: loc,
        infoDiv:true,
        draggable:true
},(e:any) => {
          console.log(e); /* get details in console */
        }
      );

 
    

    return () => {
      if (map && placeSearchRef.current && placedetailsRef.current) {
        mapplsClassObject.removeLayer({ map, layer: placeSearchRef.current });
        mapplsClassObject.removeLayer({map, layer: placedetailsRef.current});

      }
    };
  }, [map,loc]);
  return null
};
