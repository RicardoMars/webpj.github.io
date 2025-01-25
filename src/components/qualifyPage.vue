<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2025-01-16 18:15:45
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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>关于我们>资质荣誉</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="bigContent">
      <div class="inContent" v-for="item in images" style="margin-top: 10px;">
        <div class="insideContent">
          <!-- <img :src="item.logo" alt="Image"> -->
          <p style="font-size: 10pt; color: black;">{{ item.title }}</p>
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

const images = [
  {
    title: 'ISO 27001信息安全管理体系认证证书',
    logo: new URL('../img/qualify/1.jpg', import.meta.url).href,
  },
  {
    title: 'ISO 20000信息技术服务管理体系认证证书',
    logo: new URL('../img/qualify/2.jpg', import.meta.url).href,
  },
  {
    title: 'ISO 9001质量管理体系认证证书',
    logo: new URL('../img/qualify/3.jpg', import.meta.url).href,
  },
  {
    title: 'ISO 14001环境管理体系认证证书',
    logo: new URL('../img/qualify/4.jpg', import.meta.url).href,
  },
  {
    title: 'ISO 45001职业健康安全管理体系认证证书',
    logo: new URL('../img/qualify/5.jpg', import.meta.url).href,
  },
  {
    title: '信息安全服务资质认证证书（一级）信息系统安全集成（CCRC)',
    logo: new URL('../img/qualify/8.jpg', import.meta.url).href,
  },
  {
    title: '信息安全服务资质认证证书（二级）信息系统安全运维（CCRC)',
    logo: new URL('../img/qualify/9.jpg', import.meta.url).href,
  },
  {
    title: '信息安全服务资质证书-安全工程类（一级）',
    logo: new URL('../img/qualify/10.jpg', import.meta.url).href,
  },
  {
    title: '建筑业企业资质证书-电子与智能化工程专业承包（二级）',
    logo: new URL('../img/qualify/12.jpg', import.meta.url).href,
  },
  {
    title: '广东省守合同重信用企业”公示证书（2016-2020连续五年）',
    logo: new URL('../img/qualify/14.jpg', import.meta.url).href,
  },
  {
    title: '中国电子信息行业联合会会员证书',
    logo: new URL('../img/qualify/15.jpg', import.meta.url).href,
  },
  {
    title: '大华安防系列产品广东地区核心战略合作伙伴',
    logo: new URL('../img/qualify/18.jpg', import.meta.url).href,
  },
  {
    title: '联想凌拓注册级授权经销商',
    logo: new URL('../img/qualify/19.jpg', import.meta.url).href,
  },
  {
    title: '中国通信企业协会会员证书',
    logo: new URL('../img/qualify/16.jpg', import.meta.url).href,
  },
  {
    title: 'ORACLE智慧环保系统应用支撑平台',
    logo: new URL('../img/qualify/17.jpg', import.meta.url).href,
  },
  {
    title: 'CMMI L3-DEV V2.0（CMMI-3级）',
    logo: new URL('../img/qualify/6.jpg', import.meta.url).href,
  },
  {
    title: '信息系统建设和服务能力证书(二级)(CS-2级)',
    logo: new URL('../img/qualify/7.jpg', import.meta.url).href,
  },
  {
    title: '信息技术服务运行维护标准符合性证书',
    logo: new URL('../img/qualify/11.jpg', import.meta.url).href,
  },
  {
    title: '企业信用等级证书（AAA级）',
    logo: new URL('../img/qualify/13.jpg', import.meta.url).href,
  }
]

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
  justify-content: center;
  flex-wrap: wrap;
}
.bigContent .inContent{
  width: 300px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
  /* background-color: red; */
}
.bigContent .inContent .insideContent{
  width: 100%;
  height: auto;
}
.bigContent .inContent .insideContent img{
  width: 100%;
  height: 85%;
  object-fit: 100%;
}
</style>
