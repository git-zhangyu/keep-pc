<template lang="html">
<div class="explore-wrapper">
  <BaseHeaderFirst :class="activeColor"></BaseHeaderFirst>
  <div class="explore">
    <div class="keep-main-content">
      <!--广告轮播-->
      <div class="swiper-wrapper row">
          <div class="col-lg-2 col-md-1 start"></div>
          <div class="col-lg-8 col-md-10">
          <div id="demo" class="carousel">
              <!--指示器-->
              <div class="carousel-indicators">
                  <li v-for="(item,key) of bannerList" :key="key"
                  :class="key == index ? 'active' : ''" @click="clickBtn(key)"></li>
              </div>
              <!--轮播图片-->
              <transition-group tag="ul" name="list" class="carousel-inner">
                  <div class="carousel-item" v-for="(item,key) of bannerList" :key="key"
                  :class="key == index ? 'active' : ''">
                      <img :src="item['pic']"/>
                  </div>
              </transition-group>
              <!--指示箭头-->
              <a href="javascript:;" class="carousel-control-prev" @click="prevFun">
                  <span class="carousel-control-prev-icon"></span>
              </a>
              <a href="javascript:" class="carousel-control-next" @click="nextFun">
                  <span class="carousel-control-next-icon"></span>
              </a>
          </div>
          </div>
      </div>

      <!--热门动态-->
      <section class="hot-wrapper row">
            <div class="col-lg-2 col-md-1 start"></div>
            <div class="col-lg-8 col-md-10">
                <!--hot 信息-->
                <div class="row">
                    <div class="hot-title col-md-12 mt-3">
                      <a href="#">热门动态</a>
                      <div class="get-more">
                        <span class="iconfont">&#xe62d;</span>
                      </div>
                    </div>
                    <!--每一个hot-->
                    <div class="col-lg-4 col-md-6 col-sm-6" v-for="(item, i) in hotDiaryList" :key="i">
                      <router-link tag="div" :to="'/diaryDetails/'+item.did+'/'+item.uid">
                        <div class="hot-cont">
                            <div class="hot-img-wrapper">
                              <div class="hot-img" :style="{backgroundImage: 'url('+item.pic+')'}"></div>
                            </div>
                            <div class="text">{{item.content}}</div>
                            <div class="comment">
                              <span class="iconfont">&#xe60c;</span>
                              <span class="like-num num">{{item.star_count}}</span>
                              <span class="iconfont">&#xe639;</span>
                              <span class="com-num num">{{item.comment_count}}</span>
                            </div>
                        </div>
                    </router-link>
                    </div>
                </div>
                <!--分页-->
                <v-pagination :totalPages="pages" @sendCurrPage="sendCurrPage">
                </v-pagination>
            </div>
      </section>

      <!--精选话题-->
      <section class="topic-wrapper row">
        <div class="offset-lg-2 offset-md-1"></div>
        <div class="col-lg-8 col-md-10">
            <div class="row">
              <div class="hot-title col-md-12 mt-3">
                <a href="#">精选话题</a>
                <div class="get-more">
                  <span class="iconfont">&#xe62d;</span>
                </div>
              </div>
              <div class="col-md-8 col-sm-12">
                <router-link to="/details">
                  <div class="topic-cont topic-wrap">
                      <div class="topic-img" :style="{backgroundImage: 'url('+topicList[0].pic+')'}"></div>
                      <div class="mask">
                        <div class="content">
                          <div class="mask-title">{{topicList[0].title}}</div>
                          <p class="count">{{topicList[0].count}}  条动态</p>
                          <p class="line"></p>
                          <p class="desc">{{topicList[0].content}}</p>
                        </div>
                      </div>
                  </div>
                </router-link>
              </div>

              <div class="col-md-4 col-sm-12 pl-0">
                <div class="topic-cont topic-hot">
                    <div class="topic-img" :style="{backgroundImage: 'url('+topicList[1].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{topicList[1].title}}</div>
                      </div>
                    </div>
                </div>
              </div>

            </div>

            <div class="row">
              <div class="col-md-4 col-sm-12 pr-0">
                <div class="topic-cont topic-hot">
                    <div class="topic-img" :style="{backgroundImage: 'url('+topicList[2].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{topicList[2].title}}</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-8 col-sm-12">
                <div class="topic-cont topic-wrap">
                    <div class="topic-img" :style="{backgroundImage: 'url('+topicList[3].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{topicList[3].title}}</div>
                        <p class="count">{{topicList[3].count}}  条动态</p>
                        <p class="line"></p>
                        <p class="desc">{{topicList[3].content}}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

        </div>
        <div class="col-lg-2 col-md-1 start">
        </div>
      </section>
      <!--精选合集-->
      <section class="collection-wrapper row">
        <div class="offset-lg-2 offset-md-1"></div>
        <div class="col-lg-8 col-md-10">
            <div class="row">
              <div class="hot-title col-md-12 mt-3">
                <a href="#">精选合集</a>
                <div class="get-more">
                  <span class="iconfont">&#xe62d;</span>
                </div>
              </div>
              <div class="col-md-8 col-sm-12">
                <div class="collection-cont collection-wrap">
                    <div class="collection-img" :style="{backgroundImage: 'url('+collectionList[0].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{collectionList[0].title}}</div>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 pl-0">
                <div class="collection-cont collection-hot">
                    <div class="collection-img" :style="{backgroundImage: 'url('+collectionList[1].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{collectionList[1].title}}</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <div class="collection-cont  collection-wrap">
                    <div class="collection-img" :style="{backgroundImage: 'url('+collectionList[2].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{collectionList[2].title}}</div>
                        </div>
                    </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 pl-0">
                <div class="collection-cont collection-hot">
                    <div class="collection-img" :style="{backgroundImage: 'url('+collectionList[3].pic+')'}"></div>
                    <div class="mask">
                      <div class="content">
                        <div class="mask-title">{{collectionList[3].title}}</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-2 col-md-1 start">
        </div>
      </section>

    </div>
  </div>
</div>
</template>

<script>
import "@/assets/css/explore.css"
import Pagination from "@/components/Pagination"
import BaseHeaderFirst from "@/components/HeaderFirst"

export default {
  components:{
    BaseHeaderFirst,
    'v-pagination':Pagination
    },
  data(){
    return {
      bannerList:[{pic:""},{pic:""},{pic:""}],
      hotDiaryList:[],
      topicList:[{pic:""},{pic:""},{pic:""},{pic:""}],
      collectionList:[{pic:""},{pic:""},{pic:""},{pic:""}],
      activeColor:'header-color',
      index:0,
      active:'active',
      pno:1,     // 当前页数
      pageSize:6,// 每页显示数量
      pages:1    // 总页数
    }
  },
  created(){
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(()=>{
      window.removeEventListener('scroll', this.handleScroll)
    }, 1000)
    this.getHotDiary()
    this.getHotDiarySum()
    this.getTopic()
    this.getCollection()
    this.getBanner()
    this.swiperFun()
  },
  methods:{
    // 获取分页数据
    getHotDiary(){
      this.$axios.get(`http://localhost:8084/diary/hotdiary?pno=${this.pno}&pageSize=${this.pageSize}`).
      then(result=>{
        if(result.data.code ==1){
          this.hotDiaryList = result.data.msg
        }
      })
    },
    // 获取总页数
    getHotDiarySum(){
      this.$axios.get("http://localhost:8084/diary/getdiarysum").
      then(result=>{
        if(result.data.code ==1){
          this.pages = Math.ceil(result.data.msg[0].pages/this.pageSize)
        }
      })
    },
    getTopic(){
      this.$axios.get("http://localhost:8084/diary/topic").
      then(result=>{
        if(result.data.code ==1){
          this.topicList = result.data.msg
        }
      })
    },
    getCollection(){
      this.$axios.get("http://localhost:8084/diary/collection").
      then(result=>{
        if(result.data.code ==1){
          this.collectionList = result.data.msg
        }
      })
    },
    getBanner(){
      this.$axios.get("http://localhost:8084/diary/banner").
      then(result=>{
        if(result.data.code ==1){
          this.bannerList = result.data.msg
        }
      })
    },
    // 分页子组件传输来的sendCurrPage
    sendCurrPage(i){
      this.pno = i
      this.getHotDiary()
    },
    // 轮播
    swiperFun(){
      setInterval(()=>{
        this.index ++;
        if(this.index == this.bannerList.length){
          this.index = 0;
        }
      },3000)
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
      this.index = key
    },
    handleScroll () {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.pageYOffset = 0
    },
  }
}
</script>

<style scoped>
  .explore-wrapper{
    position:relative;
  }
  .explore{
    background-color:#fafafa;
    padding-top:60px;
  }
  .totop{
    position:fix;
    bottom:400px;
    right:20px;
  }
  ul.carousel-indicators li{
    width:10px;
    height:10px;
    border-radius:50%;
}
</style>
