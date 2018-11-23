<template lang="html">
<div>
  <BaseHeaderFirst :class="active"></BaseHeaderFirst>
  <div class="details">
    <div class="keep-content">
      <div class="keep-body mt-2">
        <!--top-->
        <div class="keep-wrapper hashtag">
          <div class="hashtag-header" :style="{backgroundImage: 'url('+bg2+')'}">
            <div class="mask"></div>
            <div class="hashtag-info">
              <div class="hashtag-num">1931 条讨论</div>
              <div class="hashtag-title">生活中如何顺利挤出健身时间？</div>
            </div>
          </div>
          <div class="description">
            <div class="description-content">
              <div>
                爱健身的人，如何顺利在生活中“挤出”健身的时间？如何处理一时“想犯懒”的冲动？
                欢迎 Keepers 说出你的经验！
                图片 from <a href="#">@___长腿姑娘</a>
              </div>
            </div>
          </div>
        </div>
        <!--content-->
        <div class="timeline">
          <div class="tab-title">
            <span class="hot" :class="isHotTopicList == true ? activeClass: ''" @click="hotTopic">最热</span>
            <span class="new" :class="isHotTopicList == false ? activeClass: ''" @click="newTopic">最新</span>
          </div>
          <topicList :list="list"></topicList>
          <div v-show="hasMore" class="loading" style="text-align:center;padding:20px 0;" id="loading">
            <img src="@/assets/img/tools/loading.gif">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import "@/assets/css/details.css"
import bg2 from "@/assets/img/explore/topic/topic1.jpg"
import topicList from "@/components/TopicList"
import BaseHeaderFirst from "@/components/HeaderFirst"

export default {
  components:{topicList, BaseHeaderFirst},
  data(){
    return {
      bg2,
      pno:1,  // hot
      npno:1, // new
      pageSize:3,
      hotTopicList:[],
      newTopicList:[],
      list:[],
      isHotTopicList:true, // 默认加载hotTopicList 数据
      activeClass:'active',
      active:'header-color',
      uid:sessionStorage.getItem("uid"),
      userFollowed:[],
      newClickFirst: false,
      listTotal:0, // 总的topic数量
      hasMore:true
    }
  },
  created(){
    this.getUserFollow()
    this.getHotTopic()
  },
  mounted(){
    this.getListTotal()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods:{
    handleScroll () { //改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#loading').offsetTop;

      if((scrollTop+400) > offsetTop){
        this.getMore()
      }

    },
    // 获取总数
    getListTotal(){
      this.$axios.get("http://localhost:8084/topic/listTotal").then(result=>{
        this.listTotal = result.data.msg
      })
    },
    getHotTopic(){
      this.$axios.get(`http://localhost:8084/topic/listByHot?pno=${this.pno}&pageSize=${this.pageSize}`).
      then(result=>{
        if(result.data.code ==1){
          this.hotTopicList = result.data.msg
          // list 初始等于 hotTopicList
          this.list = this.hotTopicList
          var list = this.list
          for(var item in list){
            list[item].status = this.filterStatus(list[item])
            list[item].isfollow = this.filterUserStarDiary(list[item])
          }
        }
      })
    },
    getNewTopic(){
      this.$axios.get(`http://localhost:8084/topic/listByTime?pno=${this.npno}&pageSize=${this.pageSize}`).
      then(result=>{
        if(result.data.code ==1){
          this.newTopicList = result.data.msg
          if(this.npno == 1){
            this.list = this.newTopicList
          }
          var list = this.newTopicList
          for(var item in list){
            list[item].status = this.filterStatus(list[item])
            list[item].isfollow = this.filterUserStarDiary(list[item])
          }
        }
      })
    },
    // 获取关注status
    filterStatus(val){
      var uid = val.uid
      var follows = this.userFollowed
        for(var item in follows){
           if(follows[item].fid == uid){
              return follows[item].status;
            }
        }
        return -1;
    },
    // 当前用户所关注的用户
    getUserFollow(){
      this.$axios.get(`http://localhost:8084/user/follow?uid=${this.uid}`).
      then(result=>{
        if(result.data.code ==1){
          this.userFollowed = result.data.msg
        }
      })
    },
    // 获取当前用户是否点赞过此动态
    filterUserStarDiary(val){
      if(val.starUid.length>0){
        var arr = val.starUid.split(',');
        for(var s of arr){
          if(parseInt(s) == this.uid){
            return true;
          }
        }
        return false;
      }else{
        return false;
      }
    },
    // 加载更多
    getMore(){
      var total = Math.ceil(this.listTotal/this.pageSize);
      if(this.pno <= total){
        if(this.isHotTopicList == true){
          this.pno++
          this.getUserFollow()
          this.getHotTopic()
        }
      }
      if(this.npno<= total){
        if(this.isHotTopicList == false){
          this.npno++
          this.getUserFollow()
          this.getNewTopic()
          this.list = this.newTopicList
        }
      }
      if(this.pno==total || this.npno==total){
        this.hasMore=false
      }

    },
    // 点击事件
    hotTopic(){
      this.isHotTopicList = true
      this.getUserFollow()
      this.pno = 1
      this.getHotTopic()
    },
    newTopic(){
      this.isHotTopicList = false
      this.getUserFollow()
      this.npno = 1
      this.getNewTopic()
    }
  }

}
</script>

<style scoped>
  .details{
    background-color:#fafafa;
  }
  .keep-footer{
    margin-top: 15px;
  }
</style>
