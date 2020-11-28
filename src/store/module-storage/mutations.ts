import { MutationTree } from 'vuex';
import { StorageListItem, StorageStateInterface, DefaultStorageListItem } from './state';

const mutation: MutationTree<StorageStateInterface> = {
  updateList (state, values: StorageListItem[]) {
    state.list.length = 0;
    state.list.push(...values);
  },
  add (state, value: DefaultStorageListItem) {
    state.list.push({ id: state.list.length, value });
  },
  remove (state, index: number) {
    state.list.splice(index, 1);
  }
};

export default mutation;
