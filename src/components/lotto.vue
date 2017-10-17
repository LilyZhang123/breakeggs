<template>
  <div class="indexwrap">
    <div class="wrap">
      <div class="wrapcont">
        <div class="cont2">
          <p>
            <img src="../assets/public/images/lotto/icon2.png" />
            <span>
              您有 <em>X</em>
              次抽奖机会
            </span>
          </p>
          <div class="choujbg">
            <ul class="chouj">
              <div class="mb clearfix">
                <li class="mr">
                  <img src="../assets/public/images/lotto/cj11.png">
                  <div id="d1"  class="tm" style="border-top-left-radius: 8px;"></div>
                </li>
                <li class="mr">
                  <img src="../assets/public/images/lotto/cj22.png">
                  <div id="d2"  class="tm"></div>
                </li>
                <li>
                  <img src="../assets/public/images/lotto/cj33.png">
                  <div id="d3" class="tm" style="border-top-right-radius: 8px;"></div>
                </li>
              </div>

              <div class="mb clearfix">
                <li class="mr">
                  <img src="../assets/public/images/lotto/cj44.png">
                  <div id="d8"  class="tm"></div>
                </li>
                <li class="mr" id="cj_button">
                  <img id="cjbut" src="../assets/public/images/lotto/cj9.png"></li>
                <!-- 抽奖中按钮-->
                <li class="mr" style="display: none;">
                  <img id="cjbut" src="../assets/public/images/lotto/cj9_2.png"></li>
                <!-- 抽奖结束按钮-->
                <li class="mr" style="display: none;">
                  <img id="cjbut" src="../assets/public/images/lotto/cj9_3.png"></li>
                <li>
                  <img src="../assets/public/images/lotto/cj55.png">
                  <div id="d4"  class="tm"></div>
                </li>
              </div>

              <div class="clearfix">
                <li class="mr">
                  <img src="../assets/public/images/lotto/cj66.png">
                  <div id="d7"  class="tm" style="border-bottom-left-radius: 8px;"></div>
                </li>
                <li class="mr">
                  <img src="../assets/public/images/lotto/cj77.png">
                  <div id="d6"  class="tm"></div>
                </li>
                <li>
                  <img src="../assets/public/images/lotto/cj88.png">
                  <div id="d5"  class="tm" style="border-bottom-right-radius: 8px;"></div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      hideModalFlag0: true,
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
    choujiang(){
      for(var i=1;i<9;i++){
        $('#d'+i).show();
      }
      start++;
      count++;
      stopid= Math.floor(Math.random() * 8);;
      if(start > 8){
        start = start - 8;
      }
      $('#d'+start).hide();
      if(count >= over){
        if(start == stopid){
          count = 0;
          speed = 200;
          over = $('#over').val();
          setTimeout(function() {
            if('<{$stop}>' == 8){
              showdemo($("#liu100"));
            }else{
              showdemo($("#liu100"));
            }
            $("#choujiang").val('1');
          },1000); 
          return false;
        }
      }
      if(count < 8){speed -= 20;}
      if(count > 24){speed += 20;}
      if(start==8){start=0;}
      setTimeout(function() {
      choujiang()
      },speed); 
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
