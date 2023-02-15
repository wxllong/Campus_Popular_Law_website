/*
 * @Author: [吴志远]
 * @Date: 2022-02-19 10:01:09
 * @LastEditors: [吴志远]
 * @LastEditTime: 2022-02-19 11:20:48
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \frontend\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fafonts/index.css'
import router from './router'
import store from './store'
import 'default-passive-events'

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount('#app')
