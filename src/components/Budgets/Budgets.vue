<template>
	<pane
		left
	>
		<pane-header>
			<template v-slot:title>Budgets</template>
			<template v-slot:buttons-right>
				<q-btn
					color="text-marginal-text"
					size="md"
					flat
					round
				>
					<q-icon
						size="md"
						name="las la-ellipsis-v"
					/>
				</q-btn>
			</template>
		</pane-header>
		<pane-body>
			<div class="q-pa-md">
				<q-btn
					@click="store?.entries?.state?.showEntries = true"
					class="full-width q-mb-md"
					color="primary"
					label="Open budget"
				/>
				<p
					v-for="i in 10"
					:key="i"
				>
				{{i}}
				</p>
			</div>
		</pane-body>
		<pane-footer>
			<div class="q-ma-sm">
				<q-btn
					label="Add Budget"
					class="text-size-16 full-width"
					color="secondary"
					padding="9px 16px"
					no-caps
					unelevated
				/>
			</div>
		</pane-footer>	
</template>

<script>
import { inject } from 'vue';

export default {
	name: 'Budgets',
	setup () {
		const store = inject('store');

		return {
			store
		}
	}
}
</script>