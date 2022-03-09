import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import CharacterInfo from "./views/characterinfo.js";
import PlanetsInfo from "./views/planetsinfo";
import StarshipInfo	from "./views/starshipsinfo"	
import injectContext from "./store/appContext";
import background from "../img/background.png"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (

		<div style={{backgroundImage:`url(${background})`, backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height:"vh100"}}>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/character/:theid">
							<CharacterInfo />
						</Route>
						<Route exact path="/planet/:theid">
							<PlanetsInfo />
						</Route>
						<Route exact path="/starship/:theid">
							<StarshipInfo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
