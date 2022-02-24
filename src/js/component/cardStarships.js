
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';

export const CardStarships = ({starship}) => {
    const { store, actions} = useContext(Context);
    const [info, setInfo] = useState({});


    useEffect(() => {
        getInfo();
    }, [])
    const getInfo = async () => {
        let data = await actions.getInfoStarship(starship.uid);
        setInfo(data);
        console.log(data);
    }

    return (

        <div className="card bg-dark">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{starship.name}</h5>
                <p className="card-text">Manufacturer: {info.manufacturer}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}

CardStarships.propTypes = {
    starship: PropTypes.object
  };