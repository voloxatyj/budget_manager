<template>
	<q-btn
		color="text-marginal-text text-size-fixed-16"
		:padding="back ? '7px 10px 7px 2px' : '5px'"
		:round="icon ? true : false"
		:size="icon ? 'md' : ''"
		no-caps
		flat
	>

		<q-icon
			v-if="back"
			name="keyboard_arrow_left"
		/>
		<template
			v-if="label"
		>
			{{ $t(label) }}
		</template>
		<q-icon
			v-if="icon"
			size="md"
			:name="icon"
		/>
	</q-btn>
</template>

<script>
export default {
	props: {
		label: String,
		back: Boolean,
		icon: String
	},
	setup({ label, back, icon }) {
		return {
			label,
			back,
			icon
		}
	},
}
</script>
