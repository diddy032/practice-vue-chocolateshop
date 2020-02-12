<template>
  <div>
    <i class="fas fa-shopping-cart"></i>
    <span class="count" v-if="ItemConut>0">{{ItemConut}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ItemConut: 0
    }
  },
  methods: {
    getCartItem () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.ItemConut = 0
      vm.$http.get(api).then((response) => {
        const totlaNum = response.data.data.carts.length
        for (let i = 0; i < totlaNum; i++) {
          vm.ItemConut += response.data.data.carts[i].qty
        }
      })
    }
  },
  created () {
    const vm = this
    vm.getCartItem()
    vm.$bus.$on('cart-item', (message) => {
      vm.getCartItem()
    })
  }
}
</script>
