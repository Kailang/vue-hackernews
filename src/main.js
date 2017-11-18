import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Vue from 'vue';

import * as filters from './util/filters';
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import router from './router';
import store from './store';

import App from './views/App.vue';
new Vue({
	el: '#app',
	router, store,
	template: '<app />',
	components: { App },
});
