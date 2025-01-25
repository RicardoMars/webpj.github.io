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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/case" @click="pageReload">客户案例</a>>信息化案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <div class="imgPlace"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">数据库保护--广州海关核心数据保护项目</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />广州海关日常工作中需要大量的数据支持，以便更好地履行其职责，包括货物进出口监管、税收征收、边境安全等。这些数据对于海关部门的决策制定、风险评估和执法活动至关重要。获取和管理这些数据需要购买商业数据库，以确保数据的准确性、完整性和时效性。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />降低了网站攻击和数据丢失风险；集中管理数据保护，通过整合方法，集中为 OCI 隔间中的 Exadata Database Service、Autonomous Database—Dedicated 和 Base Database Service 上运行的所有数据库提供数据保护；并将数据库备份验证和其它流程卸载至恢复服务，尽可能降低数据库服务的CPU占用率。</p>
      </div>
    </div>
    <div class="place_1">
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">医疗信息化--中山大学附属第六医院</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />中山大学附属第六医院经过多年的发展，医院信息化建设发生了巨大的挑战：HIS、PACS、EMR、LIS、集成平台等业务系统数据库独立，数据分散；利用X86服务器构建RAC集群，存在性能瓶颈；随着数量不断增加业务报表速度大幅降低，备份时间大幅延长，历史数据查询缓慢。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />业务系统数据库整合迁移到Exadata中，大幅减少运营成本；业务查询性能提升9-45倍；备份时间降低至1/4；原有DELL集群用于容灾，提升数据安全性。</p>
      </div>
      <div class="imgPlace2"></div>
    </div>
    <div class="place_1">
      <div class="imgPlace3"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">私有云--Vmware虚拟化平台构建</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />缺乏弹性扩展能力的传统IT架构不足以支撑用户规模的快速增长；迅速扩大的数据存储规模和业务并发需求使得单一的数据中心在保障业务连续性方面面临越来越大的风险。为了支撑业务在区域上的快速扩展和并购，IT 系统必须具有快速部署的能力；根据业务的实际需要，可以随时请求增加资源的自服务能力。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />VMware vSphere 借助 VMware NSX 将基础架构提升到新高度，将其延展到计算和存储之外的网络连接领域，从而增强网络安全性并提高可扩展性；基于VMware的虚拟化技术和分布式架构，实现了计算资源的虚拟化，极大的方便了计算资源的扩展和调配；虚拟化解决方案使 IT 资源整合率超过 80%，大大节省了采购与运维成本，同时标准化的虚拟硬件设备也极大地简化了运维管理。</p>
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
  background-image: url('../img/case/3.2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace2{
  width: 400px;
  height: auto;
  background-image: url('../img/case/3.3.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace3{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/3.4.png');
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
