<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-18 16:34:41
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
  <div style="justify-items: center; width: 100%;">
    <div class="firstBox" style="margin-top: 100px; text-align: left; width: 1100px;">
      <p style="font-size: 23pt;">公司介绍</p>
      <p style="font-size: 18pt;">广州铭诚计算机科技有限公司：创新驱动，卓越服务的行业引领者</p>
      <p>广州铭诚计算机科技有限公司成立于[成立年份]，是一家在[行业名称]领域中迅速崛起并备受瞩目的企业。公司总部位于[公司总部地点]，凭借其卓越的创新能力、专业的团队以及对客户需求的深刻理解，在行业内树立了良好的口碑。
      我们秉持着“创新、诚信、合作、共赢”的核心价值观，致力于为客户提供高品质、全方位的[行业相关产品/服务]。经过多年的发展，我们已经构建了一个涵盖研发、生产、销售、服务等多个环节的完整产业链，拥有先进的生产设备、精湛的制造工艺和严格的质量检测体系，确保每一个产品都能达到国际一流标准。
      我们的团队由一群充满激情、富有创造力且经验丰富的专业人士组成。其中包括行业资深的专家、技术精湛的工程师、富有创意的设计师以及贴心周到的客户服务人员。他们凭借各自的专业知识和技能，在不同的岗位上协同合作，为公司的持续发展和客户的满意不断努力。
      </p>
    </div>
    <div class="secBox">
      <p style="font-size: 20pt; width: auto;">公司使命</p>
      <el-divider direction="vertical" style="height: 200px; margin-left: 200px; margin-right: 100px; border-width: 2px;"></el-divider>
      <p style="width: 400px;">我们的使命是通过不断的创新和卓越的服务，为客户提供[具体的产品/服务成果，如高效节能的解决方案、个性化的用户体验等]，推动[行业名称]行业的发展进步，为社会创造更大的价值。</p>
    </div>
    <div class="thridBox">
      <p style="color: white; font-size: 30pt;">发展历程</p>
    </div>
    <div class="fourthBox">
      <div class="inBox">
        <p style="font-size: 16pt;">初创期</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">[公司名称]在[成立背景及初衷简单描述]的情况下应运而生。创业初期，我们面临着诸多挑战，但凭借团队的坚韧不拔和对市场的敏锐洞察力，成功推出了首款[具有代表性的产品/服务]，初步在市场上站稳脚跟。</p>
      </div>
      <div class="inBox">
        <p style="font-size: 16pt;">成长阶段</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">随着市场对我们产品/服务的认可，公司进入快速发展期。我们加大了研发投入，不断优化产品性能、拓展产品线，与多家知名企业建立了合作关系，业务范围逐渐覆盖[具体的业务覆盖区域或领域]。</p>
      </div>
      <div class="inBox">
        <p style="font-size: 16pt;">成熟期</p>
        <el-divider></el-divider>
        <p style="padding-left: 50px; padding-right: 50px;">如今，[公司名称]已经成为[行业名称]领域的重要参与者。我们将继续巩固自身优势，积极拓展国际市场，开展更多跨领域的合作项目，向着成为全球领先的[行业名称]企业的目标不断迈进。</p>
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
