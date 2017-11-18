import createAppList from '../views/createAppList';

import AppItem from '../views/AppItem';
import AppUser from '../views/AppUser';

export default [
	{ path: '/top/:page(\\d+)?', component: createAppList('top') },
	{ path: '/new/:page(\\d+)?', component: createAppList('new') },
	{ path: '/show/:page(\\d+)?', component: createAppList('show') },
	{ path: '/ask/:page(\\d+)?', component: createAppList('ask') },
	{ path: '/job/:page(\\d+)?', component: createAppList('job') },

	{ path: '/item/:id(\\d+)', component: AppItem },
	{ path: '/user/:id([\\d\\w]+)', component: AppUser },

	{ path: '/', redirect: '/top' },
];
