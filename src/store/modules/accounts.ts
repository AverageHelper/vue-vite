import { ref, reactive, readonly } from "@vue/reactivity";

interface Account {
	id: string;
}

const isLoadingAccounts = ref(true);
const accounts = reactive<Array<Account>>([]);
const addAccount = (acc: Account): void => {
	accounts.push(acc);
};

export default {
	isLoadingAccounts: readonly(isLoadingAccounts),
	accounts: readonly(accounts),
	addAccount,
};
