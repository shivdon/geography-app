import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ADMINISTRATION DATA FETCHED FROM THE UPI AFTER USER CLICKS ON THE COUNTRY THEY WANT TO ACCESS

const CountryAdministration = (props) => (
    <>
    <div className="col-md-auto">
                <FontAwesomeIcon icon={props.faUserCog} size="5x" className="text-primary"/>
              </div>
              <div className="col text-left">
                <h2 className="font-design">Administration:</h2>
                <ul>
                  <li><strong>Capital:</strong> {props.capital}</li>
                  <li><strong>Prime Minister:</strong> {props.prime_minister}</li>
                  <li><strong>demonyms:</strong> {props.demonyms} </li>
                  <li><strong>Driving Side:</strong> {props.driving_side}</li>
                  <li><strong>Ethnic Group:</strong> {props.ethnic_groups} </li>
                  <li><strong>Government:</strong> {props.government}</li>
                  <li><strong>ISO code:</strong> {props.iso_3166_code}</li>
                  <li><strong>largest_city:</strong> {props.largest_city}</li>
                  <li><strong>Legislature:</strong> {props.legislature} </li>
                  <li><strong>Lower House</strong> {props.lower_house}</li>
                  <li><strong>upper House</strong> {props.upper_house} </li>
                  
                </ul>
            </div>

    </>
)

export default CountryAdministration;