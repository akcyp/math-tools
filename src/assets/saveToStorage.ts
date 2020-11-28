import { Notify } from 'quasar';
import { Vue } from 'vue-property-decorator';
import isEmpty from './isEmpty';

import { DefaultStorageListItem } from 'src/store/module-storage/state';

export default function saveToStorage (item: DefaultStorageListItem, vueInstance: Vue) {
  if (isEmpty(item)) {
    Notify.create({
      type: 'negative',
      message: vueInstance.$t('messages.error.saveFailed').toString(),
      caption: vueInstance.$t('messages.error.saveFailedNull').toString()
    });
    return;
  }
  vueInstance.$store.commit('storage/add', item);
  vueInstance.$store.dispatch('storage/save').catch(err => console.error(err));
  Notify.create({
    type: 'positive',
    message: vueInstance.$t('messages.success.saved').toString(),
    caption: vueInstance.$t('messages.success.savedDetails').toString(),
    timeout: 1000,
    actions: [{
        label: vueInstance.$t('storagePage.title').toString(),
        color: 'white',
        icon: 'bookmarks',
        handler: () => {
          vueInstance.$router.push('/storage').catch(err => console.error(err));
        }
    }]
  });
}
