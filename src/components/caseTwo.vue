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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/case" @click="pageReload">客户案例</a>>智能化案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <div class="imgPlace"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">智慧校园-华南理工大学智慧校园管理平台</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />根据学校要求，集成校园一卡通、手机二维码以及SIM卡，并与学校服务中心数据集成，提升管理效率。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />系统完成深度整合，全面集成学校数据中心教务系统，一卡通系统，共用学校基础数据，降低维护成本并提升维护便利性。提升了学校管理效率，系统上线后自动放行替代原有的人工管控，有效节约人力资源。</p>
      </div>
    </div>
    <div class="place_1">
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">智慧政务-交通运输服务指挥调度平台</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />为做好第十二届中国航展相关筹备工作，铭诚科技运用大数据分析和人工智能技术构建智能交通大脑-“智达通”，为本届航展交通保驾护航。利用大数据计算和人工智能在乘车诱导、运力部署、车辆调度几个方面进行完善优化，采用信息化、科技化、智慧化的技术手段，从航展运力调配和大数据智慧分析两个方面入手，进行参展人流和运力车流数据的收集分析、精准预测和决策调度。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />借助珠海市综合服务管理平台、交通视频监控、乘车检票系统和车辆 GPS 卫星定位系统，为本届航展构建了“智达通”交通运输服务及指挥调度平台。并与百度地图、高德地图强强联合，实时掌握各区域、多方位的人流量，及时提醒驾车人士根据周边交通管制信息和指引，避开拥堵路段。</p>
      </div>
      <div class="imgPlace2"></div>
    </div>
    <div class="place_1">
      <div class="imgPlace3"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">智慧政务-生态环境大数据应用平台</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />构建全面覆盖的感知网络，建立智慧型信息化平台，实现环境数据的无缝衔接、信息的综合分析；建设覆盖全面的、规划统一的在线监测监控系统、实现环保事件及时预警，提高重特大环境事故的应对与处置能力。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />整合全市及周边国控站、省控站、组分站、小微站数据，基于GIS地图、科学统计图等多元化方式展示空气质量状况，根据不同维度进行浓度、优良率、综合指数、污染物超标、等级分布、考核排名的统计；并通过大气物理模型、大数据分析模型等手段实现空气质量污染传输贡献分析、潜在源分析，实现污染成因及来源分析；同时单点采集多点利用，实现泛环保部门和单位对监测数据进行共享；使用信息化工具自动监管，及时利用监测数据进行分析决策，提供监管部门及被监管企业的数据互动、临场互动能力，使监管更加准确、有效。有效为政府提供环保工作的辅助决策。</p>
      </div>
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
  color: black;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
}
.bigContent .place_1 .imgPlace{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/2.2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace2{
  width: 400px;
  height: auto;
  background-image: url('../img/case/2.3.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace3{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/2.4.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .textPlace{
  width: 800px;
  height: auto;
  background-color: rgb(222, 240, 255);
}
</style>
