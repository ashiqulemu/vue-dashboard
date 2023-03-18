 
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

//  custom scss
import'./assets/css/app.scss';

//  bootstrap framework
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//  icon frameeowek
import './assets/js/iconify.min.js'; 


 
 
 
createApp(App).use(router).mount('#app')
