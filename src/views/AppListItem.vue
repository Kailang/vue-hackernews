<template lang="pug">
	li.media
		div.mr-3.text-center(style="height: 60px; width: 60px")
			h4.text-danger {{ item.score }}
		div.media-body
			a.h5(v-if="item.url", :href="item.url") {{ item.title }} #[small.text-muted(v-if="item.url") ({{ item.url | host }})]
			router-link.h5(v-else, :to="'/item/' + item.id") {{ item.title }}
			div.text-muted
				span.mr-1 by #[router-link(:to="'/user/' + item.by") {{ item.by }}]
				span.mr-1 {{ item.time | timeAgo }} ago
				span(v-if="item.descendants").mr-1 | #[router-link(:to="'/item/' + item.id") {{ item.descendants }} comments]
				span(v-if="item.type != 'story'").text-dark | {{ item.type }}
</template>

<script>
	export default {
		props: { item: Object },
	};
</script>