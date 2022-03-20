<template>
	<q-tab
		class="btn-icon text-size-12 rounded-borders"
		:class="color ? `text-${color}` : 'text-dark"
		no-caps
	/>
</template>

<script>
export default {
	props: ['color']
}
</script>
