<template>
    <dir class="wrapper">
        <div class="products">
            <div class="product" v-for="exchangeRate in exchangeRates" :key="exchangeRate.id">
                <div class="info">
                    <h1>{{exchangeRate.monster_parts}}</h1>
                </div>
                <div class="image">
                    <img :src="exchangeRate.pic_path">
                </div>
                <div class="price">
                    <h2>{{exchangeRate.price_mon}}</h2> <h4>Mon</h4>
                    <button v-on:click="addToBalance(exchangeRate)" class="auto">Exchange to Mon</button>
                </div>
            </div>
        </div>
    </dir>
</template>


<script>
export default {
    name: 'ExchangeRatesList',
    props: {
        exchangeRates: Array
    },
    methods: {
        addToBalance(exchangeRate) {
            console.log("In AddToBalance");
            console.log(exchangeRate);
            this.$store.commit('add', exchangeRate.price_mon);
        }
    }
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 130px;
  margin-top: 0;
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

