<template lang="html">
  <div>
    <BaseHeaderFirst :class="active"></BaseHeaderFirst>
    <div class="diary-wrapper">
      <div class="tab-content">
        <div class="entry">
          
          <div class="user">
            <router-link :to="'/userDetails/'+diary.uid">
              <img :src="user.avatar">
                <div class="name-wrap">
                  <div class="name">
                    <span>{{user.unickname}}</span>
                  </div>
                  <div class="update-time">{{diary.create_time | simpleDateTimeFilter}}</div>
                </div>
              </router-link>
              <div v-if="uid !== diary.uid" @click="followClick(status)">
                <div class="follow" v-if="status == -1">关注</div>
                <div class="follow" v-if="status == 0">被关注</div>
                <div class="follow followed" v-if="status == 1">已关注</div>
                <div class="follow followed" v-if="status == 2">互相关注</div>
              </div> 
          </div>  

          <div class="content">
            <!--图片-->
            <div class="photo-list">
              <ul class="photo">
                <li :style="{backgroundImage: 'url('+diary.pic+')'}"></li>
              </ul>
            </div>
            <!--遮罩层和btn-->
            <div class="mask-wrapper" v-show="!isShowAllContent">
              <div class="mask"></div>
              <div class="btn-wrapper">
                <div class="mask-btn" @click="showAllContent">显示全文</div>
              </div>
            </div>
            <div class="diary-text" v-show="isShowAllContent">{{diary.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>   
</template>

<script>

import BaseHeaderFirst from "@/components/HeaderFirst"
export default {
  components:{ BaseHeaderFirst },
  data(){
    return {
      active:'header-color',
      diary:{pic:''},
      user:{},
      did:-1,   // 当前运动记录的did
      duid:-1,  // 当前运动记录的用户的id
      uid:-1,  // 当前用户的id,
      status:-1,
      isShowAllContent:false
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(()=>{
      window.removeEventListener('scroll', this.handleScroll)
    }, 1000)
    this.duid = this.$route.params.uid
    this.did = this.$route.params.id
    this.uid = sessionStorage.getItem("uid")  // 获取当前登录用户id
    this.getUser()
    this.getDiary()
    this.getUserStatus()
  },
  methods:{
    getDiary(){
      this.$axios.get(`http://localhost:8084/diary/getDiary?id=${this.did}`).then(result=>{
        if(result.data.code == 1){
          this.diary = result.data.msg[0]
        }
      })
    },
    getUser(){
      this.$axios.get(`http://localhost:8084/user/details?uid=${this.duid}`).then(result=>{
        if(result.data.code == 1){
          this.user = result.data.msg
        }
      })
    },
    // 当前登录用户和diary 用户的关系
    getUserStatus(){
      this.$axios.get(`http://localhost:8084/user/followByFid?uid=${this.uid}&fid=${this.duid}`).
      then(result=>{
        if(result.data.code ==1){
          this.status = result.data.msg[0].status
        }
      })
    },
    // 点击关注按钮事件
    followClick(status){
      if(status == -1 ){
        this.status = 1
      }else if(status == 0){
        this.status = 2
      }else if(status == 1){
        this.status = -1
      }else if(status == 2){
        this.status = 0
      }  
      // 数据线更新  再查找关系
      this.$axios.get(`http://localhost:8084/user/followed?status=${this.status}&uid=${this.uid}&fid=${this.duid}`).
      then(result=>{
        if(result.data.code ==1){
          this.getUserStatus()
        }
      })
    },
    showAllContent(){
      this.isShowAllContent = true
    },
    handleScroll () { 
       // 从details页面跳转过来 设置 scrollTop = 0
       document.documentElement.scrollTop = 0
       document.body.scrollTop = 0
       window.pageYOffset = 0
    },
  }
}
</script>

<style scoped>
.diary-wrapper{
  padding-top:70px;
  margin-top:0;
}
.tab-content .entry:first-child{
  margin-top:0;
}
.tab-content .entry{
  margin-top:15px;
  background:#fff;
  width:768px;
  margin:0 auto;
}
.tab-content .entry .user{
  display:flex;
  height:80px;
  padding:15px;
  align-items: center;
}
.tab-content .entry .user a{
  display:flex;
  flex:1;
  padding:20px 20px 10px;
}
.tab-content .entry .user a>img{
  width:50px;
  height:50px;
  border-radius: 50%;
}
.entry .user .name-wrap{
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height:50px;
  margin-left:10px;
}
.entry .user .name-wrap .name{
  flex: 1;
  font-size:14px;
  color:#584f60;
}
.entry .user .name-wrap .update-time{
  flex: 1;
  font-size:12px;
  color:#999;
}
.entry .user .follow{
  width:100px;
  height:40px;
  line-height: 40px;
  text-align: center;
  color:#fff;
  background:#24c789;
  border-radius:30px;
  cursor:pointer;
}
.entry .user .followed{
  width:100px;
  height:40px;
  line-height: 40px;
  text-align: center;
  color:#24c789;
  background:#fff;
  border:1px solid #24c789;
  border-radius:30px;
  cursor:pointer;
}
.entry .content{
  margin:0 2px;
  position:relative;
}
.entry .content .text{
  font-size:15px;
  line-height: 30px;
  display:-webkit-box;
  overflow:hidden;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:4;
  white-space: pre-line;
  margin-bottom:15px;
}
.entry .content ul{
  list-style: none;
  overflow: hidden;
  padding:0;
}
.entry .content .photo-list .photo li{
  padding-bottom:100%;
  width:100%;
  background-position: center center;
  background-size:cover;
  background-repeat: no-repeat;
  margin-right:0;
  margin-top:10px;
}
.content .mask-wrapper{
   z-index:200;
   position:absolute;
   left:0;
   bottom:0;
   right:0;
}
.content .mask-wrapper .mask{
  z-index:100;
  height:150px;
  background-image:linear-gradient(0deg, #fff, rgba(255,255,255,0));
}
.content .mask-wrapper .btn-wrapper{
  height:80px;
  padding:10px 0 20px;
  background:#fff;
}
.content .mask-wrapper .btn-wrapper .mask-btn{
  height:45px;
  line-height:45px;
  width:200px;
  border-radius:50px;
  text-align:center;
  margin:0 auto;
  font-size:16px;
  color:#999;
  border:1px solid #ccc;
  cursor:pointer;
}
.content .diary-text{
  font-size:14px;
}
</style>
