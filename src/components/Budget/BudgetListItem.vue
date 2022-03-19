<template>
	<q-card
		class="budget-list-item overflow-hidden"
		v-touch-pan.mouse.prevent="moveItem"
		:style="`transform: translateX(${itemOffset}px);transition: transform ${transitionDuration}s`"
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
	setup() {
		
	},
}
</script>