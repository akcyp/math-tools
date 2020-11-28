<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-darkest text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title shrink>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-darkest text-white"
    >
      <q-list>
        <q-item-label header class="text-white">
          {{ $t('layout.header') }}
        </q-item-label>
        <q-item
          v-for="item in items"
          :key="item.id"
          :to="item.url"
          :class="{'text-white': true, 'highlighted': $route.fullPath === item.url }"
        >
          <q-item-section avatar>
            <q-avatar text-color="white" :icon="item.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption lines="2" class="text-grey-4">{{ item.subtitle }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class MainLayout extends Vue {
  title = 'Math Tools';
  leftDrawerOpen = false;
  items = [
    { i18nPath: 'mainPage', icon: 'home', url: '/' },
    { i18nPath: 'storage', icon: 'store', url: '/storage' },
    { i18nPath: 'prime', icon: 'code', url: '/prime' },
    { i18nPath: 'conversion', icon: 'transform', url: '/conversion' },
    { i18nPath: 'roman', icon: 'account_balance', url: '/roman' },
  ].map(({icon, url, i18nPath}, id) => {
    return {
      id,
      title: this.$t(`layout.list.${i18nPath}.title`),
      subtitle: this.$t(`layout.list.${i18nPath}.subtitle`),
      icon,
      url
    };
  });
  mounted() {
    // Read storage items from localStorage
    this.$store.dispatch('storage/init').catch(err => console.error(err));
  }
}
</script>

<style lang="scss">
.highlighted {
  background: hsla(0, 0%, 45.9%, .2);
}
</style>
