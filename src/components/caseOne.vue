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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>><a href="#/case" @click="pageReload">客户案例</a>>信创服务案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <div class="imgPlace"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">某海关信创项目解决方案案例</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />顺应国家安全和信息系统自主可控要求，项目进行智慧海关信息化建设，采用国产服务器作为基础IT设施进行系统部署，包括：数据共享平台、智能监管系统、智能服务系统、智能风险评估系统，项目涉及服务器108台</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />升级后的办公系统显著提升了工作效率，数据安全得到了有力保障。同时，国产服务器降低了运维成本，为政府机构数字化转型提供了有力支持。</p>
      </div>
    </div>
    <div class="place_1">
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">某国有银行信创项目解决方案案例</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />某大型国有银行广东分行为响应国家信创政策，决定对现有IT架构进行国产化改造。该机构原有的服务器多为国外品牌，存在数据安全和供应链风险。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：<br />项目采用信创服务器替代原有品牌服务器，并进行系统迁移与兼容性测试，对数据库、中间件等软件进行国产化适配，确保整体系统稳定运行。成功降低了数据泄露和供应链中断的风险，提升了系统的自主可控能力，降低了运维成本，提高了业务效率。</p>
      </div>
      <div class="imgPlace2"></div>
    </div>
    <div class="place_1">
      <div class="imgPlace3"></div>
      <div class="textPlace">
        <p style="font-size: 15pt; font-weight: bold;">某运营商信创项目解决方案案例</p>
        <p style="padding-left: 100px; padding-right: 100px;">项目介绍：<br />某电信运营商为区政务服务数据管理局整齐双线接入新建工程，该项目旨在提升政务服务数据管理局的网络连通性和访问速度。该项目实现了对政务服务数据管理局政企双线接入新建项目商业密码应用方案及安全性的测评，并协助整改完成客户管理归纳的要求。</p>
        <p style="padding-left: 100px; padding-right: 100px;">方案成效：项目采用信创服务器,双线接入方案在提高网络可靠性和稳定性、优化网络访问速度、解决跨运营商访问问题、降低网络维护成本以及提升业务连续性和服务质量等方面都取得了显著的成效。</p>
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
  background-image: url('../img/case/1.2.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace2{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/1.3.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .imgPlace3{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/1.4.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.bigContent .place_1 .textPlace{
  width: 800px;
  height: 300px;
  background-color: rgb(222, 240, 255);
}
</style>
