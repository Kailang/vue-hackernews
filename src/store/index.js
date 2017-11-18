import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default new Vuex.Store({
	actions, mutations, getters,

	state: {
		itemsPerPage: 20,

		activeSection: null,
		activePage: 0,

		activeItems: [],

		users: {},

		items: {},
		lists: {
			top: [],
			new: [],
			show: [],
			ask: [],
			job: [],
		},
	},
});
