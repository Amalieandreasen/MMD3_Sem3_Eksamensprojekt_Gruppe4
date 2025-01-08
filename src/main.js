// Her importeret main.css så den påvirker hele appen
import './assets/main.css'

// her importeres createApp der opretter vue appen, importere app, importerer createHead fra librariet Head som håndtere head delen i html dokument og router
import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head';
import router from './router'

// oprettelse af app kompontentet og opretter en head del så der kan manipuleres i head delen
const app = createApp(App)
const head = createHead();

// her integreres head, så det fungere når der manipuleres i de individuelle views eller komponeneter
app.use(head);
// her integreres routeren så der kan bruges router-view
app.use(router)

// her renderes vue applikationen ind i  <div id="app"></div> i index.html
app.mount('#app')
