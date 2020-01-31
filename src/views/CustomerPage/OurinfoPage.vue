<template>
  <div>
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black">我們在這裡</h2>
          </div>
          <div class="col-md-7 col-12">
            <div class="iframe-rwd">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb6da9c9e1f%3A0x1206bcf082fd10a6!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5L-h576p6Lev5LqU5q61N-iZnw!5e0!3m2!1szh-TW!2stw!4v1578548781140!5m2!1szh-TW!2stw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
          </div>
          <div class="col-md-5 col-12 ml-auto mt-3 mt-md-0">
            <div class="p-4 border mb-3 info-hover">
              <p class="d-flex mb-0">
                <span class="d-block text-primary h4 text-uppercase mb-0"><i class="icon-phone mr-2" aria-hidden="true"></i></span>
                <span class="h5 mb-0"><a class="text-secondary" href="tel:+886-2-1234567">02 1234567</a></span>
              </p>
            </div>
            <div class="p-4 border mb-3 info-hover">
              <p class="d-flex mb-0">
                <span class="d-block text-primary h4 text-uppercase mb-0"><i class="icon-envelope mr-2" aria-hidden="true"></i></span>
                <span class="h5 mb-0"><a class="text-secondary" href="mailto:emailaddress@gamil.com">emailaddress@gamil.com</a></span>
              </p>
            </div>
            <div class="p-4 border mb-3 info-hover">
              <p class="d-flex mb-0">
                <span class="d-block text-primary h4 text-uppercase mb-0"><i class="icon-map-marker mr-2" aria-hidden="true"></i></span>
                <span class="h5 mb-0">台北市大安區台灣路四段000號一樓</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.iframe-rwd {
  position: relative;
  padding-bottom: 50%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.iframe-rwd iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.info-hover{
  cursor:pointer;
  &:hover {
    -webkit-box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.9);
    box-shadow: 0 5px 20px -7px rgba(0, 0, 0, 0.9);
    background-color: #f8f9fa;
  }
}
</style>
