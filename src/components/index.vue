<template>
  <div class="index" ref="">
    <div class="indexwrap">
      <div class="indexbanner">
        <img class="baoxiang" src="../assets/public/images/act/big-title.png"/>
      </div>
      <div class="indexbanner cd animate f-ann">
        <div class="img">
          <img class="" src="../assets/public/images/act/center-img1.png"/>
        </div>
      </div>
      <div class="btn-content" id="modal-toggle" @click="hideModalFlag==true?hideModalFlag=false:hideModalFlag=false">
        <img src="../assets/public/images/act/btn1.png"></a>
    </div>
    <div class="indexbottom2">
      <a href="#">活动规则</a>
      <a href="gift1.html">我的奖品</a>
    </div>
  </div>

  <div class="modal" v-bind:class="{hide:hideModalFlag}">
    <div class="modal-content">
      <div class="info-icon">
        <img src="../assets/public/images/act/tick.png" alt=""></div>
      <div class="info-content">问卷已经提交!快去砸蛋吧~</div>
      <div class="info-action">
        <router-link class="modal-close"  :to="{path:'/game'}">
          <img src="../assets/public/images/act/confirm_btn.png" alt=""></router-link>
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
  },
  methods:{
    init(){

    },
    toggleModal(){

    }
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
</style>
