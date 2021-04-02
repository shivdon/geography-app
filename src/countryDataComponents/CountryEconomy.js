import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ECONOMY DATA FETCHED FROM THE UPI AFTER USER CLICKS ON THE COUNTRY THEY WANT TO ACCESS

const CountryEconomy = (props) => (
    <>
        <div className="col-md-auto">
            <FontAwesomeIcon icon={props.faMoneyBillWave} size="5x" className="text-primary"/>
        </div>
        <div className="col text-left">
            <h2 className="font-design">Economy:</h2>
            <ul>
                <li><strong>Currency:</strong> {props.currency}</li>
                <li><strong>GDP nominal per capita:</strong> {props.gdp_nominal_per_capita}</li>
                <li><strong>GDP nominal total:</strong> {props.gdp_nominal_total} </li>
                <li><strong>GINI index:</strong> {props.gini}</li>
                <li><strong>GDP ppp per capita:</strong> {props.gdp_ppp_per_capita} </li>
                <li><strong>GDP ppp total:</strong> {props.gdp_ppp_total}</li>
            </ul>
        </div>
    </>
)

export default CountryEconomy;
