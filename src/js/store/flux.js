const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chars: [],
			planets: [],
			starships: []
		},
		actions: {
			getCharacters: () => {
				fetch('https://www.swapi.tech/api/people?page=1&limit=5')
				.then((response) => response.json())
				.then((data) => setStore({chars: data.results}));
			},

			getCharactersPics: () => {
				fetch('https://starwars-visualguide.com/assets/img/characters/')
				.then((response) => response.json())
				.then((data) => console.log(data));
			},

			getPlanets: () => {
				fetch('https://www.swapi.tech/api/planets?page=1&limit=5')
				.then((response) => response.json())
				.then((data) => setStore({planets: data.results}));
			},
			getStarships: () => {
				fetch('https://www.swapi.tech/api/starships?page=1&limit=5')
				.then((response) => response.json())
				.then((data) => setStore({starships: data.results}));
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

			}
		}
	};
};

export default getState;
