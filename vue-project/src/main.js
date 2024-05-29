import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Pages/Home.vue'
import Gamepage from './components/Pages/Gamepage.vue'





import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes:[

{   
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/gamepage/:number',
    name: 'Gamepage',
    component: Gamepage
}

]
})

createApp(App)
    .use (router)
    .mount('#app')
// export default router