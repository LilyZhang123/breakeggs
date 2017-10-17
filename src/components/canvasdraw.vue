<template>
  <div class="index">
       <canvas id="countDown"  style="display:block;margin:0 auto;border:1px solid #ccc;" ></canvas> 
  </div>
</template>

<script>
import Data  from "../assets/public/json/digit.js";
import smallImgUrl from "../assets/public/images/act/small-egg.png";
export default {
  name: 'canvasdraw',
  data () {
    return {
      hideModalFlag: true,
    }
  },
  mounted:function (){
    var dom = document.getElementById('countDown');
    dom.height=800;
    dom.width=800;
    this.context = dom.getContext("2d");
    var backgroudImage = new Image();
    backgroudImage.src = smallImgUrl;

    var bgImg = this.context.createPattern(backgroudImage,"no-repeat");
    this.context.fillStyle=bgImg;
    this.context.fillRect(0,0,dom.width,dom.height);

    // 绘制 背景 线性渐变
    // var lineGrad = this.context.createLinearGradient(0,0,0,800);
    // lineGrad.addColorStop(0.0,"#000");
    // lineGrad.addColorStop(1.0,"#035");
    // 径向渐变
    // var lineGrad = this.context.createRadialGradient(dom.width/2,dom.height,0,dom.width/2,dom.height,dom.height);
    // lineGrad.addColorStop(1.0,'#000');
    // lineGrad.addColorStop(0.0,'#035');
    // this.context.fillStyle=lineGrad;
    // this.context.fillRect(0,0,dom.width,dom.height);

    for (var i = 0; i < 200; i++) {
      var R = Math.random()*5+5;
      var x = Math.random()*dom.width;
      var y = Math.random()*dom.height*0.65;
      var a = Math.random()*360;
      this.drawStar1(this.context,x,y,R,a);
    }
    
  },
  methods:{
    drawLine(context){
      context.lineWidth = 30;

      context.beginPath()
      context.moveTo(100,100);
      context.lineTo(400,400);
      context.strokeStyle="#f30";
      context.lineCap="butt";
      context.stroke();

      context.beginPath();
      context.moveTo(200,100);
      context.lineTo(500,400);
      context.lineCap="round";
      context.strokeStyle="#f30";
      context.stroke();

      context.beginPath();
      context.moveTo(300,100);
      context.lineTo(600,400);
      context.strokeStyle="#f30";
      context.lineCap="square";
      context.stroke();

      context.beginPath();
      context.lineWidth = 1;
      context.moveTo(0,100);
      context.lineTo(800,100);
      context.strokeStyle="#f30";
      context.lineCap="square";
      context.stroke();

      context.beginPath();
      context.lineWidth = 1;
      context.moveTo(0,400);
      context.lineTo(800,400);
      context.strokeStyle="#f30";
      context.lineCap="square";
      context.stroke();


    },
    drawStar(context,x,y,outerR,innerR,rot){
      context.beginPath();

      for (var i = 0; i < 5; i++) {
        context.lineTo(Math.cos((18+i*72-rot)/180*Math.PI)*outerR+x,-Math.sin((18+i*72-rot)/180*Math.PI)*outerR+y);
        context.lineTo(Math.cos((54+i*72-rot)/180*Math.PI)*innerR+x,-Math.sin((54+i*72-rot)/180*Math.PI)*innerR+y);
      }
      context.strokeStyle = "rgba(255,230,0,0.5)";
      context.lineWidth="2";
      context.fillStyle = 'rgb(255,230,0)';

      context.closePath();
      context.stroke();
      context.fill();

    },
    drawStar1(context,x,y,outerR,rot){
      context.save();
      context.translate(x,y);

      context.rotate(rot/180*Math.PI);
      context.scale(outerR,outerR);
      // context.transform(outerR,rot/180*Math.PI,0,outerR,x,y)


      this.starPath(context);

      context.fillStyle = 'rgb(255,230,0)';
      // context.strokeStyle = 'rgb(255,230,0)';
      context.lineWidth = 3;
      context.lineJoin = 3;
      // context.stroke();
      context.fill();
      // context.setTransform(1,0,0,1,0,0)
      context.restore();
    },
    starPath(context){
      context.beginPath();

      for (var i = 0; i < 5; i++) {
        context.lineTo(Math.cos((18 + i * 72) / 180 * Math.PI) ,
                      -Math.sin((18 + i * 72) / 180 * Math.PI) );
        context.lineTo(Math.cos((54 + i * 72) / 180*Math.PI) * 0.6 ,
                      -Math.sin((54 + i * 72) / 180*Math.PI) * 0.6 );
      }
      context.closePath();
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
