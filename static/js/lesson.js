  new Vue({
    el:"#app",
    data:{
      res:[]
    },
    created(){
      //this->当前vue
      (async function(self){
        var res=await axios.get(
          "http://127.0.0.1:3000/lesson/"
        );
        self.res=res.data;
      })(this)
    }
  })
