<template>
      <div class="wrapcont">
        <div class="cont2">
          <div class="choujbg">
            <ul class="chouj">
              <li class="mr" v-for="(item,index) in list" v-if="index != 4">
                <img :src="item.url" >
                <div class="tm" v-bind:style="{display:item.displayStyle}">{{index}}</div>
              </li>
              <li v-else>
                <img  :src="btn" @click="choujiang" >
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>


import img1 from "../assets/public/images/lotto/cj11.png";
import img2 from "../assets/public/images/lotto/cj22.png";
import img3 from "../assets/public/images/lotto/cj33.png";
import img4 from "../assets/public/images/lotto/cj44.png";
import img5 from "../assets/public/images/lotto/cj55.png";
import img6 from "../assets/public/images/lotto/cj66.png";
import img7 from "../assets/public/images/lotto/cj77.png";
import img8 from "../assets/public/images/lotto/cj88.png";
import btn from "../assets/public/images/lotto/cj9.png";
import btn1 from "../assets/public/images/lotto/cj9_2.png";
import btn2 from "../assets/public/images/lotto/cj9_3.png";

var defaultArr = [{
        url:img8,
        id:0,
        displayStyle:"block"
      },{
        url:img1,
        id:1,
        displayStyle:"block"
      },{
        url:img2,
        id:2,
        displayStyle:"block"
      },{
        url:img3,
        id:3,
        displayStyle:"block"
      },{
        url:img4,
        id:4
      },{
        url:img4,
        id:5,
        displayStyle:"block"
      },{
        url:img5,
        id:6,
        displayStyle:"block"
      },{
        url:img6,
        id:7,
        displayStyle:"block"
      },{
        url:img7,
        id:8,
        displayStyle:"block"
      }
      ];
export default {
  name: 'lotto',
  data () {
    return {
      start:0,
      count:0,
      speed:200,
    }
  },
  props:{
    list:{
      type:Array,
      default:function () {
        return defaultArr
      }
    },
    btn:{
      type:String,
      default:function () {
        return btn
      }
    },
    over:{
      type:Number,
      default:function () {
        return 20
      }
    }
  },
  mounted:function (){
  },
  methods:{
    init(){

    },
    choujiang(){
      for(var i=0;i<9;i++){
        this.list[i].displayStyle = "block";
      }
      this.btn = btn1;
      
      this.count++;
      var stopid= Math.floor(Math.random() * 8);;
      
  
      this.list[this.start].displayStyle = "none";

      if (this.start == 2) {
         this.start = 5
      }else if (this.start == 5) {
         this.start = 8
      }else if (this.start == 6) {
         this.start = 3
      }else if (this.start == 3) {
         this.start = 0
      }else if (this.start == 8|| this.start == 7) {
         this.start --
      }else if (this.start == 0|| this.start == 1) {
         this.start ++
      }
      if(this.count >= this.over){
        if(this.start == stopid){
          this.count = 0;
          this.speed = 200;
          // this.over = $('#over').val();
          // setTimeout(function() {
          //   if('<{$stop}>' == 8){
          //     showdemo($("#liu100"));
          //   }else{
          //     showdemo($("#liu100"));
          //   }
          //   $("#choujiang").val('1');
          // },1000); 
          this.btn = btn2
          return false;
        }
      }
      if(this.count < 8){this.speed -= 20;}
      if(this.count > 24){this.speed += 20;}
      // if(this.start==8){this.start=0;}
      var that = this;
      setTimeout(function() {
      that.choujiang()
      },that.speed); 
    }
    
  }
}
</script>

<style scoped>
   @import "../assets/public/css/lotto.css";
   body{
    background: #fff;
   }
</style>