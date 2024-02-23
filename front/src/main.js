import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { vuetify } from './plugins/vuetify.js';
import { createPinia } from 'pinia';
import router from './router/index.js';

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(vuetify).mount('#app');
