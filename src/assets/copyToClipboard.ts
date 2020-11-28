import { Notify } from 'quasar';
import { Vue } from 'vue-property-decorator';
import isEmpty from './isEmpty';
import { DefaultStorageListItem } from 'src/store/module-storage/state';

export default function copyToClipboard (item: DefaultStorageListItem, vueInstance: Vue) {
  if (isEmpty(item)) {
    Notify.create({
      type: 'negative',
      message: vueInstance.$t('messages.error.copyFailed').toString(),
      caption: vueInstance.$t('messages.error.copyFailedNull').toString()
    });
    return;
  }
  let valueToCopy = item;
  if (Array.isArray(item)) {
    valueToCopy = item.join(',');
  }
  if (typeof(item) === 'number') {
    valueToCopy = item.toString();
  }
  if (typeof(valueToCopy) === 'string') {
    vueInstance.$copyText(valueToCopy).then(() => {
      Notify.create({
        type: 'positive',
        message: vueInstance.$t('messages.success.copied').toString()
      });
    }, () => {
      Notify.create({
        type: 'negative',
        message: vueInstance.$t('messages.error.copyFailed').toString()
      })
    });
  }
}
