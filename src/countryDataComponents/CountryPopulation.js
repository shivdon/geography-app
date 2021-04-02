import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// POPULATION DATA FETCHED FROM THE UPI AFTER USER CLICKS ON THE COUNTRY THEY WANT TO ACCESS

const CountryPopulation = (props) => (
    <>
    <div className="col-md-auto">
        <FontAwesomeIcon icon={props.faChartBar} size="5x" className="text-primary"/>
    </div>
    <div className="col text-left">
        <h2 className="font-design">Population:</h2>
        <ul>
            <li><strong>Population Census:</strong> {props.population_census}</li>
            <li><strong>Population Density:</strong> {props.population_density}</li>
            <li><strong>Population Estimate:</strong> {props.population_estimate} </li>
            <li><strong>Calling code:</strong> {props.calling_code}</li>
        </ul>
    </div>
    </>
)

export default CountryPopulation;