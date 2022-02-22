import React from "react";
import { Link } from "react-router-dom";
import {Tabs, Tab} from 'react-bootstrap';



export const InnerNav = () => {
	return (
		<Tabs defaultActiveKey="characters" id="#" className="mb-3">
            <Tab eventKey="characters" title="Characters">
                <p>primerdiv</p>
            </Tab>
            <Tab eventKey="planets" title="Planets">
                <p>segundodiv</p>
            </Tab>
            <Tab eventKey="starships" title="Starships">
                <p>tercerdiv</p>
            </Tab>
        </Tabs>
	);
};




















<ul className="nav nav-pills justify-content-center my-3" id="ViewMenu" role="tablist">

	<li className="nav-item" role="presentation">
		<Link to="/" className="nav-link text-gray" id="..." data-bs-toggle="tab" data-bs-target="..." type="button" role="tab" aria-controls="..." aria-selected="false">
			<p>Characters</p>
		</ Link>
	</li>

	<li className="nav-item" role="presentation">
		<link className="nav-link active text-gray" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
			<p>Planets</p>
		</link>
	</li>

	<li className="nav-item" role="presentation">
		<link className="nav-link active text-gray" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
			<p>Starships</p>
		</link>
	</li>

</ul>