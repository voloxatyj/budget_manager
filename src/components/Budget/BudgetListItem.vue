<template>
	<q-card>
		<q-card-section>
			
		</q-card-section>
	</q-card>
	<div class="budget-list-item-container relative-position">
		<q-card
			class="budget-list-item overflow-hidden"
			v-touch-swipe.mouse.left.prevent="swipeItemLeft"
			v-touch-swipe.mouse.right.prevent="swipeItemRight"
			:style="`transform: translateX(${itemOffset}px); transition: transform 0.3s, background-color 0.3s`"
		>

			<q-card-section horizontal>
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
		<div class="swipe-options absolute overflow-hidden">
			
			<btn-icon-list
				class="absolute-right-center"
				align="right"
			>
				<btn-icon
					icon="las la-copy"
					label="Copy"
				/>
				<btn-icon
					icon="create_new_folder"
					label="Move"
				/>
				<btn-icon
					icon="las la-file-export"
					label="Export"
				/>
				<btn-icon
					icon="las la-trash-alt"
					label="Delete"
					coloe="negative"
				/>
			</btn-icon-list>	
		</div>
	</div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
	props: ['budget'],
	setup(props) {
		const store = inject('store')

		// handle swipe to reveal options
		let itemOffSet = ref(0)
		let transitionDuration = ref(0)
		let swipeOffSetMax = 0

		const swipeItemLeft = (e) => {
			if (e.distance.x >=5) {
				moveOffSetMin()
			}
		}

		const swipeItemRight = (e) => {
			moveOffSetMax()
		}

		const moveOffSetMin = () => {
			itemOffSet.value = store.budget.state.swipeOffSetMin
			store.budget.actions.disableDraggable()
		}

		const moveOffSetMax = () => {
			itemOffSet.value = swipeOffSetMax
			dragFix()

			setTimeOut(() => {
				store.budget.actions.enableDraggable()
			}, 300)
		}

		const dragFix = () => {

		}

		return {
			store,
			budget: props.budget,
			itemOffSet,
			transitionDuration,
			swipeItemLeft,
			swipeItemRight
		}
	},
	components: {
		'btn-icon': require('components/~Global/Buttons/BtnIcon.vue').default,
		'btn-icon-list': require('components/~Global/Buttons/BtnIconList.vue').default
	}
}
</script>