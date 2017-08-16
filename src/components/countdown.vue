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
      ctx:'',
      r:'',
      width:'',
      height:'',
      digit:Data.getDigit(),
      RADIUS:6,
      MARGIN_TOP:60,
      MARGIN_LEFT:30,
      endTime: new Date(2017,7,16,17,30,55),
      curShowTimeSeconds:0,
      nextShowTimeSeconds:0,
      colors:["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"],
      balls:[],
    }
  },
  mounted:function (){
    var dom = document.getElementById('countDown');
    this.ctx = dom.getContext("2d");
    this.renderData(this.ctx);
    var that = this;
    this.curShowTimeSeconds = this.getCurrentShowTimeSeconds();
    setInterval(function(){
      that.renderData(that.ctx);
      that.update();
    },50);
  },
  methods:{
    renderData(ctx){
      ctx.clearRect(0,0,1024,1024);
      
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

      for (var i = 0; i < this.balls.length; i++) {
        ctx.fillStyle = this.balls[i].color;
        ctx.beginPath();
        ctx.arc(this.balls[i].x,this.balls[i].y,this.RADIUS,0,2*Math.PI,false);
        ctx.closePath();
        ctx.fill();
      }
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
      var ret = this.endTime.getTime() - curTime.getTime();//获取倒计时毫秒数
      ret = Math.round(ret/1000)//转换成秒数
      ret > 0 ? ret : 0;  
      return ret;
    },
    update(){
      this.nextShowTimeSeconds = this.getCurrentShowTimeSeconds();
      var nextHours = parseInt(this.nextShowTimeSeconds/3600);
      var nextMinutes = parseInt((this.nextShowTimeSeconds - nextHours*3600)/60);
      var nextSeconds = this.nextShowTimeSeconds%60;

      var curHours = parseInt(this.curShowTimeSeconds/3600);
      var curMinutes = parseInt((this.curShowTimeSeconds - curHours*3600)/60);
      var curSeconds = this.curShowTimeSeconds%60;

      if(curSeconds != nextSeconds){
        this.curShowTimeSeconds = this.nextShowTimeSeconds;
      }

      if(parseInt(curHours/10) != parseInt(nextHours/10) ){
        this.addBalls(this.MARGIN_LEFT,this.MARGIN_TOP,parseInt(curHours/10));
        console.log(1)
      }
      if(parseInt(curHours%10) != parseInt(nextHours%10)){
        this.addBalls(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curHours%10));
        console.log(2)
      }
      if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
        this.addBalls(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curMinutes/10));
        console.log(3)
      }
      if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
        this.addBalls(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curMinutes%10));
        console.log(4)
      }
      if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
        this.addBalls(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curSeconds/10) );
        console.log(5)
      }
      if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
        this.addBalls(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(curSeconds%10) );
        console.log(6)
      }

      this.updateBalls();
    },
    addBalls(x,y,num){
      for (var i = 0; i < this.digit[num].length; i++) {
        for (var j = 0; j < this.digit[num][i].length; j++) {
          if(this.digit[num][i][j] ===1){
            var aball = {
              x: x + 2*j*(this.RADIUS+1)+(this.RADIUS+1),
              y: y + 2*i*(this.RADIUS+1)+(this.RADIUS+1),
              g:1.5+Math.random(),
              vx:Math.pow(-1,Math.ceil(Math.random()*1000))*4,
              vy:-5,
              color:this.colors[Math.floor(Math.random()*this.colors.length)]
            }
            this.balls.push(aball);
          }
        }
      }
    },
    updateBalls(){
     for (var i = 0; i < this.balls.length; i++) {
       this.balls[i].x += this.balls[i].vx;
       this.balls[i].y += this.balls[i].vy;
       this.balls[i].vy += this.balls[i].g;

       if(this.balls[i].y >= (800-this.RADIUS)){
        this.balls[i].y = 800-this.RADIUS;
        this.balls[i].vy = -this.balls[i].vy*0.75;
       }
     }

    var cnt = 0
    for( var i = 0 ; i < this.balls.length ; i ++ )
        if( this.balls[i].x + this.RADIUS > 0 && this.balls[i].x -this.RADIUS < 1024 )
            this.balls[cnt++] = this.balls[i]

    while( this.balls.length > cnt ){
        this.balls.pop();
    }
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
