<template>
	<div class="account-header text-center">
		<img
			class="img-qbudget-plus full-width q-mb-md"
			src=""
			alt="Qbudget Plus"
		>
		<div class="text-size-21">
			{{ $t(label) }}
			<div v-if="subLabel">{{ $t(subLabel) }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: String,
		subLabel: String
	},
	setup(props) {
		return {
			label: props.label,
			subLabel: props.subLabel
		}
	},
}
</script>
