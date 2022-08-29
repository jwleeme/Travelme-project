import { createStore } from 'vuex';
import userStore from '@/store/modules/userstore.js'
import triptypeStore from '@/store/modules/triptypestore.js';
import pickStore from '@/store/modules/pickStore.js';

export default createStore({
  modules: {
    userStore,
    triptypeStore,
    pickStore

  },
  state: {

  },

  mutations: {

  },

  actions: {

  }
})