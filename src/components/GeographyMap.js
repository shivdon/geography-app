import React, { memo , useState} from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import {Spin} from "antd";

import Tooltip from "./Tooltip";
import {fetchApiData} from "../Data/FetchApiData";
import style from "../styleMap/MapStyle";
import HandleZoomIn from "../handleZoomInZoomOut/HandleZoomIn";
import HandleZoomOut from "../handleZoomInZoomOut/HandleZoomOut";


// FETCHING THE GEOJSON FILE FOR RENDERING MAP
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
      

const GeographyMap = ({setTooltipContent, history}) => {
  const [loading, setLoading] = useState(false)
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

      // HANDLING ZOOM IN AND OUT THE MAP
      const handleZoomIn = () => {
        if (position.zoom >= 4) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
      }
    
      const handleZoomOut = () => {
        if (position.zoom <= 1) return;
        setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
      }
    
      const handleMoveEnd = (position) => {
        setPosition(position);
      }
  

  
   
    
        return (
          <div className="bg-light">
            <div className="container-fluid text-center" >
              {loading ? <Spin size="large" className="mb-5 position-fixed"/> : <h1 className="mb-5 font-weight-bold text-primary">Infographic World Map</h1>}  
            </div>
            {/* RENDERING THE MAP USING SIMPLE-REACT-MAPS */}
            <ComposableMap data-tip="" projectionConfig={{ scale: 150 }} height={400} className="bg-primary">
              <ZoomableGroup 
                  zoom={position.zoom}
                  center={position.coordinates}
                  onMoveEnd={handleMoveEnd}>
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>

                    // MAPPING THROUGH GEOJSON DATA AND GIVING THE POSITION VECTORS ACCORDINGLY FOR EACH COUNTRY
                    geographies.map(geo => {
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}

                          // HOVERING THE MOUSE OVER THE COUNTRIES AND ALSO FETCHING DATA WHILE HOVERING THE PARTICULAR COUNTRY
                          onMouseEnter={() => {
                            setTooltipContent(<div><Spin tip="Loading..." /></div>);
                            fetchApiData(geo.properties)
                              .then((res) => {

                                // console.log(res.data)
                                setTooltipContent(<Tooltip data={res.data} />);

                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          } }
                          // SETTING THE TOOLTIP TO EMPTY CONTENT BACK AGAIN
                          onMouseLeave={() => {
                            setTooltipContent("");
                          } }

                          style={style()}
                          
                          // FETCHING THE API AGAIN AFTER THE MOUSE CLICK ON PARTICULAR COUNTRY
                          onClick={(e) => {
                            e.preventDefault();
                            setLoading(true);
                            fetchApiData(geo.properties)

                              .then((res) => {

                                console.log(res.data);
                                history.push({ pathname: "/countryInfo", state: { data: res.data } });
                                setLoading(false);

                              })
                              .catch((err) => {
                                console.log(err);
                              });
                          } } />
                      );
                    })
                  }
                </Geographies>
              </ZoomableGroup>
            </ComposableMap>
            
            {/* bUTTONS FOR ZOOM IN ZOOM OUT*/}
            <div className="controlsB">
              <HandleZoomIn handleZoomIn={handleZoomIn} />
              
              <HandleZoomOut handleZoomOut={handleZoomOut} />
            </div>
          </div>
        );
      };

export default memo(GeographyMap)