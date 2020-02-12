<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="site-section">
      <div class="container" v-if="cart.total>0">
        <div class="row mb-5 d-none d-lg-block d-xl-block">
          <form class="col-md-12" method="post">
            <div class="site-blocks-table table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="product-thumbnail">商品圖片</th>
                    <th class="product-name">產品名稱</th>
                    <th class="product-price">價格</th>
                    <th class="product-quantity">數量</th>
                    <th class="product-total">總金額</th>
                    <th class="product-remove">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in cart.carts" :key="index">
                    <td class="product-thumbnail">
                      <router-link :to="`/shopsitem/${item.product_id}`" >
                        <img :src="item.product.imageUrl" alt="Image" class="img-fluid">
                      </router-link>
                    </td>
                    <td class="product-name">
                      <router-link :to="`/shopsitem/${item.product_id}`" >
                        <h2 class="h5 text-black">{{item.product.title}}</h2>
                        <div class="text-success" v-if="item.coupon">
                          已套用優惠券
                        </div>
                      </router-link>
                    </td>
                    <td class="h6">{{item.product.price | currency}}</td>
                    <td class="h6">{{item.qty}}</td>
                    <td class="h6">
                      {{item.total | currency}}
                      <div class="text-success" v-if="item.coupon">
                        折扣後:{{item.final_total | currency}}
                      </div>
                    </td>
                    <td><a href="#" @click.prevent="removeCartItem(item.id)" class="btn btn-primary btn-sm">X</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div class="row mb-5 d-lg-none d-xl-none">
          <div class="col-12 col-md-10 mb-4 border-top mx-auto" v-for="(item, index) in cart.carts" :key="index">
            <div class="container">
              <div class="row">
                <div class="col-4 pr-0">
                  <router-link :to="`/shopsitem/${item.product_id}`" >
                    <img :src="item.product.imageUrl" alt="Image" class="figure-img img-fluid rounded">
                  </router-link>
                </div>
                <div class="col-8">
                  <router-link :to="`/shopsitem/${item.product_id}`">
                    <h2 class="h5 text-black">
                    {{item.product.title}}
                    </h2>
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-5">
                  <div class="text-primary font-weight-bold h5 mb-0 mb-2">NT{{item.product.price | currency}}</div>
                </div>
                <div class="col-2 font-weight-bold">
                  X{{item.qty}}
                </div>
                <div class="col-5 text-right font-weight-bold h5">
                  NT{{item.total | currency}}
                  <div class="text-success ml-2 h6" v-if="item.coupon">
                    折扣:-{{cart.total-cart.final_total | currency}}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-center">
                  <a href="#" @click.prevent="removeCartItem(item.id)" class="btn btn-secondary btn-sm">X</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="container">
              <div class="row mb-5">
                <div class="col-md-6 mb-3 mb-md-0">
                  <button class="btn btn-primary btn-sm btn-block" @click="getCart">更新購物車列表</button>
                </div>
                <div class="col-md-6">
                  <router-link type="button" class="btn btn-outline-primary btn-sm btn-block" to="/shop">繼續購物</router-link>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label class="text-black h4" for="coupon">優惠券</label>
                <p>如果您有優惠券，請在下方輸入優惠券代碼</p>
              </div>
              <div class="col-md-8 mb-3 mb-md-0">
                <input type="text" class="form-control py-3" id="coupon" placeholder="輸入優惠券代碼" v-model="coupon_code">
              </div>
              <div class="col-md-4">
                <button class="btn btn-primary btn-sm" @click="addCouponCode">套用優惠碼</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 pl-md-5">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12 text-right border-bottom mb-5">
                    <h3 class="text-black h4 text-uppercase">付款資訊</h3>
                  </div>
                </div>
                <div class="row mb-3" v-if="cart.total !== cart.final_total">
                  <div class="col-6">
                    <span class="text-black">購買總金額</span>
                  </div>
                  <div class="col-6 text-right">
                    <strong class="text-black">{{cart.total | currency}}</strong>
                  </div>
                </div>
                <div class="row mb-3 text-danger" v-if="cart.total !== cart.final_total">
                  <div class="col-6">
                    <span class="">優惠券折抵</span>
                  </div>
                  <div class="col-6 text-right">
                    <strong class="">-{{cart.total-cart.final_total | currency}}</strong>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-6">
                    <span class="text-black">訂單金額</span>
                  </div>
                  <div class="col-6 text-right">
                    <strong class="text-black">{{cart.final_total | currency}}</strong>
                  </div>
                </div>
                <div class="row">
                  <div class="container">
                    <div class="col-md-12">
                      <router-link type="button" to="/checkout" class="btn btn-primary btn-lg py-3 btn-block">前往結帳</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-else>
        <div class="row">
          <div class="col-12 text-center">
            <div class="h2">Oops!</div>
            <i class="far fa-grin-beam-sweat fa-10x my-2" ></i>
            <div class="h3">你的購物車沒有商品</div>
            <router-link type="button" class="btn btn-primary my-3" to="/shop">現在就去逛逛!</router-link>
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
      cart: [],
      isLoading: false,
      coupon_code: ''
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.isLoading = false
        vm.cart = response.data.data
        vm.$bus.$emit('cart-item', '修改購物車icon')
      })
    },
    removeCartItem (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      const vm = this
      vm.isLoading = true
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', '該商品' + response.data.message, 'success')
          vm.isLoading = false
          vm.getCart()
        }
      })
    },
    addCouponCode () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      const vm = this
      const coupon = {
        code: vm.coupon_code
      }
      vm.$http.post(api, { data: coupon }).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', response.data.message, 'success')
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
        }
        vm.getCart()
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
