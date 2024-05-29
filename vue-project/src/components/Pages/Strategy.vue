<template>
  <div>
    <h1>Strategy Games</h1>
    <ul>
      <li v-for="(game, index) in games" :key="index">
        <template v-if="game.title === 'Daily Room Escape'">
          <RouterLink to="/#/playgame">{{ game.title }}</RouterLink> - {{ game.genre }}
        </template>
        <template v-else>
          {{ game.title }} - {{ game.genre }}
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        { title: 'Daily Room Escape', genre: 'Escape Room' },
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, sans-serif;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-family: Arial, sans-serif;
  font-size: 18px;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

li:last-child {
  border-bottom: none;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
