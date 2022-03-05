<template>
	<div class="col gt-sm">
		<settings-sections />
	</div>
</template>

<script>
export default {
	name: 'SettingsSectionsDesktop',
	components: {
		'settings-sections': require('components/Settings/SettingsSections').default
	}
}
</script>