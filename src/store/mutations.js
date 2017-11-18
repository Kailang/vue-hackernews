import Vue from 'vue';

export default {
	setActiveSection(state, { section }) {
		state.activeSection = section;
	},
	setActivePage(state, { page }) {
		state.activePage = page;
	},
	setActiveItems(state, { items }) {
		state.activeItems = items;
	},

	setListBySection(state, { section, ids }) {
		Vue.set(state.lists, section, ids);
	},
	setItems(state, { items }) {
		items.forEach(item => Vue.set(state.items, item.id, item));
	},
	setUser(state, { user }) {
		Vue.set(state.users, user.id, user);
	},
};
