
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


export const CardStarships = ({starship}) => {
    const {store, actions} = useContext(Context);
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

        <div className="card mb-5 p-3 border-0">
            <img src="https://picsum.photos/300/300" className="card-img-top rounded-circle" alt="..." />
            <div className="card-body text-center">
                <h4 className="card-title">{starship.name}</h4>
                <p className="card-title lead">Manufacturer:  <span className="card-description">{info.manufacturer}</span></p>
                <Link to={`/starships/${starship.uid}`}>
                    <span className="btn btn-outline-info" href="#" role="button">
                        More info
                    </span>
			    </Link>
            </div>
        </div>
    )

}

CardStarships.propTypes = {
    starship: PropTypes.object
  };