const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chars: [{"uid":"1","name":"Luke Skywalker","url":"https://www.swapi.tech/api/people/1"},{"uid":"2","name":"C-3PO","url":"https://www.swapi.tech/api/people/2"},{"uid":"3","name":"R2-D2","url":"https://www.swapi.tech/api/people/3"},{"uid":"4","name":"Darth Vader","url":"https://www.swapi.tech/api/people/4"},{"uid":"5","name":"Leia Organa","url":"https://www.swapi.tech/api/people/5"},{"uid":"6","name":"Owen Lars","url":"https://www.swapi.tech/api/people/6"},{"uid":"7","name":"Beru Whitesun lars","url":"https://www.swapi.tech/api/people/7"},{"uid":"8","name":"R5-D4","url":"https://www.swapi.tech/api/people/8"},{"uid":"9","name":"Biggs Darklighter","url":"https://www.swapi.tech/api/people/9"},{"uid":"10","name":"Obi-Wan Kenobi","url":"https://www.swapi.tech/api/people/10"}],
			planets: [],
			starships: [],
			charUrl: "",
			planUrl: "",
			shipUrl: "",
			favourites: []
		},

		actions: {
			getCharacters: () => {
				if (getStore().charUrl == "") {
					fetch('https://www.swapi.tech/api/people?page=1')
					.then((response) => response.json())
					.then((data) => setStore({chars: data.results, charUrl: data.next}));
				}
				else if (getStore().charUrl != "") {
					fetch(getStore().charUrl)
					.then((response) => response.json())
					.then((data) => setStore({chars: data.results, charUrl: data.next}));
				}
			},

			getPlanets: () => {
					if (getStore().planUrl == "") {
					fetch('https://www.swapi.tech/api/planets?page=1')
					.then((response) => response.json())
					.then((data) => setStore({planets: data.results, planUrl: data.next}));
				}
					else if (getStore().planUrl != "") {
					fetch(getStore().planUrl)
					.then((response) => response.json())
					.then((data) => setStore({planets: data.results, planUrl: data.next}));
				}
			},

			getStarships: () => {
				if (getStore().shipUrl == "") {
				fetch('https://www.swapi.tech/api/starships?page=1')
				.then((response) => response.json())
				.then((data) => setStore({starships: data.results, shipUrl: data.next}));
				}
				else if (getStore().shipUrl != "") {
					fetch(getStore().shipUrl)
					.then((response) => response.json())
					.then((data) => setStore({starships: data.results, shipUrl: data.next}));
				}

			},

			getInfoCharacter: async (id) => {
				let response = await fetch('https://www.swapi.tech/api/people/'+ id)
				let data = await response.json();
				return data.result.properties;
			},

			getInfoPlanet: async (id) => {
				let response = await fetch('https://www.swapi.tech/api/planets/'+ id)
				let data = await response.json();
				return data.result.properties;
			},
			
			getInfoStarship: async (id) => {
				let response = await fetch('https://www.swapi.tech/api/starships/'+ id)
				let data = await response.json();
				return data.result.properties;
			},

			setFavourites: (fav) => {
				setStore({favourites: [...getStore().favourites, fav]}) 
			},

			deleteFavourites: (index) => {
				setStore({favourites: [...getStore().favourites.filter((fav, i) => index != i)]})
				
			},

			
		}
	};
};

export default getState;
