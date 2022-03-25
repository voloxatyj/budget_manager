import { reactive } from '@vue/reactivity'
import { uid } from 'quasar'
import { useDialogConfirm } from 'src/use/useDialogConfirm'

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
	renderBudgetList: true,
	showAddBudgetDialog: false,
	drawer: {
		show: false,
		label: 'Budget Menu',
		fields: {
			selectMultipleItems: {
				type: 'pane-drawer-field-item',
				label: 'Select Multiple Items',
				icon: 'las la-check-circle',
				click() {
					console.log('"Select Multiple Items" clicked!')
				}
			},
			addFolder: {
				type: 'pane-drawer-field-item',
				label: 'Add Folder',
				icon: 'folder',
				click() {
					console.log('"Add Folder" clicked!')
				}
			},
			separator: { type: 'pane-drawer-field-separator' },
			showAllBudgetBalance: {
				type: 'pane-drawer-field-checkbox',
				proxyTo: 'budgetOptions.fields.showAllBudgetBalance'
			}
		}
	},
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
	deleteBudget(budget) {
		useDialogConfirm({
			title: `${t('Delete Budget')}`,
			message: `${t('Are you sure you want to delete the budget?')} <b>${budget.name}</b> ?`,
			ok: {
				label: 'Delete',
				color: 'negative'
			},
		}).onOk(() => {
			setTimeout(() => {
				state.budget = state.budget.filter((item) => {
					return item.id !== budget.id
				}, 50)
			})
		})
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