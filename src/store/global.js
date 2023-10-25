//全局Store
export default {
  state: {
    count: 0,
  },
  mutations: {
    plus(state) {
      state.count++
    },
    minus(state) {
      state.count--
    },
  },
  actions: {},
  getters: {},
}
