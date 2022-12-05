import './bootstrap';
// import vue from 'vue';
import { createApp } from 'vue';
// window.Vue = vue;

import App from './components/App.vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import router from './routes';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);


app.mount('#app');