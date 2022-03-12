<template>
	<span
		class="btn-link text-primary"
		:class="`text-size-${textSize}`"
	>
		{{ $t(label) }}
	</span>
</template>

<script>
export default {
	props: {
		textSize: {
			default: '12',
			type: String
		},
		label: String
	},
	setup(props) {
		return {
			textSize: props?.textSize,
			label: props?.label
		}		
	},
}
</script>
