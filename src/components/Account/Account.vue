<template>
	<pane
		full-width
	>
		<pane-header>
			<template v-slot:title>{{ $t('Account') }}</template>
		</pane-header>
		<pane-body bg-color="white">
			<div class="q-pa-sm">
				<component :is="accountPage" />
			</div>
		</pane-body>
	</pane>
</template>

<script>
import { inject, computed } from 'vue';

export default {
	name: 'Account',
	setup() {
		const store = inject('store');

		let accountPage = computed(() => {
			store.account.state.loggedIn ? 'account-your-account' : 'account-login';
		});

		return {
			store,
			accountPage
		};
	},
	components: {
		'account-login': require('components/Account/AccountLogin').default,
		'account-your-account': require('components/Account/AccountYourAccount').default
	}
};
</script>
