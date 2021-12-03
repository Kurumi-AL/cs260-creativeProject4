<template>
  <div id="app">
      <!-- Navbar -->
      <div class="navber">
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
          <b-navbar-brand href="/">Kilton's shop</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item><router-link to="/diary" style="color: white">Diary</router-link></b-nav-item>
              <b-nav-item><router-link to="/money-exchange" style="color: white">Money Exchange</router-link></b-nav-item>
              <b-nav-item><router-link to="/shop" style="color: white">Shop</router-link></b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item style="color: white">Balance {{ balance }} Mon</b-nav-item>
              <b-nav-item><router-link to="/cart" style="color: white">Cart</router-link></b-nav-item>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </div>

      <router-view></router-view>

      <!-- Footer -->
      <CustomFooter />
      
  </div>
</template>



<script>
import CustomFooter from './components/CustomFooter.vue'

export default {
  components: {
    CustomFooter
  },
  computed: {
    balance() {
        return this.$store.getters.balance
    }
  }
}
</script>

<style>

</style>
