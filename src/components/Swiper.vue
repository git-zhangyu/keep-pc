<template>
    <div class="swiper">
        <div class="swiper-wrapper row">
          <div class="col-lg-2 col-md-1 start"></div>
          <div class="col-lg-8 col-md-10">
              <div id="demo" class="carousel" data-ride="carousel">
              <!--指示器-->
              <ul class="carousel-indicators">
                  <li data-target="#demo" 
                  v-for="(item,key) of bannerList" :key="key"
                  :class="key == index ? 'active' : ''" @click="clickBtn(key)"></li>
              </ul>
              <!--轮播图片-->
              <div class="carousel-inner">
                  <div class="carousel-item" v-for="(item,key) of bannerList" :key="key" 
                  :class="key == index ? 'active' : ''">
                      <img :src="item['pic']"/>
                  </div>
              </div>
              <!--指示箭头-->
              <a href="#demo" class="carousel-control-prev" @click="prevFun">
                  <span class="carousel-control-prev-icon"></span>
              </a>
              <a href="#demo" class="carousel-control-next" @click="nextFun">
                  <span class="carousel-control-next-icon"></span>
              </a>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
import "@/assets/css/explore.css"

    export default {
        data(){
            return {
              bannerList:[{pic:""},{pic:""},{pic:""}],
              index:0,
              active:'active'
            }
        },
        created(){
            this.getBanner()
            this.swiperFun()
        },
        methods:{
            getBanner(){
                this.$axios.get("http://localhost:8084/diary/banner").
                then(result=>{
                    if(result.data.code ==1){
                    this.bannerList = result.data.msg
                    }
                })
            },
            swiperFun(){
                setInterval(()=>{
                    this.index ++;
                    if(this.index == this.bannerList.length){
                        this.index = 0;
                    }
                },7000000)
            },
            prevFun(){
                if(this.index==0){
                    this.index = this.bannerList.length-1
                }else{
                    this.index--
                }
            },
            nextFun(){
                if(this.index == this.bannerList.length-1){
                    this.index = 0
                }else{
                    this.index++
                }
            },
            clickBtn(key){
                console.log("key-------", key)
                this.index = key
            }
        }
    }
</script>

<style>
ul.carousel-indicators li{
    width:10px;
    height:10px;
    border-radius:50%;
}
</style>