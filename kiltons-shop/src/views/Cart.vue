<template>
  <div>
    <div class="cart">
      <div class="title">
        <h1>Cart</h1>
      </div>

      <div class="info">
        <h4>Total: {{ total }} Mon</h4>
        <h4>Remaining Balance: {{ balance }} Mon</h4>
      </div>
    </div>
    <CartList />
  </div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    balance: function() {
      return this.$store.getters.balance
    },
    total: function() {
      return this.$store.getters.total
    },
  } 
}
</script>

<style>
.cart {
  padding-top: 100px;
}

.title {
  text-align: center;
}

.info {
  margin-top: 40px;
  padding-bottom: 0;
  text-align: center;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>