// '/lesson/list?family_id='+p.family_id
  new Vue({
    el:"#app_details",
    data:{
      res:[],
      list:[
        ["img/content/details/1.jpg","髋关节环绕"],
        ["img/content/details/2.jpg","向前肩部环绕"],
        ["img/content/details/3.jpg","俯身大腿内侧交替拉伸"],
        ["img/content/details/4.jpg","平板支撑"],
        ["img/content/details/5.jpg","深蹲提膝"],
        ["img/content/details/6.jpg","推墙高抬腿"],
        ["img/content/details/7.jpg","俯身慢速跨步登山"],
        ["img/content/details/8.jpg","推墙高抬腿"],
        ["img/content/details/9.jpg","跨步Burpee"],
        ["img/content/details/10.jpg","深蹲提膝"],
        ["img/content/details/11.jpg", "推墙高抬腿"],
        ["img/content/details/12.jpg", "俯身慢速跨步登山"],
        ["img/content/details/13.jpg", "推墙高抬腿"],
        ["img/content/details/14.jpg", "跨步Burpee"],
        ["img/content/details/15.jpg", "深蹲提膝"],
        ["img/content/details/16.jpg", "推墙高抬腿"],
        ["img/content/details/17.jpg", "俯身慢速跨步登山"],
        ["img/content/details/18.jpg", "推墙高抬腿"],
        ["img/content/details/19.jpg", "跨步Burpee"],
        ["img/content/details/20.jpg","全身舒展"],
        ["img/content/details/21.jpg","右腿前侧拉伸"],
        ["img/content/details/22.jpg", "左腿前侧拉伸"],
      ]
    },
    created(){
      //this->当前vue
      (async function(self){
        var $lid = location.search.slice(1).split("=")[1];
        var res=await axios.get(
          `http://127.0.0.1:3000/lesson/details?lid=${$lid}`
        );
        self.res=res.data;
        console.log(self.res)
      })(this)
    }
  })
