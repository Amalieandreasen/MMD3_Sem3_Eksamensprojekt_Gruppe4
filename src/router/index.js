import { createRouter, createWebHistory } from 'vue-router';
import homeView from '@/views/home.vue';
import menukortView from '@/views/menukort.vue';
import vinkortView from '@/views/vinkort.vue';
import drikkevarerView from '@/views/drikkevarer.vue';
import selskabspakkerView from '@/views/selskabspakker.vue';
import selskabslokalerView from '@/views/selskabslokaler.vue';
import selskabsmenuView from '@/views/selskabsmenu.vue';
import julognytarView from '@/views/julognytaar.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: "Sangiovanni",
      component:homeView
     },
   {
    path:"/menukort",
    name: "Menukort",
    component:menukortView
   },
   {
    path:"/vinkort",
    name: "Vinkort",
    component: vinkortView
   },
   {
    path:"/drikkevarer",
    name: "Drikkevarer",
    component: drikkevarerView
   },
   {
    path:"/selskabspakker",
    name: "Selskabspakker og møder",
    component: selskabspakkerView
   },
   {
    path:"/selskabslokaler",
    name: "Se vores selskabslokaler",
    component: selskabslokalerView
   },
   {
    path:"/selskabsmenu",
    name: "Selskabsmenu ud af huset",
    component: selskabsmenuView
   },
   {
    path:"/julognytaar",
    name: "Jul og nytår",
    component: julognytarView
   },
  ],
})

export default router
