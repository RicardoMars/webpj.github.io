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
      <p>Solutions</p>
      <p style="font-size: 30px;">解决方案</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">解决方案</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>解决方案</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent" v-for="item in items">
      <p>{{ item.title }}</p>
      <p style="font-size: 15pt; padding-left: 150px; padding-right: 150px; text-indent: 2em; text-align: left;" v-html="item.content"></p>
      <img :src="item.img" alt="img" width="70%">
    </div>
  </div>
</template>

<script lang="ts" setup>

const items = [
  {
    title: '基础设施集成及运维服务',
    content: '在当今信息化飞速发展的时代，信息系统集成已成为企业提升效率、优化管理的重要手段。我们公司作为专业的信息系统集成服务商，致力于为客户提供全方位的硬件、软件及解决方案，以满足客户日益增长的业务需求。<br /><br />1、硬件集成硬件是信息系统的基础，我们拥有丰富的硬件集成经验，能够为客户提供从服务器、存储设备到网络设备等一站式硬件集成服务。我们根据客户的实际需求，精选高品质的硬件设备，通过专业的集成技术，确保硬件系统的稳定性、可靠性和高效性。我们还提供硬件设备的安装、调试、维护和升级服务，确保客户在使用过程中无后顾之忧。<br /><br />2、软件集成软件是信息系统的灵魂，我们深知软件集成在信息系统中的重要性。我们拥有一支专业的软件研发团队，能够为客户提供定制化的软件集成解决方案。从操作系统、数据库到各类应用软件，我们都能实现与硬件系统的完美融合，提升信息系统的整体性能。我们还注重软  件系统的安全性和易用性，确保客户在享受高效服务的也能保障数据安全。<br /><br />3、解决方案为了满足客户多样化的业务需求，我们提供了一系列创新的信息系统集成解决方案。无论是企业资源规划（ERP）、客户关系管理（CRM）还是办公自动化（OA），我们都能为客户提供量身定制的解决方案。我们的解决方案以业务流程为导向，通过整合企业内外的信息资源，实现数据的共享和协同，从而提高企业的决策效率和市场响应速度。<br /><br />4、技术支持服务我司可以提供技术服务，服务范围包括：设备扩容升级、硬件故障处理、系统调优、机房巡检、机房搬迁、系统与数据库问题解决等。',
    img: new URL('../img/solution/baseservice.png', import.meta.url).href
  },
  {
    title: '信息安全集成及运维',
    content: '我们的信息安全集成服务旨在为企业构建坚实的安全防线，确保企业信息系统在面临各种威胁时能够稳如磐石。我们提供的安全集成服务包括但不限于以下几个方面：<br /><br />1. 网络安全集成我们拥有丰富的网络安全集成经验，能够为客户量身定制网络安全解决方案。通过部署防火墙、入侵检测系统（IDS）、入侵防御系统（IPS）等安全设备，我们帮助企业建立起多层次、 立体化的网络安全防护体系，有效抵御外部攻击和内部泄露。<br /><br />2. 系统安全集成针对企业核心系统和应用，我们提供系统安全集成服务。通过加固操作系统、数据库、中间件等基础设施，以及实施严格的安全策略和访问控制，我们确保企业系统的稳定性和安全性，保障企业业务的正常运行。<br /><br />3. 数据安全集成数据是企业的核心资产，我们深知保护数据安全的重要性。因此，我们提供全面的数据安全集成服务，包括数据加密、数据备份与恢复、数据泄露防护等。通过采用先进的技术和严格的管理措施，我们确保企业数据的完整性、可用性和机密性。',
    img: new URL('../img/solution/safeservice.png', import.meta.url).href
  },
  {
    title: '智能化系统集成及解决方案',
    content: '我司提供的智能化系统集成服务涵盖多个领域和项目，以满足不同客户的需求。<br /><br />1.智慧园区系统集成及解决方案智慧园区系统集成服务是将物联网、大数据、云计算、人工智能等先进技术融合，为园区打造一个智能化、高效化、可持续发展的生态环境。智慧园区系统集成将园区内的各个子系统、应用和服务进行整合，如安防监控、门禁管理、智能照明、能源管理、设备监控等，实现信息共享、协同工作和智能化管理。通过统一的通信协议和接口，各子系统之间实现互联互通，形成一个完整的智能化管理体系。<br /><br />2. 智能楼宇系统集成智能楼宇系统集成是针对现代楼宇的智能化需求，将楼宇自控系统、智能照明系统、能源管理系统等进行整合，实现楼宇的智能化管理和节能降耗。我们通过专业的技术团队和丰富的实施经验，为客户打造舒适、便捷、高效的智能楼宇环境。<br /><br />3. 智能制造系统集成智能制造系统集成是助力制造业转型升级的关键一环。我们将工业互联网、大数据、人工智能等技术与制造业深度融合，为客户提供定制化的智能制造解决方案。通过智能制造系统的实施，客户能够实现生产过程的可视化、可控制和智能化，提升产品质量和生产效率。<br /><br />4. 智能交通系统集成智能交通系统集成旨在运用先进的信息化技术，提升交通系统的智能化水平和管理效率。我们为客户提供包括智能交通监控系统、智能信号控制系统、智能停车管理系统等在内的全方位解决方案，助力城市交通的顺畅运行和智能化发展。',
    img: new URL('../img/solution/smartservice.jpg', import.meta.url).href
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
  min-height: 600px;
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
