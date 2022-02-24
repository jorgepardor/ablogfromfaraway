import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.png"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<img src={logo} style={{height: "64px"}}/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			
			<div className="ml-auto">

				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
