<template>
    <dir class="wrapper">
        <div class="products">
            <div class="product" v-for="item in items" :key="item.id">
                <div class="info">
                    <h1>{{item.item_name}}</h1>
                </div>
                <div class="image">
                    <img :src="item.pic_path">
                </div>
                <div class="price">
                    <h2>{{item.price_mon}} </h2> <h4>Mon</h4>
                    <button v-on:click="addToCart(item)" class="auto">Add to Cart</button>
                </div>
            </div>
        </div>
    </dir>
</template>


<script>
    export default {
        name: 'ShopList',
        props: {
            items: Array
        },
        methods: {
            addToCart(item) {
                console.log("In AddToCart");
                console.log(item);
                if ((this.$store.getters.balance - item.price_mon) > 0) {
                    this.$store.commit('subtract', item.price_mon);
                    this.$store.commit('addToCart', item);
                } else {
                }
            },
        }
    }
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 130px;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #66cae9;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>

