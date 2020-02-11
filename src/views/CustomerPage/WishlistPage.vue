<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="site-section">
      <div class="container" v-if="WishList.length>0">
        <div class="row mb-5 d-none d-lg-block d-xl-block" >
          <form class="col-md-12" method="post">
            <div class="site-blocks-table">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="product-thumbnail">商品圖片</th>
                    <th class="product-name">產品名稱</th>
                    <th class="product-price">價格</th>
                    <th class="product-quantity">數量</th>
                    <th class="product-total">加入購物車</th>
                    <th class="product-remove">刪除</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in WishItemInfo" :key="index">
                    <td class="product-thumbnail">
                      <router-link :to="`/shopsitem/${item.id}`" >
                        <img :src="item.imageUrl" alt="Image" class="img-fluid">
                      </router-link>
                    </td>
                    <td class="product-name">
                      <router-link :to="`/shopsitem/${item.id}`" >
                        <h2 class="h5 text-black">{{item.title}}</h2>
                      </router-link>
                    </td>
                    <td>NT{{item.price | currency}}</td>
                    <td>
                      <div class="input-group m-auto" style="max-width: 120px;">
                        <div class="input-group-prepend">
                          <button class="btn btn-outline-primary js-btn-minus" type="button" @click.prevent="MinusCount(item)">&minus;</button>
                        </div>
                        <input type="text" class="form-control text-center" aria-label="Example text with button addon" aria-describedby="button-addon1" :value="item.qty" disabled>
                        <div class="input-group-append">
                          <button class="btn btn-outline-primary js-btn-plus" type="button" @click.prevent="AddCount(item)">&plus;</button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <a href="#" class="btn btn-primary btn-sm" @click.prevent="addtoCart(item.id,item.qty)">
                        <i class="fas fa-cart-plus fa-lg"></i>
                      </a>
                    </td>
                    <td>
                      <a href="#" class="btn btn-outline-secondary btn-sm" @click.prevent="delWishList(item.id)">X</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
        <div class="row mb-5 d-lg-none d-xl-none">
          <div class="col-12 col-md-10 mb-4 border-top mx-auto" v-for="(item, index) in WishItemInfo" :key="index">
            <div class="container">
              <div class="row">
                <div class="col-4 pr-0">
                  <router-link :to="`/shopsitem/${item.id}`" >
                    <img :src="item.imageUrl" alt="Image" class="figure-img img-fluid rounded">
                  </router-link>
                </div>
                <div class="col-8 d-flex align-items-center">
                  <div class="block-4-text">
                    <router-link :to="`/shopsitem/${item.id}`" class="text-primary h5">
                    {{item.title}}
                    </router-link>
                    <div class="d-flex align-items-center">
                      <div class="text-primary font-weight-bold h4 mb-0 mb-2">NT{{item.price | currency}}</div>
                      <del class="h5">NT{{item.origin_price | currency}}</del>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="input-group" style="max-width: 120px;">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-primary js-btn-minus" type="button" @click.prevent="MinusCount(item)">&minus;</button>
                    </div>
                    <input type="text" class="form-control text-center" aria-label="Example text with button addon" aria-describedby="button-addon1" :value="item.qty" disabled>
                    <div class="input-group-append">
                      <button class="btn btn-outline-primary js-btn-minus" type="button" @click.prevent="AddCount(item)">&plus;</button>
                    </div>
                  </div>
                </div>
                <div class="col-6 d-flex justify-content-between pl-0">
                  <a href="#" class="btn btn-primary btn-sm" @click.prevent="addtoCart(item.id,item.qty)">
                    <i class="fas fa-cart-plus"></i>
                  </a>
                  <a href="#" class="btn btn-outline-secondary btn-sm" @click.prevent="delWishList(item.id)">X</a>
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
            <div class="h3">願望清單還是空的喔！</div>
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
      products: [],
      WishItemInfo: [],
      WishList: JSON.parse(localStorage.getItem('Like Item List')) || [],
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products
        vm.isLoading = false
        vm.getWishLish()
      })
    },
    getWishLish () {
      const vm = this
      vm.WishItemInfo = vm.products.filter(function (element, index, array) {
        return vm.WishList.indexOf(element.id) > -1
      })
      vm.WishItemInfo.forEach(function (element, index, array) {
        element.qty = 1
      })
    },
    delWishList (item) {
      const vm = this
      const num = vm.WishList.indexOf(item)
      if (num !== -1) {
        vm.WishList.splice(num, 1)
        vm.getWishLish()
      }
      localStorage.setItem('Like Item List', JSON.stringify(vm.WishList))
    },
    addtoCart (id, qty) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      const cart = {
        product_id: id,
        qty
      }
      vm.$http.post(api, { data: cart }).then((response) => {
        const num = vm.WishList.indexOf(id)
        if (num !== -1) {
          vm.WishList.splice(num, 1)
          vm.getWishLish()
        }
        localStorage.setItem('Like Item List', JSON.stringify(vm.WishList))
        vm.$bus.$emit('message:push', '商品加入購物車', 'success')
        vm.$bus.$emit('cart-item', '修改購物車icon')
      })
    },
    MinusCount (item) {
      if (item.qty > 1) {
        item.qty--
      }
      const num = this.WishItemInfo.indexOf(item)
      this.$set(this.WishItemInfo, num, this.WishItemInfo[num])
    },
    AddCount (item) {
      item.qty++
      const num = this.WishItemInfo.indexOf(item)
      this.$set(this.WishItemInfo, num, this.WishItemInfo[num])
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
<style lang="scss" spoced>
  .form-control:disabled{
    background-color: white;
  }
</style>
