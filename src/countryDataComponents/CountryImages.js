import React from "react";

// FETCHING IMAGES ON THE LEFT SIDE OF THE PAGE AND RENDERING IT

const CountryImages = (props) => (
    <div className="col m-5 head">
        <h3>Flag</h3>
        <img className="img1" src={props.flag_img} alt="flag" />
        <h3>location</h3>
        <img className="img2" src={props.location_img} alt="location" />
        <h3>Symbol</h3>
        <img className="img3" src={props.symbol_img} alt="symbol" />
    </div>
)



export default CountryImages;