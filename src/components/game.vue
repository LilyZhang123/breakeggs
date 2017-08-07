<template>
  <div class="index">
    <div class="indexwrap">
      <div class="indexbanner">
        <img class="title-img baoxiang" src="../assets/public/images/act/big-title.png"/>
      </div>
      <div class="indexbanner cd" id="modalToggle">
        <div class="img " v-bind:class="{'egg-bg1':bg1,'egg-bg2':bg2,'egg-bg3':bg3}" @click="breakegg()"></div>
        <div class="tips">
          <img src="../assets/public/images/act/tip.png"></div>
      </div>
      <div class="indexbottom2">
        <a href="#">活动规则</a>
        <a href="gift1.html">我的奖品</a>
      </div>
    </div>
    <!-- 未中奖 -->
    <div class="modal hide" id="prize0">
      <div class="modal-content" >
        <div class="info-icon">
          <img src="../assets/public/images/act/lost_icon.png" alt=""></div>
        <div class="info-content">好可惜，没有中奖哦</div>
        <div class="info-action">
          <a class="modal-close">
            <img src="../assets/public/images/act/btn.png" alt=""></a>
        </div>
      </div>
    </div>
    <div class="modal-backdrop"  v-bind:class="{hide:hideModalFlag}"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag: true,
      bg1:true,
      bg2:false,
      bg3:false,
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
    // console.log(curHeight,winHeight,winWidth);
    if (curHeight<winHeight) {
      cur[0].style.height = winHeight+"px";
    }
  },
  methods:{
    init(){

    },
    breakegg:function(){
      console.log(1);
      setTimeout(function(){
        this.bg1 = false;
        this.bg2 = true;
        setTimeout(function(){
            this.bg2 = false;
            this.bg3 = true;
        },50);
      },50);
    },
    RandomNumBoth:function(){
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range); //四舍五入
      return num;
    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
</style>
