<template>
        <!--注册模块-->
        <div class="register-panel panel active">
          <form action="">
            <div class="input-wrapper">
              <input type="text" name="" value="+86" class="country-input">
              <input type="text" v-model="mobile" v-validate="'required|mobile'"
              name="mobile" class="phone-input phone-num" placeholder="请输入手机号" autofocus
              v-on:blur="checkMobile" v-on:focus="checkMobileMsg"><br>
              <span v-show="errors.has('mobile')" class="help is-danger login-span">{{errors.first('mobile')}}</span>
              <span v-show="!errors.has('mobile')" class="help is-danger login-span">{{mobileErrorMsg}}</span>
            </div>
            <div class="input-wrapper">
              <span class="iconfont">&#xe627;</span>
              <input type="password" v-model="password" v-validate="'required|password'"
              placeholder="请输入6-12位密码" name="password" class="phone-input password"><br>
              <span v-show="errors.has('password')" class="help is-danger login-span">{{errors.first('password')}}</span>
            </div>
            <div class="input-wrapper">
              <span class="iconfont">&#xe627;</span>
              <input type="password" v-model="rpassword"
              v-validate="{required:true, confirmed:pwd}"
              placeholder="请确认密码" name="rpassword" class="phone-input password"><br>
              <span v-show="errors.has('rpassword')" class="help is-danger login-span">{{errors.first('rpassword')}}</span>
            </div>
            <div class="input-wrapper">
              <span class="iconfont" style="font-size:2rem;">&#xe6b1;</span>
              <input type="text" placeholder="昵称" v-validate="'required|unickname|min:2'"
              name="username" class="phone-input username" v-model="username" @keyup.enter="registerKeyup"><br>
              <span v-show="errors.has('username')" class="help is-danger login-span">{{errors.first('username')}}</span>
            </div>
            <div class="input-wrapper" id="gender-select">
              <span>性别</span>
              <input type="radio" name="gender" class="gender-radio" :value="1" v-model="gender">男
              <input type="radio" name="gender" class="gender-radio" :value="0" v-model="gender">女
            </div>
            <span v-show="false">{{mobileError = errors.has('mobile')}}</span>
            <input type="button" value="注册" class="submit" @click="registerBtn">
          </form>
          <div class="register-info">
            注册即表示同意「Keep」
            <a href="#" target="_blank">用户协议</a>
            <a href="#" target="_blank">隐私政策</a>
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
      rpassword:'',
      username:'',
      gender:1,
      mobileError:'',
      msg:'',
      pwd:'', // 中间变量 辅助确认密码
      mobileError:true,   // 确认手机号码是否输入正确
      mobileErrorMsg:''   // 检查手机号码是否已被注册
    }
  },
  watch:{
    password(){
      this.pwd = this.password
    }
  },
  methods:{
    checkMobileMsg(){
      this.mobileErrorMsg=''
    },
    // 检查手机号码是否已经注册过
    checkMobile(){
      if(this.mobileError == false){
        this.$axios.get(`http://localhost:8084/user/checkMobile?mobile=${this.mobile}`).then(result=>{
          console.log(result.data)
          if(result.data.msg>0){
            this.mobileErrorMsg = '此号码已经注册了，请重新输入'
          }else{
            this.mobileErrorMsg='此号码可以使用'
          }
        })
      }

    },
    registerBtn(){
      if(this.mobileErrorMsg !== '此号码可以使用'){
        return
      }
      this.$validator.validateAll().then(result=>{
        if(result){
          this.$axios.get(`http://localhost:8084/user/register?mobile=${this.mobile}&password=${this.password}&username=${this.username}&gender=${this.gender}`).then(result=>{
              if(result.data.code == 1){
                this.msg = result.data.msg
                setTimeout(()=>{
                  this.$router.push('/login')
                  // 将isLoginCtr 传递给父元素，显示login
                  //var isLoginCtr = true
                  this.$emit("handler", true)
                }, 3000)
              }else{
                this.msg = result.data.msg
                this.mobile=''
              }
          })
        }
      })
    },
    //keyuo注册
    registerKeyup(){
      this.registerBtn()
    },
    confirmMsg(){
      this.msg = ''
    }
  }
}
</script>

<style>

</style>
