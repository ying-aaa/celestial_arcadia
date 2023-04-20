import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";



// 清除默认的全局样式，适配各大浏览器
import "@/assets/reset.css";
// 使用 elemment 的暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css';
// element ui 的修改样式
import "./styles/index.scss";
// 全局样式
import "@/assets/common.scss";
// 加载主题颜色
import "@/theme/dark.scss";
import "@/theme/light.scss";



// 挂载应用程序
const app = createApp(App);
app.use(router);
app.mount('#app');