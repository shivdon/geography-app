import React,{useState} from "react";
import GeographyMap from "./components/GeographyMap"
import ReactToolTip from "react-tooltip";
import {Switch, Route} from "react-router-dom";
import CountryPage from "./components/CountryPage"


const App = () => {

  const [content, setContent] = useState("")
  return(
    <>
      <Switch >
        <Route exact path="/countryInfo" component={CountryPage} />
        <Route
          path='/'
            render={(props) => {
            return (
              <>
              <GeographyMap {...props} setTooltipContent={setContent} />
              <ReactToolTip {...props}>{content}</ReactToolTip>
              </>
            )}
          }
        />
      </Switch>
      <ReactToolTip place="top" type="info">{content}</ReactToolTip>
      
    </>
  )
}
  
export default App;
