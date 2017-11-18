import { fetchIdsBySection, fetchItemsByIds, fetchUserById } from './api';

export default {
	setActiveSection({ state, commit }, { section }) {
		console.log('store action setActiveSection', section);

		return fetchIdsBySection(section).then(ids => {
			commit('setListBySection', { section, ids });
			commit('setActiveSection', { section });
		});
	},

	setActivePage({ state, commit, dispatch }, { page }) {
		console.log('store action setActivePage', page);

		const start = (page - 1) * state.itemsPerPage;
		const end = page * state.itemsPerPage;

		const ids = state.lists[state.activeSection].slice(start, end);

		return dispatch('cacheItemsByIds', { ids }).then(() => {
			commit('setActivePage', { page });
			commit('setActiveItems', { items: ids.map(a => state.items[a]) });
		});
	},

	cacheItemsByIds({ state, commit }, { ids }) {
		return fetchItemsByIds(ids.filter(id => !state.items[id])).then(items => {
			if (items.length) commit('setItems', { items });
		});
	},

	cacheUserById({ state, commit }, { id }) {
		if (!state.users[id]) {
			return fetchUserById(id).then(user => {
				commit('setUser', { user });
			});
		}
	},
};
