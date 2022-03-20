<template>
	<q-tooltip
		class="tooltip"
		transition-show="scale"
		transition-hide="scale"
	>
		<div 
			class="tooltip-text relative-position text-white rounded-borders row flex-center"
			:class="`bg-${bgColor}`"
		>
			<slot />
		</div>
	</q-tooltip>
</template>

<script>
export default {
	props: {
		bgColor: {
			default: 'backdrop',
			type: String
		}
	},
	setup(props) {
		return {
			bgColor: props.bgColor
		}
	},
}
</script>
