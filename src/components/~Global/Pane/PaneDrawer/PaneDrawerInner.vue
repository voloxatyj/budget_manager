<template>
	<transition
		appear
		enter-active-class="animated sliderInRight fast"
		leave-active-class="animated sliderOutRight fast"
	>
		<aside
			v-if="modelValue"
			class="q-drawer q-drawer--right q-drawer--bordered fixed q-drawer--on top q-drawer--mobile q-drawer--top-padding"
			style="width: 200px; transform: translateX(0px);"
		>
			<div class="q-drawer__content fit overflow-auto bg-backdrop">
				<div class="q-scrollarea fit">
					<div class="q-scrollarea__container scroll relative-position fit hide-scrollbar">
						<div class="q-scrollarea__content absolute">

							<!-- label -->
							<div
								class="q-pa-md"
							>
								<div
									v-if="label"
									class="pane-drawer-label text-size-21 text-dark text-condensed"
								>
									{{ label }}
								</div>
								<q-btn
									@click="$emit('hideDrawer')"
									class="pane-drawer-close fixed-top-right q-mt-sm q-mr-sm text-medium"
									icon="las la-times"
								/>
								// TODO finished component
</template>