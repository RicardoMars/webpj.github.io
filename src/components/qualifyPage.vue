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
  <center>
    <div class="bigContent">
      <div class="midContent">
        <div class="inContent"  v-for="item in images" style="margin-top: 10px;">
          <a href="javascript:void(0)">
            <div class="content-img">
              <img :src="item.logo" style="width: auto; height: 64px;" alt="Image">
            </div>
            <div class="content-body">
              <div class="body-heading">{{ item.title }}</div>
              <div class="body-info">{{ item.info }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </center>
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
    logo: new URL('../img/qualify/1.png', import.meta.url).href,
    info: 'ISO 27001认证证明我公司已建立符合国际标准的信息安全管理体系，有效保护信息安全，降低风险，确保合规。'
  },
  {
    title: 'ISO 20000信息技术服务管理体系认证证书',
    logo: new URL('../img/qualify/2.png', import.meta.url).href,
    info: 'ISO 20000认证证明我公司已建立符合国际标准的信息技术服务管理体系，有效提升服务质量，降低成本，确保客户满意度。'
  },
  {
    title: 'ISO 9001质量管理体系认证证书',
    logo: new URL('../img/qualify/3.png', import.meta.url).href,
    info: 'ISO 9001质量管理体系认证证书证明公司已建立并实施符合国际标准的质量管理体系，确保产品和服务持续满足客户需求，提升质量和效率。'
  },
  {
    title: 'ISO 14001环境管理体系认证证书',
    logo: new URL('../img/qualify/4.png', import.meta.url).href,
    info: 'ISO 14001环境管理体系认证证书证明公司已建立并实施符合国际标准的环境管理体系，有效保护环境，降低风险，确保可持续发展。'
  },
  {
    title: 'ISO 45001职业健康安全管理体系认证证书',
    logo: new URL('../img/qualify/5.png', import.meta.url).href,
    info: 'ISO 45001职业健康安全管理体系认证证书证明公司已建立并实施符合国际标准的职业健康安全管理体系，有效保护员工健康，降低风险，确保员工安全。'
  },
  {
    title: '信息安全服务资质认证证书（一级）信息系统安全集成（CCRC)',
    logo: new URL('../img/qualify/8.png', import.meta.url).href,
    info: '信息安全服务资质认证证书（一级）信息系统安全集成（CCRC)证明公司已建立并实施符合国际标准的信息系统安全集成体系，有效提升信息系统的安全性和稳定性。'
  },
  {
    title: '信息安全服务资质认证证书（二级）信息系统安全运维（CCRC)',
    logo: new URL('../img/qualify/9.png', import.meta.url).href,
    info: '信息安全服务资质认证证书（二级）信息系统安全运维（CCRC)证明公司已建立并实施符合国际标准的信息系统安全运维体系，有效提升信息系统的稳定性和可靠性。'
  },
  {
    title: '信息安全服务资质证书-安全工程类（一级）',
    logo: new URL('../img/qualify/10.png', import.meta.url).href,
    info: '信息安全服务资质证书-安全工程类（一级）证明企业具备高水平的信息安全技术和服务能力，符合行业安全标准。'
  },
  {
    title: '建筑业企业资质证书-电子与智能化工程专业承包（二级）',
    logo: new URL('../img/qualify/12.png', import.meta.url).href,
    info: '建筑业企业资质证书-电子与智能化工程专业承包（二级）证明企业具备从事电子与智能化工程施工的能力，符合行业要求。'
  },
  {
    title: '广东省守合同重信用企业”公示证书（2016-2020连续五年）',
    logo: new URL('../img/qualify/14.png', import.meta.url).href,
    info: '广东省守合同重信用企业公示证书证明企业在合同履行中表现良好，信用优良，符合省级守信标准。'
  },
  {
    title: '中国电子信息行业联合会会员证书',
    logo: new URL('../img/qualify/15.png', import.meta.url).href,
    info: '中国电子信息行业联合会会员证书证明企业是电子信息行业的正式会员，符合行业规范和标准。'
  },
  {
    title: '大华安防系列产品广东地区核心战略合作伙伴',
    logo: new URL('../img/qualify/18.png', import.meta.url).href,
    info: '大华安防系列产品广东地区核心战略合作伙伴证明企业与大华安防建立了深度合作关系，具备区域市场影响力。'
  },
  {
    title: '联想凌拓注册级授权经销商',
    logo: new URL('../img/qualify/19.png', import.meta.url).href,
    info: '联想凌拓注册级授权经销商证明企业获得联想凌拓品牌的正式授权，可以合法销售和分销其产品，且符合联想凌拓的经销商资格要求。'
  },
  {
    title: '中国通信企业协会会员证书',
    logo: new URL('../img/qualify/16.png', import.meta.url).href,
    info: '中国通信企业协会会员证书证明企业是中国通信行业的正式会员，具有在行业内的合法地位，遵守相关法规和标准，积极参与行业的发展和交流。'
  },
  {
    title: 'ORACLE智慧环保系统应用支撑平台',
    logo: new URL('../img/qualify/17.png', import.meta.url).href,
    info: 'ORACLE智慧环保系统平台通过大数据、云计算等技术支持环境监测、数据分析和智能决策，提升环保管理效率。'
  },
  {
    title: 'CMMI L3-DEV V2.0（CMMI-3级）',
    logo: new URL('../img/qualify/6.png', import.meta.url).href,
    info: 'CMMI L3-DEV V2.0（CMMI-3级）表示组织开发过程标准化、管理化和持续改进。'
  },
  {
    title: '信息系统建设和服务能力证书(二级)(CS-2级)',
    logo: new URL('../img/qualify/7.png', import.meta.url).href,
    info: '信息系统建设和服务能力证书(二级)(CS-2级)认证表明组织在信息系统建设和服务方面具备一定的能力和规范化管理。'
  },
  {
    title: '信息技术服务运行维护标准符合性证书',
    logo: new URL('../img/qualify/11.png', import.meta.url).href,
    info: '信息技术服务运行维护标准符合性证书证明组织符合相关的IT服务运行与维护标准。'
  },
  {
    title: '企业信用等级证书（AAA级）',
    logo: new URL('../img/qualify/13.png', import.meta.url).href,
    info: 'AAA企业级信用企业等级信用证等级书表示企业信用证优秀书，具备表较强的偿债明企业信用优秀能力，和具有良较好的强的偿债信誉能力和良好的商业信誉。'
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
  width: 1605px;
  height: auto;
  display: flex;
  justify-content: center;
}
.midContent{
  width: 1650px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.bigContent .inContent{
  width: 379px;
  height: 300px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  transition: all 0.5s;
}
.inContent:last-child{
  margin-right: auto;
}
.inContent a{
  padding: 20px;
}
.inContent:hover{
  transform: translateY(-10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.content-img{
  width: 337px;
  height: 64px;
  display: flex;
}
.content-body{
  width: 337px;
  height: 128px;
  margin-top: 20px;
}
.body-heading{
  font-size: 12pt;
  font-weight: 700;
  text-align: left;
}
.body-info{
  margin-top: 8px;
  font-size: 12pt;
  text-align: left;
}
</style>
