<template>
    <div>
      <h1>Adventure Games</h1>
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
          { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure' },
          { title: 'Uncharted 4: A Thief\'s End', genre: 'Action-adventure' },
          { title: 'Red Dead Redemption 2', genre: 'Action-adventure' },
          { title: 'Horizon Zero Dawn', genre: 'Action-adventure' },
          { title: 'The Last of Us Part II', genre: 'Action-adventure' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  