<template>
    <dir class="wrapper">
        <div class="cart">
            <div class="item" v-for="(item, index) in cart" :key="index">
                <div class="info">
                    <h1>{{item.item_name}}</h1>
                </div>
                <div class="image">
                    <img :src="item.pic_path">
                </div>
                <div class="price">
                    <h2>{{item.price_mon}}</h2> <h4>Mon</h4>
                    <button v-on:click="RemoveItem(item)" class="auto">Remove Item</button>
                </div>
            </div>
        </div>
    </dir>
</template>


<script>
export default {
    name: 'CartList',
    computed: {
        cart: function() {
            return this.$store.getters.cart
        }
    },
    methods: {
        RemoveItem(item) {
            console.log("Remove the item from the cart.")
            console.log(item)
            this.$store.commit('deleteFromCart', item);
            this.$store.commit('add', item.price_mon);
        },
    }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
}

.cart {
  margin-top: 0;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.item img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.item .image {
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

