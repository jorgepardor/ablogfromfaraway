import React, { useEffect } from "react";
import ReactDOM from "react-dom";



 const Render = () => {

    const url = 'https://www.swapi.tech/api/';

     useEffect(() => {
         fetch(url)
         .then((resp) => {
            // console.log(resp.message); // will be true if the response is successfull
            // console.log(resp.result); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
         //.then(data => console.log(data));

     }, [])
 }

 export default Render