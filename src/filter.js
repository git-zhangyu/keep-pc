//1 创建全局过滤器
Vue.filter("datetimeFilter",function(val){
    var date=new Date(val);
    var y=date.getFullYear();
    var m=date.getMonth()+1;
    m<10&&(m="0"+m);
    var d=date.getDate();
    d<10&&(d="0"+d);
    var h=date.getHours();
    h>12&&(h-=12);
    h<10&&(h="0"+h);
    var M=date.getMinutes()
    M<10&&(M="0"+M);
    return `${y}-${m}-${d} ${h}:${M}`;
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