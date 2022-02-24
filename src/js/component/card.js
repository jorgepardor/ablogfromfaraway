import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
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
        console.log(data);
    }

    return (

        <div className="card bg-dark">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title lead text-light">{character.name}</h5>
                <Link to={`/info/${character.uid}`}>{character.name}</Link>
            </div>
        </div>
    )

}

Card.propTypes = {
    character: PropTypes.object
  };


  