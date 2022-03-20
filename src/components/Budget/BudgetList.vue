<template>
	<div
		class="budget-list-container"
		ref="budgetListContainerRef"
	>

		<draggable
			tag="transition-group"
			:component-data="{
				type: 'transition-group',
				name: !store.budget.state.draggable.dragging ? 'flip-list' : null
			}"
			v-model="store.budget.state.budget"
			v-bind="store.budget.state.draggable.options"
			@start="store.budget.state.draggable.dragging = true"
			@end="store.budget.state.draggable.dragging = false"
			item-key="id"
		>
			<template #item="{ element }">
				<div class="budget-list-item-draggable">
					<budget-list-item
						:budget="element"
					/>
				</div>
			</template>
		</draggable>

	</div>
</template>

<script>
import { inject, ref, onActivated } from 'vue'
import draggable from 'vuedraggable'

export default {
	setup() {
		const store = inject('store')
		const budgetListContainerRef = ref(null)

		onActivated(() => {
			calculateSwipeOffSetMin()
		})

		const calculateSwipeOffSetMin = () => {
			const btnIconList = budgetListContainerRef.value.querySelector('.btn-icon-list')
			const btnIconListWidth = btnIconList.offSetWidth
			store.budget.state.swipeOffSetMin = -Math.abs(btnIconListWidth) - 5
		}

		return {
			store,
			budgetListContainerRef
		}
	},
	components: {
		draggable,
		'budget-list-item': require('components/Budget/BudgetListItem').default
	}
}
</script>
