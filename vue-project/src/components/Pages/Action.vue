<template>
    <div>
      <h1>Action Games</h1>
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
          { title: 'Call of Duty: Modern Warfare', genre: 'First-person Shooter' },
          { title: 'Assassin\'s Creed Valhalla', genre: 'Action-adventure' },
          { title: 'Devil May Cry 5', genre: 'Hack and Slash' },
          { title: 'Sekiro: Shadows Die Twice', genre: 'Action-adventure' },
          { title: 'Ghost of Tsushima', genre: 'Action-adventure' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  