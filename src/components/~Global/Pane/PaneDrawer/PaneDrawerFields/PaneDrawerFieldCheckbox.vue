<template>
	<q-item
		@click="handleClick"
		class="text-size-16 text-dark"
		v-ripple
		clickable
	>
		<q-item-section>
			<q-item-label>
				{{ fieldLabel }}
			</q-item-label>
		</q-item-section>

		<q-item-section side top>
			<q-checkbox
				v-model="fieldValue"
				color="primary"
				class="no-pointer-events"
			/>
		</q-item-section>
	</q-item>
</template>

<script>
import { inject, computed, watch } from 'vue'

export default {
	props: ['field'],
	setup(props) {
		const store = inject('store')

		let proxyField = null
		watch(
			() => props.field.proxyTo,
			(newProxyField, prevProxyField) => {
				if (newProxyField !== prevProxyField) proxyField = newProxyField
			}
		)

		const fieldLabel = computed(() => {
			if (proxyField) {
				return proxyField.label
			} else {
				return props.field.label
			}
		})

		const fieldValue = computed(() => {
			if (proxyField) {
				return proxyField.value
			} else {
				return props.field.value
			}
		})
		
	},
}
</script>
