<template>
  <div class="index" ref="">
    <div class="indexwrap">
       <canvas id="circle" height="200" width="200"  ></canvas> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag: true,
      ctx:'',
      r:'',
      width:'',
      height:'',
    }
  },
  mounted:function (){
    let cur = document.querySelectorAll("div[class='indexwrap']");
    let curHeight = cur[0].offsetHeight;
    let winHeight,winWidth;
    //获取窗口高度
    if (window.innerHeight){
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
    }else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
    console.log(curHeight,winHeight,winWidth);
    if (curHeight<winHeight) {
      cur[0].style.height = winHeight+"px";
    }
    
    var dom = document.getElementById('circle');
    this.ctx = dom.getContext("2d");
    this.width = this.ctx.canvas.width;
    this.height = this.ctx.canvas.height;
    this.r = this.width/2;
    var that = this;
    that.draw();
    setInterval(function function_name(argument) {
      that.draw();
    },1000)
  },
  methods:{
    init(){

    },
    drawBackground(r){
      this.ctx.save()
      this.ctx.translate(r,r);
      this.ctx.beginPath();
      this.ctx.lineWidth = 10;
      this.ctx.arc(0,0,r-5,0,2*Math.PI,false);
      this.ctx.stroke();
      this.ctx.font = '18px Arial';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      var that = this;

      var hourNumber = [3,4,5,6,7,8,9,10,11,12,1,2],x,y,rad;
      hourNumber.forEach(function(number,i){
          rad = 2*Math.PI/12*i;
          x = Math.cos(rad)*(r-30);
          y = Math.sin(rad)*(r-30);
          that.ctx.fillText(number,x,y);
      });
      var px,py,prad;
      for (var i = 0; i < 60; i++) {
        prad = 2*Math.PI/60*i;
        px = Math.cos(prad)*(r-18); 
        py = Math.sin(prad)*(r-18); 
        that.ctx.beginPath();
        if (i%5===0) {
          that.ctx.fillStyle ="#000";
          that.ctx.arc(px,py,2,0,2*Math.PI,false);
        }else{
          that.ctx.fillStyle ="#ccc";
          that.ctx.arc(px,py,2,0,2*Math.PI,false);
        }
        that.ctx.fill();
      }
    },
    drawHour(hour,minute){
      this.ctx.save();
      this.ctx.beginPath();

      var rad = 2*Math.PI/12*hour;
      var mRad = 2*Math.PI/12/60*minute;
      this.ctx.rotate(rad+mRad);

      this.ctx.moveTo(0,10);
      this.ctx.lineWidth=6;
      this.ctx.lineCap="round";
      this.ctx.lineTo(0,-this.r/2);
      this.ctx.stroke();
      this.ctx.restore();
    },
    drawMinute(minute){
      this.ctx.save();
      this.ctx.beginPath();

      var rad = 2*Math.PI/60*minute;
      this.ctx.rotate(rad);

      this.ctx.moveTo(0,10);
      this.ctx.lineWidth=3;
      this.ctx.lineCap="round";
      this.ctx.lineTo(0,-this.r+40);
      this.ctx.stroke();
      this.ctx.restore();
    },
    drawSecond(second){
      this.ctx.save();
      this.ctx.beginPath();

      var rad = 2*Math.PI/60*second;
      this.ctx.rotate(rad);
      this.ctx.fillStyle = "#f30";
       
      this.ctx.moveTo(-2,20);
      
      this.ctx.lineTo(2,20);
      this.ctx.lineTo(1,-this.r+18);
      this.ctx.lineTo(-1,-this.r+18);
      this.ctx.fill();
      this.ctx.restore();
    },
    draw(){
      this.ctx.clearRect(0,0,this.width,this.height);
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      
      this.drawBackground(this.r);
      this.drawHour(hour,minute);
      this.drawMinute(minute);
      this.drawSecond(second);
      this.ctx.restore();
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
