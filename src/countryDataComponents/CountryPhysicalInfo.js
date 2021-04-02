import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// PHYSICAL DATA FETCHED FROM THE UPI AFTER USER CLICKS ON THE COUNTRY THEY WANT TO ACCESS

const CountryPhysicalInfo = (props) => (
    <>
        <div className="col-md-auto">
            <FontAwesomeIcon icon={props.faAtlas} size="5x" className="text-primary"/>
        </div>
        <div className="col text-left">
            <h2 className="font-design">Physical Information:</h2>
            <ul>
                <li><strong>Area:</strong> {props.area}</li>
                <li><strong>Formation:</strong> {props.formation}</li>
                <li><strong>Water Percentage:</strong> {props.water_percentage} %</li>
                <li><strong>HDI:</strong> {props.hdi}</li>
                <li><strong>TimeZone:</strong> {props.time_zone}</li>
            </ul>
        </div>
    </>        
)

export default CountryPhysicalInfo;