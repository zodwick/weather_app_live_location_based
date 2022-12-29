
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const apiUrl = 'http://api.weatherapi.com/v1/current.json?key=e784660612e54cdba75143524222912&q=London';



function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=70.0885&lon=45.85661&appid=bfdc9a91eab2d259c7606759452bc4c9';

  
  // const [error, setError] = useState(null);


  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data));
  //     console.log(apiData)
  // }, [apiUrl]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(apiUrl);
  //       console.log(response)
  //       const data = await response.json();
  //       setApiData(data);
  //       console.log(data)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // }, [apiUrl]);

  const [apiData, setApiData] = useState({});

  React.useEffect(() => {
    axios.get(apiUrl).then((response) => {
      setApiData(response.data);
      // console.log(response)
    });
  }, []);

  // if (!apiData) return null;

  return (
    <div>
      Latitude: {latitude}
      <br />
      Longitude: {longitude}
      <br/>
      data available : {apiData?.main?.temp}


      {/* data available : {apiData} */}
      {/* {apiData.map(item => (
            <div key={item.location}>{item.name}</div>
          ))} */}
    </div>
  );  
}

export default App;
