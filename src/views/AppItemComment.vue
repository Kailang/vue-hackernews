<template lang="pug">
	li.mb-3( v-if="item")
		div.text-muted #[router-link(:to="'/user/' + item.by") {{ item.by }}] {{ item.time | timeAgo }} ago

		div(v-html="item.text")

		template.mb-3(v-if="item.kids")
			button.my-3.btn.btn-sm.btn-light(@click="open = !open") {{ open ? '[-]' : '[+] ' + item.kids.length + ' collapsed' }}
			ul.list-unstyled.ml-4(v-show="open")
				app-item-comment(v-for="id in item.kids", :key="id", :id="id")
</template>

<script>
	export default {
		name: 'app-item-comment',

		props: { id: Number },

		data() {
			return {
				open: true,
			};
		},

		computed: {
			item() {
				return this.$store.state.items[this.id];
			},
		},
	};
</script>