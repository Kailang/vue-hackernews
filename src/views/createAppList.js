import AppList from './AppList.vue';

export default function create(section) {
	return {
		name: `app-list-${section}`,
		template: `<app-list section="${section}" />`,
		components: { AppList },
	};
};
