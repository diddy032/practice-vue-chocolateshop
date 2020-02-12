<template>
  <div>
    <div class="site-section site-blocks-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 site-section-heading text-center pt-4 mb-5">
            <h2>商品分類</h2>
          </div>
        </div>
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
  </div>
</template>

<script>
export default {
  methods: {
    toCategory (Name) {
      this.$router.push({
        name: '我們的商品',
        params: { categoryName: Name }
      })
    }
  }
}
</script>
