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
      <p style="font-size: 30px;">智能化系统集成及运维服务</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">智能化系统集成及运维服务</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/solution" @click="pageReload">公司业务</a>>智能化系统集成及运维服务</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent">
      <p style="color: black;text-align: left; font-size: 18pt; text-indent: 2rem;">我司提供的智能化系统集成服务涵盖多个领域和项目，以满足不同客户的需求。</p>
      <p class="subTitle">一、智能安防系统集成</p>
      <p class="subContent">智能安防系统集成是运用先进的视频监控、报警、门禁等技术手段，为客户构建全方位、立体化的安全防护体系。我们提供包括方案设计、设备选型、安装调试、后期维护等一站式服务，确保客户的安全需求得到有效满足。</p>
      <br />
      <p class="subTitle">二、智能楼宇系统集成</p>
      <p class="subContent">智能楼宇系统集成是针对现代楼宇的智能化需求，将楼宇自控系统、智能照明系统、能源管理系统等进行整合，实现楼宇的智能化管理和节能降耗。我们通过专业的技术团队和丰富的实施经验，为客户打造舒适、便捷、高效的智能楼宇环境。</p>
      <br />
      <img src="../../img/solution/smartservice.jpg" />
      <p class="subTitle">三、智能制造系统集成</p>
      <p class="subContent">智能制造系统集成是助力制造业转型升级的关键一环。我们将工业互联网、大数据、人工智能等技术与制造业深度融合，为客户提供定制化的智能制造解决方案。通过智能制造系统的实施，客户能够实现生产过程的可视化、可控制和智能化，提升产品质量和生产效率。</p>
      <br />
      <p class="subTitle">四、智能交通系统集成</p>
      <p class="subContent">智能交通系统集成旨在运用先进的信息化技术，提升交通系统的智能化水平和管理效率。我们为客户提供包括智能交通监控系统、智能信号控制系统、智能停车管理系统等在内的全方位解决方案，助力城市交通的顺畅运行和智能化发展。</p>
      <br />
      <p class="subTitle">五、智慧园区系统集成及解决方案</p>
      <p class="subContent">智慧园区系统集成服务是将物联网、大数据、云计算、人工智能等先进技术融合，为园区打造一个智能化、高效化、可持续发展的生态环境。智慧园区系统集成将园区内的各个子系统、应用和服务进行整合，如安防监控、门禁管理、智能照明、能源管理、设备监控等，实现信息共享、协同工作和智能化管理。通过统一的通信协议和接口，各子系统之间实现互联互通，形成一个完整的智能化管理体系。</p>
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
