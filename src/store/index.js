import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null,
    images: []
  },
  mutations: {
    pushUser (state, item) {
      state.users.unshift(item)
    },
    addUser (state, item) {
      state.users = item
    },
    delUser (state, item) {
      state.users = item
    }
  },
  getters: {
    deleteUser: (state) => (name) => {
      return state.users.filter(item => item.name != name)
    }
  },
  actions: {
  },
  modules: {
  }
})
