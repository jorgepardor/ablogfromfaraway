import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

export const CardPlanets = ({planet}) => {
    const { store, actions} = useContext(Context);
    const [info, setInfo] = useState({});


    useEffect(() => {
        getInfo();
    }, [])
    const getInfo = async () => {
        let data = await actions.getInfoPlanet(planet.uid);
        setInfo(data);
        // console.log(data);
    }

    return (

        <div className="card bg-dark">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title lead text-light">{planet.name}</h5>
                <p className="card-text">Population: {info.population}</p>
                <Link to={`/planet/${planet.uid}`}>
                    <span className="btn btn-primary btn-lg" href="#" role="button">
                        More info
                    </span>
			    </Link>
            </div>
        </div>
    )

}

CardPlanets.propTypes = {
    planet: PropTypes.object
  };