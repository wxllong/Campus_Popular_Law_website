import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.min.css'
import * as ELIcons from "@element-plus/icons-vue";

const app = createApp(App)

// 注册全局组件
for (let iconName in ELIcons) {
    app.component(iconName, ELIcons[iconName])
}


app.use(store).use(router).use(ElementPlus).mount('#app')