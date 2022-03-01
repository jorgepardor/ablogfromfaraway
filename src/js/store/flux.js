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
				fetch('https://www.swapi.tech/api/planets?page=1')
				.then((response) => response.json())
				.then((data) => setStore({planets: data.results, planUrl: data.next}));
			},
			getStarships: () => {
				fetch('https://www.swapi.tech/api/starships?page=1')
				.then((response) => response.json())
				.then((data) => setStore({starships: data.results, shipUrl: data.next}));
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

			deleteFavourites: (type, id) => {
				setStore({favourites: [...getStore().favourites.filter((fav) => fav.id != id && fav.type == type)]})
				
			},

			
		}
	};
};

export default getState;
