import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";

const PlanetsInfo = () => {
  const { store, actions } = useContext(Context);
  const [infoPlanet, setInfoPlanet] = useState({});
  const params = useParams();

  // console.log();

  useEffect(async () => {
    const data = await actions.getInfoPlanet(params.theid);
    setInfoPlanet(data);
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="card-body text-center bg-dark rounded-2">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                params.theid +
                ".jpg"
              }
              className="card-img-top img-fluid rounded-2 my-5"
              style={{ height: "60%", width: "60%" }}
              alt="..."
            />
            <p className="card-text display-5 text-light mt-2">
              {infoPlanet.name}
            </p>
            <p className="card-text display-5 text-light mt-2">
              Climate: <span className="text-info"> {infoPlanet.climate}</span>{" "}
            </p>
            <p className="card-text display-5 text-light mt-2">
              Terrain: <span className="text-info"> {infoPlanet.terrain}</span>
            </p>
            <p className="card-text display-5 text-light mt-2">
              Population:{" "}
              <span className="text-info"> {infoPlanet.population}</span>
            </p>
            <p className="card-text display-5 text-light mt-2">
              Gravity: <span className="text-info"> {infoPlanet.gravity}</span>
            </p>
            <p className="card-text display-5 text-light mt-2">
              Rotation period:
              <span className="text-info">
                {" "}
                {infoPlanet.rotation_period}
              </span>{" "}
            </p>
            <p className="card-text display-5 text-light mt-2">
              Orbital period:
              <span className="text-info"> {infoPlanet.orbital_period}</span>
            </p>
            <p className="card-text display-5 text-light mt-2">
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
