import React, { useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const {store, actions} = useContext(Context);
    const params = useParams()

    return (
        <div>

          <p>Name: {data.properties.name}</p>  
          <p>Height: {data.properties.height}</p>
          <p>Weight: {data.properties.mass}</p>
          <p>Hair color:{data.properties.hair_color}</p>
          <p>Skin color: {data.properties.skin_color}</p>
          <p>Eye color: {data.properties.eye_color}</p>
          <p>Birth year: {data.properties.birth_year}</p>
          <p>Gender: {data.properties.gender}</p>
          <p>Homeworld: {data.properties.homeworld}</p>

        </div>
    )


}

export default CharacterInfo; 