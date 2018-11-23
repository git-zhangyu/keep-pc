<template lang="html">
  <div class="keep-header">
          <!--大于767-->
          <nav class="nav-wrapper">
            <div class="head-left">
                <router-link to="/">
                  <img src="@/assets/img/index/keep-logo.png">
                </router-link>
            </div>
            <div class="head-right">
              <div class="nav-pc">
                <router-link to="/explore">发现精选</router-link>
                <router-link to="/details">话题精选</router-link>
                <!--没有登录-->
                <router-link to="/login" class="headLogin" v-if="!$store.getters.isLogin">
                  <span class="iconfont">&#xe625;</span>
                  <span>登录/注册</span>
                </router-link>
                <!--登录-->
                <div class="headLogin" v-if="$store.getters.isLogin">
                  <span>{{this.$store.getters.isLogin}}</span>
                  <div class="userInfo">
                    <a href="javascript:;" traget="_blank" v-if="uid" @click="goUserDetails">
                      个人信息
                    </a>
                    <a href="javascript:;" @click="loginout">注销</a>
                  </div>
                </div>
        
              </div>
              <div class="social-media">
                <a href="http://www.gotokeep.com/app?type=android" traget="_blank">
                  <span class="iconfont">&#xe621;</span>
                </a>
                <a href="https://weibo.com/p/1006065342268417/home" traget="_blank">
                  <span class="iconfont">&#xe641;</span>
                </a>
                <a href="#">
                  <span class="iconfont">&#xe749;</span>
                </a>
                <a href="#">
                  <span class="iconfont">&#xe63a;</span>
                </a>
              </div>
            </div>
          </nav>

          <!--小于767-->
          <nav class="nav-wrapper-more">
            <div class="nav-wrapper-cont">
              <a href="#" class="nav-keep-link">
                <img src="@/assets/img/index/keep-logo.png">
              </a>
              <div class="icon-menu" @click="showNav">
                <span class="iconfont">&#xe635;</span>
              </div>
            </div>
            <div class="keep-tab-wrapper" v-if="isShow" @click="showNav">
              <div class="icon-close">
                <span class="iconfont" >X</span>
              </div>
              <div class="social-media-list">
                <!--没有登录-->
                <router-link to="/login" class="headLogin" v-if="!$store.getters.isLogin">
                  <span class="iconfont">&#xe625;</span>
                  <span>登录/注册</span>
                </router-link>
                <!--登录-->
                <router-link :to="'/userDetails/'+uid" class="headLogin" v-if="$store.getters.isLogin">
                  <span class="iconfont">&#xe625;</span>
                  <span>{{this.$store.getters.isLogin}}</span>
                </router-link>
                <a href="/">首页</a>
                <a href="/explore">发现精选</a>
                <a href="/details">课程内容</a>
              </div>
            </div>
          </nav>
  </div>
</template>

<script>
  import '@/assets/css/header.css'
  export default {
    data(){
      return {
        uid: sessionStorage.getItem("uid"),
        isShow:false,
      }
    },
    watch: {
      '$route' () {
         this.$router.go(0);
      }
    },
    methods:{
      loginout(){
        this.$store.commit("login_out")
        this.$router.push('/')
      },
      goUserDetails(){
       // this.$router.go(0);
        this.$router.push({name:'UserDetails', params:{uid:this.uid} })
      },
      showNav(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="css">
</style>
