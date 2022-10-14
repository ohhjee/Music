import { createApp } from 'vue'
// import './style.css'
import './assets/css/tailwind.css'
import App from './App.vue'
import router from './router'
import Splide from '@splidejs/vue-splide';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import '@types/owl.carousel'

createApp(App).use(router).use(Splide).mount('#app')
