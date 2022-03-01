import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export const Card = ({character}) => {
    const { store, actions} = useContext(Context);
    const [info, setInfo] = useState({});
   const [description, setDescription] = useState('');

    useEffect(() => {
        getInfo();
    }, [])

    const getInfo = async () => {
        let data = await actions.getInfoCharacter(character.uid);
        setInfo(data);
        // console.log(data);
    }

    return (

        <div className="card mb-5 p-3 border-0">
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+character.uid+".jpg"} className="card-img-top rounded-circle" alt="..." />
            <div className="card-body text-center">
                <h4 className="card-title">{character.name}</h4>
                {/* <p className="card-text lead descrHead">Birth year: <span className="card-description descContent">{infoCharacter.birth_year}</span></p> */}
                <Link to={`/character/${character.uid}`}>
                    <span className="btn btn-outline-info" href="#" role="button">
                        More info
                    </span>
                </Link>
                <button className="btn btn-primary" onClick={() => {actions.setFavourites({type:"character", id: character.uid, name: character.name})}}>Add to favs</button>
            </div>
        </div>
    )

}

Card.propTypes = {
    character: PropTypes.object
  };


  