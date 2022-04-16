import { createStore } from 'vuex';

export default createStore({
  state: {
    num: 0
  },

  mutations: {
    setNum(state, payload) {
      state.num = payload
    }
  },

  actions: {

  }
})