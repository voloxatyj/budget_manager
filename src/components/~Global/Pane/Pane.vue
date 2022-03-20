<template>
	<div
		class="pane absolute fit desktop-shadow-pane"
		:class="`${panePostionClass} ${nudgetLeftClass}`"
		v-touch-swipe.right.prevent="swipePaneRight"
	>
		<slot />
	</div>
</template>

<script>
import { computed } from 'vue'
import { TouchHold } from 'quasar'

export default {
	porps: ['left', 'right', 'full-width', 'nudge-left'],
	setup(props) {
		const paneRef = ref(null)
		// pane position classes
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
		// nudge left class
		const nudgeLeftClass = computed(() => {
			if (typeof props.nudgeLeft !== 'undefined') {
				if (props.nudgeLeft) {
					return 'pane-nudge-left'
				}
			}
		})
		// handle swipe right to go back
		let backBtn = null

		onMounted(() => {
			backBtn = paneRef.value.querySelector('.pane-header-btn-back')
		})

		const swipePaneRight = (e) => {
			if (backBtn && e.touch && e.evt.touches[0].pageX < 50) {
				backBtn.click()
			}
		}

		// watch for changes to pane header / footer height and set spacer same height
		onMounted(() => {
			let paneHeader = paneRef.value.querySelector('.pane-header'),
				paneHeaderSpacer = paneRef.value.querySelector('.pane-header-spacer'),
				paneFooter = paneRef.value.querySelector('.pane-footer'),
				paneFooterSpacer = paneRef.value.querySelector('.pane-footer-spacer')
			
			// TODO Observer
			const headerResizeObserver = new ResizeObserver(() => {})
		})

		return {
			panePostionClass,
			nudgeLeftClass,
			swipePaneRight
		}
	}
}
</script>