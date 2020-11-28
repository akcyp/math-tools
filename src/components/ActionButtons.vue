<template>
  <div class="row">
    <q-btn-group>
      <q-btn :label="$t('actionButtons.save')" icon="bookmark" :color="color" @click="save"></q-btn>
      <q-btn :label="$t('actionButtons.copy')" icon="file_copy" :color="color" @click="copy"></q-btn>
    </q-btn-group>
  </div>
</template>

<script lang="ts">
import copyToClipboard from 'assets/copyToClipboard.ts';
import saveToStorage from 'assets/saveToStorage.ts';
import { DefaultStorageListItem } from 'src/store/module-storage/state';

import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ActionButtons extends Vue {
  @Prop({ required: true }) readonly result!: DefaultStorageListItem;
  @Prop({ type: String, default: 'primary' }) readonly color!: string;
  save () {
    saveToStorage(this.result, this);
  }
  copy () {
    copyToClipboard(this.result, this);
  }
}

</script>
