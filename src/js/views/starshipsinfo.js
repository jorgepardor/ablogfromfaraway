import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import "../../styles/home.css";

const StarshipInfo = () => {
  const { store, actions } = useContext(Context);
  const [infoStarship, setInfoStarship] = useState({});
  const params = useParams();

  // console.log();

  useEffect(async () => {
    const data = await actions.getinfoStarship(params.theid);
    setInfoStarship(data);
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
              {infoStarship.name}
            </p>
            <p className="card-text lead descrHead mt-3 text-light">
              Speed:{" "}
              <span className="text-info">
                {infoStarship.max_atmosphering_speed} km/h atmosphering
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Price:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.cost_in_credits} credits
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Model:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.model}
              </span>
            </p>
            <p className="card-text lead descrHead text-light">
              Manufacturer:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.manufacturer}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Class:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.starship_class}
              </span>
            </p>
            <p className="card-text lead descrHead text-light">
              Length:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.length}
              </span>
            </p>
            <p className="card-text lead descrHead text-light">
              Crew:
              <span className="text-info">
                {" "}
                {infoStarship.crew}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Capacity:
              <span className="text-info">
                {" "}
                {infoStarship.cargo_capacity} Kg
              </span>
            </p>
            <p className="card-text lead descrHead text-light">
              Consumables:
              <span className="text-info">
                {" "}
                {infoStarship.consumables}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Passengers:
              <span className="text-info">
                {" "}
                {infoStarship.passengers}
              </span>{" "}
            </p>
            <p className="card-text lead descrHead text-light">
              Hyperdrive rating:{" "}
              <span className="text-info">
                {" "}
                {infoStarship.hyperdrive_rating}
              </span>{" "}
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

export default StarshipInfo;
