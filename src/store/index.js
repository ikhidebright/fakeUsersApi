import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: null,
    images: ['https://cdn.vuetifyjs.com/images/lists/1.jpg',
              'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              'https://cdn.vuetifyjs.com/images/lists/2.jpg',
              'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    ]
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
    },
    getImage: (state) => (item) => {
      let ranNum = (Math.floor(Math.random() * 10))
      return state.images[ranNum]
    }
  },
  actions: {
  },
  modules: {
  }
})
