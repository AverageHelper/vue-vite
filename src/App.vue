<template>
	<h1>accountable</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
</script>

<style lang="scss">
@use "styles/colors" as *;
@use "styles/setup" as *;

html {
	background: color($background);
	color: color($label);
}

a {
	color: color($blue);
}

#app {
	position: relative;
	max-height: 100vh;
	min-height: 100vh;
	overflow: auto;
	-webkit-overflow-scrolling: touch;

	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
		"Open Sans", "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
