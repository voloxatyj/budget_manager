<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawer"
      show-if-above
      bordered
    >
      <q-list 
        v-for="navLink in navLinks"
        :key="navLink.title"
        v-bind="link"
      >
        <q-item
          class="text-marginal-btn text-size-16"
          active-class="text-marginal-btn-active"
          clickable
          exact
        >

          <q-item-section
            v-if="navLink.icon"
            avatar
          >
            <q-icon :name="navLink.icon" size="26px" />
          </q-item-section>

          <q-item-label>{{ $t(navLink.title) }}</q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{Component}">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </q-page-container>

    <qbudget-plus-popup />
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MainLayout',

  setup () {
    const leftDrawer = ref(false);

    return {
      leftDrawer,
      navLinks: [
      {
        title: 'Budgets',
        icon: 'la la-walet',
        link: '/budgets'
      },
      {
        title: 'Starred',
        icon: 'lar la-star',
        link: '/starred'
      },
      {
        title: 'Settings',
        icon: 'las la-cog',
        link: '/settings'
      },
      {
        title: 'Account',
        icon: 'lar la-user',
        link: '/account'
      }
      ]
    }
  }
}
</script>
