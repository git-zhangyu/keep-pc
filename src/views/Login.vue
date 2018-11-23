<template lang="html">
  <div class="login-main">
    <HeaderSecond></HeaderSecond>
    <div class="login">
      <!--main-->
      <div class="content-wrapper">
        <div class="login-wrapper">
          <h2>
            <span class="login-btn" @click="loginClick" :class="isLoginCtr==true?activeClass:''">登陆</span>
            <span class="register-btn" @click="registerClick" :class="isLoginCtr==false?activeClass:''">注册</span>
          </h2>
          <!--登陆模块-->
          <vlogin v-if="isLoginCtr"></vlogin>
          <!--注册模块-->
          <vregister v-if="isLoginCtr==true? false: true" @handler="handler"></vregister>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/login.css"
import bg2 from "@/assets/img/explore/hot/hot1.jpg"
import vlogin from "@/components/LoginDialog"
import vregister from "@/components/RegisterDialog"
import HeaderSecond from "@/components/HeaderSecond"

export default {
  components:{vlogin, vregister,HeaderSecond},
  data(){
    return {
      bg2,
      isLoginCtr:true,
      activeClass:'active'
    }
  },
  methods:{
    loginClick(){
      this.isLoginCtr = true
    },
    registerClick(){
      this.isLoginCtr = false
    },
    // 子元素传递来的
    handler(bool){
      this.isLoginCtr = bool
    }
  }
}
</script>

<style lang="css">
</style>
