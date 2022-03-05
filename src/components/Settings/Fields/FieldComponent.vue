<template>
  <component :is="comp" />
</template>

<script>
import { defineAsyncComponent, computed } from 'vue';

export default {
  props: ['field'],
  setup(props) {

    let comp = computed(() => {
      return defineAsyncComponent(() => import(`src/components/${props.field.component}`));
    });

    return {
      field: props.field,
      comp
    }
  },
}
</script>
