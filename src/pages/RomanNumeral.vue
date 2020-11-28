<template>
  <q-page class="flex flex-center column justify-center bg-dark text-white">
    <div class="text-h5 text-center">
      {{ $t('romanPage.title') }}
    </div>
    <div class="column items-center q-ma-md" style="max-width: 400px; margin-top: 30px;">
      <q-btn-toggle
          type="radio"
          toggle-color="primary"
          v-model="conversionType"
          :options="[
              { label: $t('romanPage.firstOption'), value: 'toRoman' },
              { label: $t('romanPage.secondOption'), value: 'fromRoman' }
          ]"
          dark
        />
      <div class="q-ma-md">
         <q-input
          dark
          stack-label
          :label="$t('romanPage.inputLabel')"
          v-model="numberToConvert"
        />
      </div>
      <q-btn
        icon="flash_on"
        color="primary"
        :label="$t('romanPage.actionButton')"
        @click="convert"
      />
      <highlightjs language='javascript' :code="JSON.stringify(convertedNumber)" />
      <ActionButtons :result="convertedNumber" color="green" />
    </div>
    <floating-storage color="black" v-on:input="numberToConvert = $event.toString()" :filter="['number', 'string']" />
  </q-page>
</template>

<script lang="ts">
import { fromRoman, toRoman, digitsMapper } from 'assets/math.ts';
import { Notify } from 'quasar';

import ActionButtons from 'components/ActionButtons.vue';
import FloatingStorage from 'components/FloatingStorage.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ActionButtons,
    FloatingStorage
  }
})
export default class PageRomanNumeral extends Vue {
  conversionType: 'toRoman' | 'fromRoman' = 'toRoman';
  numberToConvert = '';
  convertedNumber: string | number = '';
  convert () {
    const validationResult = this.validate();
    if (validationResult !== true) {
      Notify.create({
        type: 'negative',
        message: this.$t('messages.error.invalidInputValue', { value : validationResult }).toString()
      });
      return;
    }
    this.convertedNumber = this.conversionType === 'toRoman' ? toRoman(parseInt(this.numberToConvert)) : fromRoman(this.numberToConvert);
  }
  validate () {
    const legalDigits = this.conversionType === 'toRoman' ? '0123456789'.split('') : Object.keys(digitsMapper);
    for (let char of this.numberToConvert.toUpperCase()) {
      if (!legalDigits.includes(char)) {
        return char;
      }
    }
    return true;
  }
};
</script>
