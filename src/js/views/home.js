import React, { useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import {Card} from "../component/card.js"
import "../../styles/home.css";


export const Home = () => {
	const { store, actions} = useContext(Context);
	
	useEffect(() => {
		actions.getCharacters();
	}, [])


	return (
		<div className="row row-cols-1 row-cols-md-5 g-4"> 
			{store.chars.map((e, i) => {
				return <Card key={i} character={e}/>
			})}
		</div>)
}
