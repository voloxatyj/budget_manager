<template>
  <q-list
    class="settings-menu"
    :class="{ 'bg-white rounded-borders' : $q.screen.lt.md }"
    :bordered="$q.screen.lt.md"
    :separator="$q.screen.lt.md"
  >
    <q-item
      v-for="(section, key) in store.settings.state.sections"
      :key="key"
      @click="store.settings.state.sectionActive = key"
      clickable
      v-ripple
      :active="key === store.settings.state.sectionActive"
      class="text-dark"
      :class="{ 'rounded-borders' : $q.screen.gt.sm, 'q-py-md' : $q.screen.lt.md }"
      active-class="bg-secondary text-marginal-text"
    >
      <q-item-section avatar>
        <q-icon :name="section.icon" />
      </q-item-section>

      <q-item-section class="text-size-16">
        {{ $t(section.label) }}
      </q-item-section>

      <q-item-section
        v-if="$q.screen.lt.md"
        avatar
      >
        <q-icon color="primary" name="chevron_right" />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent } from 'vue';
import { inject } from 'vue';

export default defineComponent({
  setup() {

  },
})
</script>
