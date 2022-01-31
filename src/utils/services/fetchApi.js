
/**
 * Service to fetch Token from MongoDB with API
 * @param {object} credentials email and password used to connect
 * @returns {Promise} data containing user's token
 */

export const getToken = (credentials) => {
	return fetch("http://localhost:3001/api/v1/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
};

/**
 * Service to fetch User Profile from MongoDB with API
 * @param {string} token auth otken used to get user's infos
 * @returns {Promise} data containing user's infos
 */

export const getUser = (token) => {
	return fetch("http://localhost:3001/api/v1/user/profile", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
};
