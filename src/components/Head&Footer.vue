<template>
  <div>
    <div class="site-wrap">
      <header class="site-navbar" role="banner">
        <Alert/>
        <div class="site-navbar-top">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-12 col-lg-3 my-1 mb-md-0 order-1 order-md-1 text-center text-lg-left">
                <router-link to="/home" class="site-logo">
                  <img src="../assets/images/chocolate-logo.svg" class="js-logo-clone" alt="" height="90px">
                </router-link>
              </div>
              <div class="col-12 col-lg-7 mb-md-0 order-3 order-md-2 text-center">
                <div class="site-top-icons">
                  <nav class="site-navigation text-right text-md-center" role="navigation">
                    <div class="container website-menu-body d-none d-md-block">
                      <ul class="site-menu js-clone-nav text-sm-left text-md-center text-lg-right" :class="{'site-nav-wrap':isMobile}">
                        <router-link to="/home" v-slot="{ href, route, navigate, isActive }">
                          <li :class="[isActive && 'active']" @click="ClickMobilMenu">
                            <a :href="href" @click="navigate">首頁</a>
                          </li>
                        </router-link>
                        <router-link to="/about" v-slot="{ href, route, navigate, isActive }">
                          <li :class="[isActive && 'active']" @click="ClickMobilMenu">
                            <a :href="href" @click="navigate">我們的故事</a>
                          </li>
                        </router-link>
                        <router-link to="/shop" v-slot="{ href, route, navigate, isActive }">
                          <li :class="[isActive && 'active']" @click="ClickMobilMenu">
                            <a :href="href" @click="navigate">我們的商品</a>
                          </li>
                        </router-link>
                        <router-link to="/ourinfo" v-slot="{ href, route, navigate, isActive }">
                          <li :class="[isActive && 'active']" @click="ClickMobilMenu">
                            <a :href="href" @click="navigate">我們在這裡</a>
                          </li>
                        </router-link>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="col-12 col-lg-2 mt-md-0 order-2 order-md-3 text-center text-lg-right mt-2 mt-md-3 mt-lg-0">
                <div class="site-top-icons">
                  <ul>
                    <li>
                      <router-link to="/login"><i class="fas fa-user fa-lg"></i></router-link>
                    </li>
                    <li>
                      <router-link to="/wishlist"><i class="far fa-heart fa-lg"></i></router-link>
                    </li>
                    <li>
                      <router-link to="/cart" class="site-cart">
                        <CarIcon/>
                      </router-link>
                    </li>
                    <li class="d-inline-block d-md-none ml-md-0">
                      <a href="#" class="site-menu-toggle js-menu-toggle" @click.prevent="mobileMenu"><i class="fas fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="bg-light py-3" v-if="$route.name !=='首頁' && $route.name !=='商品頁面'">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
            <router-link to="/home" >首頁</router-link>
            <span class="mx-2 mb-0">/</span>
            <strong class="text-black">{{$route.name}}</strong>
            </div>
          </div>
        </div>
      </div>
      <!--顯示的地方-->
      <router-view></router-view>
      <footer class="site-footer border-top">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-6 mr-auto ml-auto">
              <div class="mb-2">
                <h3 class="footer-heading mb-4 text-center">聯絡我們</h3>
                <ul class="list-unstyled text-center">
                  <li>
                    <i class="fas fa-phone fa-sm mr-2 text-primary" aria-hidden="true"></i>
                    <a class="text-secondary info-hover" href="tel:+886-2-1234567">02 1234567</a>
                  </li>
                  <li>
                    <i class="far fa-envelope mr-2 text-primary" aria-hidden="true"></i>
                    <a class="text-secondary info-hover" href="mailto:emailaddress@gamil.com">emailaddress@gamil.com</a>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt mr-2 text-primary" aria-hidden="true"></i>
                    <a class="text-secondary info-hover">台北市大安區台灣路四段000號一樓</a>
                  </li>
                  <li>
                    <a class="mx-1" href="#">
                      <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a class="mx-1" href="#">
                      <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a class="mx-1" href="#">
                      <i class="fab fa-line fa-2x"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           <div class="row pt-2 mt-2 text-center">
            <div class="col-md-12">
              <p>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              Copyright &copy;
              {{nowyear}}
              All rights reserved | This template is made with <i class="fas fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" class="text-primary">Colorlib</a>
              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Alert from './Utilities/AlertMessageCus.vue'
import CarIcon from './Utilities/CarIcon.vue'
import $ from 'jquery'
// import '../assets/main.js'

export default {
  components: {
    Alert,
    CarIcon
  },
  data () {
    return {
      nowyear: '',
      isActive: true,
      isMobile: false,
      screenWidth: document.body.clientWidth
    }
  },
  methods: {
    nowyearfun () {
      this.nowyear = new Date().getFullYear()
      this.$bus.$emit('cart-item', '修改購物車icon')
    },
    mobileMenu () {
      $('.js-clone-nav').appendTo('.site-mobile-menu-body')
      this.isMobile = true
    },
    ClickMobilMenu () {
      if (this.screenWidth < 768) {
        $('body').removeClass('offcanvas-menu')
      } else {
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu')
        }
      }
    },
    siteMenuClone () {
      $('<div class="site-mobile-menu"></div>').prependTo('.site-wrap')
      $('<div class="site-mobile-menu-header"></div>').prependTo('.site-mobile-menu')
      $('<div class="site-mobile-menu-close"></div>').prependTo('.site-mobile-menu-header')
      $('<div class="site-mobile-menu-logo"></div>').prependTo('.site-mobile-menu-header')
      $('<div class="site-mobile-menu-body"></div>').appendTo('.site-mobile-menu')
      $('.js-logo-clone').clone().appendTo('.site-mobile-menu-logo')
      $('<span class="ion-ios-close js-menu-toggle"></div>').prependTo('.site-mobile-menu-close')
      $('body').on('click', '.site-menu-toggle', function (e) {
        const vm = $(this)
        e.preventDefault()
        if ($('body').hasClass('offcanvas-menu')) {
          $('body').removeClass('offcanvas-menu')
          vm.removeClass('active')
        } else {
          $('body').addClass('offcanvas-menu')
          vm.addClass('active')
        }
      })
      $(document).mouseup(function (e) {
        const container = $('.site-mobile-menu')
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu')
          }
        }
      })
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        const vm = this
        vm.screenWidth = val
        vm.timer = true
        setTimeout(function () {
          if (vm.screenWidth > 768) {
            $('.js-clone-nav').appendTo('.website-menu-body')
            vm.isMobile = false
          } else {
            $('.js-clone-nav').appendTo('.site-mobile-menu-body')
            vm.isMobile = true
          }
          vm.timer = false
        }, 10)
      }
    }
  },
  created () {
    this.nowyearfun()
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        this.screenWidth = window.screenWidth
      })()
    }
    if (this.screenWidth > 768) {
      this.isMobile = false
    } else {
      this.isMobile = true
    };
  },
  mounted () {
    this.siteMenuClone()
  }
}
</script>

<style scoped lang="scss">
  .info-hover{
    cursor:pointer;
    &:hover{
      font-style:italic;
      -webkit-box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.9);
    box-shadow: 0 5px 10px -7px rgba(0, 0, 0, 0.9);
    }
  }
</style>
