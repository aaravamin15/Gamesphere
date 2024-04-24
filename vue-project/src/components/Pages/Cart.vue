<template>
    <div>
      <h1>Shopping Cart</h1>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="(item, index) in cartItems" :key="index">
            {{ item.name }} - ${{ item.price }} - Quantity: {{ item.quantity }}
            <button @click="removeFromCart(index)">Remove</button>
          </li>
        </ul>
        <p>Total: ${{ total }}</p>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cartItems: [
          { name: 'Product 1', price: 10, quantity: 1 },
          { name: 'Product 2', price: 20, quantity: 2 },
          { name: 'Product 3', price: 15, quantity: 1 }
        ]
      };
    },
    computed: {
      total() {
        return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      }
    },
    methods: {
      removeFromCart(index) {
        this.cartItems.splice(index, 1);
      },
      checkout() {
        // Implement checkout logic here
        alert('Checkout functionality is not implemented yet!');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  