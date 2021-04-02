import axios from "axios";
import rateLimit from 'axios-rate-limit';

 // FETCHING THE DATA FROM THE API BY USING AXIOS
export const fetchApiData = async ({ NAME }) => {
  
  const options = {
    method: 'GET',
    url: process.env.REACT_APP_URL_ + `${NAME.toLowerCase()}`,
    params: { lan: 'en' },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY_,
      'x-rapidapi-host': process.env.REACT_APP_API_HOST_
    }
  };


 
  // sets max 2 requests per 1 second, other will be delayed
  // note maxRPS is a shorthand for perMilliseconds: 1000, and it takes precedence
  // if specified both with maxRequests and perMilliseconds
  const http = rateLimit(axios.create(), { maxRequests: 1, perMilliseconds: 1000, maxRPS: 1 })
  http.getMaxRPS() // 1

  // options hot-reloading also available
  http.setMaxRPS(3)
  http.getMaxRPS() // 3
  http.setRateLimitOptions({ maxRequests: 6, perMilliseconds: 150 }) // same options as constructor

  return await http.request(options); 





  


};