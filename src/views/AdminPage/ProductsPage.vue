<template>
  <div>
    <loading :active.sync="isLoading" :loader="LoadingAtt.loader" :color="LoadingAtt.color"></loading>
    <div v-if="products.length>0">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mt-3">
        <div class="h2">產品列表</div>
        <div class="text-right">
          <button type="button" class="btn btn-primary" @click.prevent.self="openModal(true)">
            建立新的產品
          </button>
        </div>
      </div>
      <div class="d-none d-lg-block d-xl-block">
        <table class="table mt-4 text-dark ">
          <thead>
            <tr>
              <th width="120">分類</th>
              <th>產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="100">是否啟用</th>
              <th class="text-center" width="120">編輯</th>
              <th class="text-center" width="120">刪除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-right">
                {{item.origin_price | currency}}
              </td>
              <td class="text-right">
                {{item.price | currency}}
              </td>
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
          <div class="col-12 col-sm-6 col-md-6 border mx-auto" v-for="(item) in products" :key="item.id">
            <div class="font-weight-bold h5 text-left">{{item.title}}</div>
            <div class="d-flex justify-content-between">
              <div class="h6">原價:{{item.origin_price | currency}}</div>
              <div class="">{{item.category}}</div>
            </div>
            <div class="d-flex justify-content-between h6">
              售價:{{item.price | currency}}
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
      <Pagination :pages="AllPagination" @changeCurrentPage="getProducts" class="mb-2"></Pagination>
    </div>
    <div class="my-5" v-else>
      <div class="container" >
        <div class="row">
          <div class="col-12 text-center">
            <div class="h2">Oops!</div>
            <i class="far fa-grin-beam-sweat fa-10x my-2" ></i>
            <div class="h3">目前沒有產品</div>
            <button type="button" class="my-3 btn btn-primary" @click.prevent.self="openModal(true)">
              建立新的產品
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- update Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0"  @submit.prevent="updateProduct">
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
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="image"
                    placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files" @change="uploadFile">
                </div>
                <img img=""
                  class="img-fluid" alt="" :src="tempProduct.imageUrl">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input type="text" name ="title" class="form-control" id="title"
                    placeholder="請輸入標題" v-model.trim="tempProduct.title" v-validate="'required'" :class="{'is-invalid':errors.has('title')}">
                  <span class="text-danger" v-if="errors.has('title')">姓名必須輸入</span>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input type="text" class="form-control" id="category"
                      placeholder="請輸入分類" v-model.trim="tempProduct.category">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input type="unit" class="form-control" id="unit"
                      placeholder="請輸入單位" v-model.trim="tempProduct.unit">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input type="number" class="form-control" name="origin_price" id="origin_price"
                      placeholder="請輸入原價" v-model.trim="tempProduct.origin_price" v-validate="'required'" :class="{'is-invalid':errors.has('origin_price')}">
                    <span class="text-danger" v-if="errors.has('origin_price')">原價必須輸入</span>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input type="number" class="form-control" name="price" id="price"
                      placeholder="請輸入售價" v-model.trim="tempProduct.price"  v-validate="'required'" :class="{'is-invalid':errors.has('price')}">
                    <span class="text-danger" v-if="errors.has('price')">售價必須輸入</span>
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea type="text" class="form-control" id="description"
                    placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea type="text" class="form-control" id="content"
                    placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      id="is_enabled" v-model.number="tempProduct.is_enabled" :true-value="1" :false-value="0">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="submit" class="btn btn-primary" @click="updateProduct">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- del Modal -->
    <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
  aria-labelledby="exampleModalLabel" aria-hidden="true">
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
            是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delProduct"
              >確認刪除</button>
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
      products: [],
      tempProduct: {},
      AllPagination: {},
      isNew: false,
      isLoading: false,
      LoadingAtt: {
        loader: 'bars',
        color: '#7971ea'
      },
      status: {
        fileUploading: false
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      const vm = this
      vm.isLoading = true
      vm.$http.get(api).then((response) => {
        vm.products = response.data.products
        vm.AllPagination = response.data.pagination
        vm.isLoading = false
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
        this.isNew = true
      } else {
        this.tempProduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    updateProduct () {
      const vm = this
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        httpMethod = 'put'
      }

      vm.$validator.validate().then(valid => {
        if (!valid) {
          vm.$bus.$emit('message:push', '欄位不完整', 'danger')
        } else {
          vm.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
            if (response.data.success) {
              vm.$bus.$emit('message:push', response.data.message, 'success')
              $('#productModal').modal('hide')
              vm.getProducts()
            } else {
              vm.$bus.$emit('message:push', response.data.message, 'danger')
              $('#productModal').modal('hide')
              vm.getProducts()
            }
          })
        }
      })
    },
    openDelModal (item) {
      $('#delProductModal').modal('show')
      this.tempProduct = Object.assign({}, item)
    },
    delProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push', response.data.message, 'success')
          $('#delProductModal').modal('hide')
          vm.getProducts()
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger')
          $('#delProductModal').modal('hide')
          vm.getProducts()
        }
      })
    },
    uploadFile () {
      const vm = this
      const uploadedFile = vm.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.status.fileUploading = true
      vm.$http.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        if (response.data.success) {
          vm.status.fileUploading = false
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
          vm.$bus.$emit('message:push', '圖片上傳成功', 'success')
        } else {
          vm.status.fileUploading = false
          if (typeof (response.data.message) === 'string') {
            vm.$bus.$emit('message:push', response.data.message, 'danger')
          } else {
            vm.$bus.$emit('message:push', '檔案過大', 'danger')
          }
        }
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
