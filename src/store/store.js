import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    unickname:'',
    uid:-1,
    isLogin:false
  },
  getters:{
    isLogin(state){
      if(!state.isLogin){
        state.isLogin = sessionStorage.getItem("isLogin")
        state.unickname = sessionStorage.getItem("unickname")
        state.uid = sessionStorage.getItem("uid")
      }
      return state.unickname;
    }
  },
  mutations:{
    login_in(state, data){
      console.log('mutations login_in---', data)
      sessionStorage.setItem("isLogin", true)
      sessionStorage.setItem("unickname", data.unickname)
      sessionStorage.setItem("uid", data.uid)
      state.unickname = data.unickname
      state.uid = data.uid
      state.isLogin = true
    },
    login_out(state){
      state.isLogin = false
      sessionStorage.removeItem("isLogin")
      sessionStorage.removeItem("unickname")
      sessionStorage.removeItem("uid")
    }
  }
})

export default store
