<template>
  <div class="index">
    <div class="indexwrap">
      <div class="indexbanner">
        <img class="title-img baoxiang" src="../assets/public/images/act/big-title.png"/>
      </div>
      <div class="indexbanner cd" id="modalToggle">
        <div class="img " v-bind:class="{'egg-bg1':bg1,'egg-bg2':bg2,'egg-bg3':bg3}" @click="breakegg"></div>
        <div class="tips">
          <img src="../assets/public/images/act/tip.png"></div>
      </div>
      <div class="indexbottom2">
        <a href="#">活动规则</a>
        <a href="gift1.html">我的奖品</a>
      </div>
    </div>
    <!-- 未中奖 -->
    <div class="modal" v-bind:class="{hide:hideModalFlag}" id="prize0">
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
    <div class="modal-backdrop"  v-bind:class="{hide:hideModalFlag}"></div>
  </div>
</template>

<script>

import tipsUrl from "../assets/public/images/act/lost_icon.png";
import tipsUrl2 from "../assets/public/images/act/gift.png";
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag: true,
      bg1:true,
      bg2:false,
      bg3:false,
      num:'',
      clickFlag:false,
      tipsWord:"好可惜，没有中奖哦",
      tipsUrl:tipsUrl,
      // tipsUrl:"../assets/public/images/act/lost_icon.png",
      // tipsUrl:"../static/img/lost_icon.png",
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
        this.tipsWord = "恭喜你！获得<em>一等奖乐扣水杯</em>！请截图保存中奖信息页面到中国移动云计算大会现场兑奖"
        this.tipsUrl = tipsUrl2
      }
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
</style>
