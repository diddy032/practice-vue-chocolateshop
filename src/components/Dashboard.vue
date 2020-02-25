<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow navbar-expand ">
      <router-link class="navbar-brand col-sm-3 col-md-2 mr-0" href="#" to="/">後台儀表板</router-link>
      <div class="ml-auto">
        <ul class="navbar-nav px-3">
           <li class="nav-item text-nowrap">
            <router-link class="nav-link" href="#" to="/">回首頁</router-link>
          </li>
          <li class="nav-item text-nowrap">
            <a class="nav-link" href="#" @click.prevent="signout">登出</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-light fixed-top bg-light flex-md-nowrap p-0 shadow navbar-expand d-md-none d-lg-none d-xl-none mt-5">
      <ul class=" navbar-nav mx-auto">
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link font-weight-bold" >
            <span data-feather="Products"></span>
            產品列表
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/coupons" class="nav-link font-weight-bold">
            <span data-feather="Coupons"></span>
            優惠券
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/order"  class="nav-link font-weight-bold">
            <span data-feather="Order"></span>
            訂單
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span class="h5">儀表板</span>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/admin/products" class="nav-link font-weight-bold" >
                  <span data-feather="Products"></span>
                  產品列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/coupons" class="nav-link font-weight-bold">
                  <span data-feather="Coupons"></span>
                  優惠券
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/order"  class="nav-link font-weight-bold">
                  <span data-feather="Order"></span>
                  訂單
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <Alert/>
          <!--顯示的地方-->
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Utilities/AlertMessageAdm.vue'

export default {
  components: {
    Alert
  },
  methods: {
    signout () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      const vm = this
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/')
        }
      })
    }
  }
}
</script>
<style scoped>
  body {
    font-size: .875rem;
  }
  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }
  /*
  * Sidebar
  */
  .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }
  .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: .5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }
  @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
      position: -webkit-sticky;
      position: sticky;
    }
  }
  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }
  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }
  .sidebar .nav-link.active {
    color: #D96236;
  }
  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }
  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
  /*
  * Content
  */
  [role="main"] {
    padding-top: 133px; /* Space for fixed navbar */
  }
  @media (min-width: 768px) {
    [role="main"] {
      padding-top: 48px; /* Space for fixed navbar */
    }
  }
  /*
  * Navbar
  */
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(113, 106, 202, .25);
    box-shadow: inset -1px 0 0 rgba(113, 106, 202, .25);
  }
  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }
  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }
  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
  }
  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>
