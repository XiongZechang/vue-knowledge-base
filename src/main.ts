import { createApp } from 'vue'
// import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

import { setupRouter } from './router'

const setupApp = async () => {
    // const app = createApp(App);
    setupRouter(app);
    app.use(ElementPlus)
    app.mount('#app');
};

setupApp();

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
  