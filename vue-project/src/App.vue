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
  '/home': Home,
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
      currentPath: routes['/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = routes[window.location.hash.slice(1)];
    });
  },
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<template>
  <Header />
  <component :is="currentPath" />
  <Footer />
</template>

<style></style>
