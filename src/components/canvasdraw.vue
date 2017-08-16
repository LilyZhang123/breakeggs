<template>
  <div class="index">
       <canvas id="countDown" height="400" width="1024"  style="display:block;margin:0 auto;border:1px solid #ccc;" ></canvas> 
  </div>
</template>

<script>
import Data  from "../assets/public/json/digit.js";
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag: true,
    }
  },
  mounted:function (){
    var dom = document.getElementById('countDown');
    this.context = dom.getContext("2d");
    this.renderData(this.context);
  },
  methods:{
    renderData(context){
      
    },
    
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
   #circle{
    border:1px solid #ccc;
   }
</style>
