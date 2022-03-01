import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.png"
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar navbar-dark mb-3">
			<img src={logo} className="px-5 my-3" style={{height: "64px"}}/>
	
			<div className="dropdown mx-5">
				<button className="btn btn-dark dropdown-toggle " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites 💖
				</button>
				<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
					{store.favourites.map((favourite) => {
						return <li key={favourite.id}>{favourite.name} <button className="btn btn-warning" onClick={() => {actions.deleteFavourites(favourite.type,favourite.id)}}>❌</button></li>
					})}
				</ul>
			</div>
		</nav>
	);
};


