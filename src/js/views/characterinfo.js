import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import  placeholder from "../../img/placeholder.jpg";

const CharacterInfo = () => {
  const { store, actions } = useContext(Context);
  const [infoCharacter, setInfoCharacter] = useState({});
  const params = useParams();
  const [url, setUrl] = useState('');

  useEffect(async () => {
    const data = await actions.getInfoCharacter(params.theid);
    setInfoCharacter(data);
  }, []);

  useEffect(() => {
    fetch(
      `https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`
    ).then((image) => {
      image.status == 200 ? setUrl(image.url) : setUrl(placeholder);
    });
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card bg-dark col col-lg-6 col-md-10 col-sm-10">
          <div className="card-body text-center rounded-2">
            <img src={url} className="card-img-top mt-2" alt="..." />
            <p className="card-text display-5 text-light mt-4">
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

            <Link to="/">
              <button type="button" className="btn btn-info mt-3">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
