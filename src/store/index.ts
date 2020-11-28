import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import storage from './module-storage';
import { StorageStateInterface } from './module-storage/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  storage: StorageStateInterface;
}

export default store(function ({ Vue }) {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      storage
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });

  return Store;
});
