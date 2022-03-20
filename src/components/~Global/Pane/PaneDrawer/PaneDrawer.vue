<template>
	<div
		class="q-drawer-container"
	>

		<!-- mobile drawer -->
		<teleport 
			to="body"
		>
			<pane-drawer-inner
				v-model="modelValue"
				v-if="$q.screen.lt.md"
				@hideDrawer="$emit('update:modelValue', false)"
				:label="label"
				:fields="fields"
			>
				<slot />
			</pane-drawer-inner>
		</teleport>

		<!-- desktop drawer -->
		<template
			v-if="$q.screen.gt.sm"
		>
			<pane-drawer-inner
				v-model="modelValue"
				@hideDrawer="$emit('update:modelValue', false)"
				:label="label"
				:fields="fields"
			>
				<slot />
			</pane-drawer-inner>
		</template>

	</div>
</template>

<script>
export default {
	props: ['modelValue', 'label', 'fields'],
	emits: ['update:modeValue'],
	setup() {
		
	},
	components: {
		'pane-drawer-inner': require('./PaneDrawerInner').default
	}
}
</script>
