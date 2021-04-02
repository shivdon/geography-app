import axios from "axios";

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



  return await axios.request(options);


};