<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="site-section pb-0">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center" v-if="order.is_paid">
            <span class="icon-check_circle display-3 text-success"></span>
            <h2 class="display-3 text-black">感謝你!</h2>
            <p class="lead mb-5">你的訂單已完成</p>
          </div>
          <div class="col-md-12 text-dark">
            <form class="col-md-8 mx-auto"  @submit.prevent="payOrder">
              <table class="table">
                <thead class="">
                  <th>品名</th>
                  <th>數量</th>
                  <th class="text-right">金額</th>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in order.products" :key="index">
                    <td class="align-middle font-weight-bold">{{ item.product_id | filterId(Allproducts)}}</td>
                    <td class="align-middle font-weight-normal">{{ item.qty }}</td>
                    <td class="text-right align-middle font-weight-bold">{{item.total | currency}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td class="font-weight-bold text-danger">總計</td>
                    <td></td>
                    <td class="text-right font-weight-bold text-danger">{{ order.total | currency}}</td>
                  </tr>
                </tfoot>
              </table>
              <table class="table">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <td class="font-weight-normal">{{ order.user['email']}}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td class="font-weight-normal">{{ order.user['name'] }}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td class="font-weight-normal">{{ order.user['tel'] }}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td class="font-weight-normal">{{ order.user['address'] }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                      <span v-else class="text-success">付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div class="col-md-8 text-center mx-auto my-3" >
            <div v-if="order.is_paid === false">
              <button class="btn btn-danger" @click="payOrder">確認付款去</button>
            </div>
            <div v-else>
              <router-link type="button" class="btn btn-sm btn-primary btn-block" to="/shop">繼續購物</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Allproducts: [],
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.isLoading = false
        vm.order = response.data.order
      })
    },
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.$http.get(api).then((response) => {
        vm.Allproducts = response.data.products
      })
    },
    payOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`
      vm.isLoading = true
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', response.data.message, 'success')
          vm.getOrder()
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
          vm.getOrder()
        }
        vm.isLoading = false
      })
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder()
    this.getProducts()
  }
}
</script>
