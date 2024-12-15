<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-15 12:00:54
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Contact Us</p>
      <p style="font-size: 30px;">联系我们</p>
    </div>
  </div>
  <div class="bigContent">
    <div class="text_content">
      <p>公司电话:XXXXXXXXXXX</p>
      <p>公司邮箱:XXXXX@XXX.XXX</p>
      <p>公司地址:XXXXXXXXXXXXXXX</p>
    </div>
    <div id="container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

// 引入百度地图的类型声明
declare const BMap: any;

onMounted(() => {
  // 创建地图实例
  const map = new BMap.Map('container');
  
  // 设置中心点坐标
  const point = new BMap.Point(113.327737,23.141755);
  
  // 初始化地图，设置中心点坐标和地图级别
  map.centerAndZoom(point, 20);
  
  // 开启鼠标滚轮缩放
  map.enableScrollWheelZoom(true);
  
  // 添加控件
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());
  map.addControl(new BMap.OverviewMapControl());
  map.addControl(new BMap.MapTypeControl());
  const marker = new BMap.Marker(point);
  
// 创建标签（名称）
  const label = new BMap.Label('高盛大厦23C07', {
      offset: new BMap.Size(20, -10), // 设置标签的位置偏移量
  });
  
  // 为标记点设置标签
  marker.setLabel(label);

  // 将标记点添加到地图上
  map.addOverlay(marker);

});

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
  display: flex;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
}
#container {
  width: 70%;
  height: 400px;
  /* border: 1px solid #020202; */
}
.text_content{
  color: black;
  width: 30%;
  height: 400px;
  position: relative;
  align-content: center;
}
</style>
