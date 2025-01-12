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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>客户案例</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
    <div class="place_1">
      <a href="#/caseOne">
        <div class="imgPlace1"></div>
        <div class="textPlace">
          <ul>
            <li>某海关信创项目解决方案案例</li>
            <li>某国有银行信创项目解决方案案例</li>
            <li>某运营商信创项目解决方案案例</li>
          </ul>
        </div>
      </a>
    </div>
    <div class="place_1">
      <a href="#/caseTwo">
        <div class="imgPlace2"></div>
        <div class="textPlace">
          <ul>
            <li>智慧校园-华南理工大学智慧校园管理平台</li>
            <li>智慧政务-交通运输服务指挥调度平台</li>
            <li>智慧政务-生态环境大数据应用平台</li>
          </ul>
        </div>
      </a>
    </div>
    <div class="place_1">
      <a href="#/caseThird">
        <div class="imgPlace3"></div>
        <div class="textPlace">
          <ul>
            <li>数据库保护--广州海关核心数据保护项目</li>
            <li>医疗信息化--中山大学附属第六医院</li>
            <li>私有云--Vmware虚拟化平台构建</li>
          </ul>
        </div>
      </a>
    </div>
    <div class="place_1">
      <a href="#/caseFour">
        <div class="imgPlace4"></div>
        <div class="textPlace">
          <ul>
            <li>网络安全--佛山市高明区人民医院</li>
            <li>网络安全--信息安全加固与等级保护建设项目</li>
            <li>网络安全--南方数据院2020年老挝南塔河及越南永新网络安全</li>
          </ul>
        </div>
      </a>
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
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.bigContent .place_1{
  width: 400px;
  height: 600px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  transition: all 0.5s;
  border: 1px solid #e4e4e4;
}
.bigContent .place_1:hover{
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.8);
}
.bigContent .place_1 .imgPlace1{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/1.1.jpg');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace2{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/2.1.jpg');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace3{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/3.1.jpg');
  background-size: cover;
  background-position: center center;
}
.bigContent .place_1 .imgPlace4{
  width: 400px;
  height: 300px;
  background-image: url('../img/case/4.1.jpg');
  background-size: cover;
  background-position: center center;
}
.textPlace{
  color: black;
  width: 100%;
  height: 300px;
  text-align: left;
}
.textPlace ul{
  list-style: circle;
}
</style>
