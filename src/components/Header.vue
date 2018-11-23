<template lang="html">
  <div class="keep-header">
    <div class="keep-header-wrapper">
      <nav class="navbar navbar-expand-sm navbar-dark">
          <router-link to="/" class="navbar-brand">
              <img src="@/assets/img/index/keep-logo.png">
          </router-link>
          <button class="navbar-toggler" data-toggle="collapse" data-target="#c-navbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div id="c-navbar" class="collapse navbar-collapse ml-5">
              <ul class="navbar-nav" id="nav-main">
                  <li class="nav-item mr-3">
                    <router-link to="/explore" class="nav-link">发现精选</router-link>
                  </li>
                  <li class="nav-item mr-3">
                    <router-link to="/training" class="nav-link">课程内容</router-link>
                  </li>
                  <li class="nav-item" v-if="!$store.getters.isLogin">
                    <router-link to="/login" class="nav-link">
                      登录/注册 
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/userDetails" class="nav-link">
                      <span v-if="$store.getters.isLogin">
                        {{this.$store.getters.isLogin}}
                      </span>
                    </router-link>
                  </li>
              </ul>
          </div>
      </nav>
      
    </div>
  </div>
</template>

<script>
  import '@/assets/css/header.css'
  export default {
    data(){
      return {
        unickname:''
      }
    },
    created(){
      
      
    }
  }
</script>

<style lang="css">
</style>
