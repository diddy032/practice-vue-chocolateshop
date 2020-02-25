<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0">
            <router-link to="/" >首頁</router-link>
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
            <v-zoomer ref="zoomer" style="border: solid 1px silver;" :max-scale="5" :zoomed.sync="zoomed">
              <img
                :src="product.imageUrl"
                style="object-fit: contain; width: 100%; height: 100%;"
              >
            </v-zoomer>
            <div class="d-flex justify-content-center mt-2">
              <button type="button" class="btn btn-outline-primary mr-1" @click="$refs.zoomer.zoomIn()"><i class="fas fa-search-plus"></i></button>
              <button type="button" class="btn btn-outline-primary mr-1" @click="$refs.zoomer.zoomOut()"><i class="fas fa-search-minus"></i></button>
              <button type="button" class="btn btn-outline-primary" @click="$refs.zoomer.reset()">重設</button>
            </div>
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
              <button type="button" @click.prevent="addtoCart(product.id)" class="buy-now btn btn-sm btn-primary">
                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === tempProduct.id"></i>
                <i v-else class="fas fa-shopping-cart mr-2"></i>
                加入購物車
              </button>
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
          <div class="col-12 my-4">
            <div class="nav nav-pills" id="nav-tab" role="tablist">
              <div class="nav-item nav-link mr-1 border active" id="nav-item-content" data-toggle="tab" href="#nav-content" role="tab" aria-controls="nav-content" aria-selected="true">商品介紹</div>
              <div class="nav-item nav-link mr-1 border" id="nav-item-info" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="false">商品資訊</div>
              <div class="nav-item nav-link mr-1 border" id="nav-item-question" data-toggle="tab" href="#nav-question" role="tab" aria-controls="nav-question" aria-selected="false">常見問題</div>
            </div>
            <hr class="my-2">
            <div class="tab-content text-dark" id="nav-tabContent">
              <div class="tab-pane fade show active pre-line" id="nav-content" role="tabpanel" aria-labelledby="nav-item-content">
                {{product.content}}
              </div>
              <div class="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-item-info">
                <table class="table txet-left table-striped">
                  <tr>
                    <th scope="row">製造方式</th>
                    <td>手工製造</td>
                  </tr>
                  <tr>
                    <th scope="row">商品產地</th>
                    <td>台灣</td>
                  </tr>
                  <tr>
                    <th scope="row">分類</th>
                    <td>{{product.category}}</td>
                  </tr>
                  <tr>
                    <th scope="row">單位</th>
                    <td>{{product.unit}}</td>
                  </tr>
                </table>
              </div>
              <div class="tab-pane fade" id="nav-question" role="tabpanel" aria-labelledby="nav-item-question">
                <div>
                  <div class="h5">保存方式</div>
                  <div>
                    ✓ 最佳賞味期約 30 天<br>
                    ✓ 常溫保存，請避免高溫、潮濕、日光直射<br>
                    ✓ 餅乾無添加防腐劑，開封後請儘快食用完畢，以免餅乾受潮軟化。<br>
                  </div>
                  ============<br>
                  <div class="h5">國際運送小提醒</div>
                  <div>
                    餅乾類 -<br>
                    由於餅乾經海外運送，途經 2 次轉運過程中，容易產生餅乾碎裂情形，再請您多多見諒 ^^<br>
                    蛋糕點心類 -<br>
                    由於產品時效性較短，海外運送天數預估為 5~7 天左右，有可能送達時會錯過較多的最佳賞味期，再請您斟酌下單唷 ^^<br>
                  </div>
                  ============<br>
                  <div class="h5">關於指定到貨日</div>
                  <div>
                    您可以於訂單備註您的希望到貨日，我們會 "盡量" 配合出貨喔 !<br>
                    但不能跟您保證商品 "一定會" 如期送達 (因運送公司的送達時間會因物流及交通狀況略有差異，尤其大節日超商的貨物量較多，易出現延遲到貨情況)
                    倘若運輸上有延誤狀況再請您見諒了^^<br>
                  </div>
                  ============<br>
                  <div class="h5">運送說明</div>
                  <div>
                    <ul>
                      <li>若您有 "必須到貨日"， 建議選擇 "宅配運送" !</li>
                      <li>建議將 "希望到貨日" 設在商品使用的前 1~2 天 !</li>
                      <li>超商不負責運送易碎物品，有可能造成餅乾碎裂，若您介意請選擇宅配唷!</li>
                      <li>若您將於重要場合或送禮使用，建議選擇 "宅配運送" 方式會比較保險唷!</li>
                    </ul>
                  </div>
                  ============<br>
                  <div class="h5">運送說明</div>
                  基本運送時間參考:<br>
                  超商取貨 : 需 2 個運送天 (部分特殊門市不適用二日到貨)<br>
                  宅配到府: 需 1~2 個運送天 (週六、週日黑貓不收貨，將於平常日出貨)<br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading text-center pt-4 mb-5">
              <h2>同類商品</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <carousel :margin="20" :loop="false" :nav="false" :autoplay="false" v-if="FilterPorducts && FilterPorducts.length" :responsive="{0:{items:1,nav:false},800:{items:2,nav:false},1000:{items:3,nav:false}}">
                <div class="item border" v-for="(item, index) in FilterPorducts" :key="index">
                  <a href="#" @click.prevent="getNewProduct(item.id)">
                    <div class="block-4 text-center">
                      <figure class="block-4-image">
                          <img :src="item.imageUrl" alt="Image placeholder" class="img-fluid">
                      </figure>
                      <div class="block-4-text p-4">
                        <h3 class="mb-3"><a href="#" @click.prevent="getNewProduct(item.id)">{{item.title}}</a></h3>
                        <div class="text-primary font-weight-bold h4 mb-0 mb-2" @click.prevent="getNewProduct(item.id)">NT{{item.price | currency}}</div>
                      </div>
                    </div>
                  </a>
                </div>
              </carousel>
            </div>
            <ItemCategories/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import ItemCategories from '../../components/Utilities/ItemCategories.vue'
export default {
  components: {
    carousel,
    ItemCategories
  },
  data () {
    return {
      FilterPorducts: [],
      product: {},
      liked: JSON.parse(localStorage.getItem('Like Item List')) || [],
      tempProduct: {
        id: '',
        qty: 1
      },
      status: {
        loadingItem: ''
      },
      isLoading: false,
      zoomed: false
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
          vm.setFilter()
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
          vm.$router.push('/shop')
        }
      })
    },
    getNewProduct (NewId) {
      const vm = this
      vm.tempProduct.id = NewId
      vm.getProduct()
      window.scrollTo(0, 0)
    },
    setFilter () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.$http.get(api).then((response) => {
        vm.FilterPorducts = response.data.products.filter((element, index, array) => element.category === vm.product.category)
        vm.FilterPorducts = vm.FilterPorducts.slice(-3).reverse()
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
  .pre-line {
   white-space: pre-line;
  }
</style>
