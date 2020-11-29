<template>
  <q-page class="flex column bg-dark text-white" padding>
    <blockquote class="quote">
      <p>“{{ $t('mainPage.quote.content') }}”</p>
      <small>~ <cite>{{ $t('mainPage.quote.author') }}</cite></small>
    </blockquote>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class PageIndex extends Vue {};
</script>

<style lang="scss">
.quote {
  background: $dark;
  padding: 40px;
}
</style>
