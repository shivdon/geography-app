import React,{memo} from "react"

const ToolTip = (props) => {
    
    // population result manipulations
    const rounded = num => {
        if (num > 1000000000) {
            return Math.round(num / 100000000) / 10 + "Bn";
        } else if (num > 1000000) {
            return Math.round(num / 100000) / 10 + "M";
        } else {
            return Math.round(num / 100) / 10 + "K";
        }
    };

    // RETURNING THE TOOLTIP CONTENT
    return(
        <>
        <img src={props.data.flag_img} alt="flag of the country hovered" />
        <ul>
            <li><strong>Country:</strong> {props.data.name}</li>
            <li><strong>Capital:</strong> {props.data.capital}</li>
            <li><strong>Dialling code:</strong> {props.data.calling_code}</li>
            <li><strong>Currency:</strong> {props.data.currency}</li>
            <li><strong>Population:</strong> {rounded(props.data.population)}</li>
            <li><strong>Land Area:</strong> {(props.data.area).split("(")[0]}</li>
        </ul>
        <p>Hint: To get more info. Kindly click on the country</p>
        </>
    )
    

}

export default memo(ToolTip);