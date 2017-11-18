import axios from 'axios';

const createUrl = child => `https://hacker-news.firebaseio.com/v0/${child}.json?print=pretty`;

function fetch(child) {
	return axios.get(createUrl(child)).then(res => {
		console.log('api fetched');// , child, res.data);

		return res.data;
	});
}

export function fetchIdsBySection(section) {
	console.log('api fetchIdsBySection', section);

	return fetch(`${section}stories`);
}

export function fetchItemsByIds(ids) {
	console.log('api fetchItemsByIds', ids);

	return Promise.all(ids.map(id => fetch(`item/${id}`)));
}

export function fetchUserById(id) {
	console.log('api fetchUserById', id);

	return fetch(`user/${id}`);
}
