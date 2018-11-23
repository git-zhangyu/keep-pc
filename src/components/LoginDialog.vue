<template>
        <!--登陆模块-->
        <div class="login-panel panel active">
          <form action="">
            <!--电话号码-->
            <div class="input-wrapper">
              <input type="text" name="uname" value="+86" class="country-input">
              <input type="text" v-model="mobile" v-validate="'required|mobile'"
              name="mobile" class="phone-input phone-num" placeholder="请输入手机号" autofocus
              v-on:blur="checkMobile" v-on:focus="checkMobileMsg"><br>
              <span v-show="errors.has('mobile')" class="help is-danger login-span">{{errors.first('mobile')}}</span>
              <span v-show="!errors.has('mobile')" class="help is-danger login-span">{{mobileErrorMsg}}</span>
            </div>
            <!--密码-->
            <div class="input-wrapper">
              <span class="iconfont">&#xe627;</span>
              <input type="password" v-model="password" v-validate="'required|password'"
              placeholder="请输入密码" name="password" class="phone-input password" @keyup.enter="loginBtn"><br>
              <span v-show="errors.has('password')" class="help is-danger login-span">{{errors.first('password')}}</span>
            </div>
            <span v-show="false">{{mobileError = errors.has('mobile')}}</span>
            <input type="button" value="登陆" class="submit" @click="loginBtn">
          </form>
          <div class="social-login">
            <span>其他方式登陆：</span>
            <a href="#">
              <span class="iconfont">&#xe621;</span>
            </a>
            <a href="#">
              <span class="iconfont">&#xe641;</span>
            </a>
            <a href="#">
              <span class="iconfont">&#xe749;</span>
            </a>
          </div>
          <div class="message-wrapper" v-if="msg.length>0">
            <div class="mask"></div>
            <div class="message-dialog">
              <div class="type">
                提示
                <i>X</i>
              </div>
              <div class="message">{{msg}}</div>
              <div class="btn" @click="confirmMsg">确定</div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data(){
    return {
      mobile:'',
      password:'',
      msg:'',
      pwd:'', // 中间变量 辅助确认密码
      mobileError:true,   // 确认手机号码是否输入正确
      mobileErrorMsg:''   // 检查手机号码是否有注册
    }
  },
  methods:{
    checkMobileMsg(){
      this.mobileErrorMsg=''
    },
    // 检查手机号码是否已经注册过
    checkMobile(){
     // console.log("是否.", this.mobileError)
      if(this.mobileError == false){
        this.$axios.get(`http://localhost:8084/user/checkMobile?mobile=${this.mobile}`).then(result=>{
       //   console.log(result.data)
          if(result.data.msg>0){
            this.mobileErrorMsg = '此号码可以使用'
            this.mobileError = true
          }else{
            this.mobileErrorMsg='此号码没有注册，请重新输入'
          }
        })
      }
    },
    loginBtn(){
     // console.log('this.mobileError', this.mobileError)
      if(this.mobileErrorMsg !== '此号码可以使用'){
        return
      }
      this.$validator.validateAll().then(result=>{
        if(result){
         // console.log("成功login-----------")
          this.$axios.get(`http://localhost:8084/user/login?mobile=${this.mobile}&password=${this.password}`).then(result=>{
              if(result.data.code == 1){
                this.$store.commit('login_in', result.data.msg[0])
                var path = this.$route.query.redirect == undefined ? '/' : this.$route.query.redirect
                this.$router.push(path)
              }else{
                this.msg = result.data.msg
                this.mobile = ''
                this.password = ''
              }
          })
        }
      })
    },
    confirmMsg(){
      this.msg = ''
    }
  }
}
</script>

<style>
.message-wrapper{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
.message-wrapper .mask{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,.5);
}
.message-wrapper .message-dialog{
  position:absolute;
  top:50%;
  left:50%;
  width:400px;
  height:200px;
  border:1px solid #ccc;
  margin-left:-200px;
  margin-top:-180px;
  background:#fff;
  z-index:200;
  border-radius:5px;
}
.message-wrapper .message-dialog .type{
  height:50px;
  line-height:50px;
  font-size:20px;
  border:1px solid #fff;
  padding-left:16px;
}
.message-wrapper .message-dialog .type  i{
  float:right;
  margin-right:10px;
  margin-top:-10px;
}
.message-wrapper .message-dialog .message{
  height:90px;
  line-height:90px;
  font-size:16px;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  padding-left:20px;

}
.message-wrapper .message-dialog .btn{
  height:40px;
  width:80px;
  border-radius:5px;
  font-size:20px;
  color:#fff;
  margin:10px 150px;
  background:#337AB7;

}
</style>
