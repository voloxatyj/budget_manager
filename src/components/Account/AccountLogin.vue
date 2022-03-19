<template>
	<div class="q-pa-md">

		<div class="restrain-400">

			<account-header
				label="Login to QBudget Plus"
				class="q-mb-lg"
			/>

			<!-- account-form -->
			<div class="account-form">

				<account-input
					v-model="loginForm.email"
					placeholder="Email address"
					type="email"
					class="q-mb-sm"
				/>

				<account-input
					v-model="loginForm.password"
					placeholder="Password"
					type="password"
					class="q-mb-xs"
				/>

				<div class="q-mb-md">
					<btn-link label="Forgot password?" />
				</div>

				<btn
					@click="store.account.state.loggedIn = true"
					:disabled="!loginFormValid"
					class="q-mb-lg"
					label="Login"
					color="secondary"
					full-width
				/>

				<p class="gt-iphone-5 text-size-16 text-medium text-center q-mb-sm">
					{{ $t(`Don't have a QBudget Plus account?`) }} <br>
					{{ $t(`Try it fo free:`) }}
				</p>

				<btn
					@click="store.account.state.showQBudgetPlusPopup=true"
					label="Learn about QBudget Plus"
					color="secondary"
					full-width
					outline
				/>

			</div>
			<!-- /account-form -->

		</div>

	</div>

</template>

<script>
import { reactive, computed, inject } from 'vue';
import Btn from '../~Global/Buttons/Btn.vue';

export default {
	setup() {

		const store = inject('store');

		let loginForm = reactive({
			email: 'test@test.com',
			password: 'test'
		});

		let loginFormValid = computed(() => {
			(loginForm.email && loginForm.password) ? true : false;
		});
		
		return {
			store,
			loginForm,
			loginFormValid
		}
	},
	components: {
		'account-header': require('./Shared/AccountHeader.vue').default,
		'account-input': require('./Shared/AccountInput.vue').default
Btn
	}
}
</script>
