<template>
  <div>
    <loading :active.sync="isLoading" :loader="LoadingAtt.loader" :color="LoadingAtt.color"></loading>
    <div v-if="coupons.length>0">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mt-3">
        <div class="h2">優惠券列表</div>
        <div class="text-right">
          <button type="button" class="btn btn-primary" @click.prevent.self="openModal(true)">
          新增優惠券
          </button>
        </div>
      </div>
      <div class="d-none d-lg-block d-xl-block">
        <table class="table mt-4 text-dark">
          <thead>
            <tr>
              <th width="200">折扣名稱</th>
              <th>折扣碼</th>
              <th width="200" >到期日</th>
              <th>百分比</th>
              <th width="100">是否啟用</th>
              <th class="text-center" width="120">編輯</th>
              <th class="text-center" width="120">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in coupons" :key="index">
              <td> {{item.title}}</td>
              <td> {{item.code}}</td>
              <td> {{item.due_date  | formatDate}}</td>
              <td> {{item.percent}}</td>
              <td class="text-center">
                <span class="text-success" v-if="item.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td class="text-center">
                <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
              </td>
              <td class="text-center">
                <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container mt-4 d-lg-none d-xl-none text-dark">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-6 border mx-auto" v-for="(item, index) in coupons" :key="index">
            <div class="font-weight-bold h5 text-left">{{item.title}}</div>
            <div class="d-flex justify-content-between">
              <div class="h6">百分比：{{item.percent}}%</div>
              <div class="">{{item.due_date  | formatDate}}</div>
            </div>
            <div class="d-flex justify-content-between h6">
              折扣碼：{{item.code}}
              <span class="text-success" v-if="item.is_enabled">啟用中</span>
              <span v-else>未啟用</span>
            </div>
            <div class="d-flex justify-content-around">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(false,item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
            </div>
          </div>
        </div>
      </div>
      <Pagination :pages="AllPagination" @changeCurrentPage="getCoupons" class="mb-2"></Pagination>
    </div>

    <div class="my-5" v-else>
      <div class="container" >
        <div class="row">
          <div class="col-12 text-center">
            <div class="h2">Oops!</div>
            <i class="far fa-grin-beam-sweat fa-10x my-2" ></i>
            <div class="h3">目前沒有優惠券</div>
            <button type="button" class="my-3 btn btn-primary" @click.prevent.self="openModal(true)">
              新增優惠券
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- update Modal -->
    <div class="modal fade" id="couponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0" @submit.prevent="updateProduct">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-group">
                  <label for="title">折扣名稱</label>
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入折扣名稱" name ="title" v-model.trim="tempCoupon.title" v-validate="'required'" :class="{'is-invalid':errors.has('title')}">
                  <span class="text-danger" v-if="errors.has('title')">折扣名稱必須輸入</span>
                </div>
                <div class="form-group">
                  <label for="code">輸入碼(只能輸入英數)</label>
                  <input type="text" class="form-control" id="code" onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                    placeholder="請輸入輸入碼" v-model.trim="tempCoupon.code" name ="code" v-validate="'required'" :class="{'is-invalid':errors.has('code')}">
                  <span class="text-danger" v-if="errors.has('code')">輸入碼必須輸入</span>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="due_date">結束日期</label>
                    <input type="date" class="form-control" id="due_date" placeholder="請輸入日期" v-model="tempTime" @change="TimeChange()" name ="due_date" v-validate="'required'" :class="{'is-invalid':errors.has('due_date')}">
                    <span class="text-danger" v-if="errors.has('due_date')">結束日期必須輸入</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="percent">百分比</label>
                    <input type="number" class="form-control" id="percent" min="0" max="100" placeholder="請輸入百分比"  v-model.trim="tempPercentage">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="is_enabled" v-model="tempCoupon.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled" >
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="submit" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- del Modal -->
    <div class="modal fade" id="delCouponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除 <strong class="text-danger">{{tempCoupon.title}} </strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger"
              @click="delCoupon()">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from '../../components/Utilities/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      coupons: [],
      AllPagination: {},
      tempCoupon: {},
      tempPercentage: '100',
      tempTime: '',
      isNew: false,
      isLoading: false,
      LoadingAtt: {
        loader: 'bars',
        color: '#7971ea'
      }
    }
  },
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.coupons = response.data.coupons
        vm.AllPagination = response.data.pagination
        vm.isLoading = false
      })
    },
    openModal (isNew, item) {
      const vm = this
      if (isNew) {
        vm.tempCoupon = {}
        vm.isNew = true
        vm.tempTime = ''
      } else {
        vm.tempCoupon = Object.assign({}, item)
        vm.isNew = false
        const val = JSON.parse(vm.tempCoupon.due_date * 1000)
        const date = new Date(val)
        const Y = date.getFullYear() + '-'
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        const D = (date.getDate() < 10 ? '0' : '') + date.getDate()
        vm.tempTime = Y + M + D
      }
      ('#couponModal').modal('show')
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      const vm = this
      let httpMethod = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      vm.$validator.validate().then(valid => {
        if (!valid) {
          vm.$bus.$emit('message:push', '欄位不完整', 'danger')
        } else {
          vm.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
            if (response.data.success) {
              vm.$bus.$emit('message:push', response.data.message, 'success')
              $('#couponModal').modal('hide')
              vm.getCoupons()
            } else {
              vm.$bus.$emit('message:push', response.data.message, 'danger')
              $('#couponModal').modal('hide')
              vm.getCoupons()
            }
          })
        }
      })
    },
    openDelModal (item) {
      $('#delCouponModal').modal('show')
      this.tempCoupon = Object.assign({}, item)
    },
    delCoupon () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', response.data.message, 'success')
          $('#delCouponModal').modal('hide')
          vm.getCoupons()
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
          $('#delCouponModal').modal('hide')
          vm.getCoupons()
        }
      })
    },
    TimeChange () {
      this.tempCoupon.due_date = (new Date(this.tempTime.replace(/-/g, '/')).valueOf()) / 1000
    }
  },
  watch: {
    tempPercentage: function () {
      const vm = this
      const num = Math.abs(vm.tempPercentage)
      vm.tempCoupon.percent = ''
      if (typeof num === 'number' && num % 1 === 0) {
        if (Math.floor(num) > 100) {
          vm.$bus.$emit('message:push', '格式錯誤，數值需小於100', 'danger')
          return
        }
        vm.tempCoupon.percent = Math.floor(num)
      } else {
        vm.$bus.$emit('message:push', '格式錯誤，請輸入正整數', 'danger')
      }
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
