<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-11-21 17:21:49
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Solutions</p>
      <p style="font-size: 30px;">解决方案</p>
    </div>
  </div>
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
  font-family: HONOR Sans;
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
  margin-bottom: 30px;
  background-color: white;
  border: 1px solid rgba(209, 209, 209, 0.8);
  box-shadow: 15px 15px 15px -6px rgba(116, 116, 116, 0.5);
  font-size: 25px;
  width: 80%;
  min-height: 600px;
}
</style>
