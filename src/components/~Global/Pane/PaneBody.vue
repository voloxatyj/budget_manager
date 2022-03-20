<template>
	<q-scroll-area 
		@scroll="onScroll"
		ref="scrollAreaRef"
		class="pane-body fit"
		:class="`bg-${bgColor}`"
	>
		<div 
			class="pane-header-spacer" 
		/>
		<div 
			class="pane-body-content"
			ref="paneBodyContentRef"
		>
			<slot />
		</div>
		<div 
			class="pane-footer-spacer"
		/>
	</q-scroll-area>
</template>

<script>
import { ref, onActivated } from 'vue';

export default {
	props: {
		bgColor: {
			default: 'backdrop',
			type: String
		}
	},
	setup(props) {
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
				onScroll,
				bgColor: props.bgColor
			};
	},
}
</script>
