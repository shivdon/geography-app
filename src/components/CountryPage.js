import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {faAtlas, faMoneyBillWave, faUserCog, faChartBar } from '@fortawesome/free-solid-svg-icons';
import {Divider} from "antd";

import CountryImages from "../countryDataComponents/CountryImages";
import CountryPhysicalInfo from "../countryDataComponents/CountryPhysicalInfo";
import CountryEconomy from "../countryDataComponents/CountryEconomy";
import CountryAdministration from "../countryDataComponents/CountryAdministration";
import CountryPopulation from "../countryDataComponents/CountryPopulation";

library.add(fab, faAtlas, faMoneyBillWave,faUserCog, faChartBar)

//SETTING THE ICONS FOR EVERY PARTICULAR INFORMATION HEADER AND RENDERING THE COUNTRY INFORMATION PAGE



const CountryPage = (props) => {
  
    const {name, 
          flag_img,
          location_img,
          symbol_img,
          area,
          formation,
          water_percentage,
          hdi,
          currency,
          gdp_nominal_per_capita,
          gdp_nominal_total,
          gini,
          time_zone,
          gdp_ppp_per_capita,
          gdp_ppp_total,
          capital,
          demonyms,
          driving_side,
          ethnic_groups,
          government,
          iso_3166_code,
          largest_city,
          legislature,
          lower_house,
          prime_minister,
          upper_house,
          population_census,
          population_density,
          population_estimate,
          calling_code} = props.location.state.data
  
  
  return (
      <div className="container text-center mt-2 pt-1">
        
        <Divider plain><h1 className="font-weight-bold">{name.substring(0, 40)}</h1></Divider>
        
        <div className="row p-2">
          
          <CountryImages 
            flag_img={flag_img}
            location_img={location_img}
            symbol_img={symbol_img}
          />

          <div className = "vertical"></div>

          <div className="col m-5">
            <div className="row">
              
              <CountryPhysicalInfo 
                faAtlas={faAtlas}
                area={area}
                formation={formation}
                water_percentage={water_percentage}
                hdi={hdi}
                time_zone={time_zone}
              /> 

            </div>

            <div className="row row-control">
              
              <CountryEconomy 
                faMoneyBillWave={faMoneyBillWave}
                currency={currency}
                gdp_nominal_per_capita={gdp_nominal_per_capita}
                gdp_nominal_total={gdp_nominal_total}
                gini={gini}
                gdp_ppp_per_capita={gdp_ppp_per_capita}
                gdp_ppp_total={gdp_ppp_total}
              />

            </div>

            <div className="row row-control">
              
              <CountryAdministration 
                faUserCog={faUserCog}
                capital={capital}
                prime_minister={prime_minister}
                demonyms={demonyms}
                driving_side={driving_side}
                ethnic_groups={ethnic_groups}
                government={government}
                iso_3166_code={iso_3166_code}
                largest_city={largest_city}
                legislature={legislature}
                lower_house={lower_house}
                upper_house={upper_house}

               /> 
            </div>
            <div className="row row-control">

              <CountryPopulation
                faChartBar={faChartBar}
                population_census={population_census}
                population_density={population_density}
                population_estimate={population_estimate}
                calling_code={calling_code}
              />

              

            </div>
            
          </div>
        </div>
      </div>)
};

export default CountryPage;

