import accounts from "./modules/accounts";
import ui from "./modules/ui";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const createStore = () => {
	return {
		accounts,
		ui,
	};
};
