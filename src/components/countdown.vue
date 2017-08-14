<template>
  <div class="index">
       <canvas id="countDown" height="800" width="1024"  style="display:block;margin:0 auto;border:1px solid #ccc;" ></canvas> 
  </div>
</template>

<script>
import Data  from "../assets/public/json/digit.js";
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag: true,
      ctx:'',
      r:'',
      width:'',
      height:'',
      digit:Data.getDigit(),
      RADIUS:6,
      MARGIN_TOP:60,
      MARGIN_LEFT:30,
      endTime: new Date(2017,7,15,17,30,55),
      ret:0,
      curShowTimeSeconds:0,
      nextShowTimeSeconds:0
    }
  },
  mounted:function (){
    var dom = document.getElementById('countDown');
    this.ctx = dom.getContext("2d");
    this.renderData(this.ctx);
    var that = this
    setInterval(function(){
      that.renderData(that.ctx);
      that.update();
    },50);
  },
  methods:{
    renderData(ctx){

      ctx.clearRect(0,0,1024,1024);
      this.getCurrentShowTimeSeconds();
      this.curShowTimeSeconds = this.ret;
      var hours = parseInt(this.curShowTimeSeconds/3600);
      var minutes = parseInt((this.curShowTimeSeconds - hours*3600)/60);
      var seconds = this.curShowTimeSeconds%60;

      this.renderDigit (this.MARGIN_LEFT,this.MARGIN_TOP,parseInt(hours/10),ctx);
      this.renderDigit (this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(hours%10),ctx);
      this.renderDigit (this.MARGIN_LEFT+30*(this.RADIUS+1),this.MARGIN_TOP,10,ctx);
      this.renderDigit (this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(minutes/10),ctx);
      this.renderDigit (this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(minutes%10),ctx);
      this.renderDigit (this.MARGIN_LEFT+69*(this.RADIUS+1),this.MARGIN_TOP,10,ctx);
      this.renderDigit (this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(seconds/10),ctx);
      this.renderDigit (this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(seconds%10),ctx);
    },
    renderDigit(x,y,num,ctx){
      //绘制数字
      ctx.fillStyle = 'rgb(0,102,152)';
      for (var i = 0; i < this.digit[num].length; i++) {
        for (var j = 0; j < this.digit[num][i].length; j++) {
          if(this.digit[num][i][j] ===1){
            ctx.beginPath();
            ctx.arc(x+2*(this.RADIUS+1)*j+(this.RADIUS+1),y+2*(this.RADIUS+1)*i+(this.RADIUS+1),this.RADIUS,0,2*Math.PI);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    },
    getCurrentShowTimeSeconds(){
      var curTime = new Date();//获取当前时间
      this.ret = this.endTime.getTime() - curTime.getTime();//获取倒计时毫秒数
      this.ret = Math.round(this.ret/1000)//转换成秒数
      this.ret > 0 ? this.ret : 0;  
    },
    update(){
      this.getCurrentShowTimeSeconds();
      this.nextShowTimeSeconds = this.ret;
      var nextHours = parseInt(this.nextShowTimeSeconds/3600);
      var nextMinutes = parseInt((this.nextShowTimeSeconds - nextHours*3600)/60);
      var nextSeconds = this.nextShowTimeSeconds%60;

      var curHours = parseInt(this.curShowTimeSeconds/3600);
      var curMinutes = parseInt((this.curShowTimeSeconds - curHours*3600)/60);
      var curSeconds = this.curShowTimeSeconds%60;

      if(curSeconds != nextSeconds){
        this.curShowTimeSeconds = this.nextShowTimeSeconds;
      }


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
