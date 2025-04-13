import { createApp } from 'vue';
import App from './App.vue';
import Store from './Store';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { createWebHistory, createRouter } from 'vue-router';



//Lazy load the components
const routes = [
  {path: '/',component: () => import('./components/Pages/Products.vue')}, 
  {path: '/products',component: () => import('./components/Pages/Products.vue')},
  {path: '/products/:id',component: () => import('./components/Pages/ProductDetails.vue')},
  {path: '/AddEdit',component: () => import('./components/Pages/AddEditPrd.vue')},
  {path: '/AddEdit/:id',component: () => import('./components/Pages/AddEditPrd.vue')},
  {path: '/:NotFound(.*)*',component: () => import('./components/Pages/Error.vue'),meta: { hideNavbar: true },},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(Store).mount('#app');