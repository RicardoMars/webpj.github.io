<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-18 10:17:53
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Customer Case</p>
      <p style="font-size: 30px;">客户案例</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">客户案例</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>客户案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <a href="#/caseOne">
        <div class="imgPlace1"></div>
      </a>
      <!-- <div class="textPlace">
        <p style="padding-left: 100px; padding-right: 100px; font-size: 20pt;">这里是标题 <span style="font-size: 15pt;">This is Title</span></p>
        <p style="padding-left: 100px; padding-right: 100px; font-size: 12pt;">这里是正文正文正文正文正文正文这里是正文正文正文正文正文正文这里是正文正文正文正文正文正文这里是正文正文正文正文正文正文这里是正文正文正文正文正文正文</p>
      </div> -->
    </div>
    <div class="place_1">
      <a href="#/caseTwo">
        <div class="imgPlace2"></div>
      </a>
    </div>
    <div class="place_1">
      <a href="#/caseThird">
        <div class="imgPlace3"></div>
      </a>
    </div>
    <div class="place_1">
      <a href="#/caseFour">
        <div class="imgPlace4"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>

const pageReload = () => {
  setTimeout(() => {
    window.location.reload()
  }, 0)
}

</script>

<style scoped>
.Header{
  padding-top: 7vh;
  width: 100%;
  height: 300px;
  background-image: url('../img/topBackground.jpg');
  position: relative;
}
.content{
  text-align: right;
  position: absolute;
  color: wheat;
  right: 300px;
  top: 120px;
  font-size: 50px;
  line-height: 10px;
}
.divider{
  display: flex;
  width: 100%;
  height: 100px;
  /* background-color: red; */
  justify-content: space-between;
  align-items: center
}
.divider .left_place{
  color: black;
  font-size: 20pt;
  margin-left: 150px;
  
}
.divider .right_place{
  color: black;
  font-size: 13pt;
  margin-right: 150px;
}
#header_divider{
  margin: 0;
}
.bigContent{
  width: 100%;
  height: auto;
  justify-items: center;
}
.bigContent .place_1{
  width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  transition: all 0.5s;
}
.bigContent .place_1:hover{
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.8);
}
.bigContent .place_1 .imgPlace{
  width: 1200px;
  height: 300px;
  background-image: url('../img/case/1.1.png');
  background-size: cover;
}
.bigContent .place_1 .imgPlace1{
  width: 1200px;
  height: 300px;
  background-image: url('../img/case/1.1.png');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace2{
  width: 1200px;
  height: 300px;
  background-image: url('../img/case/2.1.png');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace3{
  width: 1200px;
  height: 300px;
  background-image: url('../img/case/3.1.png');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace4{
  width: 1200px;
  height: 300px;
  background-image: url('../img/case/4.1.png');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .textPlace{
  width: 800px;
  height: 300px;
  background-color: green;
}
</style>
