import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const CardPlanets = ({planet}) => {
    const { store, actions} = useContext(Context);
    const [info, setInfo] = useState({});


    useEffect(() => {
        getInfo();
    }, [])
    const getInfo = async () => {
        let data = await actions.getInfoPlanet(planet.uid);
        setInfo(data);
        console.log(data);
    }

    return (

        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">Population: {info.population}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}

CardPlanets.propTypes = {
    planet: PropTypes.object
  };