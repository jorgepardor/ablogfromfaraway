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
			getCharacters: (url) => {
				url = url == undefined ? getStore().charUrl : url
					fetch(url)
					.then((response) => response.json())
					.then((data) => setStore({chars: data.results, charUrl: data.next}));
			},

			getPlanets: (url) => {
				url = url == undefined ? getStore().planUrl : url
				fetch(url)
				.then((response) => response.json())
				.then((data) => setStore({planets: data.results, planUrl: data.next}));
			},

			getStarships: (url) => {
				url = url == undefined ? getStore().shipUrl : url
				fetch(url)
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
				if (!getStore().favourites.map((x) => {return x.name}).includes(fav.name)) {
					setStore({favourites: [...getStore().favourites, fav]})}
				 
			},

			deleteFavourites: (index) => {
				
				setStore({favourites: [...getStore().favourites.filter((fav, i) => index != i)]})
				
			},

			
		}
	};
};

export default getState;