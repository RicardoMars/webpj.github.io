<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-12 17:34:28
-->
<template>
  <el-carousel :interval="9000" indicator-position="inside" height="600px" :pause-on-hover="false">
    <el-carousel-item v-for="(image, item) in images" :key="item">
      <img :src="image" alt="Carousel Image" style="width: 100%; height: 100%; object-fit: cover; filter:brightness(0.8)">
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
  <div class="solutions-divider"></div>
  <div class="info_content_2">
    <div class="elrow2">
      <a href="#" @click="openError">
        <div :class="{col1:true, col1diventer:showdiv}">
          <div class="col_img2"><img src="../img/placeholder.jpg" alt="Image"></div>
          <div class="col_text">
            <h2 style="color: black; font-family: HONOR Sans;">基础设施集成以及运维服务</h2>
            <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
          </div>
        </div>
      </a>
      <a href="#" @click="openError">
        <div :class="{col2:true, col2diventer:showdiv2}">
          <div class="col_img2"><img src="../img/placeholder.jpg" alt="Image"></div>
          <div class="col_text">
            <h2 style="color: black; font-family: HONOR Sans;">信息安全集成与运维</h2>
            <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
          </div>
        </div>
      </a>
      <a href="#" @click="openError">
        <div :class="{col1:true, col1diventer:showdiv3}">
          <div class="col_img2"><img src="../img/placeholder.jpg" alt="Image"></div>
          <div class="col_text">
            <h2 style="color: black; font-family: HONOR Sans;">智能化系统集成及解决方案</h2>
            <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';

const showdiv = ref(false);
const showdiv2 = ref(false);
const showdiv3 = ref(false);

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

const scrollEvent = () => {
  const dis = document.documentElement.scrollTop || document.body.scrollTop
  console.log(dis)
  if (dis > 450) {
    showdiv.value = true;
    setTimeout(() => {
      showdiv2.value = true;
    }, 300);
    setTimeout(() => {
      showdiv3.value = true;
    }, 600)
  }
}

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', scrollEvent);
});

onUnmounted(() => {
  // 移除滚动事件监听
  window.removeEventListener('scroll', scrollEvent);
});


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
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#app > div > div.container > div.main > div.info_main > .elrow .col1{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
}
#app > div > div.container > div.main > div.info_content_2 > .elrow2 .col1{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  transform: translateY(10%);
  opacity: 0;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
}
#app > div > div.container > div.main > div.info_main > div > div.col2{
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
#app > div > div.container > div.main > div.info_content_2 > div > a:nth-child(2) > div{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
  margin-left: 30px;
  margin-right: 30px;
  transform: translateY(10%);
  opacity: 0;
}
.info_main{
  align-items: center;
  height: 500px;
}
.info_content_2{
  height: 600px;
  background-color: rgb(235, 235, 235);
}
.info_content_2 .elrow2{
  display: flex;
  min-width: 80%;
  justify-content: center;
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
.col_img2{
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col_img2 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter:brightness(0.6)
}
.col_text{
  min-height: 210px;
  width: auto;
  padding: 30px;
}
.aboutus-divider{
  background-image: url(../img/divider/aboutus-divider.png);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
}
.solutions-divider{
  background-image: url(../img/divider/Solutions-divider.png);
  background-color: rgb(235, 235, 235);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
}
.test{
  background-color: red;
  height: 500px;
  width: 300px;
}
.col1diventer{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  transform: translateY(0%) !important;
  opacity: 1!important;
  transition: all .5s ease;
}
.col2diventer{
  max-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
  margin-left: 30px;
  margin-right: 30px;
  transform: translateY(0%) !important;
  opacity: 1!important;
  transition: all .5s ease;
}
</style>
