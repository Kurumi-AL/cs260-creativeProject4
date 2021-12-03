import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        balance: 0,
        cart: [],
        total: 0,
    },
    plugins: [createPersistedState()],
    mutations: {
        add(state, amount) {
            state.balance += amount
        },
        subtract(state, amount) {
            state.balance -= amount
        },
        addToCart(state, item) {
            state.cart.push(item)
            state.total += item.price_mon
        },
        deleteFromCart(state, item) {
            state.cart.splice(state.cart.indexOf(item), 1)
            state.total -= item.price_mon
        },
        addToTotal(state, amount) {
            state.total += amount
        },
        subtractFromTotal(state, amount) {
            state.total -= amount
        }
    },
    getters: {
        balance: state => state.balance,
        cart: state => state.cart,
        total: state => state.total,
        remainingBalance: state => state.remainingBalance
    }
})