import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card } from "../component/card";
import { CardList } from "../component/cardlist";

export const Home = () => {

<<<<<<< HEAD
	const arrayPath = [people, planets, starships];

	const randomPath = () => {
		return Math.floor(Math.random()* 3)
	}
	
	useEffect(() => {
		fetch(`${url}${arrayPath[0]}`)
			.then((response) => response.json())
			.then((result) => {
				console.log("useEffect funcionando");
				console.log(result);
			});
	}, );
=======
	return 
>>>>>>> origin/main


};


