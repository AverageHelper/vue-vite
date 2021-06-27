<template>
	<header>
		<slot name="left" />
		<h2>{{ title }}</h2>
		<slot name="right" />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "NavigationBar",
	props: {
		title: { type: String, default: "accountable" },
	},
});
</script>

<style lang="scss" scoped>
@use "styles/colors" as *;

header {
	text-align: center;
	padding: 1em;
	background-color: color($navbar-background);
	border-bottom: 1px solid color($gray4);
}

h2 {
	margin: 0;
}
</style>
