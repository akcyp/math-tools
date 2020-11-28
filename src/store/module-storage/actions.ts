import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { DefaultStorageListItem, StorageStateInterface } from './state';

const actions: ActionTree<StorageStateInterface, StateInterface> = {
  save (ctx) {
    const json = JSON.stringify({list: [...ctx.state.list].map(({value}) => value)});
    window.localStorage.setItem('storage', json);
  },
  init (ctx) {
    let data: {list: DefaultStorageListItem[]};
    try {
      data = JSON.parse(window.localStorage.getItem('storage') || '') as {list: DefaultStorageListItem[]};
    } catch (err) {
      data = {list: []};
    }
    ctx.commit('updateList', [...data.list].map((value, id) => ({id, value})));
  }
};

export default actions;
