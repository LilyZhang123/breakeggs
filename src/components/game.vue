<template>
  <div class="index">
    <div class="indexwrap">
      <div class="indexbanner">
        <img class="title-img baoxiang" src="../assets/public/images/act/big-title.png"/>
      </div>
      <div class="indexbanner" id="modalToggle">
        <div class="img egg-background">
          <div class="hammer" v-bind:style="{'top':topH,'left':leftH}"><img src="../assets/public/images/act/hammer.png" alt=""></div>
          <div class="eggs-area">
            <div class="left-egg" v-bind:class="{'cracks-egg':crackflag1,'break-egg':breakflag1}" @click="breakegg2($event,1)"></div>
            <div class="center-egg" v-bind:class="{'cracks-egg':crackflag2,'break-egg':breakflag2}" @click="breakegg2($event,2)"></div>
            <div class="right-egg" v-bind:class="{'cracks-egg':crackflag3,'break-egg':breakflag3}" @click="breakegg2($event,3)"></div>
          </div>
        </div>
        <div class="tips">
          <img src="../assets/public/images/act/tip.png"></div>
      </div>
      <div class="indexbottom2">
        <a href="#">活动规则</a>
        <a href="gift1.html">我的奖品</a>
      </div>
    </div>
    <!-- 未中奖 -->
    <div class="modal" v-bind:class="{hide:hideModalFlag0}" id="prize0">
      <div class="modal-content" >
        <div class="info-icon">
          <img :src="tipsUrl" alt=""></div>
        <div class="info-content">{{tipsWord}}</div>
        <div class="info-action">
          <router-link class="modal-close" :to="{path:'/gift'}">
            <img src="../assets/public/images/act/btn.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <!-- 中奖 -->
    <div class="modal" v-bind:class="{hide:hideModalFlag1}" id="prize1">
      <div class="modal-content">
        <div class="info-icon">
          <img :src="tipsUrl" alt="">
        </div>
        <div class="info-content"><p>恭喜你！<em>获得一等奖乐扣水杯！</em></p>
        <p>请截图保存中奖信息页面</p>
        <p>到中国移动云计算大会现场兑奖</p></div>
        <div class="info-action">
          <router-link class="modal-close" :to="{path:'/gift'}">
            <img src="../assets/public/images/act/btn.png" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="modal-backdrop"  v-bind:class="{hide:hideModalFlag}"></div>
  </div>
</template>

<script>

import tipsUrl from "../assets/public/images/act/lost_icon.png";
import tipsUrl2 from "../assets/public/images/act/gift.png";
import centerImgUrl from "../assets/public/images/act/center-egg.png";
import smallImgUrl from "../assets/public/images/act/small-egg.png";
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag0: true,
      hideModalFlag1: true,
      hideModalFlag: true,
      bg1:true,
      bg2:false,
      bg3:false,
      num:'',
      clickFlag:false,
      tipsWord:"好可惜，没有中奖哦",
      tipsUrl:tipsUrl,
      smallImgUrl:smallImgUrl,
      centerImgUrl:centerImgUrl,
      popup:{
        x:"",
        y:""
      },
      topH: '20%',
      leftH: '60%',
      eggTop:'',
      breakflag1:false,
      crackflag1:false,
      breakflag2:false,
      crackflag2:false,
      breakflag3:false,
      crackflag3:false,
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
    if (curHeight<winHeight) {
      cur[0].style.height = winHeight+"px";
    }
    this.eggTop = document.querySelector('#modalToggle').offsetHeight;
  },
  methods:{
    init(){

    },
    breakegg:function(){
      // 点击砸蛋
      var that = this;
      setTimeout(function(){
        that.bg1 = false;
        that.bg2 = true;
        setTimeout(function(){
            that.bg2 = false;
            that.bg3 = true;
            if (that.clickFlag === false) {
              that.RandomNumBoth(0,1);
              that.clickFlag = true;
              that.showModal();
            }
        },500);
      },50);
    },
    breakegg2:function(e,num){
      console.log(e);
      var rect = e.target.getBoundingClientRect();
      this.popup.x = rect.left;
      this.popup.y = rect.top;
      this.topH = this.popup.y - this.eggTop/1.8 +'px';
      this.leftH = this.popup.x + 30 +'px';
      var that = this;
      setTimeout(function(){
        if (num === 1) {
          that.breakflag1 = false;
          that.crackflag1 = true;
        }else if(num ===2){
          that.breakflag2 = false;
          that.crackflag2 = true;
        }else{
          that.breakflag3 = false;
          that.crackflag3 = true;
        }
        
        setTimeout(function(){

          if (num === 1) {
            that.breakflag1 = true;
            that.crackflag1 = false;
          }else if (num === 2) {
            that.breakflag2 = true;
            that.crackflag2 = false;
          }else{
            that.breakflag3 = true;
            that.crackflag3 = false;
          }
            
            if (that.clickFlag === false) {
              setTimeout(function(){
                that.RandomNumBoth(0,1);
                that.clickFlag = true;
                that.showModal();
              },1000)
            }
        },500);
      },500);
    },
    RandomNumBoth:function(Min,Max){
      // 产生随机数
      var Range = Max - Min;
      var Rand = Math.random();
      this.num = Min + Math.round(Rand * Range); //四舍五入
    },
    showModal:function () {
      this.hideModalFlag === true ?this.hideModalFlag = false:this.hideModalFlag = true;
      if (this.num ===1) {
        // 弹框1
        this.hideModalFlag1 = false;
        this.tipsWord = "恭喜你！获得<em>一等奖乐扣水杯</em>！请截图保存中奖信息页面到中国移动云计算大会现场兑奖"
        this.tipsUrl = tipsUrl2
      }else{
        this.hideModalFlag0 = false;
      }
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
</style>
