<template>
	<div
		class="pane absolute fit desktop-shadow-pane"
		:class="panePostionClass"
	/>
		<slot />
	</div>
</template>

<script>
import { computed } from 'vue';

export default {
	porps: ['left', 'right', 'full-width'],
	setup(props) {
		const panePostionClass = computed(() => {
			if (typeof props.left !== 'undefined') {
				return 'pane-desktop-left'
			}
			else if (typeof props.right !== 'undefined') {
				return 'pane-desktop-right'
			}
			else if (typeof props.fullWidth !== 'undefined') {
				return 'pane-desktop-full-width'
			}
		})
		return {
			panePostionClass
		}
	}
}
</script>