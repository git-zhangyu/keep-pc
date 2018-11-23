// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import store from './store/store'
import '@/api/validate'

Vue.prototype.$axios = axios //全局注册，使用方法为  this.$axios
Vue.prototype.qs = qs        //全局注册，使用方法为  this.qs
//1 创建全局过滤器
Vue.filter("datetimeFilter",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m<10&&(m="0"+m);
  var d=date.getDate();
  d<10&&(d="0"+d);
  var h=date.getHours();
  var am = h>12 ? "pm" :"am";
  h>12&&(h-=12);
  h<10&&(h="0"+h);
  var M=date.getMinutes()
  M<10&&(M="0"+M);
  return `${y}-${m}-${d} ${am} ${h}:${M}`;
});
Vue.filter("simpleDateTimeFilter",function(val){
  var date=new Date(val);
  var y=date.getFullYear();
  var m=date.getMonth()+1;
  m<10&&(m="0"+m);
  var d=date.getDate();
  d<10&&(d="0"+d);
  return `${y}-${m}-${d}`;
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
