<template>
  <div>
    <Header />
    <div id="content">
      <Sidebar />
      <div class="main-content" style="transform: translateX(50px);">
        <!-- Main Featured Box -->
        <button class="featured-box">
          <h2>Featured Game</h2>
          <p>Description of the featured game.</p>
        </button>

        <!-- Grid of Small Boxes -->
        <div class="grid-container">
          <!-- Box 1 -->
          <button class="grid-item" @click="navigateToGame(1)">
            <div>
              <h2>Game 1</h2>
              <p>Description of game 1.</p>
            </div>
          </button>
          <!-- Box 2 -->
          <button class="grid-item" @click="navigateToGame(2)">
            <div>
              <h2>Game 2</h2>
              <p>Description of game 2.</p>
            </div>
          </button>
          <!-- Box 3 -->
          <button class="grid-item" @click="navigateToGame(3)">
            <div>
              <h2>Game 3</h2>
              <p>Description of game 3.</p>
            </div>
          </button>
          <!-- Box 4 -->
          <button class="grid-item" @click="navigateToGame(4)">
            <div>
              <h2>Game 4</h2>
              <p>Description of game 4.</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    navigateToGame(number) {
      console.log("going to " + number) 
      this.$router.push({ path: `/gamepage/${number}` });
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
.featured-box:hover {
  background-color: #e0e0e0; 
}



.grid-container {
  display: flex;
  flex-wrap: wrap; 
  gap: 25px; 
  height: 250px;
}


.grid-item {
  width: calc(25% - 20px); 
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer; 
  border: none; 
  outline: none; 
  text-align: left;
}

.grid-item:hover {
  background-color: #e0e0e0; 
}

.grid-item div {
  display: flex;
  flex-direction: column;
}

.grid-item h2 {
  margin: 0 0 10px; 
}
</style>
