<template>
	<transition
		appear
		enter-active-class="animated slideInRoght faster"
		leave-active-class="animated slideOutRight faster"
	>
		<pane
			v-if="store.help.state.showPaneAskAQuestion"
			full-width
		>
			<pane-header>
				<template v-slot:buttons-left>
					<pane-header-btn
						@click="store.help.state.showPaneAskAQuestion = false"
						label="Settings"
						back
					/>
				</template>
				<template v-slot:title>{{ $t('Ask a Question') }}</template>
			</pane-header>
			<pane-body>
				<div class="q-pa-md restrain-600">

					<!-- Ask a Question -->
					<q-list
						class="settings-section q-mb-md bq-white rounded-borders"
						bordered
						separator
					>

						<settings-section-header
							label="Ask a Question"
							icon="fas fa-question"
						/>

						<div class="settings-section-items">

							<field-input : fields="store.help.state.askAQuestion" />
						
							<template v-if="store.help.state.askAQuestion">

								<field-item
									v-for="question in store.help.state.searchResults"
									:key="question"
									@click="store.help.state.showAnswer = true"
									:field="{ label: question, skipTranslateLabel: true }"
								/>

							</template>
						</div>

					</q-list>
					<!-- /Ask a Question -->

					<!-- Common Questions -->
					<q-list
						class="settings-section q-mb-md bg-white rounded-borders"
						bordered
						separator
					>

						<settings-section-header
							label="Common Questions"
							icon="far fa-comments"
						/>

						<div class="settings-section-items">

							<field-item
								v-for="question in store.help.state.questions"
								:key="question"
								@click="store.help.state.showAnswer = true"
								:field="{ label: question, skipTranslateLabel: true }"
							/>

						</div>
					</q-list>
					<!-- /Common Questions -->

					<email-me />

				</div>
			</pane-body>
		</pane>
	</transition>
	<answer />
</template>

<script>
import { inject } from 'vue';

export default {
	name: 'AskAQuestion',
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
		'pane-header-btn': require('components/~Global/Pane/PaneHeaderButton.vue').default,
		'settings-section-header': require('components/Settings/SettingsSectionHeader.vue').default,
		'field-input': require('components/Settings/Fields/FieldInput.vue').default,
		'field-item': require('components/Settings/Fields/FieldItem.vue').default,
		'email-me': require('components/Settings/AskAQuestion/EmailMe.vue').default,
		'answer': require('components/Settings/AskAQuestion/Answer.vue').default
	}
}
</script>
