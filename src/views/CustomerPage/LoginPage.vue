<template>
  <div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form" @submit.prevent="signin">
            <span class="login100-form-title p-b-34">
            帳號登入
            </span>
            <div class="wrap-input100 rs1-wrap-input100 validate-input m-b-20">
              <input id="first-email" class="input100" v-model="user.username" type="email" placeholder="信箱">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 rs2-wrap-input100 validate-input m-b-20">
              <input class="input100" v-model="user.password" type="password" placeholder="密碼">
              <span class="focus-input100"></span>
            </div>
            <div>
              <div class="h5">帳號:gwul3vu2278@yahoo.com.tw</div>
              <div class="h5">密碼:123356</div>
            </div>
            <div class="container-login100-form-btn p-t-27 p-b-239">
              <button type="submit" class="login100-form-btn h2">
                登入
              </button>
            </div>
          </form>
          <div class="login100-more img-cover"></div>
        </div>
      </div>
    </div>
    <div id="dropDownSelect1"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
        username: '',
        password: '',
      },
    }
  },
  methods:{
    signin(){
      const api =`${process.env.VUE_APP_APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api,vm.user).then((response) => {
        if(response.data.success){
          vm.$router.push('/admin/products')
        }else{
          vm.$bus.$emit('message:push',response.data.message +"，請重新輸入帳號密碼",'danger');
          vm.user.username='';
          vm.user.password='';
        }
      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/login-main.css";
  @import "../../assets/css/login-util.css";

  .img-cover{
    background-image: url("../../assets/images/login.jpg");
  }
</style>
