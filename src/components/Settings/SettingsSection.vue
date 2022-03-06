<template>
  <q-list>
    <q-item
      class="settings-section-header q-py-md text-dark"
    />
      <q-item-section avatar>
        <q-icon
          class="q-mr-sm text-dark"
          :name="icon"
          size="md"
          left
        />
      </q-item-section>

      <q-item-section>
        <span
          :class="$q.screen.lt.md ? 'text-size-16 lt-md' : 'text-size-21 gt-sm'"
        >
        {{ $t(label) }}
        </span>
      </q-item-section>
    </q-item>

    <div class="settings-section-items">
      <slot />
    </div>
  </q-list>
</template>

<script>
import { inject, computed } from 'vue';

export default {
  props: ['name', 'label', 'icon'],
  setup(props) {
    const store = inject('store');
    const { name } = props
    const active = computed(() => store.settings.state.sectionActive == props.name);

    return {
      store,
      active,
      name: props.name
    }
  },
};
</script>
