import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
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
          <div className="card-body text-center">
            <img
              src={
                "https://starwars-visualguide.com/assets/img/planets/" +
                params.theid +
                ".jpg"
              }
              className="card-img-top rounded-circle"
              alt="..."
            />
            <p className="card-text display-6 text-info">{infoPlanet.name}</p>
            <p className="card-text lead descrHead">
              Climate:{" "}
              <span className="card-description descContent">
                {" "}
                {infoPlanet.climate}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead">
              Terrain:{" "}
              <span className="card-description descContent">
                {" "}
                {infoPlanet.terrain}
              </span>
            </p>
            <p className="card-text lead descrHead">
              Population:{" "}
              <span className="card-description descContent">
                {" "}
                {infoPlanet.population}
              </span>
            </p>
            <p className="card-text lead descrHead">
              Gravity:{" "}
              <span className="card-description descContent">
                {" "}
                {infoPlanet.gravity}
              </span>
            </p>
            <p className="card-text lead descrHead">
              Rotation period:
              <span className="card-description descContent">
                {" "}
                {infoPlanet.rotation_period}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead">
              Orbital period:
              <span className="card-description descContent">
                {" "}
                {infoPlanet.orbital_period}
              </span>
            </p>
            <p className="card-text lead descrHead">
              Surface water:
              <span className="card-description descContent">
                {" "}
                {infoPlanet.surface_water}
              </span>
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

export default PlanetsInfo;
