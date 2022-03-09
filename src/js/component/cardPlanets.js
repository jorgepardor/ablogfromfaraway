import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link, useParams } from "react-router-dom";
import  placeholder from "../../img/placeholder.jpg";


export const CardPlanets = ({planet}) => {
    const {store, actions} = useContext(Context);
    const [info, setInfo] = useState({});
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch (`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`).then((image)=> {image.status == 200 ? setUrl(image.url) : setUrl(placeholder)})
        getInfo();
    }, [])
    const getInfo = async () => {
        let data = await actions.getInfoPlanet(planet.uid);
        setInfo(data);
    }

    return (

        <div className="card mb-5 p-3 bg-dark border-0">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h4 className="card-title text-light">{planet.name}</h4>
                <p className="card-text text-light">Population: <span className="card-description">{info.population}</span></p>
                <Link to={`/planet/${planet.uid}`}>
                    <span className="btn btn-outline-info mx-1 mt-2" href="#" role="button">
                        More info
                    </span>
			    </Link>
                <button className="btn btn-outline-info mx-1 mt-2" onClick={() => {actions.setFavourites({type:"planet", id: planet.uid, name: planet.name})}}>💖</button>
            </div>
        </div>
    )

}

CardPlanets.propTypes = {
    planet: PropTypes.object
  };