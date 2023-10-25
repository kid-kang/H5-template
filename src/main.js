import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/fontSize'
import 'assets/css/reset.less'
import 'vant/es/toast/style' //toast 样式
import 'vant/es/dialog/style' //dialog 样式
import 'vant/es/notify/style' //notify 样式
import 'vant/es/image-preview/style' //notify 样式

createApp(App).use(router).use(store).mount('#app')
