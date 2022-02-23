const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			chars: []

		},
		actions: {
			getCharacters: () => {
				fetch('https://www.swapi.tech/api/people')
				.then((response) => response.json())
				.then((data) => setStore({chars: data.results}));
			},
			getInfoCharacter: async (id) => {
				let response = await fetch('https://www.swapi.tech/api/people/'+ id)
				let data = await response.json();
				return data.result.properties;
			}
		}
	};
};

export default getState;
