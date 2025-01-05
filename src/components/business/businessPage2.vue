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
      <p style="font-size: 30px;">信息安全集成与运维服务</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">信息安全集成与运维服务</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/solution" @click="pageReload">公司业务</a>>信息安全集成与运维服务</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent">
      <p class="subTitle">一、信息安全集成服务</p>
      <p class="subContent">我们的信息安全集成服务旨在为企业构建坚实的安全防线，确保企业信息系统在面临各种威胁时能够稳如磐石。我们提供的安全集成服务包括但不限于以下几个方面：</p>
      <p class="subContent">1.网络安全集成</p>
      <p class="subContent">我们拥有丰富的网络安全集成经验，能够为客户量身定制网络安全解决方案。通过部署防火墙、入侵检测系统（IDS）、入侵防御系统（IPS）等安全设备，我们帮助企业建立起多层次、立体化的网络安全防护体系，有效抵御外部攻击和内部泄露。</p>
      <p class="subContent">2.系统安全集成</p>
      <p class="subContent">针对企业核心系统和应用，我们提供系统安全集成服务。通过加固操作系统、数据库、中间件等基础设施，以及实施严格的安全策略和访问控制，我们确保企业系统的稳定性和安全性，保障企业业务的正常运行。</p>
      <p class="subContent">3.数据安全集成</p>
      <p class="subContent">数据是企业的核心资产，我们深知保护数据安全的重要性。因此，我们提供全面的数据安全集成服务，包括数据加密、数据备份与恢复、数据泄露防护等。通过采用先进的技术和严格的管理措施，我们确保企业数据的完整性、可用性和机密性。</p>
      <br />
      <img src="../../img/solution/safeservice.png" />
      <p class="subTitle">二、信息安全运维服务</p>
      <p class="subContent">除了信息安全集成服务外，我们还提供专业的信息安全运维服务，帮助企业实时监控和管理信息系统，及时发现并解决潜在的安全隐患。我们的信息安全运维服务包括以下几个方面：</p>
      <p class="subContent">1.安全监控与日志分析</p>
      <p class="subContent">我们利用先进的安全监控系统和日志分析工具，对企业信息系统进行24小时不间断的监控和分析。通过实时收集、存储和分析安全日志，我们能够及时发现异常行为和安全事件，为企业提供及时有效的安全预警和应急响应。</p>
      <p class="subContent">2.漏洞扫描与修复</p>
      <p class="subContent">我们定期对企业信息系统进行漏洞扫描，发现潜在的安全漏洞并及时进行修复。我们还提供针对特定应用的漏洞扫描服务，确保企业应用的安全性。通过持续的漏洞管理和修复工作，我们帮助企业降低安全风险，提升信息系统的整体安全性。</p>
      <p class="subContent">3.安全培训与意识提升</p>
      <p class="subContent">我们深知人为因素在信息安全中的重要性，因此提供全面的安全培训和意识提升服务。通过定期的安全培训课程、模拟演练和在线学习资源，我们帮助企业员工提高信息安全意识和技能水平，共同维护企业的信息安全。</p>
      <br />
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
  background-image: url('../../img/topBackground.jpg');
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
  /* background-color: red; */
  color: black;
  width: 100%;
  height: auto;
  justify-items: center;
  padding-top: 30px;
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
.intoContent{
  margin-left: 200px;
  margin-right: 200px;
}
.subTitle{
  color: black;
  text-align: left;
  font-size: 18pt;
}
.subContent{
  color: black;
  text-align: left;
  text-indent: 2rem;
  font-size: 13pt;
}
.supportTable{
  height: 150px;
  text-align: center;
  color: black;
  margin-top: 20px;
}
.supportTable2{
  height: 100px;
  text-align: center;
  color: black;
  margin-top: 20px;
}
.supportTable2 ul{
  list-style: circle;
}
.supportTable2 ul li{
  text-align: left;
}
</style>
