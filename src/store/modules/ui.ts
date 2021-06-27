import { ref, readonly } from "@vue/reactivity";
import Logger from "js-logger";

export type ColorScheme = "light" | "dark";

const preferredColorScheme = ref<ColorScheme>("light");
const setPreferredColorScheme = (s: ColorScheme): void => {
	Logger.info("User wants color scheme:", s);
	preferredColorScheme.value = s;
};

// Set watcher (once)
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
const isNotSpecified = window.matchMedia("(prefers-color-scheme: no-preference)").matches;
const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified;

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", e => e.matches && setPreferredColorScheme("dark"));

window
	.matchMedia("(prefers-color-scheme: light)")
	.addEventListener("change", e => e.matches && setPreferredColorScheme("light"));

if (isDarkMode) setPreferredColorScheme("dark");
if (isLightMode) setPreferredColorScheme("light");
if (isNotSpecified || hasNoSupport) {
	Logger.info("System color scheme not supported. Defaulting to light.");
	setPreferredColorScheme("light");
}

export default {
	/**
	 * The browser's current color scheme preference.
	 *
	 * Use this value to change behavior based on the device's color preference.
	 */
	preferredColorScheme: readonly(preferredColorScheme),
};
