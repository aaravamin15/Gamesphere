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
import Load from './components/Pages/Load.vue'
import Gamepage from './components/Pages/Gamepage.vue'

const routes = {
  '/': Home,
  '/cart': Cart,
  '/action': Action,
  '/adventure': Adventure,
  '/rpg': RPG,
  '/simulation': Simulation,
  '/strategy': Strategy,
  '/playgame': Gamepage,
}
export default {
  data() {
    return {
      currentPath: null,
      showLandingScreen: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showLandingScreen = false;
      this.currentPath = routes['/'];
    }, 3000); 
  },
  components: {
    Header,
    Sidebar,
    Load 
  }
}
</script>

<template>
  <div>
    <div v-if="showLandingScreen">
      <Load /> 
    </div>
    <div v-else>
      <Sidebar />
      <Header />
      <component :is="currentPath" /> 
    </div>
  </div>
</template>

<style></style>
