import { reactive } from '@vue/reactivity';

const state = reactive({
	loggedIn: false,
	showQBudgetPlusPopup: false,
	subscribed: false
});

export default {
	state
};