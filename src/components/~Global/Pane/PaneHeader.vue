<template>
	<header class="pane-header q-header q-layout__section--marginal bg-marginal-bg absolute full-width">
		<div class="q-toolbar row no-wrap items-center">

			<div class="absolute-left q-ma-xs">
				<slot name="buttons-left"></slot>
			</div>

			<div class="q-toolbar__title ellipsis text-size-16 text-marginal-text text-bold absolute-center-horizontal q-pl-none">
				<slot name="title"></slot>
			</div>

			<div class="absolute-right q-ma-xs">
				<slot name="buttons-right"></slot>
			</div>
		</div>
	</header>
</template>