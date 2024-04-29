<template>
    <div class="landing-screen">
      <div class="centered-content">
    
        <img src="../../assets/logo.png" alt="Logo" class="centered-logo" :style="{ animation: animationDirection }">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingScreen',
    data() {
      return {
        animationDirection: 'spin 2s infinite', 
      };
    },
    methods: {
      toggleAnimationDirection() {
        this.animationDirection = this.animationDirection === 'spin 2s infinite' ? 'spin-reverse 2s infinite' : 'spin 2s infinite';
      },
    },
  };
  </script>
  
  <style scoped>
  .landing-screen {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; 
  }
  
  .centered-content {
    text-align: center;
  }
  
  .centered-logo {
    width: 100px; 
    height: auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(720deg); }
    100% { transform: rotate(1440deg); }
  }
  
  @keyframes spin-reverse {
    0% { transform: rotate(1440deg); }
    50% { transform: rotate(720deg); }
    100% { transform: rotate(0deg); }
  }
  </style>
  