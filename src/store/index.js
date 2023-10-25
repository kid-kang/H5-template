import { createStore } from 'vuex'
// 全局模块
import global from './global'

const store = createStore({
  ...global,
})

export default store
