<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0 mx-auto text-dark">
            <h2 class="h3 mb-3 text-black">購買人資訊</h2>
            <div class="p-3 p-lg-5 border" @submit.prevent="createOrder">
              <div class="form-group font-weight-bold">
                <label for="useremail">信箱 *</label>
                <input type="email" class="form-control" name="email" id="useremail" :class="{'is-invalid':errors.has('email')}" v-validate="'required|email'" v-model="form.user.email"  placeholder="請輸入 Email" required>
                <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
              <div class="form-group font-weight-bold">
                <label for="username">收件人姓名 *</label>
                <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid':errors.has('name')}" v-model="form.user.name" v-validate="'required'"  placeholder="輸入姓名">
                <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
              </div>
              <div class="form-group font-weight-bold">
                <label for="usertel">收件人電話 *</label>
                <input type="tel" class="form-control" name="usertel" id="usertel" :class="{'is-invalid':errors.has('usertel')}" v-validate="'required|numeric'" v-model="form.user.tel" placeholder="請輸入電話">
                <span class="text-danger" v-if="errors.has('usertel')">電話必須輸入</span>
              </div>
              <div class="form-group font-weight-bold">
                <label for="useraddress">收件人地址 *</label>
                <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address" :class="{'is-invalid':errors.has('address')}" v-validate="'required'"
                  placeholder="請輸入地址">
                <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
              </div>
              <div class="form-group">
                <label for="comment" class="text-black">備註:</label>
                <textarea name="c_order_notes" id="comment" cols="30" rows="5" class="form-control" placeholder="給我們訂單訊息或注意事項" v-model="form.message"></textarea>
              </div>
            </div>
          </div>
          <div class="col-md-6 mx-auto">
            <div class="row mb-5">
              <div class="col-md-12">
                <h2 class="h3 mb-3 text-black">訂單明細</h2>
                <div class="p-3 p-lg-5 border">
                  <table class="table site-block-order-table mb-5">
                    <thead>
                      <th>產品名稱</th>
                      <th class="text-center">數量</th>
                      <th class="text-right">價格</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cart.carts" :key="index">
                        <td class="text-primary font-weight-normal" >
                          {{item.product.title}}
                          <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                          </div>
                          <div class="text-secondary" v-else>
                            未套用優惠券
                          </div>
                        </td>
                        <td class="text-primary font-weight-normal text-center">
                          {{item.qty}}
                        </td>
                        <td class="text-primary text-right font-weight-normal">
                          {{item.total | currency}}
                          <div class="text-danger text-right font-weight-normal">
                            -{{item.total - item.final_total | currency}}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="mb-5" v-if="couponShow">
                    <div class="h5 text-dark font-weight-bold">
                      已使用的優惠券
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted font-weight-bold text-primary">折扣券名</small>
                      <div class="h6 text-left font-weight-bold text-primary">{{Coupon.title}}</div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="text-muted font-weight-bold text-primary">折扣碼</small>
                      <div class="h6 text-left font-weight-bold text-primary">{{Coupon.code}}</div>
                    </div>
                    <div class="d-flex justify-content-between">
                      <small class="text-muted font-weight-bold text-primary">折扣%</small>
                      <div class="h6 text-left font-weight-bold text-primary">{{Coupon.percent}}%</div>
                    </div>
                  </div>
                  <table class="table mb-5">
                    <tbody>
                      <tr  v-if="cart.total !== cart.final_total">
                        <td class="text-black font-weight-bold"><strong>購買總金額</strong></td>
                        <td class="text-black text-right font-weight-normal">{{cart.total | currency}}</td>
                      </tr>
                      <tr class="text-danger" v-if="cart.total !== cart.final_total">
                        <td class="font-weight-bold text-danger">
                          <strong>優惠券折抵</strong>
                        </td>
                        <td class="text-danger text-right font-weight-normal">-{{cart.total-cart.final_total | currency}}</td>
                      </tr>
                      <tr>
                        <td class="text-black font-weight-bold"><strong>訂單金額</strong></td>
                        <td class="text-black text-right font-weight-bold"><strong>{{cart.final_total | currency}}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <button type="button" class="btn btn-primary btn-lg py-3 btn-block" @click="createOrder">確認訂單</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      Coupon: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false,
      couponShow: false
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

        if (vm.cart.total === 0) {
          vm.$router.push('/')
          vm.$bus.$emit('message:push', '該頁面目前禁止訪問', 'danger')
        }

        if (vm.cart.final_total !== vm.cart.total) {
          vm.Coupon = vm.cart.carts[0].coupon
          vm.couponShow = true
        } else {
          vm.Coupon = {}
          vm.couponShow = false
        }
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      const vm = this
      const order = vm.form
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(api, { data: order }).then((response) => {
            if (response.data.success) {
              vm.$bus.$emit('message:push', response.data.message, 'success')
              vm.$router.push(`/thankyou/${response.data.orderId}`)
            }
          })
        } else {
          vm.$bus.$emit('message:push', '欄位不完整', 'danger')
        }
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
