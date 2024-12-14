<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-14 19:30:57
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Ecosystem Partners</p>
      <p style="font-size: 30px;">生态合作伙伴</p>
    </div>
  </div>
  <div class="beforeContent">
    <div class="bigContent">
      <div class="contentTitle">合作伙伴</div>
      <div class="partPage" v-for="item in items2">
        <img :src="item.logo" style="width: 150px;">
      </div>
    </div>
    <el-divider></el-divider>
    <div class="customer">
      <div class="contentTitle">重点客户 + 产业合作伙伴</div>
      <div class="customer_in" v-for="item in images">
        <div class="left_logo">
          <img :src="item.src" style="width: 120px;">
          <p>{{ item.title }}</p>
        </div>
        <div class="right_content">
          <div class="inside_content" v-for="item in images1"><img :src="item.logo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const images1 = [
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.png', import.meta.url).href,
  }
]

const images = [
  {
    title: '政府公共事业',
    src: new URL('../img/customer/gov.svg', import.meta.url).href,
  }
]
const items2 = [] as any[]

const files = import.meta.glob('../img/partners/*')
for (const path in files) {
  console.log(path);
  items2.push({
    logo: new URL(path, import.meta.url).href
  })
}
console.log(items2);



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
.beforeContent{
  width: 100%;
  height: auto;
  justify-items: center;
}
.bigContent{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  min-width: 800px;
  height: auto;
  justify-items: center;
  padding-top: 30px;
  flex-wrap: wrap;
}
.partPage{
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(173, 197, 218);
  width: 170px;
  height: 70px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.contentTitle{
  color: black;
  width: 100%;
  font-family: HONOR Sans;
  font-size: 20pt;
  margin-bottom: 10px;
}
.customer{
  width: 100%;
  justify-items: center;
}
.customer_in{
  width: 1300px;
  height: 200px;
  background-color: blue;
  position: relative;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
}
.left_logo{
  position: absolute;
  width: 200px;
  height: 100%;
  background-color: #2095E4;
  align-content: center;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
}
.left_logo p{
  font-family: HONOR Sans;
  font-size: 15pt;
  color: white;
  line-height: 0;
}
.right_content{
  display: flex;
  justify-content: center;
  float: right;
  width: 1100px;
  height: 100%;
  background-color: #eff4ff;
  flex-wrap: wrap;
}
.inside_content{
  margin-top: 20px;
}
.inside_content img{
  width: 200px;
  margin-right: 15px;
}
</style>
