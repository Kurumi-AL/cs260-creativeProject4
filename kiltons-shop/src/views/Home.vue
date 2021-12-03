<template>
  <div class="home">
    <HomeTitle :cart="products" />
  </div>
</template>

<script>
import HomeTitle from "../components/HomeTitle.vue"
export default {
  name: 'Home',
  components: {
    HomeTitle
  }
}
</script>

<style>
.home {
  padding-top: 100px;
}
</style>
