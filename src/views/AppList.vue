<template lang="pug">
	div
		nav.nav.nav-tabs.justify-content-center
			router-link.nav-link(v-if="page > 1", :to="'/' + section + '/' + (page - 1)") &larr; prev
			a.nav-link(v-else, disabled) &larr; prev

			span.nav-link {{ page }} / {{ maxPage }}

			router-link.nav-link(v-if="page < maxPage", :to="'/' + section + '/' + (page + 1)") next &rarr;
			a.nav-link(v-else, disabled) next &rarr;

		div.container.mt-4
			//- ul.list-unstyled
			transition(name="list")
				ul.list-unstyled(:key="page", style="position: absolute")
					app-list-item(v-for="item in items", :key="item.id", :item="item")
</template>

<script>
	import AppListItem from './AppListItem';

	export default {
		components: { AppListItem },

		props: { section: String },

		data() {
			return {
			};
		},

		computed: {
			page() {
				return Number(this.$route.params.page) || 1;
			},
			maxPage() {
				const { itemsPerPage, lists } = this.$store.state;
				return Math.ceil(lists[this.section].length / itemsPerPage);
			},
			items() {
				return this.$store.state.activeItems;
			},
		},

		watch: {
			page(val) {
				return this.loadItems(val);
			},
		},

		methods: {
			loadItems(page) {
				console.log(`loading page ${page}`);

				return this.$store.dispatch('setActivePage', { page });
			},
		},

		beforeMount() {
			console.log('beforeMount');

			return this.$store.dispatch('setActiveSection', { section: this.section }).then(() => {
				this.loadItems(this.page);
			});
		},
	};
</script>

<style>
	.list-enter-active, .list-leave-active {
		transition: all 0.5s;
	}
	.list-enter {
		opacity: 0;
		transform: translateX(-30px);
	}
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>