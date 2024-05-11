<template>
  <div class="background-container"></div>
  <div class="landing-screen">
    <img src="../../assets/logo.png" alt="Logo" class="centered-logo">
  </div>
</template>

<script>
export default {
  name: 'LandingScreen',
  data() {
    return {
      isSpinningClockwise: true, // Boolean to track animation direction
    };
  },
  mounted() {
    // Automatically start the animation when the component is mounted
    setInterval(this.toggleAnimationDirection, 2000); // Change direction every 2 seconds
  },
  methods: {
    toggleAnimationDirection() {
      this.isSpinningClockwise = !this.isSpinningClockwise; // Toggle direction
    },
  },
};
</script>

<style scoped>
.background-container {
background-color: aqua; /* Set background color of entire screen */
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
}


.landing-screen {
  position: absolute;
  left: 43%;
  top: 35%;
  background-color: aqua;
}

.centered-logo {
  transform: scale(4);
  width: 200px; 
  height: 200px; /* Make the logo square */
  animation: spin 2s infinite; /* Add animation here directly */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
