<template>
	<q-scroll-area 
		@scroll="onScroll"
		ref="scrollAreaRef"
		class="pane-body fit bg-backdrop"
	>
		<div class="pane-header-spacer" style="height:50px"></div>
		<div class="pane-body-content">
			<slot />
		</div>
		<div class="pane-footer-spacer" style="height:65px"></div>
	</q-scroll-area>
</template>

<script>
import { ref, onActivated } from 'vue';

export default {
	setup() {
			// maintain scroll position when changing routes

			const scrollAreaRef = ref(null);
			let scrollPosition = ref(0);

			const onScroll = (info => {
				scrollPosition.value = info.verticalPosition;
			});

			onActivated(() => {
				scrollAreaRef.value.setScrollPosition('vertical', scrollPosition.value);
			});

			return {
				scrollAreaRef,
				scrollPosition,
				onScroll
			};
	},
}
</script>
