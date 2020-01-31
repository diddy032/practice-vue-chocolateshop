import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW'
import VueI18n from 'vue-i18n'
import 'animate.css';
import AOS from 'aos';
import carousel from 'vue-owl-carousel';
import currencyFilter from './filters/currency';
import formatDateFilter from './filters/formatDate';
import productidchangeFilter from './filters/productidchange';
import './assets/all.scss';
import './bus';

Vue.config.productionTip = false
window.Bootstrap = require('bootstrap');
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.component('Loading', Loading);
Vue.use(VeeValidate, { classes: true });
VeeValidate.Validator.localize('zhTW', zhTW);
Vue.use(VueI18n);
Vue.use(carousel);
Vue.filter('currency', currencyFilter);
Vue.filter('formatDate', formatDateFilter);
Vue.filter('filterId', productidchangeFilter);

const i18n = new VueI18n({
  locale: 'zhTW'
});
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
});

AOS.init();
AOS.init({
  duration: 800,
  easing: 'slide',
  once: true
});

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')

//導航守衛 vue router
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        })
      }
    });
  } else {
    next();
  }
})