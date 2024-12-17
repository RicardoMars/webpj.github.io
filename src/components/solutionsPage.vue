<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-17 17:21:47
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Solutions</p>
      <p style="font-size: 30px;">解决方案</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">解决方案</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>解决方案</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent" v-for="item in items">
      <p>{{ item.title }}</p>
      <p>{{ item.content }}</p>
      <img :src="item.img" alt="img" width="70%">
    </div>
  </div>
</template>

<script lang="ts" setup>

const items = [
  {
    title: '基础设施集成及运维服务',
    content: '这里是文字文字文字介绍',
    img: new URL('../img/solution/baseservice.png', import.meta.url).href
  },
  {
    title: '信息安全集成及运维',
    content: '这里是文字文字文字介绍',
    img: new URL('../img/solution/safeservice.png', import.meta.url).href
  },
  {
    title: '智能化系统集成及解决方案',
    content: '这里是文字文字文字介绍',
    img: new URL('../img/solution/smartservice.jpg', import.meta.url).href
  }
]

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
.bigContent{
  background-color: white;
  width: 100%;
  height: auto;
  justify-items: center;
  padding-top: 30px;
}
.intoContent{
  color: black;
  margin-top: 30px;
  background-color: white;
  border: 1px solid rgba(209, 209, 209, 0.8);
  box-shadow: 15px 15px 15px -6px rgba(116, 116, 116, 0.5);
  font-size: 25pt;
  width: 80%;
  min-height: 600px;
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
</style>
