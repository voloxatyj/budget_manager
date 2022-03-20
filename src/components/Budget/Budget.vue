<template>
	<pane
		left
	>
		<pane-header>
			<template v-slot:title>Budget</template>
			<template v-slot:buttons-right>
				<pane-header-btn
					icon="las la-bars"
				/>
			</template>
		</pane-header>
		<pane-body>
			<div class="q-pa-md">
				
				<budget-list
					v-if="store.budget.state.budget.length"
				/>

				<nothing-here
					v-else
					icon="la la-wallet"
					label="No Budget yet"
				/>
				
			</div>
		</pane-body>
		<pane-footer>
			<div class="q-ma-sm">
				<btn
					@click="store.budget.state.showAddBudgetDialog = true"
					label="Add Budget"
					color="secondary"
					full-width
				/>
			</div>
		</pane-footer>
	</pane>

	<dialog-add-budget v-if="store.Budget.state.showAddBudgetDialog" />	
</template>

<script>
import { inject } from 'vue';

export default {
	name: 'Budget',
	setup () {
		const store = inject('store');

		return {
			store
		}
	},
	components: {
		'budget-list': require('components/Budget/BudgetList').default, 
		'pane-header-btn': require('components/~Global/Pane/PaneHeaderButton').default,
		'btn': require('components/~Global/Buttons/Btn.vue').default,
		'dialog-add-budget': require('components/Budget/DialogAddBudget').default
	}
}
</script>