<template>
    <div>
      <h1>Strategy Games</h1>
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
          { title: 'Civilization VI', genre: 'Turn-based Strategy' },
          { title: 'Stellaris', genre: '4X Grand Strategy' },
          { title: 'Age of Empires II', genre: 'Real-time Strategy' },
          { title: 'XCOM 2', genre: 'Turn-based Tactics' },
          { title: 'Total War: Three Kingdoms', genre: 'Real-time Tactics' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  