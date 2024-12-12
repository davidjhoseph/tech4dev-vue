import './assets/main.css'
import VueAxios from "vue-axios";
import axios from "axios";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
