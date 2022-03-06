import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

const CharacterInfo = () => {
  const { store, actions } = useContext(Context);
  const [infoCharacter, setInfoCharacter] = useState({});
  const params = useParams();

  // console.log();

  useEffect(async () => {
    const data = await actions.getInfoCharacter(params.theid);
    setInfoCharacter(data);
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="card-body text-center bg-dark rounded-2">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/characters/" +
                params.theid +
                ".jpg"
              }
              className="card-img-top img-fluid rounded-2 my-5"
              style={{ height: "60%", width: "60%" }}
              alt="..."
            />
            <p className="card-text display-5 text-light mt-2">
              {infoCharacter.name}
            </p>
            <p className="card-text lead descrHead mt-3 text-light">
              {" "}
              Height:{" "}
              <span className="text-info">
                {" "}
                {infoCharacter.height}
                {" cms."}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              {" "}
              Weight:{" "}
              <span className="text-info">
                {" "}
                {infoCharacter.mass}
                {" kg."}
              </span>
            </p>
            <p className="card-text lead descrHead text-light">
              Hair color:{" "}
              <span className="text-info"> {infoCharacter.hair_color}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Skin color:
              <span className="text-info">
                {" "}
                {infoCharacter.skin_color}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Eye color:
              <span className="text-info"> {infoCharacter.eye_color}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Birth year:
              <span className="text-info">
                {" "}
                {infoCharacter.birth_year}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light mb-4">
              Gender:
              <span className="text-info"> {infoCharacter.gender}</span>{" "}
            </p>

            <button type="button" class="btn btn-info mt-3">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
