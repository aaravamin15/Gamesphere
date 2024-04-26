<template>
    <div id="topbar">
      <div id="logo-box">
        <img src="../assets/logo.png" alt="Logo" id="logo">
      </div>
      <div id="search-bar">
        <input type="text" placeholder="Search...">
      </div>
      <div id="cart" @click="showCart">Cart</div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showCart() {
        alert('Clicked on cart');
        
      }
    }
  };
  </script>
  
  <style scoped>
  #topbar {
    background-color: #2c7a7b;
    color: #fff;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 75px;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1); /* Soft shadow */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #logo-box {
    padding: 0;
  }
  
  #logo {
    width: 100px;
    height: auto;
  }
  
  #search-bar {
    margin: 0 20px; 
    background-color: #fff;
    border-radius: 300px;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 400px;
  }
  
  #search-bar input[type="text"] {
    border: none;
    outline: none;
    flex: 1; 
  }
  
  #cart {
    cursor: pointer;
  }
  </style>
  