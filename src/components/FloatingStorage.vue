<template>
  <div>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">
            {{ $t('floatingStorage.dialog.select') }}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div style="display: inline-block;" v-for="item in alertList" :key="item.id" @click="selectFromDialog(item.value)">
            <code-display :maxLength="10" :item="item.value" contentClass="inline-code" />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('floatingStorage.dialog.cancel')" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-drawer v-model="storageDrawer" side="right" overlay content-class="bg-dark">
      <q-item v-for="item in items" :key="item.id" class="list-group-item">
        <q-item-section>
          <code-display :maxLength="20" :item="item.value" />
        </q-item-section>
        <q-item-section avatar>
          <q-avatar text-color="green" icon="settings_ethernet" @click="setInput(item.value)">
            <q-tooltip content-class="bg-dark text-white">
              {{ $t('floatingStorage.select') }}
            </q-tooltip>
          </q-avatar>
        </q-item-section>
      </q-item>
    </q-drawer>
    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <q-btn round :color="color" @click="storageDrawer = !storageDrawer" icon="dashboard"/>
    </q-page-sticky>
  </div>
</template>

<script lang="ts">
import CodeDisplay from 'components/CodeDisplay.vue';
import { Notify } from 'quasar';
import { StateInterface } from 'src/store';
import { DefaultStorageListItem, StorageListItem } from 'src/store/module-storage/state';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  components: {
    CodeDisplay
  }
})
export default class FloatingStorage extends Vue {
  @Prop({ type: String, default: 'primary' }) readonly color!: string;
  @Prop({ type: Array, default: ['number', 'strung'] }) readonly filter!: string[];
  get items () {
    return (<StateInterface>this.$store.state).storage.list;
  }
  set items (value) {
    this.$store.commit('storage/updateList', value);
    this.$store.dispatch('storage/save').catch(err => console.error(err));
  }
  // Drawer
  storageDrawer = false;
  // Dialog
  alert = false;
  alertList: StorageListItem[] = [];
  filterFn (value: DefaultStorageListItem) {
    return this.filter.includes(typeof(value));
  }
  selectFromDialog (val: DefaultStorageListItem) {
    this.alert = false;
    this.alertList = [];
    this.setInput(val);
  }
  setInput (val: DefaultStorageListItem): void {
    this.storageDrawer = false;
    if (Array.isArray(val)) {
      if (val.length === 1) {
        return this.setInput(val[0]);
      }
      this.alertList = [...val].map((value, id) => ({value, id}));
      this.alert = true;
    } else if (this.filterFn(val)) {
      this.$emit('input', val);
    } else {
      Notify.create({
        type: 'negative',
        message: 'Nie możesz wybrać tej wartości!',
        caption: 'Niedozwolony typ'
      });
    }
  }
}
</script>
