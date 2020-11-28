<template>
  <q-page class="flex flex-center column justify-center bg-dark text-white">
    <div class="text-h5 text-center">
      {{ $t('convertorPage.title') }}
    </div>

    <div class="column items-center q-ma-md" style="max-width: 400px; margin-top: 30px;">
      <q-range dark :min="2" :max="36" :step="1" color="primary" label-always v-model="rangeValues" />
      <q-item class="text-white">
        <q-item-section avatar>
          <q-avatar text-color="white" icon="merge_type" />
        </q-item-section>
        <q-item-section>
          {{ $t('convertorPage.radioLabel') }}
        </q-item-section>
        <q-item-section>
          <q-option-group
            dark
            type="radio"
            color="primary"
            v-model="conversionType"
            :options="[
              { label: `${rangeValues.min} - ${rangeValues.max}`, value: 'minToMax' },
              { label: `${rangeValues.max} - ${rangeValues.min}`, value: 'maxToMin' }
            ]"
          />
        </q-item-section>
      </q-item>
      <div class="q-ma-md">
        <q-input dark stack-label :label="$t('convertorPage.inputLabel', { system: inSystem })" v-model="numberToConvert" />
      </div>
      <q-btn :label="$t('convertorPage.actionButton')" icon="flash_on" color="blue" @click="convert" />
      <highlightjs language='javascript' :code="JSON.stringify(convertedNumber)" />
      <ActionButtons :result="convertedNumber" color="green" />
    </div>
    <floating-storage color="black" v-on:input="numberToConvert = $event.toString()" :filter="['number', 'string']" />
  </q-page>
</template>

<script lang="ts">
import { convertNumber } from 'assets/math.ts';
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
export default class PageConversion extends Vue {
  rangeValues = {
    min: 2,
    max: 10
  };
  conversionType = 'maxToMin';
  numberToConvert = '';
  convertedNumber = '';
  get inSystem () {
    return this.rangeValues[this.conversionType === 'minToMax' ? 'min' : 'max'];
  }
  get outSystem () {
    return this.rangeValues[this.conversionType === 'minToMax' ? 'max' : 'min'];
  }
  convert () {
    const validationResult = this.validate();
    if (validationResult !== true) {
      Notify.create({
        type: 'negative',
        message: this.$t('messages.error.invalidInputValue', { value: validationResult }).toString()
      });
    } else {
      this.convertedNumber = convertNumber(this.inSystem, this.outSystem, this.numberToConvert);
    }
  }
  validate () {
    const legalDigits = '0123456789abcdefghijklmnopqrstuvwxyz'.split('').slice(0, this.inSystem);
    for (let char of this.numberToConvert.toLowerCase()) {
      if (!legalDigits.includes(char)) {
        return char;
      }
    }
    return true;
  }
};
</script>
