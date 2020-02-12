<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="site-section" v-if="products.length>0">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-9 col-md-12 order-2">
            <div class="row">
              <div class="col-md-12 mb-5">
                <div class="float-md-left mb-2"><h2 class="text-black h3 font-weight-bold">{{filterValue}}</h2></div>
                <div class="d-flex" v-if="FilterPorducts.length>0">
                  <div class="dropdown mr-1 ml-md-auto">
                    <div class="btn-group" v-if="FilterPorducts.length>1">
                      <button type="button" class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuReference" data-toggle="dropdown">排序方式</button>
                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuReference">
                        <a class="dropdown-item" href="#" @click.prevent="setOrder(1)">價格, 由低到高</a>
                        <a class="dropdown-item" href="#" @click.prevent="setOrder(2)">價格, 由高到低</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--Fiter Products-->
            <div class="row mb-5" v-if="FilterPorducts.length>0" >
              <div class="col-12 col-lg-6 mb-4" v-for="(item, index) in FilterPorducts" :key="index">
                <div class="block-4 text-center border position-relative">
                  <div class="position-absolute p-2 m-2 text-danger" style="right: 0; z-index: 3;" @click="EditLikeList(item)">
                    <div class="like-farme-iton text-danger">
                      <i class="far fa-heart like-iton text-danger" v-if="liked.indexOf(item.id)== -1"></i>
                      <i class="fas fa-heart like-iton text-danger" v-else></i>
                    </div>
                  </div>
                  <figure class="block-4-image img-cover">
                    <router-link :to="`/shopsitem/${item.id}`">
                      <img :src="item.imageUrl" alt="Image placeholder" class="img-fluid img-hover">
                    </router-link>
                  </figure>
                  <div class="block-4-text p-4">
                    <router-link  :to="`/shopsitem/${item.id}`">
                      <h3>{{item.title}}</h3>
                    </router-link>
                    <div class="my-3">
                      <div class="text-primary font-weight-bold h3 mb-0 mb-2">NT{{item.price | currency}}</div>
                      <del class="h5">NT{{item.origin_price | currency}}</del>
                    </div>
                    <div class="d-flex justify-content-around">
                      <router-link type="button"  :to="`/shopsitem/${item.id}`" class="btn btn-outline-info btn-sm my-3">
                        <i class="fas fa-tag mr-2"></i>
                        查看更多
                      </router-link>
                      <button type="button" class="btn btn-outline-primary btn-sm my-3" @click="addtoCart(item.id)">
                        <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                        <i class="fas fa-shopping-cart mr-2"></i>
                        加到購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!--All Products-->
            <div v-else>
              <div class="row mb-5">
                <div class="col-12 col-lg-6 mb-4" v-for="(item, index) in products" :key="index">
                  <div class="block-4 text-center border position-relative">
                    <div class="position-absolute p-2 m-2 text-danger " style="right: 0; z-index: 3;" @click="EditLikeList(item)">
                      <div class="like-farme-iton">
                        <i class="far fa-heart like-iton" v-if="liked.indexOf(item.id)== -1"></i>
                        <i class="fas fa-heart like-iton" v-else></i>
                      </div>
                    </div>
                    <figure class="block-4-image img-cover">
                      <router-link :to="`/shopsitem/${item.id}`">
                        <img :src="item.imageUrl" alt="Image placeholder" class="img-fluid img-hover">
                      </router-link>
                    </figure>
                    <div class="block-4-text p-4">
                      <router-link  :to="`/shopsitem/${item.id}`">
                        <h3>{{item.title}}</h3>
                      </router-link>
                      <div class="my-3">
                        <div class="text-primary font-weight-bold h3 mb-0 mb-2">NT{{item.price | currency}}</div>
                        <del class="h5">NT{{item.origin_price | currency}}</del>
                      </div>
                      <div class="d-flex justify-content-around">
                        <router-link type="button"  :to="`/shopsitem/${item.id}`" class="btn btn-outline-info btn-sm my-3">
                          <i class="fas fa-tag mr-2"></i>
                          查看更多
                        </router-link>
                        <button type="button" class="btn btn-outline-primary btn-sm my-3" @click="addtoCart(item.id)">
                          <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                          <i class="fas fa-shopping-cart mr-2"></i>
                          加到購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Pagination :pages="paginations" @changeCurrentPage="getProducts"></Pagination>
            </div>
          </div>

          <!--CATEGORIES-->
          <div class="col-lg-3 col-md-12 order-1 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <div class="d-none d-lg-block d-xl-block">
                <h3 class="mb-3 h5 text-uppercase text-black d-block font-weight-bold">分類</h3>
                <ul class="list-unstyled mb-4">
                  <li class="mb-1">
                    <a href="#" class="d-flex font-weight-normal" @click.prevent="setFilter('all')">
                      <span>顯示全部商品</span>
                    </a>
                  </li>
                </ul>
                <ul class="list-unstyled mb-4">
                  <li class="mb-1" v-for="(item, index) in allCategory" :key="index">
                    <a href="#" class="d-flex font-weight-normal" @click.prevent="setFilter(item.title)">
                      <span>{{item.title}}</span> <span class="text-black ml-auto">（{{item.count}}）</span>
                    </a>
                  </li>
                </ul>
              </div>
              <button class="btn btn-primary btn-block my-3 btn-lg d-lg-none d-xl-none" type="button" data-toggle="collapse" data-target="#category2collapse" aria-expanded="false" aria-controls="category2collapse">
                分類
              </button>
              <div class="collapse" id="category2collapse">
                <div class="card card-body border-0">
                  <ul class="list-unstyled mb-4">
                    <li class="mb-1">
                      <a href="#" class="d-flex font-weight-normal" @click.prevent="setFilter('all')">
                        <span>顯示全部商品</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="list-unstyled mb-4">
                    <li class="mb-1" v-for="(item, index) in allCategory" :key="index">
                      <a href="#" class="d-flex font-weight-normal" @click.prevent="setFilter(item.title)">
                        <span>{{item.title}}</span> <span class="text-black ml-auto">（{{item.count}}）</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section" v-else>
      <div class="container" >
        <div class="row">
          <div class="col-12 text-center">
            <div class="h2">Oops!</div>
            <i class="far fa-grin-beam-sweat fa-10x my-2" ></i>
            <div class="h3">敬請期待我們的商品!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Utilities/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      allProducts: [],
      allCategory: [],
      FilterPorducts: [],
      paginations: {},
      liked: JSON.parse(localStorage.getItem('Like Item List')) || [],
      isLoading: false,
      status: {
        loadingItem: ''
      },
      filterValue: ''
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.isLoading = false
        vm.products = response.data.products.reverse().filter(function (element, index, array) {
          return element.is_enabled === 1
        })
        vm.paginations = response.data.pagination
      })
    },
    getAllProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.$http.get(api).then((response) => {
        vm.isLoading = false
        vm.Allproducts = response.data.products.filter(function (element, index, array) {
          return element.is_enabled === 1
        })
        vm.Allproducts.reduce((object, item) => {
          if (item.category in object) {
            object[item.category]++
            vm.allCategory.forEach(function (element, index, array) {
              if (element.title === item.category) {
                element.count++
              }
            })
          } else {
            object[item.category] = 1
            vm.allCategory.push({ title: item.category, count: 1 })
          }
          vm.setFilter(vm.$route.params.categoryName)
          return object
        }, {})
      })
    },
    addtoCart (id, qty = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      const vm = this
      const cart = {
        product_id: id,
        qty
      }
      vm.status.loadingItem = id
      vm.$http.post(api, { data: cart }).then((response) => {
        vm.status.loadingItem = ''
        vm.getProducts()
        vm.$bus.$emit('message:push', response.data.message, 'success')
        vm.$bus.$emit('cart-item', '修改購物車icon')
      })
    },
    setFilter (value) {
      const vm = this
      const num = vm.allCategory.some(function (element, index, array) {
        return element.title === value
      })
      if (value === undefined || value === '') {
        value = 'all'
      }
      if (value === 'all') {
        vm.filterValue = '全部商品'
        vm.FilterPorducts = []
      } else {
        if (num) {
          vm.filterValue = '商品分類：' + value
          vm.FilterPorducts = vm.Allproducts.filter(function (element, index, array) {
            return element.category === value
          })
        } else {
          vm.filterValue = '全部商品'
          vm.FilterPorducts = []
        }
      }
    },
    setOrder (num) {
      const vm = this
      if (num === 1) {
        vm.FilterPorducts = vm.FilterPorducts.sort(function (a, b) {
          return a.price - b.price
        })
      } else if (num === 2) {
        vm.FilterPorducts = vm.FilterPorducts.sort(function (a, b) {
          return b.price - a.price
        })
      }
    },
    EditLikeList (item) {
      const vm = this
      const num = vm.liked.indexOf(item.id)
      if (num === -1) {
        vm.liked.push(item.id)
        vm.$bus.$emit('message:push', item.title + '，「加入」願望清單', 'success')
      } else {
        vm.liked.splice(num, 1)
        vm.$bus.$emit('message:push', item.title + '，「移出」願望清單', 'warning')
      }
      localStorage.setItem('Like Item List', JSON.stringify(vm.liked))
      vm.getProducts()
    }
  },
  created () {
    this.getProducts()
    this.getAllProducts()
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
