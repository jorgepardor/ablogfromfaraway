import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.png"


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark mb-3">
			<img src={logo} className="px-5 my-3" style={{height: "64px"}}/>
	
			<div class="dropdown mx-5">
				<button class="btn btn-light dropdown-toggle " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites 💖
				</button>
				<ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
					<li><a class="dropdown-item active" href="#">Action</a></li>
					<li><a class="dropdown-item" href="#">Another action</a></li>
					<li><a class="dropdown-item" href="#">Something else here</a></li>
					<li><hr class="dropdown-divider"/></li>
					<li><a class="dropdown-item" href="#">Separated link</a></li>
				</ul>
			</div>
		</nav>
	);
};


