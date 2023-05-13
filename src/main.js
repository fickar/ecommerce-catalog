import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'


import Home from '../src/components/Home.vue'
import Product from '../src/components/Product.vue'




createApp(App).use(bootstrap).use(router).mount('#app')