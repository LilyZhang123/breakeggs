<template>
  <div class="index">
       <canvas id="countDown"  style="display:block;margin:0 auto;border:1px solid #ccc;" ></canvas> 
  </div>
</template>

<script>
import Data  from "../assets/public/json/digit.js";
import smallImgUrl from "../assets/public/images/act/small-egg.png";
export default {
  name: 'DrawMoon',
  data () {
    return {
      // hideModalFlag: true,
      context:''
    }
  },
  mounted:function (){
    var dom = document.getElementById('countDown');
    dom.height=800;
    dom.width=800;
    this.context = dom.getContext("2d");
    console.log("moon");
    this.drawStar(this.context);
  },
  methods:{
    drawStar(context){ 
      context.fillStyle = "rgb(255,230,0)";
      context.arc(400,400,300,Math.PI/2,3*Math.PI/2,true);
      context.moveTo(400,100);
      context.arcTo(1200,400,400,700,(400-100)*this.dis(400,100,1200,400)/(1200-400));
      context.fill();
      // context.stroke();
    },  
    dis(x1,y1,x2,y2){
         return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
    }  
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
