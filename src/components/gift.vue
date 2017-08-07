<template>
  <div class="index">
    <div class="indexwrap">
    <!-- 未中奖页面 -->
      <div class="nogift" v-bind:class="{'hide':!giftFlag}">
        <div class="indexbanner">
          <img class="title-img baoxiang" src="../assets/public/images/act/gift-title.png"/>
        </div>
        <div class="gift-content bg1">
          <p>没有中奖信息哦，快去砸金蛋吧~</p>
        </div>
        <div class="btn-content">
          <a href="game.html">
            <img src="../assets/public/images/act/2.png"></a>
        </div>
      </div>
      <!-- 未中奖页面 end -->
      <!-- 中奖 -->
      <div class="gift " v-bind:class="{'hide':giftFlag}">
        <div class="indexwrap">
          <div class="indexbanner">
            <img class="title-img baoxiang" src="../assets/public/images/act/gift-title.png"/>
          </div>
          <div class="gift-content bg2">
            <p>
              一等奖： <em>乐扣水杯</em>
            </p>
            <p>兑奖期限：2017年8月23-24日  9点-17点</p>
            <p>兑奖地点：苏州市清山会议中心二楼大云展区（高新区稼先路35号）</p>
            <p>兑奖方式：向工作人员出示此中奖页面领取相应奖品（可截图保存）</p>
          </div>
        </div>
      </div>
      <!-- 中奖 end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'gift',
  data () {
    return {
      giftFlag :false,
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
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import "../assets/public/css/act.css";
</style>
