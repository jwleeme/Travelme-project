import { createApp } from 'vue'
import App from './App.vue'
import Router from '@/router'
import Store from '@/store'

import '@/assets/css/reset.css';
import '@/assets/css/common.css';

createApp(App)
  .use(Router)
  .use(Store)
  .mount('#app')

