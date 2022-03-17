import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import  placeholder from "../../img/placeholder.jpg";

export const Card = ({character}) => {
    const { store, actions} = useContext(Context);
    const [url, setUrl] = useState('');

    useEffect(() => {
        fetch (`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`).then((image)=> {image.status == 200 ? setUrl(image.url) : setUrl(placeholder)})

    }, [store.chars])


    return (

        <div className="card mb-5 p-3 border-0 bg-dark">
            <img src={url} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title text-light">{character.name}</h5>
                <Link to={`/character/${character.uid}`}>
                    <span className="btn btn-outline-info mx-1 mt-2" href="#" role="button">
                        More info
                    </span>
                </Link>
                <button className="btn btn-outline-info mx-1 mt-2" onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>💖</button>
            </div>
        </div>
    )

}

Card.propTypes = {
    character: PropTypes.object
  };


  