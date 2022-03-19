import { reactive } from '@vue/reactivity';
import { uid } from 'quasar';

const state = reactive({
	Budget: [
		// {
		// 	id: 'id1',
		// 	name: 'March',
		// 	currencySymbol: '$'
		// }
	],
	showAddBudgetDialog: false
});

const actions = {
	addBudget(addBudgetForm) {
		let newBudget = Object.assign({}, addBudgetForm);
		newBudget.id = uid();
		state.Budget.push(newBudget);
		state.showAddBudgetDialog = false;
	}
};

export default {
	state,
	actions
};