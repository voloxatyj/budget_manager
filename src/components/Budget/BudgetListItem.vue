<template>
	<q-card
		class="budget-list-item overflow-hidden"
		v-touch-pan.mouse.prevent="moveItem"
		:style="`transform: translateX(${itemOffset}px); transition: transform ${transitionDuration}s`"
		@mouseup="handleTouchEnd"
		@touchend="handleTouchEnd"
	>

		<q-card-section horizontal>

			<q-card-section class="q-pa-none-col">
				<q-item
					@click="store.entries.state.showEntries = true"
					class="budget-list-item-main text-size-16 text-primary"
					clickable
					v-ripple
					active
				>
					<q-item-section class="text-medium">
						{{ budget.name }}
					</q-item-section>

					<q-item-section side>
						{{ budget.currencySymbol }} 0.00
					</q-item-section>

					<q-item-section
						class="budget-list-item-chevron"
						avatar
					>
						<q-icon color="primary" name="chevron_right" />
					</q-item-section>
				</q-item>
			</q-card-section>

			<q-separator vertical />

			<q-card-section
				class="budget-list-item-button q-pa-none col"
			>
				<q-btn
					class="no-border-radius fit"
					color="primary"
					flat
				>
					<q-icon name="las la-ellipsis-v" size="32px" />
				</q-btn>
			</q-card-section>
		</q-card-section>
	</q-card>
	<!-- {{ itemOffset }} -->
</template>

<script>
import { inject, ref } from 'vue';

export default {
	props: ['budget'],
	setup(props) {
		const store = inject('store');

		// handle swipe to reveal options
		let itemOffSet = ref(0);
		let transitionDuration = ref(0);
		let offSetMin = -100;
		let offSetMax = 0;
		const moveItem = (e) => {
			if (itemOffSet.value >= offSetMin && itemOffSet <= offSetMax) {
				itemOffSet.value += e.delta.x;
			}
		};
		const handleTouchEnd = (e) => {
			console.log('handleTouchEnd');

			// If it's moved too far, move it back to lower or upper limit
			if (itemOffSet.value < offSetMin) itemOffSet.value = offSetMin;
			else if (itemOffSet.value > offSetMax) itemOffSet.value = offSetMax;

			// If it's moved near to either limit, finish movement
			if (itemOffSet.value > offSetMin && itemOffSet.value < (offSetMin / 2)) {
				setAndResetTransitionDuration();
				itemOffSet.value = offSetMin;
			}
			else if (itemOffSet.value < offSetMax && itemOffSet.value > (offSetMin / 2)) {
				setAndResetTransitionDuration();
				itemOffSet.value = offSetMax;
			}
		};

		const setAndResetTransitionDuration = () => {
			transitionDuration.value = 0.3
			setTimeout(() => {
				transitionDuration.value = 0;
			}, 300);
		};

		return {
			store,
			budget: props.budget,
			itemOffSet,
			transitionDuration,
			moveItem,
			handleTouchEnd
		}
	},
}
</script>