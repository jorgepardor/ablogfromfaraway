import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";
import placeholder from "../../img/placeholder.jpg";

const PlanetsInfo = () => {
  const { store, actions } = useContext(Context);
  const [infoPlanet, setInfoPlanet] = useState({});
  const params = useParams();
  const [url, setUrl] = useState("");

  useEffect(async () => {
    const data = await actions.getInfoPlanet(params.theid);
    setInfoPlanet(data);
  }, []);

  useEffect(() => {
    fetch(
      `https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`
    ).then((image) => {
      image.status == 200 ? setUrl(image.url) : setUrl(placeholder);
    });
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="card bg-dark col col-lg-6 col-md-10 col-sm-10">
          <div className="card-body text-center bg-dark rounded-2">
            <img src={url} className="card-img-top mt-2" alt="..." />
            <p className="card-text display-5 text-light mt-4">
              {infoPlanet.name}
            </p>
            <p className="card-text lead descrHead text-light">
              Climate: <span className="text-info"> {infoPlanet.climate}</span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Terrain: <span className="text-info"> {infoPlanet.terrain}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Population:{" "}
              <span className="text-info"> {infoPlanet.population}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Gravity: <span className="text-info"> {infoPlanet.gravity}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Rotation period:
              <span className="text-info">
                {" "}
                {infoPlanet.rotation_period} days
              </span>{""}
            </p>
            <p className="card-text lead descrHead text-light">
              Orbital period:
              <span className="text-info"> {infoPlanet.orbital_period}</span>
            </p>
            <p className="card-text lead descrHead text-light">
              Surface water:
              <span className="text-info"> {infoPlanet.surface_water}</span>
            </p>
            <Link to="/">
              <button type="button" class="btn btn-info mt-3">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsInfo;
