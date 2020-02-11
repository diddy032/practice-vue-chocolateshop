<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <router-link to="/home" >首頁</router-link>
            <span class="mx-2 mb-0">/</span>
            <router-link to="/shop" >我們的商品</router-link>
            <span class="mx-2 mb-0">/</span>
            <strong class="text-black">{{product.title}}</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img :src="product.imageUrl" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 class="text-black">{{product.title}}</h2>
            <h5 class="my-3">{{product.description}}</h5>
            <div class="d-flex align-items-baseline my-3">
              <div class="text-primary font-weight-bold h2 mb-0 mr-3">NT{{product.price | currency}}</div>
              <del class="h4">NT{{product.origin_price | currency}}</del>
            </div>
            <div class="mb-4">
              <div class="input-group mb-3" style="max-width: 120px;">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-primary js-btn-minus" type="button" @click.prevent="MinusCount">&minus;</button>
                </div>
                <input type="text" class="form-control text-center" v-model="tempProduct.qty" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <div class="input-group-append">
                  <button class="btn btn-outline-primary js-btn-plus" type="button" @click.prevent="AddCount">&plus;</button>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <button type="button" @click.prevent="addtoCart(product.id)" class="buy-now btn btn-sm btn-primary">加入購物車</button>
              <div class="mx-3">
                <div class="text-primary position-absolute" style=" z-index: 3;" @click="EditLikeList(product.id)">
                  <div class="like-farme-iton text-danger">
                    <i class="far fa-heart like-iton" v-if="liked.indexOf(product.id)== -1"></i>
                    <i class="fas fa-heart like-iton" v-else></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8 col-12 my-4">
            <nav class="nav nav-pills justify-content-star">
              <div class="nav nav-tabs mx-md-auto" id="nav-tab" role="tablist">
                <div class="nav-item nav-link active" id="nav-item-content" data-toggle="tab" href="#nav-content" role="tab" aria-controls="nav-content" aria-selected="true">商品介紹</div>
                <div class="nav-item nav-link" id="nav-item-info" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="false">商品資訊</div>
              </div>
            </nav>
            <hr class="my-1">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-content" role="tabpanel" aria-labelledby="nav-item-content">{{product.content}}</div>
              <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-item-info">
                <table class="table table-borderless txet-left">
                  <tr>
                    <th scope="row">製造方式:</th>
                    <td>手工製造</td>
                  </tr>
                  <tr>
                    <th scope="row">商品產地:</th>
                    <td>台灣</td>
                  </tr>
                  <tr>
                    <th scope="row">分類:</th>
                    <td>{{product.category}}</td>
                  </tr>
                  <tr>
                    <th scope="row">單位:</th>
                    <td>{{product.unit}}</td>
                  </tr>
                </table>
              </div>
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
      product: {},
      liked: JSON.parse(localStorage.getItem('Like Item List')) || [],
      tempProduct: {
        id: '',
        qty: 1
      },
      status: {
        loadingItem: ''
      },
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${vm.tempProduct.id}`
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false
          vm.product = response.data.product
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
          vm.$router.push('/shop')
        }
      })
    },
    addtoCart (id) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      const cart = {
        product_id: id,
        qty: parseInt(vm.tempProduct.qty)
      }
      vm.status.loadingItem = id
      vm.$http.post(api, { data: cart }).then((response) => {
        vm.status.loadingItem = ''
        vm.getProduct()
        vm.$bus.$emit('message:push', response.data.message, 'success')
        vm.$bus.$emit('cart-item', '修改購物車icon')
      })
    },
    EditLikeList (item) {
      const vm = this
      const num = vm.liked.indexOf(item)
      if (num === -1) {
        vm.liked.push(item)
        vm.$bus.$emit('message:push', '「加入」願望清單', 'success')
      } else {
        vm.liked.splice(num, 1)
        vm.$bus.$emit('message:push', '「移出」願望清單', 'warning')
      }
      localStorage.setItem('Like Item List', JSON.stringify(vm.liked))
    },
    MinusCount () {
      const vm = this
      if (vm.tempProduct.qty > 1) {
        vm.tempProduct.qty--
      }
    },
    AddCount () {
      const vm = this
      vm.tempProduct.qty++
    }
  },
  created () {
    this.tempProduct.id = this.$route.params.id
    this.getProduct()
  }
}
</script>
<style lang="scss">
  .img-cover{
    overflow: hidden;
    z-index: 1;
    .img-hover{
      transition: 0.3s;

      &:hover{
        transform: scale(1.13);
      }
    }
  }
  .like-farme-iton{
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 12px rgba(0,0,0,0.2);
    z-index: 3;
    cursor: pointer;

    .like-iton{
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 1.5rem;
    }
    &:hover .like-iton{
      color: #dc3545;
    }
  }
</style>
