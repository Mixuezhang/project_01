import { createApp } from 'vue'
import App from './App.vue'
//svg
import 'virtual:svg-icons-register'
//引入样式
import '@/styles/index.scss'
//引入el ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//
import store from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(store)
app.mount('#app')
