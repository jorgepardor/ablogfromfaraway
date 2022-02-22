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
			}
		}
	};
};

export default getState;
