<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Home from './components/Pages/Home.vue'
import Cart from './components/Pages/Cart.vue'
import Action from './components/Pages/Action.vue'
import Adventure from './components/Pages/Adventure.vue'
import RPG from './components/Pages/RPG.vue'
import Simulation from './components/Pages/Simulation.vue'
import Strategy from './components/Pages/Strategy.vue'

const routes = {
  '/': Home,
  '/cart': Cart,
  '/action': Action,
  '/adventure': Adventure,
  '/rpg': RPG,
  '/simulation': Simulation,
  '/strategy': Strategy,
}
export default {
  data() {
    return {
      currentPath: null
    }
  },
  
  components: {
    Header,
    Sidebar
  }
}
</script>

<template>
  <Sidebar />
  <Header />
  <component :is="currentPath" />
</template>

<style></style>
