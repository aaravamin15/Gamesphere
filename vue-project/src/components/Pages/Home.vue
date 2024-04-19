<template>
    <div>
      <Header />
      <div id="content">
        <Sidebar />
        <div class="main-content">
          <h1>Welcome to My Game Website</h1>
          <p>This is the home page of our game website.</p>
          <p>Explore different genres of games using the sidebar.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue' 
  import Sidebar from './components/Sidebar.vue' 
  
  export default {
    name: 'Home',
    components: {
      Header,
      Sidebar
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
  </style>
  