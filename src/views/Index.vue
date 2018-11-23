<template lang="html">
<div>
  <HeaderSecond v-if="!isVideoClose"></HeaderSecond>
  <div class="index">
      <!--首页点击按钮，出现视频-->
      <div class="video-solo" v-if="isVideoClose">
        <div class="video-close" @click="videoClose">X</div>
        <video src="@/assets/video/full.mp4"
          controls class="video-cont" id="video-control"></video>
      </div>
      <!--container-->
      <div class="container-fluid" v-if="!isVideoClose">
       
        <!--首页视频-->
        <!--大于767-->
        <div class="video-head-wrapper">
          <div class="video-container">
            <video id="video-bg" muted autoplay loop src="@/assets/video/5s.mp4"></video>
            <div class="video-control">
              <img src="@/assets/img/index/top-title.png">
              <img id="video-play" @click="playVideo"  src="@/assets/img/index/top-btn.png">
            </div>
            <div class="video-bottom">
              <div class="bottom-left">
                Keep · 自律给我自由
                <br>
                <br>
                一站式解决你所有的运动需求
              </div>
              <div class="bottom-right">
                <a href="/app?type=ios">
                  <img src="@/assets/img/index/appledownload.png">
                </a>
                <a href="/app?type=android">
                  <img src="@/assets/img/index/androiddownload.png">
                </a>
                <a href="javascript:;" class="qrcode">
                  <span></span>
                  <img src="@/assets/img/index/qrcode.png" class="qrcode">
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--小于767-->
        <div class="phone-head-wrapper">
          <div class="phone-mask"></div>
          <div class="phone-download-cont">
            <p class="phone-title">Keep · 自律给我自由</p>
            <p class="phone-cont">一站式解决你所有的运动需求</p>
            <a href="/app?type=ios">
              <img src="@/assets/img/index/appledownload.png">
            </a>
            <a href="/app?type=android">
              <img src="@/assets/img/index/androiddownload.png">
            </a>
          </div>
        </div>
        <!--内容主体-->
        <div class="content-wrap">
          <section>
            <div class="paragraph">
              <div class="para-title">量体裁衣 & 多种健身训练供你选择</div>
              <div class="para-text">训练计划针对不同人群、各种器械和阶段健身目标组合编排，适用最广泛的健身场景。</div>
            </div>
            <div class="training-wrap">
              <div class="training-wrap-inner">
                <!--左侧图片-->
                <div class="training-block">
                  <div class="training-item">
                    <div class="training-detail">
                      <div class="training-title">瘦腿训练</div>
                      <div>13分钟 49千卡</div>
                      <div class="training-population">48385041人训练</div>
                    </div>
                  </div>
                  <div class="training-item">
                    <div class="training-detail">
                      <div class="training-title">马甲线</div>
                      <div>12分钟 61千卡</div>
                      <div class="training-population">49252615人训练</div>
                    </div>
                  </div>
                  <div class="training-item">
                    <div class="training-detail">
                      <div class="training-title">瑜伽·身体韵律</div>
                      <div>32分钟 135千卡</div>
                      <div class="training-population">928978人训练</div>
                    </div>
                  </div>
                  <div class="training-item my-hidden">
                    <div class="training-detail">
                      <div class="training-title">地狱Burpees挑战</div>
                      <div>13分钟 191千卡</div>
                      <div class="training-population">1247907人训练</div>
                    </div>
                  </div>
                </div>
                <!--右下角数据-->
                <div class="training-data">
                  <div class="data-text">
                    <span class="text-line"></span>
                    <span>积累训练:</span>
                  </div>
                  <div class="data-time">
                    <span class="data-min">68.79</span>
                    <span class="data-text data-unit">亿分钟</span>
                  </div>
                  <div class="data-cont">
                    <span>
                      <span class="data-num">4.93</span>
                      <span class="data-text data-unit">亿次</span>
                    </span>
                    <span>
                      <span class="data-num data-cal">388.56</span>
                      <span class="data-text data-unit">亿千次</span>
                    </span>
                  </div>
                </div>
                <!--右下角文本-->
                <div class="training-text">
                  <div class="text-title">真人同步训练记录训练进度</div>
                  <div class="text-cont">全程语音督导，自动同步进度，不需要背动作、记组数，跟着 Keep 马上练起来。</div>
                  <a href="/training" class="training-btn">
                    <span>查看课程</span>
                    <i></i>
                  </a>
                </div>
                <!--中间的人-->
                <div class="body-pic-wrap">
                <img src="@/assets/img/index/heart-ee688b8cbb.png" class="animate-heart"/>
                  <!--ren-->
                  <img src="@/assets/img/index/body-17083f5af5.png" class="body-pic"/>
                  <img src="@/assets/img/index/bodycircle-de9a04cd4e.png" class="circle-pic"/>
                </div>
                
                <img src="@/assets/img/index/traindata-b45741aab8.png" class="data-pic">
                <img src="@/assets/img/index/trainchart-22f298e54c.png" class="chart-pic">
                <img src="@/assets/img/index/trainpic-ed1960e938.png" class="cal-pic">
              </div>
            </div>
          </section>
          <section>
            <div class="paragraph run-para">
              <div class="para-title">户外跑步 & 精准跑步记录，让你的跑步更加系统</div>
              <div class="para-text">精准跑步路线记录，跑前热身与跑后拉伸，Keep 提供更加完善和专业的跑步指导。</div>
            </div>
            <div class="run-wrap">
              <div class="run-wrap-inner">
                <!--线路图-->
                <div class="run-track-wrap">
                  <img src="@/assets/img/index/runtrack-3ad5a221f9.png">
                  <div class="animate-circle"></div>
                </div>
                <!--配置图-->
                <div class="run-config-wrap">
                  <!--top-->
                  <div class="run-config-pace">
                    <div class="config-title">
                      <i class="keep-icon-speed"></i>
                      <span>配速</span>
                    </div>
                    <div class="config-cont">
                      <span>公里</span>
                      <span>配速</span>
                      <span class="right">用时</span>
                    </div>
                    <div class="speed-bar speed-bar1"></div>
                    <div class="speed-bar speed-bar2"></div>
                    <div class="speed-bar speed-bar3"></div>
                    <div class="speed-bar speed-bar4"></div>
                    <div class="speed-bar speed-bar5"></div>
                    <div class="speed-bar speed-bar6"></div>
                    <div class="speed-bar speed-bar7">
                      <!-- <div class="speed-bar-fill"></div> -->
                    </div>
                  </div>
                  <!--bottom-->
                  <div class="run-config-frequency">
                    <div class="config-title">
                      <div>
                        <i class="keep-icon-frequency"></i>
                        <span>步频</span>
                        <span class="right">(步/分钟)</span>
                      </div>
                      <div class="chart-title">
                        平均步频
                        <span>146</span>
                      </div>
                    </div>
                     <img src="@/assets/img/index/runchart-ae8422d700.png">
                    <div class="freq-img">
                      <img src="@/assets/img/index/runcover-84021e09f4.png">
                    </div>
                  </div>
                </div>
                <!--文本 按钮-->
                <div class="run-text-wrap">
                  <div class="run-text-title">用步伐丈量世界</div>
                  <div class="run-text-cont">在 Keep 记录你的跑步轨迹，制定有氧课程表，助你更快达成你的跑步目标</div>
                  <a href="/maptrack" class="run-btn">
                    <span>跑步轨迹</span>
                    <i></i>
                  </a>
                </div>
                <!--累计跑步-->
                <div class="run-data">
                  <div class="data-block">
                    <div class="data-title">
                      <span class="text-line"></span>
                      <span>累计跑步</span>
                    </div>
                    <div class="data-val">8415.57</div>
                    <div class="data-unit">万公里</div>
                  </div>
                  <div class="data-block-right">
                    <div class="data-block2">
                      <div class="data-title">
                        <i class="icon-speed"></i>
                      </div>
                      <div class="data-val">9.27</div>
                      <div class="data-unit">分/公里</div>
                    </div>
                    <div class="data-block2">
                      <div class="data-duration">
                        <i class="icon-speed"></i>
                      </div>
                      <div class="data-val">7.80</div>
                      <div class="data-unit">亿分钟</div>
                    </div>
                    <div class="data-block2">
                      <div class="data-cal">
                        <i class="icon-speed"></i>
                      </div>
                      <div class="data-val">62.05</div>
                      <div class="data-unit">亿千卡</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="paragraph community-para">
              <div class="para-title">运动社区 & 分享健身成果，一起进步</div>
              <div class="para-text">拍照记录每一天的变化，分享好友相互勉励，在 Keep 健身不再是孤独的坚持。</div>
            </div>
            <div class="community-wrap">
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <a href="/entries" target="_blank" class="community-entry">
                <div class="mask"></div>
                <div class="entry-user-wrap">
                </div>
              </a>
              <div class="community-text">
                <div class="text-title">千万用户伴你训练</div>
                <div class="text-cont">Keep 希望创造一个专业、有趣的健身社区，在这里你会找到渴望共同进步的小伙伴。</div>
                <a href="/explore" class="text-btn">
                  <span>社区精选</span>
                  <i></i>
                </a>
              </div>
              <img src="@/assets/img/index/carmera.png" class="camera-pic"/>
            </div>
          </section>
          
          <section class="users-wrap">
            <div class="users-wrap-inner">
              <div class="users-text">
                <div class="users-title">
                  <div class="icon-qoute"></div>
                  <div>你需要的运动伙伴</div>
                </div>
                <div class="users-cont">精准数据记录、优质训练计划、专业运动干货、趣味线上赛事、精选社区达人……</div>
              </div>
              <div class="user-list-wrap">
                <div class="phone-mask"></div>
                <div class="phone-wiper-slide">
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone1.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone8.jpeg"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone3.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone4.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone7.jpeg"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone2.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone1.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone8.jpeg"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone3.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone4.png"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone7.jpeg"/>
                  </div>
                  <div class="phone-slide">
                    <img src="@/assets/img/index/phone2.png"/>
                  </div>

                </div>
              </div>
              <div class="user-show-two">
                <div class="phone-slide">
                  <img src="@/assets/img/index/phone1.png"/>
                </div>
                <div class="phone-slide">
                  <img src="@/assets/img/index/phone2.png"/>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>


</div>
</template>

<script> 
  import '@/assets/css/bootstrap.css'
  import '@/assets/css/index-fluid.css'
  import '@/assets/css/index.css'
  import '@/assets/css/iconfont.css'
  import HeaderSecond from "@/components/HeaderSecond"

  export default {
    components:{HeaderSecond},
    data(){
      return {
        isVideoClose: false,
        screenWidth: document.body.clientWidth
      }
    },
    mounted(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth (val) {
        this.screenWidth = val
      }
    },
    methods: {
      videoClose() {
        this.isVideoClose = false
      },
      playVideo(){
        this.isVideoClose = true
      }
    }
  }
</script>

<style scoped>

</style>
