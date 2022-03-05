<template>
	<transition>
		appear
		enter-active-class="animated slideInRight faster"
		leave-active-class="animated slideOutRight faster"
	>
		<pane
			v-if="store.settings.state.sectionActive"
			class="lt-md"
			right
		>
			<pane-header>
				<template v-slot:buttons-left>
					<q-btn
						@click="store.settings.state.sectionActive = null"
						class="~lt-md"
            colors="text-marginal-text text-size-16"
            paddings="7px 10px 7px 2px"
            no-caps
            flat
          >
            <q-icon name="keyboard_arrow_left" />
            {{ $t('Settings') }}
          </q-btn>
        </template>
        <template v-slot:title>
          {{ $t(store.settings.state.sections[store.settings.state.sectionsActive].label) }}
      </pane-header>
      <pane-body>
        <div class="q-pa-md">
          <settings-sections />
        </div>
      </pane-body>
    </pane>
	</transition>
</template>

<script>
import { inject } from 'vue';

export default defineComponent({
  setup() {

  },
})
</script>
