// '/lesson/list?family_id='+p.family_id
  new Vue({
    el:"#app_lesson",
    data:{
      res:[]
    },
    created(){
      //this->当前vue
      (async function(self){
        var $family_id = location.search.slice(1).split("=")[1];
        var res=await axios.get(
          `http://127.0.0.1:3000/lesson/list?family_id=${$family_id}`
        );
        self.res=res.data;
      })(this)
    },
    methods:{
      li_click:function(lid){
        location.href=`lesson_details.html?lid=${lid}`
      }
    }
  })
