import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const Planets = () => {
    const {store, actions} = useContext(Context);
    const [infoStarship, setInfoStarship] = useState({});
    const params = useParams();


    // console.log();

    useEffect(async () => {
      const data = await actions.getinfoStarship(params.theid);
      setInfoStarship(data);
    }, []);
    
    return (
      
        <div className="card-body text-center">
          <img src={"https://starwars-visualguide.com/assets/img/planets/"+params.theid+".jpg"} className="card-img-top rounded-circle" alt="..." />
          <p className="card-text display-6 text-info">{infoStarship.name}</p>  
          <p className="card-text lead descrHead">Speed: <span className="card-description descContent"> {infoStarship.max_atmosphering_speed} km/h atmosphering</span> </p>
          <p className="card-text lead descrHead">Price: <span className="card-description descContent"> {infoStarship.cost_in_credits} credits</span> </p>
          <p className="card-text lead descrHead">Model:  <span className="card-description descContent"> {infoStarship.model}</span></p>
          <p className="card-text lead descrHead">Manufacturer: <span className="card-description descContent"> {infoStarship.manufacturer}</span> </p>
          <p className="card-text lead descrHead">Class: <span className="card-description descContent"> {infoStarship.starship_class}</span></p>
          <p className="card-text lead descrHead">Length: <span className="card-description descContent"> {infoStarship.length}</span></p>
          <p className="card-text lead descrHead">Crew:<span className="card-description descContent"> {infoStarship.crew}</span> </p>
          <p className="card-text lead descrHead">Capacity:<span className="card-description descContent"> {infoStarship.cargo_capacity} Kg</span></p>
          <p className="card-text lead descrHead">Consumables:<span className="card-description descContent"> {infoStarship.consumables}</span> </p>
          <p className="card-text lead descrHead">Passengers:<span className="card-description descContent"> {infoStarship.passengers}</span> </p>
          <p className="card-text lead descrHead">Hyperdrive rating: <span className="card-description descContent"> {infoStarship.hyperdrive_rating}</span> </p>


        </div>
    );


};


export default CharacterInfo;