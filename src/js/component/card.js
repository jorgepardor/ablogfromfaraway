import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import { PostModal } from "./modal";

export const Card = ({character}) => {
    const { store, actions} = useContext(Context);
    const [info, setInfo] = useState({});
    const [modalShow, setModalShow] = React.useState(false);
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
                <p className="card-text text-light">{info.description}</p>
            
                <Button variant="outline-light" onClick={() => setModalShow(true)}>
                View more info
                </Button>
  
                <PostModal
                info={info}
                show={modalShow}
                onHide={() => setModalShow(false)}
                />

            </div>
        </div>
    )

}

Card.propTypes = {
    character: PropTypes.object
  };