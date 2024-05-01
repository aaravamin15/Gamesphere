<template>
  <div>
    <Header />
    <div id="content">
      <Sidebar />
      <div class="main-content" style="transform: translateX(50px);">
        <!-- Main Featured Box -->
        <div class="featured-box" @click="handleBoxClick('Game 1')">
          <h2>Featured Game</h2>
          <p>Description of the featured game.</p>
        </div>

        <!-- Grid of Small Boxes -->
        <div class="grid-container">
          <!-- Box 1 -->
          <div class="grid-item" @click="handleBoxClick('Game 2')">
            <h2>Game 1</h2>
            <p>Description of game 1.</p>
          </div>
          <!-- Box 2 -->
          <div class="grid-item" @click="handleBoxClick('Game 3')">
            <h2>Game 2</h2>
            <p>Description of game 2.</p>
          </div>
          <!-- Box 3 -->
          <div class="grid-item" @click="handleBoxClick('Game 4')">
            <h2>Game 3</h2>
            <p>Description of game 3.</p>
          </div>
          <!-- Box 4 -->
          <div class="grid-item" @click="handleBoxClick('Game 5')">
            <h2>Game 4</h2>
            <p>Description of game 4.</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue' 
import Sidebar from '../Sidebar.vue' 

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar
  },
  methods: {
    handleBoxClick(game) {
      // Emit an event with the game name
      this.$emit('game-clicked', game);
    }
  }
};
</script>

<style scoped>
#content {
  display: flex;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
}

h1 {
  color: #333;
}

p {
  color: #555;
}

.featured-box {
  background-color: #f0f0f0;
  width: 1200px;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  height: 300px;
}

/* Grid Container Styles */
.grid-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  gap: 25px; /* Gap between items */
  height: 250px;
}

/* Grid Item Styles */
.grid-item {
  width: calc(25% - 20px); /* Each item takes up 25% of the container width minus the gap */
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer; /* Change cursor to pointer on hover */
}
</style>
