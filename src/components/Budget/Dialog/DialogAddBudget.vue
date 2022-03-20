<template>
	
	<app-dialog
		v-model="store.Budget.state.showAddBudgetDialog"
		label="Add Budget"
		@submit="onSubmit"
	>

		<app-dialog-input
			v-model="addBudgetForm.name"
			class="q-mb-sm"
			placeholder="Budget name e.g. John Doe"
			icon="las la-pencil-alt"
			autofocus
		>
			<tooltip
				v-model="store.tooltips.state.budgets.enterBudgetName.show"
				no-parent-event
				anchor="top middle"
				self="bottom middle"
				max-width="200px"
			>
				{{`${t('Enter a name for your budget. You may use month of the Year')}`}}
			</tooltip>
		</app-dialog-input>

		<app-dialog-select
			v-model="addBudgetForm.currencySymbol"
			:options="currencySymbolOptions"
			placeholder="Currency symbol"
			icon="las la-coins"
		>
			<tooltip
				v-model="store.tooltips.state.budgets.chooseCurrency.show"
				no-parent-event
				anchor="top middle"
				self="bottom middle"
				max-width="200px"
			>
				{{`${t('You can choose needable for you currency')}`}}
			</tooltip>
		</app-dialog-select>

		<app-dialog-checkbox
			v-model="addBudgetForm.addStarredItems"
			label="Add Starred Items?"
			class="q-mt-md"
		/>

			<transition
				appear
				enter-active-class="animated fadeInDown"
				enter-active-class="animated fadeOutUp"
			>
				<template v-if="addBudgetForm.addStarredItems">
					<app-dialog-radio
						v-model="addBudgetForm.increaseStarredDatesBy"
						:options="increaseStarredDatesBy"
						label="Increase dates by:"
						small
						indented
					/>
				</template>
			</transition>

		<app-dialog-checkbox
			v-model="addBudgetForm.addCarryOver"
			label="Add Carry Over?"
		/>
		
		<template v-slot:buttons>
			<btn
				label="Create"
				color="secondary"
				:disable="!addBudgetForm.name"
				type="submit"
			/>
		</template>

	</app-dialog>

</template>

<script>
import { inject, reactive, ref, onMounted } from 'vue'
import AppDialogCheckbox from 'src/.vue'
import AppDialogCheckbox from 'src/components/~Global/AppDialog/AppDialogCheckbox.vue'

export default {
	name: 'DialogAddBudget',
	setup() {
		const store = inject('store')

		let addBudgetForm = reactive({
			name: null,
			currencySymbol: '$'
		})

		const currencySymbolOptions = ref([
			{
				label: '$ ~ Dollar',
				value: '$'
			}
		])

		const onSubmit = () => {
			console.log('addBudgetForm', addBudgetForm)
			store.Budget.actions.addBudget(addBudgetForm)
		}

		onMounted(() => {
			console.log('Mounted')
			addBudgetForm.name = null
			addBudgetForm.currencySymbol = '$'
		})

		return {
			store,
			onSubmit
		}
	},
	components: { 
		'tooltip': require('components/~Global/Tooltip').default,
		'app-dialog-checkbox': require('components/~Global/AppDialog/AppDialogCheckbox').default,
		'app-dialog-input': require('components/~Global/AppDialog/AppDialogInput').default,
		'app-dialog-select': require('components/~Global/AppDialog/AppDialogSelect').default,
	},
}
</script>
AppDialogCheckbox