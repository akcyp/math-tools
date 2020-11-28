<template>
  <q-page class="flex flex-center column justify-center bg-dark">
    <div class="text-h5 text-center text-white q-mt-sm">
      {{ $t('storagePage.title') }}
    </div>
    <div class="column items-center q-ma-md">
      <div v-if="!items.length" class="q-subheading text-white">
        {{ $t('storagePage.isEmpty') }}
      </div>
      <q-list highlight dark v-if="items.length">
        <draggable
          v-model="items"
          class="list-group"
          v-bind="dragOptions"
          handle=".handle"
        >
          <q-item v-for="(item, index) in items" :key="item.id" class="list-group-item">
            <q-item-section>
              <code-display :maxLength="maxCodeDisplayLength" :item="item.value" />
            </q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="white" icon="import_export" class="handle" />
            </q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="green" icon="insert_drive_file" @click.native="copy(item.value)" />
            </q-item-section>
            <q-item-section avatar>
              <q-avatar text-color="red" icon="highlight_off" @click.native="trash(index)" />
            </q-item-section>
          </q-item>
        </draggable>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import copyToClipboard from 'assets/copyToClipboard.ts';
import CodeDisplay from 'components/CodeDisplay.vue';
import draggable from 'vuedraggable';

import { Vue, Component } from 'vue-property-decorator';
import { DefaultStorageListItem } from 'src/store/module-storage/state';
import { StateInterface } from 'src/store';

@Component({
  components: {
    draggable,
    CodeDisplay
  }
})
export default class PageStorage extends Vue {
  dragOptions = {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  };
  get items () {
    return (<StateInterface>this.$store.state).storage.list;
  }
  set items (values) {
    this.$store.commit('storage/updateList', values);
    this.$store.dispatch('storage/save').catch(err => console.error(err));;
  }
  get maxCodeDisplayLength () {
    return Math.floor(this.$q.screen.width - 180) / 10;
  }
  copy (item: DefaultStorageListItem) {
    copyToClipboard(item, this);
  }
  trash (index: number) {
    this.$store.commit('storage/remove', index);
    this.$store.dispatch('storage/save').catch(err => console.error(err));
  }
};
</script>

<style lang="scss">
.flip-list-move {
  transition: ease 2.5s;
}
.no-move {
  transition: ease 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.item-edit-set > * {
  margin: 3px;
}
</style>
