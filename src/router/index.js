// her importeres funktioner og metoder fra vue-router for at der kan laves routing imellem views.
import { createRouter, createWebHistory } from 'vue-router';

// Her importeres alle de views som skal bruges
import homeView from '@/views/home.vue';
import menukortView from '@/views/menukort.vue';
import vinkortView from '@/views/vinkort.vue';
import drikkevarerView from '@/views/drikkevarer.vue';
import selskabspakkerView from '@/views/selskabspakker.vue';
import selskabslokalerView from '@/views/selskabslokaler.vue';
import selskabsmenuView from '@/views/selskabsmenu.vue';
import julognytarView from '@/views/julognytaar.vue';

// Her defineres stien, navnet og det komponent pathen skal hænge sammen med
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name: "Sangiovanni",
      component:homeView,
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
  // scrollBehavior er en funktion  i vue som skal bruges når man navigerer imellem siderne. her defineres at når der trykkes på et routerlink skal man føres til toppen på den view man går ind på, så man ikke ender på samme punkt på den nye side.
  scrollBehavior() {
    return { top: 0 };
  },
})

export default router
