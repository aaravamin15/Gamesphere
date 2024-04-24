<template>
    <div>
      <h1>Simulation Games</h1>
      <ul>
        <li v-for="(game, index) in games" :key="index">
          {{ game.title }} - {{ game.genre }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        games: [
          { title: 'The Sims 4', genre: 'Life Simulation' },
          { title: 'Cities: Skylines', genre: 'City-building' },
          { title: 'Microsoft Flight Simulator', genre: 'Flight Simulation' },
          { title: 'Euro Truck Simulator 2', genre: 'Vehicle Simulation' },
          { title: 'Planet Coaster', genre: 'Theme Park Simulation' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  