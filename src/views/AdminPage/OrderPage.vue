<template>
  <div>
    <loading :active.sync="isLoading" :loader="LoadingAtt.loader" :color="LoadingAtt.color"></loading>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mt-3">
      <div class="h2">訂單列表</div>
    </div>
    <div class="d-none d-lg-block d-xl-block">
      <table class="table mt-4 text-dark">
        <thead>
          <tr>
            <th width="200">購買時間</th>
            <th>Email</th>
            <th>購買款項</th>
            <th width="100">應付金額</th>
            <th width="100">是否付款</th>
            <th class="text-center">編輯</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in orders" :key="index">
          <tr >
            <td>{{item.create_at | formatDate}}</td>
            <td>{{item.user.email}}</td>
            <td>
              <ul v-for="(item, index) in item.products" :key="index">
                <li>{{item.product_id | filterId(Allproducts)}}×{{item.qty}}</li>
              </ul>
            </td>
            <td class="text-right">
              {{item.total | currency}}
            </td>
            <td>
              <span v-if="item.is_paid" class="text-success">已付款</span>
              <span v-else class="text-danger">尚未付款</span>
            </td>
            <td class="text-center">
              <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">詳情</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="container mt-4 d-lg-none d-xl-none text-dark">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-8 border mx-auto" v-for="(item, index) in orders" :key="index">
          <div class="h6">
            <div class="font-weight-bold">購買時間：</div>
            {{item.create_at | formatDate}}
            <div class="font-weight-bold mt-1">訂單編號：</div>
            {{item.id}}
          </div>
          <div class="d-flex justify-content-around">
            <span v-if="item.is_paid" class="text-success">已付款</span>
            <span v-else class="text-danger">尚未付款</span>
            <button class="btn btn-outline-primary btn-sm" @click="openModal(item)">詳情</button>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="AllPagination" @changeCurrentPage="getOrders" class="mb-2"></Pagination>

    <!-- update Modal -->
    <div class="modal fade" id="orderModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>訂單詳情</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <div class="h5 text-dark">訂單資訊</div>
                    <div class="form-group">
                      <div class="h6 text-dark">訂單成立日期：{{tempOrder.create_at | formatDate}}</div>
                      <div class="h6 text-dark">訂單編號：{{tempOrder.id}}</div>
                      <hr>
                      <div class="h6 text-dark">
                        是否付款：
                        <span v-if="tempOrder.is_paid" class="text-success">已付款</span>
                        <span class="text-danger" v-else>尚未付款</span>
                      </div>
                      <div class="h6 text-dark" v-if="tempOrder.is_paid">付款日期：{{tempOrder.paid_date | formatDate}}</div>
                      <hr>
                      <div class="h6 text-dark">購買項目：</div>
                        <ul v-for="(item, index) in tempOrder.products" :key="index" class="text-dark font-weight-bold">
                          <li>{{item.product_id| filterId(Allproducts)}}×{{item.qty}}</li>
                        </ul>
                      <div class="h6 text-dark font-weight-bold">總金額：{{tempOrder.total | currency}}</div>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <div class="h5 text-dark">購買者資訊</div>
                    <div class="h6 text-dark">姓名：{{tempOrder.user.name}}</div>
                    <div class="h6 text-dark">電話：{{tempOrder.user.tel}}</div>
                    <div class="h6 text-dark">信箱：{{tempOrder.user.email}}</div>
                    <div class="form-group h6 text-dark">
                      <label for="category">地址：</label>
                      <input type="text" class="form-control" id="category"
                        placeholder="請輸入分類" v-model.trim="tempOrder.user.address">
                    </div>
                    <hr>
                    <div class="form-group">
                      <label for="message">留言：</label>
                      <textarea type="text" class="form-control" id="message"
                        placeholder="留言：" v-model="tempOrder.message"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="submit" class="btn btn-primary" @click="updateOrder">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Utilities/Pagination.vue'
import $ from 'jquery'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      orders: [],
      Allproducts: [],
      AllPagination: {},
      tempOrder: {
        user: {}
      },
      isLoading: false,
      tempTime: '',
      LoadingAtt: {
        loader: 'bars',
        color: '#7971ea'
      }
    }
  },
  methods: {
    getOrders (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.orders = response.data.orders.reverse().filter(function (element, index, array) {
          return element.id !== undefined
        })
        vm.AllPagination = response.data.pagination
        vm.isLoading = false
      })
    },
    getProducts () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.Allproducts = response.data.products
        vm.isLoading = false
      })
    },
    openModal (item) {
      $('#orderModal').modal('show')
      this.tempOrder = Object.assign({}, item)
    },
    updateOrder () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${vm.tempOrder.id}`
      vm.$http.put(api).then((response) => {
        vm.$bus.$emit('message:push', response.data.message, 'success')
        $('#orderModal').modal('hide')
        vm.getOrders()
      })
    }
  },
  watch: {
    tempOrder () {
    }
  },
  created () {
    this.getOrders()
    this.getProducts()
  }
}
</script>
