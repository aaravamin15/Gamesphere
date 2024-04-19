<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Home from './components/Pages/Home.vue'
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
    Sidebar
  }
}
</script>

<template>
  <Header />
  <!-- 4. change this to be a dynamic component, and add :is="currentPath" as a directive -->
  <component :is="currentPath" />
  <Footer />
</template>

<style></style>