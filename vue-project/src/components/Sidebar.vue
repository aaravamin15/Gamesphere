<template>
  <div id="sidebar">
    <h2 style="color: #333;">Genres</h2>
    <ul>
      <li v-for="(genre, index) in genres" :key="index">
        <RouterLink :to="genre.link" style="color: #555;">{{ genre.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        { name: "Action", link: "/#/action" },
        { name: "Adventure", link: "/#/adventure" },
        { name: "RPG", link: "/#/rpg" },
        { name: "Strategy", link: "/#/strategy" },
        { name: "Simulation", link: "/#/simulation" }
      ]
    };
  }
};
</script>

<style scoped>
#sidebar {
  width: 120px;
  background-color: #f4f4f4;
  padding: 20px;
  height: calc(100vh - 75px);
  position: fixed;
  top: 75px;
  left: 0;
  z-index: 900;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}

#sidebar ul {
  list-style-type: none;
  padding: 0;
}

#sidebar ul li {
  margin-bottom: 10px;
}
</style>
