<template>
  <div>
    <div class="money-exchange">
      <div class="title">
        <h1>Money Exchange</h1>
      </div>
    </div>

    <ExchangeRatesList :exchangeRates="exchangeRates" />
  </div>


</template>

<script>
import axios from 'axios';
import ExchangeRatesList from "../components/ExchangeRatesList.vue";
export default {
  name: 'MoneyExchange',
  components: {
    ExchangeRatesList
  },
  data() {
    return {
      exchangeRates: [],
    }
  },
  async created() {
    this.exchangeRates = await this.getExchangeRates();
    console.log("exchangerates", this.exchangeRates)
  },
  methods: {
    async getExchangeRates() {
      try {
        let response = await axios.get(process.env.VUE_APP_API_ENDPOINT + '/exchange-rates');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>
.money-exchange {
  padding-top: 100px;
}

.title {
  text-align: center;
}
</style>