<template>
<div>
  <div class="shop">
    <div class="title">
      <h1>Shop Page</h1>
    </div>
  </div>

  <ShopList :items="items" />
</div>

</template>

<script>
import axios from 'axios';
import ShopList from "../components/ShopList.vue";
export default {
  name: 'Shop',
  components: {
    ShopList
  },
  data() {
    return {
      items: [],
    }
  },
  async created() {
    this.items = await this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get('http://localhost:3000/api/items');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
  
}
</script>

<style>
.shop {
  padding-top: 100px;
}

.title {
  text-align: center;
}
</style>