<template>
	<q-dialog
		v-model="store.account.state.showQBudgetPopup"
		class="popup qbudget-plus-popup"
		transition-show="slide-up"
		transition-hide="slide-down"
		:maximized="$q.screen.lt.md ? true: false"
	>
		<div class="bg-white relative-position">

			<div
				class="popup-content full-width q-pa-lg"
				:class="$q.screen.lt.md ? 'absolute-center' : 'relative-position'"
			>

				<div class="restrain-400">

					<qbudget-plus-popup-sale v-if="!store.account.state.subscribed" />

					<qbudget-plus-popup-register v-else />

				</div>
			</div>
		</div>
	</q-dialog>
</template>