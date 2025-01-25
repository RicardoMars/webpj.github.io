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
  <div class="divider">
    <div class="left_place">联系我们</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>联系我们</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="text_content">
      <p>如果您对我们的公司、产品或服务感兴趣，或者有任何疑问、合作意向，欢迎随时与我们联系。</p>
      <p style="font-size: 12pt; font-weight: bold;">联系方式</p>
      <p>公司电话:020-38469807</p>
      <!-- <p>公司邮箱:</p> -->
      <p>公司地址:广州市天河区体育西路109号高盛大厦23C07单元</p>
      <!-- <p style="font-size: 12pt; font-weight: bold;">在线咨询(暂未开通)</p>
      <p style="padding-right: 100px;">您还可以通过我们的官方网站在线咨询功能与我们的客服人员进行实时沟通。我们的客服人员将竭诚为您解答问题，并为您提供详细的产品信息和解决方案建议。</p> -->
      <p style="font-size: 12pt; font-weight: bold;">社交媒体</p>
      <p>微信公众号：铭诚数字化 </p>
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.content{
  text-align: right;
  position: absolute;
  color: rgb(76, 65, 218);
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
  width: 60%;
  height: 400px;
  /* border: 1px solid #020202; */
}
.text_content{
  color: black;
  width: 40%;
  height: 500px;
  position: relative;
  text-align: left;
}
.text_content p{
  margin-left: 100px;
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
