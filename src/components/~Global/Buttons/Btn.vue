<template>
	<q-btn
		:label="$t(label)"
		:color="color"
		class="text-size-16"
		:class="{ 'full-width': fullWidth }"
		padding="9px 16px"
		no-caps
		unelevated
	/>
</template>

<script>
export default {
	props: {
		label: String,
		color: String,
		fullWidth: Boolean
	},
	setup(props) {
		return {
			label: props.label,
			color: props.color,
			fullWidth: props.fullWidth
		}
	},
}
</script>
