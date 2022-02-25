import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";

export const CardPlanets = ({planet}) => {
    const {store, actions} = useContext(Context);
    const [info, setInfo] = useState({});


    useEffect(() => {
        getInfo();
    }, [])
    const getInfo = async () => {
        let data = await actions.getInfoPlanet(planet.uid);
        setInfo(data);
    }

    return (

        <div className="card bg-dark mb-5 border-0">
            <img src="https://picsum.photos/300/300" className="card-img-top rounded-circle" alt="..." />
            <div className="card-body text-center">
                <h4 className="card-title">{planet.name}</h4>
                <p className="card-text">Population: <span className="card-description">{info.population}</span></p>
                <Link to={`/planet/${planet.uid}`}>
                    <span className="btn btn-outline-info" href="#" role="button">
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