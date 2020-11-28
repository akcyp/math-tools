<template>
  <q-page class="flex flex-center column justify-center bg-dark text-white">
    <div class="text-h5 text-center q-pa-xs">
      {{ $t('primePage.title') }}
    </div>
    <div class="column items-center">
      <div class="q-ma-md">
        <q-input dark v-model="number" :label="$t('primePage.inputLabel')" type="number">
          <template v-slot:prepend>
            <q-icon name="cloud" />
          </template>
        </q-input>
      </div>
      <q-btn
        icon="flash_on"
        color="orange"
        :label="$t('primePage.actionButton')"
        :disabled="!!this.disabled"
        @click="factorization"
      />
      <highlightjs language='javascript' :code="JSON.stringify(result)" />
      <ActionButtons :result="result" />
    </div>
    <floating-storage color="black" v-on:input="number = $event" :filter="['number']" />
  </q-page>
</template>

<script lang="ts">
import { getPrimeFactors } from 'assets/math.ts';
import ActionButtons from 'components/ActionButtons.vue';
import FloatingStorage from 'components/FloatingStorage.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    ActionButtons,
    FloatingStorage
  }
})
export default class PagePrime extends Vue {
  number = 1;
  result: (number | string)[] = [];
  disabled = false;
  factorization () {
    this.disabled = true
      this.number = Math.round(this.number);
      setTimeout(() => {
        const primes = getPrimeFactors(this.number);
        this.result = primes;
        this.disabled = false;
      }, 10);
  }
};
</script>
