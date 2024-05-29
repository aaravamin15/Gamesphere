<template>
  <div class="game-container">
    <iframe :src="iframeSrc" width="1000px" height="600px" scrolling="no" style="border:none"></iframe>
  </div>
</template>


<script>
import axios from "axios"

export default {
  name: 'GamePage',
  data(){
    return{
      iframeSrc: ''
    };
  },
  methods: {
    fetchiframeSrc(){
      const gameNumber = this.
      $route.params.number;
      axios.get("http://localhost:3000/game/" + gameNumber)
      .then(response => {
        console.log(gameNumber)

        this.iframeSrc =
        response.data[0].Link;
        console.log("link is " + this.iframeSrc)
      })
      .catch(error => {
        console.error('Error fetching iframe page', error);
      });
    }

  },
  mounted(){
    this.fetchiframeSrc();

  }
};


// export default {
//   name: 'GamePage',
//   computed: {
//     iframeSrc() {
//       const gameNumber = this.$route.params.number;
//       axios.get("http://localhost:3000/game/" + gameNumber).then(
//         function (response) {
//           console.log(response.data[0].Link);
//           return response.data[0].Link
//         }
//       );

      // switch (gameNumber) {
      //   case "F": "https://classic.minecraft.net"
      //   case '1':
      //     return "https://www.addictinggames.com/embed/html5-games/10000492";
      //   case '2':
      //     return "https://www.addictinggames.com/embed/html5-games/20398"; 
      //   case '3':
      //     return "https://www.addictinggames.com/embed/html5-games/24695"; 
      //   case '4':
      //     return "https://www.addictinggames.com/embed/html5-games/25167"; 
      //   default:
      //     return "https://classic.minecraft.net"; 
      // }
//     }
//   }
// };
</script>

<style scoped>
.game-container {
  margin-top: 80px;
  margin-left: 166px;
}
</style>
