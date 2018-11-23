<template lang="html">
<div class="topic-list">
  <div class="tab-content hot active">
    <div class="entry" v-for="(item,i) in list" :key="item.id">
        <div class="user">
            <router-link :to="'/userDetails/'+item.uid">
                <img :src="item.avatar">
                <div class="name-wrap">
                    <div class="name">
                        <span>{{item.unickname}}</span>
                    </div>
                    <div class="update-time">{{item.create_time | simpleDateTimeFilter}}</div>
                </div>
            </router-link>
            <div v-if="uid !== item.uid" @click="followClick(item)">
                <div class="follow" v-if="item.status == -1">关注</div>
                <div class="follow" v-if="item.status == 0">被关注</div>
                <div class="follow followed" v-if="item.status == 1">已关注</div>
                <div class="follow followed" v-if="item.status == 2">互相关注</div>
            </div>
        
        </div>
        <div class="content">
            <div class="text">{{item.content}}</div>
            <div class="con-img">
                <router-link :to="'/topicDetails/'+item.id+'/'+item.uid">
                    <ul class="photo">
                        <li v-for="(pic, i) in item.pic.split(',')" 
                        :style="{backgroundImage: 'url('+pic+')'}"></li>
                    </ul>
                </router-link>
            </div>
        </div>
        <div class="option">
            <div class="option-left">
                <div class="likes">
                    <i></i>{{item.likes}}
                </div>
                <div class="comment">
                    <i></i>{{item.comment}} 
                </div>
                <div class="stars">
                    <i v-if="item.isfollow == false" @click="starClick(item)"></i>
                    <span v-if="item.isfollow == false">{{item.star}}</span>
                    <i v-if="item.isfollow == true" @click="starClick(item)" class="green"></i>
                    <span v-if="item.isfollow == true">{{item.star}}</span>
                </div>
            </div>
            <div class="share">
                <i></i>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    props:["list"],
    data(){
        return {
            starClass:"active",
            uid:sessionStorage.getItem("uid"),
            friendOne:[],
        }
    },
    methods:{
        // 点赞
        starClick(item){
            if(item.isfollow == false){
                item.isfollow = !item.isfollow                            
                item.star++
            }else{
                item.star--
                item.isfollow = !item.isfollow  
            }
            this.$axios.get(`http://localhost:8084/topic/addStar?id=${item.id}&uid=${this.uid}&star=${item.star}&isfollow=${item.isfollow}&starUid=${item.starUid}`).then(result=>{
                if(result.data.code == 1){
                    console.log(item.isfollow == true ? "点赞" : "不点赞")
                }
            })
        },
        // 关注
        followClick(item){
            var oldStatus = item.status
            var newStatus = -2
            if(oldStatus == 1){
                 newStatus = -1;
            }else if(oldStatus == 2){
                newStatus = 0;
            }else if(oldStatus == 0){
                 newStatus = 2;
            }else if(oldStatus == -1){
                newStatus = 1;
            }
            item.status = newStatus                
            this.$axios.get(`http://localhost:8084/user/followed?uid=${this.uid}&fid=${item.uid}
            &status=${newStatus}&oldStatus=${oldStatus}`).then(result=>{
                if(result.data.code == 1){
                    // 调用确定用户间 关注关系
                    this.getUserFriend(this.uid,item.uid)  
                }
            })
        },
        // 当前登录用户与点击"关注"按钮的用户关系
        getUserFriend(uid,fid){
            this.$axios.get(`http://localhost:8084/user/followByFid?uid=${uid}&fid=${fid}`).
            then(result=>{
                // 有关注
                if(result.data.code == 1){
                    this.friendOne = result.data.msg
                    for(var d of this.list){
                        if(d.uid == fid){
                            d.status = this.friendOne[0].status
                           console.log("关注了-------------a", d.status)
                        }
                    }
                // 没有关注
                }else if(result.data.code == 0){
                    for(var d of this.list){
                        if(d.uid == fid){
                            d.status = -1
                           console.log("不关注了-------------a", d.status)
                        }
                    }
                }
            })
        }
    }
}
</script>

<style lang="css">
</style>
