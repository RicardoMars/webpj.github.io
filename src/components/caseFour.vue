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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/case" @click="pageReload">客户案例</a>>网络安全案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <div class="imgPlace"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">网络安全--佛山市高明区人民医院</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />随着信息化的发展，医院面临着越来越复杂的安全挑战，包括患者隐私保护、医疗设备安全、员工和患者安全等问题。在此背景下，医院管理层决定实施安全设备上架项目，以应对挑战并确保医院的安全和运营的连续性。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />实施渗透测试、安全漏洞扫描服务、安全加固、全网资产梳理以及应急等相应服务。</p>
      </div>
    </div>
    <div class="place_1">
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">网络安全--信息安全加固与等级保护建设项目</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />实现对广东省建筑设计研究院信息化业务的有力支撑，实现信息系统安全防护能力水平大幅提升，确保广东省建筑设计研究院信息系统达到国家信息安全等级保护的安全能力要求。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />通过引入专业的安全服务，建设适合于广东省建筑设计研究院自身情况的信息安全管理制度及流程体系，完善日常安全运行保障措施，从事前安全检查和风险评估，事中安全事件分析处置，事后应急处置响应全面提高广东省建筑设计研究院安全事件应对能力，满足等级保护关于安全管理与运行保障的相关要求。</p>
      </div>
      <div class="imgPlace2"></div>
    </div>
    <div class="place_1">
      <div class="imgPlace3"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">网络安全--南方数据院2020年老挝南塔河及越南永新网络安全</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />依据国家能源局要求以及检查细则，南塔河电厂的安全防护建设针对网络信息安全提出了一系列要求。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />抵御黑客、病毒、恶意代码等通过各种形式对电力系统发起的恶意破坏和攻击，尤其是集团式攻击；防止内部未授权用户访问系统或非法获取信息以及重大违规操作行为。</p>
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
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.4);
}
.bigContent .place_1 .imgPlace{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/4.2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace2{
  width: 400px;
  height: auto;
  background-image: url('../img/case/4.3.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace3{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/4.4.png');
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
