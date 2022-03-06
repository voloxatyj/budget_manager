<template>
	<pane
		full-width
	>
		<pane-header>
			<template v-slot:title>{{ $t('Settings') }}</template>
		</pane-header>
		<pane-body>
			<div class="q-pa-md row q-col-gutter-lg">
				<div class="settings-menu-col col-shronk ~gt-sm">
					<settings-menu />
				</div>

				<setting-sections-desktop v-if="$q.screen.gt.sm" />

			</div>
		</pane-body>
		<settings-footer />
	</pane>
	<settings-sections-mobile v-if="$q.screen.lt.md" />
	<ask-a-question />
</template>

<script>
import { inject, onMounted } from 'vue';

export default {
	name: 'Settings',
	setup() {
		const store = inject('store');

		onMounted(() => {
			store.settings.actions.initSettings()
		});

		return {
			store
		}
	},
	components: {
		'settings-menu': require('components/Settings/SettingsMenu.vue').default,
		'settings-sections-desktop': require('components/Settings/SettingsSectionsDesktop.vue').default,
		'settings-sections-mobile': require('components/Settings/SettingsSectionsMobile.vue').default,
		'settings-footer': require('components/Settings/SettingsFooter.vue').default,
		'ask-a-question': require('components/Settings/AskAQuestion/AskAQuestion.vue').default,
	}
};
</script>
