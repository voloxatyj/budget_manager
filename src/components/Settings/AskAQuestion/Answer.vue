<template>
	<transition
		appear
		enter-active-class="animated slideInRight faster"
		leave-active-class="animated slideOutRight faster"
	>
		<pane
			v-if="store.help.state.showAnswer"
			full-width
		>
			<pane-header>
				<template v-slot:buttons-left>
					<pane-header-btn
						@click="store.help.state.showAnswer = false"
						label="Ask a Question"
						back
					/>
				</template>
				<template v-slot:title>{{ $t('Answer') }}</template>
			</pane-header>
			<pane-body>
				<div class="q-pa-md restrain-660">

					<q-card
						class="q-mb-md"
						:class="{ 'q-pa-lg' : $q.screen.gt.sm }"
						flat
						bordered
					>
						<q-card-section>
							<div class="text-size-21 text-bold q-mb-lg">
								I bought the Pro Upgrade on one device. Do I need to buy it again on my other devices?
							</div>
							<div class="text-size-16">
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime repudiandae odio cum repellat rerum asperiores reiciendis iste non? Quam quibusdam beatae accusamus excepturi atque ullam perferendis? Aspernatur excepturi maxime iure.</p>
							</div>
						</q-card-section>
					</q-card>

				</div>
			</pane-body>
		</pane>
	</transition>
</template>

<script>
import { inject } from 'vue';

export default {
	name: 'Answer',
	setup() {
		const store = inject('store');

		return {
			store
		}
	},
	components: {
		'pane': require('components/~Global/Pane/Pane.vue').default,
		'pane-header': require('components/~Global/Pane/PaneHeader.vue').default,
		'pane-body': require('components/~Global/Pane/PaneBody.vue').default,
		'pane-header-btn': require('components/~Global/Pane/PaneHeaderButton.vue').default
	} 
}
</script>
