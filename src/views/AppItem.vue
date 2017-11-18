<template lang="pug">
	div.container.mt-4(v-if="item")
		h1.h5 {{ item.title }} #[small.text-muted ({{ item.url | host }})]
		div.text-muted {{ item.score }} points | by #[router-link(:to="'/user/' + item.by") {{ item.by }}] {{ item.time | timeAgo }} ago

		div.mt-4(v-if="item.descendants")
			h2.h5.text-weight-normal {{ item.descendants }} comments
			ul.list-unstyled
				app-item-comment(v-for="id in item.kids", :key="id", :id="id")
</template>

<script>
	import AppItemComment from './AppItemComment';

	export default {
		components: { AppItemComment },

		computed: {
			item() {
				return this.$store.state.items[this.$route.params.id];
			},
		},

		beforeMount() {
			this.$store.dispatch('cacheItemsByIds', { ids: [ this.$route.params.id ] }).then(() => {
				return fetchKidsRecursive(this.$store, this.item);
			});
		},
	};

	function fetchKidsRecursive(store, item) {
		if (item && item.kids) {
			return store.dispatch('cacheItemsByIds', { ids: item.kids }).then(() =>
				Promise.all(item.kids.map(id => fetchKidsRecursive(store, store.state.items[id]))));
		} else return Promise.resolve();
	}
</script>