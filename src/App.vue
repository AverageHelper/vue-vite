<template>
	<NavigationBar title="some" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import NavigationBar from "./components/NavigationBar.vue";

export default defineComponent({
	name: "App",
	components: {
		NavigationBar,
	},
});
</script>

<style lang="scss">
@use "styles/colors" as *;
@use "styles/setup" as *;

* {
	box-sizing: border-box;
}

html {
	background: color($background);
	color: color($label);
}

body {
	margin: 0;
	max-height: 100vh;
	min-height: 100vh;
	max-width: 100vw;
	min-width: 100vw;
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
		"Open Sans", "Helvetica Neue", Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
