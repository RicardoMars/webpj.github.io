<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-26 15:59:07
-->
<template>
  <div class="Header">
    <div class="content">
      <p>About Us</p>
      <p style="font-size: 30px;">关于我们</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">关于我们</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>关于我们>介绍</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div style="display:flex; flex-wrap: wrap; justify-content: center; width: 100%; color: black;">
    <div class="firstBox" style="margin-top: 100px; text-align: left; width: 1100px;">
      <p style="font-size: 23pt;">公司介绍</p>
      <p style="font-size: 18pt;">广州铭诚计算机科技有限公司：创新驱动，卓越服务的行业引领者</p>
      <p>广州铭诚计算机科技有限公司注册成立于2007年，总部位于广东省广州市，是一家在系统集成领域极具影响力的高科技企业，华南地区知名的信息系统集成商、企业级IT服
        务商和信息安全服务商，专注于信息技术服务领域，公司凭借多年来在信息技术领域的深耕细作，业务范围已经覆盖华南地区政府、医疗、教育、金融等领域，为众多行业客户提供
        全面、专业、高效的系统集成解决方案。业务包括IT基础设施规划与集成、IT基础设施运维及服务、信息安全保障及咨询服务、数据中心集成建设与运维、建筑及园区智能化系统集成
        及运维服务，为政府及企业客户提供从咨询到实施运维的一体化信息技术服务。我们将不懈努力持续打造以用户价值为根本、以合作伙伴为基石、以技术创新为动力的IT服务新生态。
      </p>
    </div>
    <div class="secBox">
      <p style="font-size: 20pt; width: auto;">公司使命</p>
      <el-divider direction="vertical" style="height: 200px; margin-left: 200px; margin-right: 100px; border-width: 2px;"></el-divider>
      <p style="width: 400px;">我们的使命是通过不断的创新和卓越的服务，为客户提供高效节能的解决方案、个性化的用户体验等，推动行业的发展进步，为社会创造更大的价值。</p>
    </div>
    <div class="thridBox">
      <p style="color: white; font-size: 30pt;">发展历程</p>
    </div>
    <div class="fourthBox">
      <div class="inBox">
        <p style="font-size: 16pt;">2007</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">铭城科技在广州注册成立</p>
      </div>
      <div class="inBox">
        <p style="font-size: 16pt;">2013-2014</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">取得计算机信息安全资质证书，以及广东省安全技术防范系统设计、施工、维修资格证书。<br />取得ISO14001：环境管理体系认证证书、OHSAS18001职业健康安全管理体系认证证书、高新技术企业证书</p>
      </div>
      <div class="inBox">
        <p style="font-size: 16pt;">2015</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">取得：<br />ISO9001:质量管理体系认证证书<br />CMMI3:软件成熟度模型证书<br /><br />中小企业信用AAA证书</p>
      </div>
      <div class="inBox">
        <p style="font-size: 16pt;">至今</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">公司取得13项专利，70+软著</p>
      </div>
    </div>
    <div class="fifthBox">
      <div class="leftBox">
        <div class="box_1">
          <p style="font-size: 20pt; font-weight: bolder; padding-top: 50px;">企业文化</p>
          <br />
          <p style="font-size: 18pt; font-weight: bolder;">创新</p>
          <p style="padding-right: 70px;">创新是我们发展的核心动力。我们鼓励员工勇于尝试新的想法、技术和商业模式，不断推陈出新，为客户提供更具竞争力的解决方案。</p>
          <br />
          <p style="font-size: 18pt; font-weight: bolder;">诚信</p>
          <p style="padding-right: 70px;">诚信是我们与客户、合作伙伴建立长期稳定关系的基石。我们承诺遵守商业道德，秉持公正、透明的原则，在每一个业务环节中都做到诚实守信。</p>
          <br />
          <p style="font-size: 18pt; font-weight: bolder;">合作</p>
          <p style="padding-right: 70px;">我们深知在当今复杂的商业环境中，合作共赢是取得成功的关键。无论是内部团队之间的协作，还是与外部合作伙伴的联合，我们都积极寻求共同发展的机会，整合各方资源，实现互利互惠。</p>
          <br />
          <p style="font-size: 18pt; font-weight: bolder;">共赢</p>
          <p style="padding-right: 70px;">我们致力于与客户、员工、合作伙伴共同成长、共同分享发展成果。通过提供优质的产品和服务，为客户创造价值；通过提供良好的工作环境和发展机会，为员工创造价值；通过建立公平、公正的合作机制，为合作伙伴创造价值。</p>
        </div>
      </div>
      <div class="rightBox"></div>
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
.secBox{
  margin-top: 100px;
  text-align: left;
  width: 1100px;
  height: 300px;
  background-image: url('../img/duty.jpg');
  display: flex;
  justify-content: center;
  align-items: center;
}
.thridBox{
  margin-top: 50px;
  width: 100%;
  height: 350px;
  background-image: url('../img/history.jpg');
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fourthBox{
  width: 100%;
  display: flex;
  justify-content: center;
}
.fourthBox .inBox{
  width: 400px;
  height: 300px;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
}
.fifthBox{
  background-color: #EDEDED;
  width: 100%;
  height: 800px;
  display: flex;
}
.fifthBox .leftBox{
  height: 100%;
  width: 40%;
}
.fifthBox .leftBox .box_1{
  width: auto;
  height: 100%;
  padding-left: 200px;
  text-align: left;
}
.fifthBox .leftBox .box_1 p{
  margin: 0;
}
.fifthBox .rightBox{
  height: 100%;
  width: 60%;
  background-image: url('../img/culture.jpg');
  background-size: cover;
}
</style>
