<template>
  <div>
    <div class="site-section border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="site-section-heading pt-3 mb-4">
              <h2 class="text-black">我們的故事</h2>
            </div>
            <p>生命中的苦澀甜美就如同巧克力一樣令人著迷。對於喜愛品嘗巧克力的我來說，想要把製作出來的巧克力變成回憶的一部份</p>
            <p>讓品嘗我親手的巧克力的所有人，能夠回憶過去、紀錄當下。</p>
            <p>喜望你也能喜歡我的巧克力，並成為愛巧克力的一份子:)</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque nesciunt doloribus accusantium suscipit dolorem voluptatem, atque, placeat consequatur commodi itaque nihil maxime ex sequi necessitatibus sint assumenda fugiat consequuntur?
            Fuga quisquam, doloremque illo est accusamus nostrum quis ea. Molestiae doloremque dolorem atque sit dignissimos sed? Pariatur, maxime repellendus, dignissimos repudiandae laborum in voluptatem, architecto suscipit iure hic quasi ex!
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
            <div class="block-16">
              <figure>
                <img src="../../assets/images/about-1.jpg" alt="Image placeholder" class="img-fluid rounded">
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div class="icon mr-4 align-self-start">
              <span class="icon-truck"></span>
            </div>
            <div class="text">
              <h2 class="text-primary font-weight-bold">職人工法</h2>
              <p class="text-dark font-weight-bold">將每個細節做到最好</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div class="icon mr-4 align-self-start">
              <span class="icon-refresh2"></span>
            </div>
            <div class="text">
              <h2 class="text-primary font-weight-bold">嚴選食材</h2>
              <p class="text-dark font-weight-bold">是我們最基本的堅持</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div class="icon mr-4 align-self-start">
              <span class="icon-help"></span>
            </div>
            <div class="text">
              <h2 class="text-primary font-weight-bold">用心包裝</h2>
              <p class="text-dark font-weight-bold">打開商品都是驚喜</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section border-bottom" data-aos="fade">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-md-7 site-section-heading text-center pt-4">
            <h2>團隊</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img src="../../assets/images/person-3.jpg" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">Elizabeth Graham</h3>
                  <p class="block-38-subheading">共同創辦人</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img src="../../assets/images/person-1.jpg" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">Jennifer Greive</h3>
                  <p class="block-38-subheading">甜點師</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="block-38 text-center">
              <div class="block-38-img">
                <div class="block-38-header">
                  <img src="../../assets/images/person-2.jpg" alt="Image placeholder" class="mb-4">
                  <h3 class="block-38-heading h4">Patrick Marx</h3>
                  <p class="block-38-subheading">甜點師</p>
                </div>
                <div class="block-38-body">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ItemCategories></ItemCategories>
  </div>
</template>
<script>
import ItemCategories from '../../components/Utilities/ItemCategories.vue'
export default {
  components: {
    ItemCategories
  }
}
</script>
