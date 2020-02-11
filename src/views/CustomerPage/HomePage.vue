<template>
  <div>
    <div class="site-blocks-cover" data-aos="fade-down">
      <div class="container">
        <div class="row align-items-center justify-content-end">
          <div class="col-md-5 text-center text-md-left pt-5 pt-md-0">
            <h1 class="mb-2">人生好苦巧克力</h1>
            <div class="intro-text text-center text-md-left">
              <p class="mb-4">回憶生命中苦中帶甜，甜中帶苦的時刻</p>
              <p>
                <router-link to="/shop" href="#" class="btn btn-sm btn-primary">立即購買</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section site-blocks-2">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4 mb-lg-0" data-aos="fade" data-aos-delay="">
            <a class="block-2-item" href="#" @click.prevent="toCategory('巧克力蛋糕')">
              <figure class="image">
                <img src="../../assets/images/collections-2.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">商品分類</span>
                <h3>巧克力蛋糕</h3>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
            <a class="block-2-item" href="#" @click.prevent="toCategory('巧克力餅乾')">
              <figure class="image">
                <img src="../../assets/images/collections-3.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">商品分類</span>
                <h3>巧克力餅乾</h3>
              </div>
            </a>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
            <a class="block-2-item" href="#"  @click.prevent="toCategory('濃醇巧克力')">
              <figure class="image">
                <img src="../../assets/images/collections-1.jpg" alt="" class="img-fluid">
              </figure>
              <div class="text">
                <span class="text-uppercase">商品分類</span>
                <h3>濃醇巧克力</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section block-3 site-blocks-2 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>最新商品</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
             <carousel :margin="20" :loop="true" :nav="false" :autoplay="true" v-if="products && products.length" :responsive="{0:{items:1,nav:false},800:{items:2,nav:false},1000:{items:3,nav:false}}">
              <div class="item" v-for="(item, index) in products" :key="index">
                <router-link :to="`/shopsitem/${item.id}`">
                  <div class="block-4 text-center">
                    <figure class="block-4-image">
                        <img :src="item.imageUrl" alt="Image placeholder" class="img-fluid">
                    </figure>
                    <div class="block-4-text p-4">
                      <h3 class="mb-3"><a href="#">{{item.title}}</a></h3>
                      <div class="text-primary font-weight-bold h4 mb-0 mb-2">NT{{item.price | currency}}</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section block-8">
      <div class="container">
        <div class="row justify-content-center  mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>禮盒推薦</h2>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-12 col-lg-7 mb-5">
            <a href="#"><img src="../../assets/images/home-present.jpg" alt="Image placeholder" class="img-fluid rounded"></a>
          </div>
          <div class="col-md-12 col-lg-5 text-center py-md-5">
            <h2><a href="#">送禮最佳首選</a></h2>
            <p>還在煩惱要送什麼東西給親朋好友嗎?我們有禮盒讓你選擇喔!</p>
            <p>
              <a href="#" class="btn btn-sm btn-primary" @click.prevent="toCategory('禮盒')">馬上選購一盒</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getAllProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      const vm = this
      vm.$http.get(api).then((response) => {
        vm.products = (response.data.products.slice(-6)).reverse()
      })
    },
    toCategory (Name) {
      this.$router.push({
        name: '我們的商品',
        params: { categoryName: Name }
      })
    }
  },
  created () {
    this.getAllProducts()
  }
}
</script>
<style lang="scss">
  .site-blocks-cover {
    background-image: url("../../assets/images/banner-banner.jpg");
  }
</style>
