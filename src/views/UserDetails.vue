<template lang="html">
<div>
  <BaseHeaderFirst :class="active"></BaseHeaderFirst>  
  <div class="userDetails">
    <div class="keep-content">
      <div class="user-block">
        <div>
          <div class="user-top" :style="{backgroundImage: 'url('+list.backgroundImg+')'}"></div>
          <div class="user-head"> 
            <span class="user-avatar" :style="{backgroundImage: 'url('+list.avatar+')'}">
              <img src="@/assets/img/user/women.png" class="gender-img" v-if="list.gender == 0">
              <img src="@/assets/img/user/man.png" class="gender-img" v-if="list.gender == 1">
            </span>
            <span class="follow-btns" v-if="status != -2" @click="followClick(status)">
              <button class="follow" v-if="status == -1">关注</button>
              <button class="has-followed" v-if="status == 0">被关注</button>
              <button class="has-followed" v-if="status == 1">已关注</button>
              <button class="follow-each-other" v-if="status == 2">互相关注</button>
            </span>
          </div>
          <div class="user-info">
            <div class="user-name">{{list.unickname}}</div>
            <div class="user-desc">
              <div class="user-vip">
                <img src="@/assets/img/user/vip.png">喜欢读书美食的正能量健身girl</div>
              <div>{{list.introduce}}</div>
            </div>
            <div class="user-city">
              <span>{{list.address}}</span>
            </div>
          </div>
          <div class="user-data">
            <div class="followed-block">
              <div class="number">{{list.follow}}</div>
              <div class="desc">粉丝</div>
            </div>
            <div class="entry-block">
              <div class="number">{{list.dynamic}}</div>
              <div class="desc">动态</div>
            </div>
            <div class="following-block">
              <div class="number">{{list.focus}}</div>
              <div class="desc">关注</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="user-training">
            <div class="training-level">
              <span class="level-val">T8</span>
              <span class="level-title">总运动{{list.trainSumTime}}分钟</span>
              <span class="level-subtitle">近1周运动{{list.trainWeekTime}}分钟</span>
            </div>
            <div class="level-bar">
              <div class="level-bar-val"></div>
            </div>
            <div class="level-kinds">
              <!--kinds-->
              <div class="level-slide">
                <div class="circle-wrap">
                  <div class="circle-title">W8</div>
                  <canvas id="c11" width="70" height="70"></canvas>
                  <canvas id="c1" width="70" height="70"></canvas>
                </div>
                <div class="level-name">健身</div>
                <div class="level-current-val">7346分钟</div>
              </div>
              <div class="level-slide">
                <div class="circle-wrap">
                  <div class="circle-title">R3</div>
                  <canvas id="c22" width="70" height="70"></canvas>
                  <canvas id="c2" width="70" height="70"></canvas>
                </div>
                <div class="level-name">跑步</div>
                <div class="level-current-val">31.87公里</div>
              </div>
              <div class="level-slide">
                <div class="circle-wrap">
                  <div class="circle-title">Y6</div>
                  <canvas id="c33" width="70" height="70"></canvas>
                  <canvas id="c3" width="70" height="70"></canvas>
                </div>
                <div class="level-name">瑜伽</div>
                <div class="level-current-val">1511分钟</div>
              </div>
              <div class="level-slide">
                <div class="circle-wrap">
                  <div class="circle-title">C0</div>
                  <canvas id="c44" width="70" height="70"></canvas>
                  <canvas id="c4" width="70" height="70"></canvas>
                </div>
                <div class="level-name">骑行</div>
                <div class="level-current-val">100公里</div>
              </div>
              <div class="level-slide">
                <div class="circle-wrap">
                  <div class="circle-title">H0</div>
                  <canvas id="c55" width="70" height="70"></canvas>
                  <canvas id="c5" width="70" height="70"></canvas>
                </div>
                <div class="level-name">行走</div>
                <div class="level-current-val">300公里</div>
              </div>
            </div>
          </div>
          <div class="user-achievement">
            <div class="achivement-title">徽章</div>
            <div class="achivement-swiper">
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive1.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive2.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive3.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive4.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive5.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive6.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive7.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive8.png">
              </div>
              <div class="achivement-slide">
                <img src="@/assets/img/achivement/achive9.png">
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="user-photo-wrapper">
            <!--热门-->
            <div class="user-hot" v-show="hotList.length>0">
              <div class="hot-title">热门</div>
              <div class="hot-img row">
                <a href="#" class="col-sm-4" v-for="(item, i) in hotList" :key="item.did">
                  <i></i>
                  <span>{{item.star_count}}人加油</span>
                  <img :src="item.pic">
                </a>
              </div>
            </div>
            <!--相册-->
            <div class="user-photo">
              <div class="photo-title">相册</div>
              <div class="photo-img row">
                <a href="#" class="col-md-2 col-sm-4" 
                  v-for="(item, i) in diaryList" :key="item.did" v-show="i<6">
                  <img :src="item.pic">
                </a>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="training-diary">
            <div class="diary-head">运动日记</div>
            <!--按照天归类-->
            <div class="diary-block" v-for="(list, i) in newDiaryList" :key="i">
              <div v-for="(diary, j) in list">
              <a href="#" class="diary-day">
                <span>{{j}}</span>
                <div class="get-more">
                  <span class="iconfont">&#xe62d;</span>
                </div>
              </a>
              <!--每天每次分享记录-->
              <div class="traing-diary" v-for="(item, i) in diary">
                <img src="@/assets/img/tools/diary-img.png" class="diary-img">
                <div class="traing-diary-wrapper">
                  <div class="diary-title">
                    <span> 完成 {{item.title}} 第{{item.trainingCount}}次</span>
                  </div>
                  <div class="diary-desc" v-show="item.content">{{item.content}}</div>
                  <div class="diary-photo" v-show="item.pic">
                    <img :src="item.pic">
                  </div>
                  <div class="location" v-if="item.location">
                    <img src="@/assets/img/user/location.png">
                    <span>{{item.location}}</span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</div>   
</template>

<script>
import "@/assets/css/user.css"
import bg2 from "@/assets/img/explore/hot/hot4.jpg"
import BaseHeaderFirst from "@/components/HeaderFirst"

export default {
  components:{ BaseHeaderFirst },
  data(){
    return {
      bg2,
      list:[], // 用户详细信息
      diaryList:[], // 日记信息
      newDiaryList:[],// 编辑后的日记信息
      hotList:[], // 热门日记
      uid:0,
      status:-1,
      active:'header-color'
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(()=>{
      window.removeEventListener('scroll', this.handleScroll)
    }, 1000)
    // 原生画canvas
    this.handleCanvas()
    
  },
  created(){
    this.fid = this.$route.params.uid // 路由获取用户id 显示其信息
    this.uid = sessionStorage.getItem("uid")  // 获取当前登录用户id
    this.getUserDetails()
    this.getUserDiary()
    this.getHotDiary()
    this.getRelationship()
    
  },
  methods:{
    handleCanvas(){
      var c1 = document.getElementById("c1");
      var ctx = c1.getContext("2d");
      ctx.strokeStyle="#24c789";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,6);
      ctx.stroke()
      var c11 = document.getElementById("c11");
      var ctx = c11.getContext("2d");
      ctx.strokeStyle="#ddd";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,8.9);
      ctx.stroke()

      var c2 = document.getElementById("c2");
      var ctx = c2.getContext("2d");
      ctx.strokeStyle="#24c789";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,7);
      ctx.stroke()
      var c22 = document.getElementById("c22");
      var ctx = c22.getContext("2d");
      ctx.strokeStyle="#ddd";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,8.9);
      ctx.stroke()

      var c3 = document.getElementById("c3");
      var ctx = c3.getContext("2d");
      ctx.strokeStyle="#24c789";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,8);
      ctx.stroke()
      var c33 = document.getElementById("c33");
      var ctx = c33.getContext("2d");
      ctx.strokeStyle="#ddd";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,8.9);
      ctx.stroke()

      var c4 = document.getElementById("c4");
      var ctx = c4.getContext("2d");
      ctx.strokeStyle="#24c789";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,5);
      ctx.stroke()
      var c44 = document.getElementById("c44");
      var ctx = c44.getContext("2d");
      ctx.strokeStyle="#ddd";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,8.9);
      ctx.stroke()

      var c5 = document.getElementById("c5");
      var ctx = c5.getContext("2d");
      ctx.strokeStyle="#24c789";
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.arc(35,35,26,3.7,Math.PI*2);
      ctx.stroke()
      var c55 = document.getElementById("c55");
      var ctx = c55.getContext("2d");
      ctx.lineWidth=3
      ctx.beginPath();
      ctx.strokeStyle="#ddd";
      ctx.arc(35,35,26,3.7,8.9);
      ctx.stroke()
    },
    handleScroll () { 
       document.documentElement.scrollTop = 0
       document.body.scrollTop = 0
       window.pageYOffset = 0
    },
    // 查询 路由id 和session id 用户关系
    getRelationship(){
      if(this.uid != this.fid){
        this.$axios.get(`http://localhost:8084/user/followByFid?uid=${this.uid}&fid=${this.fid}`).
        then(result=>{
          if(result.data.code == 1){
            this.status = result.data.msg[0].status
           // console.log("我们是什么关系呀：", this.status,result.data.msg[0]);

          }else{
            //console.log("没有关系：",result.data.msg);
          }
        })
      }else{
        // 如果是自己，就不显示 关注按钮
        this.status = -2
      }
    },
    // 获取用户基本信息
    getUserDetails(){
      var uid = this.uid === this.fid ? this.uid : this.fid;
      if(!this.fid){
        uid = this.uid
      }
      this.$axios.get("http://localhost:8084/user/details?uid="+uid).
      then(result=>{
        if(result.data.code == 1){
          this.list = result.data.msg
        }
      })
    },
    // 热门
    getHotDiary(){
      var uid = this.uid === this.fid ? this.uid : this.fid
      this.$axios.get("http://localhost:8084/user/hotdiary?uid="+uid).
      then(result=>{
        if(result.data.code == 1){
          this.hotList = result.data.msg;
        }
      })
    },
    // 获取用户运动日记
    getUserDiary(){
      var uid = this.uid === this.fid ? this.uid : this.fid
      this.$axios.get("http://localhost:8084/user/diary?uid="+uid).
      then(result=>{
        if(result.data.code == 1){
          this.diaryList = result.data.msg;
          this.newDiaryList = this.groupByDateFilter(this.diaryList)
        }
      })
    },
    // 关注与否
    followClick(status){
      if(status == -1){// 没关注 -> 关注                    1
        this.status = 1
      }else if(status == 0){// 被关注了，关注，就是互相关注了 2
        this.status = 2
      }else if(status == 1){// 关注了，取消关注，没有关系了  -1
        this.status = -1
      }else if(status == 2){// 互相关注 ，取消关注，被关注    0
         this.status = 0
      }
      this.$axios.get(`http://localhost:8084/user/followed?uid=${this.uid}&fid=${this.fid}
         &status=${this.status}&oldStatus=${status}`).then(result=>{
            if(result.data.code == 1){
              console.log("关注")
            }
      })

    },
    //过滤
    groupByDateFilter(diaryList){
      let dlist = [];
      var i=0;
      for(var item in diaryList){
        // 格式化时间
        var date = new Date(diaryList[item].create_time);
        var y=date.getFullYear();
        var m=date.getMonth()+1;
        m<10&&(m="0"+m);
        var d=date.getDate();
        d<10&&(d="0"+d);
        var mytime = `${y}年${m}月${d}日`;

        // 以时间mytime为key  存储当天的运动日记信息
        if(dlist.length!=0){
          var temp = 0;
          for(var demo in dlist){
            for(var d in dlist[demo]){
               // 如果查找到相同的日期 则添加
              if(d == mytime){
                if(temp == mytime){temp = 0}
                dlist[demo][mytime].push(diaryList[item])
              }else{
                 // 如果查找到不同的日期 临时存放
                temp = mytime
              }
            }
          }
          // 如果查找到相同的日期 则添加
          if(temp == mytime){
            i++
            dlist[i] = {}
            dlist[i][mytime] = []
            dlist[i][mytime].push(diaryList[item])
          }
        }else{
          // 第一次dlist 是空的
          dlist[i] = {}
          dlist[i][mytime] = []
          dlist[i][mytime].push(diaryList[item])
        }
      }
      return dlist;
    }
    
  }
}
</script>

<style scoped>
  .userDetails{
    background-color:#fafafa;
    padding-top:60px;
  }
  .keep-footer{
    margin-top: 15px;
  }
</style>
