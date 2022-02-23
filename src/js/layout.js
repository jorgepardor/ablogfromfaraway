import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { InnerNav } from "./component/innernav";
import { CardList } from "./component/cardlist";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>

				<ScrollToTop>
					
					<Navbar />

					<InnerNav />

					<Switch>
						<Route exact path="characters">
							<CardList />
						</Route>

						<Route exact path="planets">
							<CardList />
						</Route>

						<Route exact path="starships">
							<CardList />
						</Route>

					</Switch>

					<CardList />

					<Footer />

				</ScrollToTop>

			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
