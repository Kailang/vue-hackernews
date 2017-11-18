<template lang="pug">
	div
		header
			nav.navbar.navbar-expand-sm.navbar-light.bg-light
				router-link.navbar-brand(to="/" exact) Hacker News

				form.form-inline(@submit.prevent="search()")
					div.input-group
						input.form-control(v-model="query", required, type="text", name="q", placeholder="Search...")

				div.navbar-nav.mr-auto
					router-link.nav-link(to="/top") Top
					router-link.nav-link(to="/new") New
					router-link.nav-link(to="/show") Show
					router-link.nav-link(to="/ask") Ask
					router-link.nav-link(to="/job") Jobs

				div.navbar-nav
					router-link.nav-link(to="/dashboard") Dashboard

		router-view.view
</template>

<script>
	export default {
		data() {
			return {
				query: '',
			};
		},

		methods: {
			search() {
				console.log('search', this.$router.push(this.$route.path + '?q=' + this.query));
			},
		},
	};
</script>