<template>
	<q-input
		:placeholder="$t(placeholder)"
		:type="type"
		bg-color="backdrop"
		class="text-size-16 account-input"
		outlined
	/>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String
		},
		type: {
			default: 'text',
			type: String
		}
	},
	setup(props) {
		return {
			placeholder: props?.placeholder,
			type: props?.type
		}
	},
}
</script>
