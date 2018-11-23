<template>
  <div id="app">
    <router-view/>
    <BaseFooter></BaseFooter>
    <div class="totop">
        <a href="#">
          <i class="tab-icon">~</i>
          <em class="tab-text">顶部</em>
        </a>
      </div>
  </div>
</template>

<script>
import BaseHeaderFirst from "@/components/HeaderFirst"
import BaseFooter from "@/components/Footer"
export default {
  name: 'App',
  components:{BaseHeaderFirst, BaseFooter},
  data(){
    return {
    }    
  },
  updated(){
   // console.log("this.$route.path", this.$route.path);
  }
}
</script>

<style>
.totop{
    position:fixed;
    bottom:10px;
    right:1px;
    z-index:999;
    width:34px;
    height:35px;
    background:#584f60;
    border-radius:3px 0 0 3px;
  }
  .tab-icon{
    position:relative;
    width:34px;
    height:35px;
    line-height:35px;
    text-align:center;
    z-index:5;
    margin-right:1px;
    display:inline-block;
  }
  .tab-text{
    position:absolute;
    width:40px;
    height:35px;
    line-height:35px;
    text-align:center;
    z-index:10;
    top:0;
    left:35px;
    display:inline-block;
    background:red;
    border-radius:3px 0 0 3px;
    color:#fff;
  }
  .totop:hover .tab-text{
    left:-35px;
  }
  .totop:hover .tab-icon{
    background:red;
  }
</style>
