<template>
	<account-header
		label="Try QBudget Plus for free"
		class="q-mb-md"
	/>

	<q-list
		class="feature-list q-mb-md"
		dense
	>
		<q-item
			v-for="benefit in benefits"
			:key="benefit"
			class="feature-list-item q-pa-sm"
			:class="$q.screen.width < 375 ? 'text-size-12' : 'text-size-16'"
			color="blue"
			dense
		>
			<q-item-section
				class="feature-list-item-icon"
				avatar
				top
			>
				<q-icon color="primary" name="fas fa-check" size="xs" />
			</q-item-section>
			<q-item-section
				class="feature-list-item-text text-dark"
			>
				{{ benefit }}
			</q-item-section>
		</q-item>
	</q-list>

	<btn-multiline
		@click="subscriptionType =  'annual'"
		text="$19.99 Annual ($1.66/month)"
		description="First 14 days for free"
		badge="Save 20%"
		:bg-color="subscriptionType == 'annual' : 'primary'"
		:text-color="subscriptionType == 'annual' ? 'white' : 'dark'"
		class="q-mb-sm"
	/>

	<btn-multiline
		@click="subscriptionType =  'monthly'"
		text="$1.99 Monthly)"
		description="First 7 days free"
		badge="Save 20%"
		:bg-color="subscriptionType == 'monthly' : 'primary'"
		:text-color="subscriptionType == 'monthly' ? 'white' : 'dark'"
		:class="$q.screen.width < 375 ? 'q-mb-xs' : 'q-mb-sm'"
	/>

	<btn-link-list
		class="text-center"
		:class="$q.screen.width < 375 ? 'q-mb-sm' : 'q-mb-lg'"
	>
		<btn-link
			v-for="buttonLink in buttonLinks"
			:key="buttonLink"
			:text-size="q.screen.width < 375 ? '9' : '12'"
			:label="buttonLink"
		/>
	</btn-link-list>

	<btn
		@click="subscribe"
		label="Try free and subscribe"
		color="secondary"
		full-width
	/>
</template>

<script>
import { ref, inject } from 'vue';
import { useQuasar } from 'quasar';

export default {
	setup() {
		const store = inject('store');

		const $q = useQuasar();

		let benefits = [
			'Budget on your phone, tablet & computer - with live data sync',
			'Budget together - share your Plus account with your partner',
			'Unlimited Budget & Folders',
			'Calculator, Export, Print & Sort',
			'Notes, Reminders & Themes',
			'Remove Ads'
		];

		let subscriptionType = ref('annual');

		let buttonLinks = [
			'Restore Purchase',
			'Discount code',
			'Terms & Conditions'
		];
		
		const subscribe = () => {
			$q.loading.shoe({
				message: 'Purchasing...',
				boxClass: 'bg-grey-2 text-grey-9',
				spinnerColor: 'primary'
			});
			setTimeout(() => {
				$q.loading.hide();
				store.account.state.subscribed = true
			}, 2000);
		};

		return {
			store,
			benefits,
			subscriptionType,
			buttonLinks,
			subscribe
		}
	},
}
</script>
