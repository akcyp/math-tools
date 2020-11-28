import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { StorageStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const storageModule: Module<StorageStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default storageModule;
