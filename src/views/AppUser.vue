<template lang="pug">
	div.container.mt-4(v-if="user")
		h1.h5 User : {{ user.id }}
		div Created: {{ user.created | timeAgo }} ago
		div Karma: {{ user.karma }}

		div.mt-3(v-if="user.about", v-html="user.about")
</template>

<script>
	export default {
		computed: {
			user() {
				return this.$store.state.users[this.$route.params.id];
			},
		},

		beforeMount() {
			this.$store.dispatch('cacheUserById', { id: this.$route.params.id });
		},
	};
</script>