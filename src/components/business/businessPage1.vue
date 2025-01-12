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
      <p style="font-size: 30px;">信息系统集成与运维服务</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">信息系统集成与运维服务</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/solution" @click="pageReload">公司业务</a>>信息系统集成与运维服务</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="intoContent">
      <p style="color: black;text-align: left; font-size: 18pt; text-indent: 2rem;">在当今信息化飞速发展的时代，信息系统集成已成为企业提升效率、优化管理的重要手段。我们公司作为专业的信息系统集成服务商，致力于为客户提供全方位的硬件、软件及解决方案，以满足客户日益增长的业务需求。</p>
      <p class="subTitle">一、硬件集成</p>
      <p class="subContent">硬件是信息系统的基础，我们拥有丰富的硬件集成经验，能够为客户提供从服务器、存储设备到网络设备等一站式硬件集成服务。我们根据客户的实际需求，精选高品质的硬件设备，通过专业的集成技术，确保硬件系统的稳定性、可靠性和高效性。我们还提供硬件设备的安装、调试、维护和升级服务，确保客户在使用过程中无后顾之忧。</p>
      <br />
      <p class="subTitle">二、软件集成</p>
      <p class="subContent">软件是信息系统的灵魂，我们深知软件集成在信息系统中的重要性。我们拥有一支专业的软件研发团队，能够为客户提供定制化的软件集成解决方案。从操作系统、数据库到各类应用软件，我们都能实现与硬件系统的完美融合，提升信息系统的整体性能。我们还注重软件系统的安全性和易用性，确保客户在享受高效服务的也能保障数据安全。</p>
      <br />
      <p class="subTitle">三、解决方案</p>
      <p class="subContent">为了满足客户多样化的业务需求，我们提供了一系列创新的信息系统集成解决方案。无论是<span style="color: red;">企业资源规划（ERP）、客户关系管理（CRM）还是办公自动化（OA）</span>，我们都能为客户提供量身定制的解决方案。我们的解决方案以业务流程为导向，通过整合企业内外的信息资源，实现数据的共享和协同，从而提高企业的决策效率和市场响应速度。</p>
      <img src="../../img/solution/baseservice.png" />
      <br />
      <p class="subTitle">四、技术支持服务</p>
      <p class="subContent">我司可以提供技术服务，服务范围包括：设备扩容升级、硬件故障处理、系统调优、机房巡检、机房搬迁、系统与数据库问题解决等。</p>
      <center>
      <table class="supportTable" border="1px" width="1000px">
        <tbody>
          <tr style="height: 50px;">
            <td colspan="5">技术服务</td>
          </tr>
          <tr style="height: 50px;">
            <td>故障处理</td>
            <td>扩容升级</td>
            <td>机房搬迁</td>
            <td>机房巡检</td>
            <td>平台搭建</td>
          </tr>
        </tbody>
      </table>
      <table class="supportTable2" border="1px" width="1000px">
        <tbody>
          <tr style="height: 100px;">
            <td style="width: 300px;">技术服务</td>
            <td>服务内容</td>
          </tr>
          <tr>
            <td>故障处理</td>
            <td>
              <ul>
                <li>针对小型机、服务器、存储、网络设备的故障硬件进行更换，恢复设备正常运行</li>
                <li>解决操作系统运行中出现的报错问题，系统升级，安全防护等</li>
                <li>解决数据库的报错问题，提供数据库优化方案，数据库调优，数据备份等</li>
                <li>网络环境故障排除，线路检测等</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>扩容升级</td>
            <td>
              <ul>
                <li>小型机、服务器升级CPU、增加内存、硬盘、适配卡等</li>
                <li>存储增加扩展柜、增加硬盘等</li>
                <li>网络设备增加子卡，升级增加端口等</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>机房搬迁</td>
            <td>
              <ul>
                <li>提供搬迁前期的方案设计，风险评估</li>
                <li>提供搬迁后设备上线可能出现的问题的解决方案</li>
                <li>提供整个搬迁过程的人力、物力、技术支持</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>机房巡检</td>
            <td>
              <ul>
                <li>机房环境检査(温度、湿度、电压、除尘、防雷、防火、UPS)</li>
                <li>机房核心设备硬件检査</li>
                <li>操作系统运行检査</li>
                <li>巡检报告，针对出现的问题提出日常维护改善方案</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>平台搭建</td>
            <td>
              <ul>
                <li>系统运行平台搭建，比如服务器的选型、系统安装、阵列配置、连接存储、接入网络，配置组网方式等</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </center>
      <br />
      <img style="width: 900px;" src="../../img/solution/1.1.png" />
      <img style="width: 900px;" src="../../img/solution/1.2.png" />
      <p>以下是根据您提供的售后服务承诺内容生成的表格：</p>
      <center>
      <table class="supportTable3" border="1px" width="1000px">
        <tbody>
          <tr style="height: 50px;">
            <td style="width: 300px;">售后服务承诺</td>
            <td>具体内容</td>
          </tr>
          <tr>
            <td colspan="2">一、售后服务总体承诺</td>
          </tr>
          <tr>
            <td>服务期限</td>
            <td>提供所投产品的2年原厂级运维服务，硬件提供五年的质保和上门维护服务（从项目最终验收完毕之日起计算）</td>
          </tr>
          <tr>
            <td>服务范围</td>
            <td>涵盖软、硬件质保和上门维护服务</td>
          </tr>
          <tr>
            <td colspan="2">二、软件维保服务承诺</td>
          </tr>
          <tr>
            <td>紧急救援</td>
            <td>7x24小时不间断提供软件故障紧急救援及维保技术支持</td>
          </tr>
          <tr>
            <td>响应与现场支持</td>
            <td>提供软件重新安装、版本升级、配置修改及功能重新设定；提交系统维护技术，交付维护密码（授权）</td>
          </tr>
          <tr>
            <td>协助与支持</td>
            <td>协助数据库一体机终端安装和维护；协助解决应用系统问题；协助制定灾难恢复计划和演练；提供现场值守、数据迁移服务；变更文档维护</td>
          </tr>
          <tr>
            <td colspan="2">三、硬件维保服务承诺</td>
          </tr>
          <tr>
            <td>备件提供</td>
            <td>根据机器配置，协助提供原厂备件购买渠道，备件费用另案支付</td>
          </tr>
          <tr>
            <td>维修与换件</td>
            <td>到达现场提供维修及原厂备件换件服务</td>
          </tr>
          <tr>
            <td>数据保护</td>
            <td>现场维修时，用户有权处置更换下来的存储类零部件（如硬盘、磁带）</td>
          </tr>
          <tr>
            <td>响应与到场时间</td>
            <td>紧急故障：10分钟内响应，2小时内到场；一般故障：2小时内响应，按时到场</td>
          </tr>
          <tr>
            <td>其他服务</td>
            <td>提供硬件微码升级服务；提供设备联接和调试；每次服务后提交服务工作报告并签字确认</td>
          </tr>
        </tbody>
      </table>
      </center>
      <p>请注意，这个表格是基于您提供的信息生成的，并可能需要根据实际情况进行微调。希望这个表格能够满足您的需求！</p>
      <br />
      <p style="font-size: 15pt; text-align: left; text-indent: 2rem; margin: 0;">我们公司作为专业的信息系统集成服务商，将始终秉承“客户至上，创新引领”的理念，为客户提供优质的硬件、软件及解决方案。我们期待与您携手合作，共创美好的未来！</p>
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
  font-size: 15pt;
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
.supportTable3{
  height: 150px;
  text-align: center;
  color: black;
  margin-top: 20px;
}
.supportTable3 tr{
  height: 80px;
}
</style>
