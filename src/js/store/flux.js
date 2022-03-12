const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chars: [],
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