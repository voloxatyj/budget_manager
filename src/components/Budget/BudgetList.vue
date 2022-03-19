<template>
	<budget-list-item
		v-for="budget in Budget"
		:key="budget.id"
		:budget="budget"
	/>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const store = inject('store');
		let Budget = store.Budget.state.Budget

		return {
			store,
			Budget
		}
	},
	components: {
		'budget-list-item': require('components/Budget/BudgetListItem').default
	}
}
</script>
