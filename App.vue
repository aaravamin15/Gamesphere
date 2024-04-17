<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Home from './components/pages/Home.vue'
import Action from './components/pages/Action.vue'
import Adventure from './components/pages/Adventure.vue'
import RPG from './components/pages/RPG.vue'
import Simulation from './components/pages/Simulation.vue'
import Strategy from './components/pages/Strategy.vue'

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