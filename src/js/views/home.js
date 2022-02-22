import React, { useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => {
	const url = 'https://www.swapi.tech/api/';
	const people = 'people/';
	const planets = 'planets/';
	const starships = 'starships/';

	const arrayPath = [people, planets, starships];

	
	
	useEffect(() => {
		fetch(`${url}${arrayPath[0]}`)
			.then((response) => response.json())
			.then((result) => {
				console.log("useEffect funcionando");
				console.log(result);
			});
	}, );

	return <p>hola</p>

};


