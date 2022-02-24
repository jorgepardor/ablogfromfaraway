import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

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
        <div>

          <p>Name: {infoCharacter.name}</p>  
          <p>Height: {infoCharacter.height}</p>
          <p>Weight: {infoCharacter.mass}</p>
          <p>Hair color:{infoCharacter.hair_color}</p>
          <p>Skin color: {infoCharacter.skin_color}</p>
          <p>Eye color: {infoCharacter.eye_color}</p>
          <p>Birth year: {infoCharacter.birth_year}</p>
          <p>Gender: {infoCharacter.gender}</p>
          <p>Homeworld: {infoCharacter.homeworld}</p>

        </div>
    );


};


export default CharacterInfo;