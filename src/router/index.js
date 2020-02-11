import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: () => import('../components/Head&Footer.vue'),
    children: [
      {
        name: '首頁',
        path: 'home',
        component: () => import('../views/CustomerPage/HomePage.vue')
      },
      {
        name: '我們的故事',
        path: 'about',
        component: () => import('../views/CustomerPage/AboutPage.vue')
      },
      {
        name: '我們的商品',
        path: 'shop',
        component: () => import('../views/CustomerPage/ShopPage.vue')
      },
      {
        name: '商品頁面',
        path: 'shopsitem/:id',
        component: () => import('../views/CustomerPage/Shop-singlePage.vue')
      },
      {
        name: '我們在這裡',
        path: 'ourinfo',
        component: () => import('../views/CustomerPage/OurinfoPage.vue')
      },
      {
        name: '購物車',
        path: 'cart',
        component: () => import('../views/CustomerPage/CartPage.vue')
      },
      {
        name: '登入',
        path: 'login',
        component: () => import('../views/CustomerPage/LoginPage.vue')
      },
      {
        name: '確認訂單',
        path: 'checkout',
        component: () => import('../views/CustomerPage/CheckoutPage.vue')
      },
      {
        name: '完成訂單',
        path: 'thankyou/:id',
        component: () => import('../views/CustomerPage/ThankyouPage.vue')
      },
      {
        name: '願望清單',
        path: 'wishlist',
        component: () => import('../views/CustomerPage/WishlistPage.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../components/Dashboard.vue'),
    children: [
      {
        name: 'Products',
        path: 'products',
        component: () => import('../views/AdminPage/ProductsPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'Order',
        path: 'order',
        component: () => import('../views/AdminPage/OrderPage.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'Coupons',
        path: 'coupons',
        component: () => import('../views/AdminPage/CouponsPage.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
