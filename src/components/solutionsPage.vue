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
      <p>Business</p>
      <p style="font-size: 30px;">公司业务</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">公司业务</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>公司业务</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent" v-for="item in items">
      <p>{{ item.title }}</p>
      <p style="font-size: 15pt; padding-left: 150px; padding-right: 150px; text-indent: 2em; text-align: left;" v-html="item.content"></p>
      <br />
      <p style="font-size: 12pt; text-align: right; margin-right: 100px;"><a :href=item.page @click="pageReload">了解更多>></a></p>
      <br />
    </div>
  </div>
</template>

<script lang="ts" setup>

const items = [
  {
    title: '信息系统集成及运维服务',
    content: '在信息化日新月异的时代背景下，我们公司专注于为客户提供卓越的信息系统集成及运维服务。我们拥有一支技术精湛、经验丰富的专业团队，致力于将先进的信息技术与企业实际需求相结合，为客户量身打造高效、稳定、安全的信息系统解决方案。从系统规划、设计、实施到后续运维，我们始终坚持以客户为中心，确保每一项服务都能满足客户的严苛要求，助力企业在激烈的市场竞争中脱颖而出。',
    page: '#/businessPage1'
  },
  {
    title: '信息安全集成及运维',
    content: '公司作为专业的信息安全服务提供商，致力于为客户提供全方位的信息安全解决方案，以确保企业数据的安全与稳定。通过先进的安全集成技术和高效的运维服务，我们助力企业筑牢数据安全防线，应对不断变化的网络安全威胁。我们的服务旨在为企业保驾护航，确保其在数字化转型的道路上稳步前行。',
    page: '#/businessPage2'
  },
  {
    title: '智能化系统集成及解决方案',
    content: '从智能化系统的设计、集成到后期的运维管理，我们均能提供专业、高效的服务。通过持续的技术创新和优化，我们助力客户实现智能化转型，提升企业核心竞争力。我们的服务范围广泛，涵盖多个行业领域，满足不同客户的个性化需求。选择我们，您将获得智能化集成及运维的全面解决方案，为企业发展注入强劲动力。',
    page: '#/businessPage3'
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
  min-height: 300px;
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
.intoContent a{
  color: rgb(14, 127, 172);
  transition: all 0.3s;
}
.intoContent a:hover{
  color: rgb(6, 48, 65);
}
</style>
