import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import { Link,useParams } from "react-router-dom";
import  placeholder from "../../img/placeholder.jpg";

export const CardStarships = ({starship}) => {
    const {store, actions} = useContext(Context);
    const [info, setInfo] = useState({});
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch (`https://starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`).then((image)=> {image.status == 200 ? setUrl(image.url) : setUrl(placeholder)})
        getInfo();
    }, [])

    const getInfo = async () => {
        let data = await actions.getInfoStarship(starship.uid);
        setInfo(data);
    }

    return (

        <div className="card mb-5 p-3 bg-dark border-0">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h4 className="card-title text-light">{starship.name}</h4>
                <p className="card-title lead text-light">Manufacturer:  <span className="card-description">{info.manufacturer}</span></p>
                <Link to={`/starships/${starship.uid}`}>
                    <span className="btn btn-outline-info mx-1 mt-2" href="#" role="button">
                        More info
                    </span>
			    </Link>
                <button className="btn btn-outline-info mx-1 mt-2" onClick={() => {actions.setFavourites({type:"planet", id: planet.uid, name: planet.name})}}>💖</button>
            </div>
        </div>
    )

}

CardStarships.propTypes = {
    starship: PropTypes.object
  };