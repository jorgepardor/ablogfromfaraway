import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const CharacterInfo = () => {
    const {store, actions} = useContext(Context);
    const [infoCharacter, setInfoCharacter] = useState({});
    const params = useParams();


    console.log();

    useEffect(async () => {
      const data = await actions.getInfoCharacter(params.theid);
      setInfoCharacter(data);
    }, []);
    
    return (
      
        <div className="card-body text-center">
          <img src="https://picsum.photos/300/300" className="rounded-circle mb-5" alt="..." />
          <p className="card-text display-6 text-info">{infoCharacter.name}</p>  
          <p className="card-text lead descrHead"> Height: <span className="card-description descContent"> {infoCharacter.height}</span> </p>
          <p className="card-text lead descrHead"> Weight:  <span className="card-description descContent"> {infoCharacter.mass}</span></p>
          <p className="card-text lead descrHead">Hair color: <span className="card-description descContent"> {infoCharacter.hair_color}</span></p>
          <p className="card-text lead descrHead">Hair color: <span className="card-description descContent"> {infoCharacter.hair_color}</span></p>
          <p className="card-text lead descrHead">Skin color:<span className="card-description descContent"> {infoCharacter.skin_color}</span> </p>
          <p className="card-text lead descrHead">Eye color:<span className="card-description descContent"> {infoCharacter.eye_color}</span></p>
          <p className="card-text lead descrHead">Birth year:<span className="card-description descContent"> {infoCharacter.birth_year}</span> </p>
          <p className="card-text lead descrHead">Gender:<span className="card-description descContent"> {infoCharacter.gender}</span> </p>


        </div>
    );


};


export default CharacterInfo;