<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-11-22 11:30:48
-->
<template>
  <el-carousel :interval="9000" indicator-position="inside" height="800px" :pause-on-hover="false">
    <el-carousel-item v-for="(image, item) in images" :key="item">
      <img :src="image" alt="Carousel Image" style="width: 100%; height: 100%; object-fit: cover;">
    </el-carousel-item>
  </el-carousel>
  <div class="info_main">
    <div class="elrow">
      <div class="col1">
        <div class="col_img"><img src="../img/bg1.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
      <div class="col2">
        <div class="col_img"><img src="../img/bg2.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
    </div>
    <div class="elrow">
      <div class="col3">
        <div class="col_img"><img src="../img/bg3.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
      <div class="col4">
        <div class="col_img"><img src="../img/bg4.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
      <div class="col4">
        <div class="col_img"><img src="../img/bg5.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
    </div>
    <div class="elrow">
      <div class="col2-1">
        <div class="col_img"><img src="../img/bg1.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
      <div class="col1-1">
        <div class="col_img"><img src="../img/bg2.png" alt="Image" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div class="col_text">
          <h2 style="color: black; font-family: HONOR Sans;">这里是标题标题标题标题</h2>
          <span style="color: black; font-family: HONOR Sans">这里是正文正文正文正文</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
      return {
        images: [
          new URL('../img/Background1.jpg', import.meta.url).href,
          new URL('../img/Background2.jpg', import.meta.url).href,
          new URL('../img/Background3.jpg', import.meta.url).href,
          new URL('../img/Background4.jpg', import.meta.url).href
        ]
      }
  }
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.col1{
  max-width: 800px;
  height: 550px;
  background-color: white !important;
  flex: 1;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col1-1{
  max-width: 800px;
  height: 550px;
  background-color: white !important;
  flex: 1;
  margin-left: 30px;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col2{
  max-width: 400px;
  height: 550px;
  margin-left: 30px;
  background-color: white !important;
  flex: 1;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col2-1{
  max-width: 400px;
  height: 550px;
  background-color: white !important;
  flex: 1;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col3{
  max-width: 370px;
  height: 550px;
  background-color: white !important;
  flex: 1;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col4{
  max-width: 370px;
  height: 550px;
  background-color: white !important;
  flex: 1;
  margin-left: 50px;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.info_main{
  margin-left: 20vh;
  margin-right: 20vh;
}
.elrow{
  display: flex;
  width: auto;
  margin-top: 30px;
  justify-content: center;
}
.col_img{
  height: 330px;
  width: 100%;
}
.col_text{
  min-height: 160px;
  width: auto;
  padding: 30px
}
</style>
