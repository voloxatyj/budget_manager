import { reactive } from '@vue/reactivity'
import { uid } from 'quasar'

const state = reactive({
	budget: [
		{
			id: 'id1',
			name: 'March',
			currencySymbol: '$'
		},
		{
			id: 'id2',
			name: 'April',
			currencySymbol: '$'
		}
	],
	showAddBudgetDialog: false,
	swipeOffSetMin: -205,
	draggable: {
		options: {
			animation: 200,
			group: 'budget',
			disabled: false,
			ghostClass: 'ghost',
			direction: 'vertical',
			delay: 200,
			delayOnTouchOnly: true
		},
		dragging: false
	}
})

const actions = {
	addBudget(addBudgetForm) {
		let newBudget = Object.assign({}, addBudgetForm)
		newBudget.id = uid()
		state.budget.push(newBudget)
		state.showAddBudgetDialog = false
	},
	disableDraggable() {
		state.draggable.options.disabled = true
	},
	enableDraggable() {
		state.draggable.options.disabled = false
	}
}

export default {
	state,
	actions
}