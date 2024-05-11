<template>
  <div>
    <h1>RPG Games</h1>
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
        { title: 'The Witcher 3: Wild Hunt', genre: 'Action RPG' },
        { title: 'Final Fantasy VII Remake', genre: 'Japanese RPG' },
        { title: 'Divinity: Original Sin 2', genre: 'CRPG' },
        { title: 'Persona 5', genre: 'Japanese RPG' },
        { title: 'Dark Souls III', genre: 'Action RPG' }
      ]
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
