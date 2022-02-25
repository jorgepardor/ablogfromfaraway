import React, { useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import {Card} from "../component/card.js";
import {CardPlanets} from "../component/cardPlanets.js";
import {CardStarships} from "../component/cardStarships.js";
import "../../styles/home.css";


export const Home = () => {
	const {store, actions} = useContext(Context);
	
	useEffect(() => {
		actions.getCharacters();
		actions.getPlanets();
		actions.getStarships();
	}, [])


	return (
		<div className="container">
			<p className="display-3 text-info text-center mb-4">Characters</p> 
			<div className="row row-cols-2 row-cols-md-5 g-4">
			{store.chars.map((e, i) => {
				return <Card key={i} character={e}/>
			})}
		</div>
		<p className="display-3 text-info text-center mb-4">Planets</p> 
		<div className="row row-cols-1 row-cols-md-5 g-4"> 
			{store.planets.map((e, i) => {
				return <CardPlanets key={i} planet={e}/>
			})}
		</div>
		<p className="display-3 text-info text-center mb-4">Starships</p> 
		<div className="row row-cols-1 row-cols-md-5 g-4"> 
			{store.starships.map((e, i) => {
				return <CardStarships key={i} starship={e}/>
			})}
		</div>
		</div>

		)
}
