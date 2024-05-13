<template>
  <div id="topbar">
    <div id="logo-box">
      <a href="/#/">
        <img src="../assets/logo.png" alt="Logo" id="logo">
      </a>
    </div>
    <div id="search-bar">
      <input type="text" placeholder="Search...">
    </div>
    <div id="cart" @click="showCart">
      <div id="cart-content">
        <img src="../assets/Cart.png" alt="Cart" id="carticon">
        <span>PlayCart</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showCart() {
      const cartLink = "/#/cart";
      window.location.href = cartLink;
    }
  }
};
</script>

<style scoped>
#topbar {
  background-color: aqua;
  color: #fff;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 75px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0, 0, 0, 0.1); /* Soft shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo-box {
  padding: 0;
}

#logo {
  width: 100px;
  height: auto;
}

#search-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 300px;
  padding: 15px;
  display: flex;
  width: 700px;
  align-items: center;
}

#search-bar input[type="text"] {
  border: none;
  outline: none;
  flex: 1;
}

#cart {
  cursor: pointer;
}

#cart-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#carticon {
  width: 70px;
  height: auto;
  margin-bottom: -20px; 
}
</style>
