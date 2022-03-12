import { reactive } from 'vue';

const state = reactive({
	loggedIn: false,
	showQBudgetPlusPopup: false,
	subscribed: false
});

export default {
	state
};