import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import Store from '@/store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

import '@/assets/css/reset.css';
import '@/assets/css/common.css';

const app = createApp(App)
app.config.globalProperties.axios = axios;

app
  .use(Router)
  .use(Store)
  .mount('#app')
  





