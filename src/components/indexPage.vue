<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-11 17:35:46
-->
<template>
  <el-carousel :interval="9000" indicator-position="inside" height="600px" :pause-on-hover="false">
    <el-carousel-item v-for="(image, item) in images" :key="item">
      <img :src="image" alt="Carousel Image" style="width: 100%; height: 100%; object-fit: cover; filter:brightness(0.8)">
      <span>测试测试测试</span>
    </el-carousel-item>
  </el-carousel>
  <div class="aboutus-divider"></div>
  <div class="info_main">
    <div class="elrow">
      <div class="col1">
        <div class="col_img"><a href="#" @click="openError"><img src="../img/page1-introduce.png" alt="Image" style="width: 80%; height: 80%; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">公司介绍</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
        </div>
      </div>
      <div class="col2">
        <div class="col_img"><a href="#" @click="openError"><img src="../img/page1-license.png" alt="Image" style="width: 80%; height: 80%; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">企业资质</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
        </div>
      </div>
      <div class="col1">
        <div class="col_img"><a href="#" @click="openError"><img src="../img/page1-weget.png" alt="Image" style="width: 80%; height: 80%; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">企业荣誉</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
        </div>
      </div>
    </div>
  </div>
  <div class="info_content_2"></div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 定义响应式的数据
const images = [
  new URL('../img/Background1.jpg', import.meta.url).href,
  new URL('../img/Background2.jpg', import.meta.url).href,
  new URL('../img/Background3.jpg', import.meta.url).href,
  new URL('../img/Background4.jpg', import.meta.url).href
];

const openError = (event: MouseEvent) => {
  // 使用 Element Plus 的 Message 组件显示错误信息
  event.preventDefault();
  ElMessage.error('噢，你点击的地方还没有开发完成呢！')
}
</script>


<style scoped>
.el-carousel{
  position: relative;
  z-index: 0;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
/* .el-carousel__item{
  position: relative;
}
.el-carousel__item > img{
  position: absolute;
} */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.col1{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
}
.col2{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
  border-left: 1px solid #afafaf;
  border-right: 1px solid #afafaf;
  margin-left: 30px;
  margin-right: 30px;
}
.info_main{
  align-items: center;
}
.info_content_2{
  height: 600px;
  background-color: rgb(235, 235, 235);
}
.elrow{
  display: flex;
  min-width: 80%;
  margin-top: 30px;
  justify-content: center;
}
.col_img{
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col_text{
  min-height: 190px;
  width: auto;
  padding: 30px;
}
.aboutus-divider{
  background-image: url(../img/divider/aboutus-divider.png);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
}
</style>
