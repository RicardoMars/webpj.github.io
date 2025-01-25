<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-17 17:27:20
-->
<template>
  <!-- <el-carousel :interval="9000" indicator-position="inside" height="600px" :pause-on-hover="false">
    <el-carousel-item v-for="(image, item) in images" :key="item">
      <img :src="image" alt="Carousel Image" style="width: 100%; height: 100%; object-fit: cover; filter:brightness(0.8)">
    </el-carousel-item>
  </el-carousel> -->
  <div class="headImg">
    <!-- <img src="../img/Background5.jpg" alt="Carousel Image" style="width: 100%; height: 600px; object-fit: cover; filter:brightness(0.8)"> -->
    <div class="bigContent">
      <div class="box1">
        <div class="show1">
        <img src="../img/indexImg/1.1.svg" alt="img1" style="object-fit: cover; width: 70%; height: 160px;" />
        <p style="margin: 0;">基础设施集成及运维</p>
        <p style="margin: 0; font-size: 10pt;">Integration and operation of infrastructure</p>
      </div>
      <a href="#/businessPage1" @click="pageReload">
        <div class="target1">
          <p style="margin: 0; font-size: 15pt;">基础设施集成及运维</p>
          <p style="margin: 0; font-size: 8pt; color:aquamarine; ">Integration and operation of infrastructure</p>
          <br />
          <p style="margin: 0; font-size: 11pt; text-indent: 2em;">提供包括运维体系建设、数据中心基础设施、私有云平台、服务器、存储、网络设备、数据库、中间件、操作系统等全生命周期运维服务</p>
        </div>
      </a>
      </div>
      <div class="box1">
        <div class="show2">
          <img src="../img/indexImg/1.2.svg" alt="img1" style="object-fit: cover; width: 70%; height: 160px;" />
          <p style="margin: 0;">信息安全集成与运维</p>
          <p style="margin: 0; font-size: 10pt;">Integration and operation of information security</p>
        </div>
        <a href="#/businessPage2" @click="pageReload">
          <div class="target2">
            <p style="margin: 0; font-size: 15pt;">信息安全集成与运维</p>
            <p style="margin: 0; font-size: 8pt; color:aquamarine; ">Integration and operation of information security</p>
            <br />
            <p style="margin: 0; font-size: 11pt; text-indent: 2em;">提供一站式信息安全与集成解决方案，从设备选型到策略实施，全方位保护您的信息系统，确保业务无忧运行。</p>
          </div>
        </a>
      </div>
      <div class="box1">
        <div class="show3">
          <img src="../img/indexImg/1.3.svg" alt="img1" style="object-fit: cover; width: 70%; height: 160px;" />
          <p style="margin: 0;">智能化系统集成及解决方案</p>
          <p style="margin: 0; font-size: 10pt;">Intelligent system integration and solutions</p>
        </div>
        <a href="#/businessPage3" @click="pageReload">
          <div class="target3">
            <p style="margin: 0; font-size: 15pt;">智能化系统集成及解决方案</p>
            <p style="margin: 0; font-size: 8pt; color:aquamarine; ">Intelligent system integration and solutions</p>
            <br />
            <p style="margin: 0; font-size: 11pt; text-indent: 2em;">提供全面的智能化系统集成服务，通过智慧联动技术，实现设备与系统的一键集成，为您的业务注入智能动力。</p>
          </div>
        </a>
      </div>
    </div>
  </div>
  <div class="aboutus-divider"></div>
  <div class="info_main">
    <div class="elrow">
      <div class="col1">
        <div class="col_img"><a href="#/aboutus" @click="pageReload"><img src="../img/page1-introduce.svg" alt="Image" style="width: 100%; height: 160px; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black;">公司介绍</h2>
          <span style="color: black;">广州铭诚计算机科技有限公司注册成立于2007年，是一家在系统集成领域极具影响力的高科技企业。总部位于广东省广州市，凭借其卓越的创新能力、专业的团队以及对客户需求的深刻理解，在行业内树立了良好的口碑。</span>
        </div>
      </div>
      <div class="col2">
        <div class="col_img"><a href="#/qualify" @click="pageReload"><img src="../img/page1-license.svg" alt="Image" style="width: 100%; height: 160px; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black;">企业资质</h2>
          <span style="color: black;">通过严格的认证和审批程序，我们获得了多项资质证书，证明了我们在技术实力、质量管理和服务水平等方面的领先优势。这些资质为客户提供了更多保障，体现了我们对质量和规范的坚守。</span>
        </div>
      </div>
      <div class="col1">
        <div class="col_img"><a href="#/qualify" @click="pageReload"><img src="../img/page1-weget.svg" alt="Image" style="width: 100%; height: 160px; object-fit: cover;"></a></div>
        <div class="col_text">
          <h2 style="color: black;">企业荣誉</h2>
          <span style="color: black;">通过持续创新和优质服务，我们荣获了多个行业奖项和社会认可。这些荣誉不仅是对我们实力的肯定，也激励我们不断追求卓越，为客户提供更高价值的产品和服务。</span>
        </div>
      </div>
    </div>
  </div>
  <div class="solutions-divider"></div>
  <div class="info_content_2">
    <div class="elrow2">
      <a>
        <div :class="{info2col1:true, col1diventer:showdiv}">
          <div class="col_img2">
            <img style="position: absolute; height: 250px; z-index: 0;" src="../img/indexImg/2.1.jpg" alt="Image">
            <h2 style="position: relative; z-index: 1; color: white;">基础设施集成以及运维服务</h2>
          </div>
          <div class="col_text">
            <span style="color: black;">在信息化日新月异的时代背景下，我们公司专注于为客户提供卓越的信息系统集成及运维服务。我们拥有一支技术精湛、经验丰富的专业团队，致力于将先进的信息技术与企业实际需求相结合，为客户量身打造高效、稳定、安全的信息系统解决方案。从系统规划、设计、实施到后续运维，我们始终坚持以客户为中心，确保每一项服务都能满足客户的严苛要求，助力企业在激烈的市场竞争中脱颖而出。</span>
          </div>
        </div>
      </a>
        <div :class="{info2col2:true, col2diventer:showdiv2}">
          <a>
            <div class="col_img2">
              <img style="position: absolute; height: 250px; z-index: 0;" src="../img/indexImg/2.2.jpg" alt="Image">
              <h2 style="position: relative; z-index: 1; color: white;">信息安全集成与运维</h2>
            </div>
            <div class="col_text">
              <span style="color: black;">公司作为专业的信息安全服务提供商，致力于为客户提供全方位的信息安全解决方案，以确保企业数据的安全与稳定。通过先进的安全集成技术和高效的运维服务，我们助力企业筑牢数据安全防线，应对不断变化的网络安全威胁。我们的服务旨在为企业保驾护航，确保其在数字化转型的道路上稳步前行。</span>
            </div>
          </a>
        </div>
      <a>
        <div :class="{info2col1:true, col1diventer:showdiv3}">
          <div class="col_img2">
            <img style="position: absolute; height: 250px; z-index: 0;" src="../img/indexImg/2.3.jpg" alt="Image">
            <h2 style="position: relative; z-index: 1; color: white;">智能化系统集成及解决方案</h2>
          </div>
          <div class="col_text">
            <span style="color: black;">从智能化系统的设计、集成到后期的运维管理，我们均能提供专业、高效的服务。通过持续的技术创新和优化，我们助力客户实现智能化转型，提升企业核心竞争力。我们的服务范围广泛，涵盖多个行业领域，满足不同客户的个性化需求。选择我们，您将获得智能化集成及运维的全面解决方案，为企业发展注入强劲动力。</span>
          </div>
        </div>
      </a>
    </div>
    <a href="#/solution" @click="sonClick('/solution')" style="display: inline-block; width: auto;"><div class="checkMore" style="margin-top: 10px;"><span>查看更多>></span></div></a>
  </div>
  <!-- <div class="info_content_3">
    <div class="service-divider"></div>
    <div class="servicebox">
      <div class="servicebox-content" v-for="item in items">
        <img :src="item.imgUrl" style="width: 60px;">
        <div>{{ item.title }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
    <a href="#/case" @click="sonClick('/case')"><div class="checkMore">查看更多>></div></a>
  </div> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
// import { reactive } from 'vue';

const showdiv = ref(false);
const showdiv2 = ref(false);
const showdiv3 = ref(false);


// 定义响应式的数据
// const images = [
//   new URL('../img/Background1.jpg', import.meta.url).href,
//   new URL('../img/Background2.jpg', import.meta.url).href,
//   new URL('../img/Background3.jpg', import.meta.url).href,
//   new URL('../img/Background4.jpg', import.meta.url).href
// ];

// const items = reactive([
//   {
//     imgUrl: new URL('../img/servicesicon/display.svg', import.meta.url).href,
//     title: '项目营销',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
//   {
//     imgUrl: new URL('../img/servicesicon/communication.svg', import.meta.url).href,
//     title: '需求沟通与管理',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
//   {
//     imgUrl: new URL('../img/servicesicon/design.svg', import.meta.url).href,
//     title: '解决方案设计',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
//   {
//     imgUrl: new URL('../img/servicesicon/success.svg', import.meta.url).href,
//     title: '落地与实施',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
//   {
//     imgUrl: new URL('../img/servicesicon/delivery.svg', import.meta.url).href,
//     title: '测试与交付',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
//   {
//     imgUrl: new URL('../img/servicesicon/phonecall.svg', import.meta.url).href,
//     title: '服务回访与跟踪',
//     content: '这里是正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文'
//   },
// ])

// const openError = (event: MouseEvent) => {
//   // 使用 Element Plus 的 Message 组件显示错误信息
//   event.preventDefault();
//   ElMessage.error('噢，你点击的地方还没有开发完成呢！')
// }

const scrollEvent = () => {
  const dis = document.documentElement.scrollTop || document.body.scrollTop
  if (dis > 450) {
    showdiv.value = true;
    setTimeout(() => {
      showdiv2.value = true;
    }, 400);
    setTimeout(() => {
      showdiv3.value = true;
    }, 600)
  }
}

onMounted(() => {
  // 监听滚动事件
  window.addEventListener('scroll', scrollEvent);
});

onUnmounted(() => {
  // 移除滚动事件监听
  window.removeEventListener('scroll', scrollEvent);
});

const emit = defineEmits(['son-click'])
const sonClick = (key:string) => {
  console.log(key)
  let params = {
    key: key
  }
  emit('son-click', params)
  setTimeout(() => {
    location.reload()
  },5)
}

const pageReload = () => {
  setTimeout(() => {
    window.location.reload()
  }, 0)
}

</script>


<style scoped>
.el-carousel{
  position: relative;
  z-index: 0;
  width: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.col1{
  max-width: 350px;
  min-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
}
.info2col1{
  min-width: 350px;
  max-width: 350px;
  height: 625px;
  background-color: white !important;
  flex: 1;
  transform: translateY(10%);
  opacity: 0;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
}
.col2{
  max-width: 350px;
  min-width: 350px;
  height: auto;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
  border-left: 1px solid #afafaf;
  border-right: 1px solid #afafaf;
  margin-left: 30px;
  margin-right: 30px;
}
.info2col2{
  min-width: 350px;
  max-width: 350px;
  height: 625px;
  background-color: white !important;
  flex: 1;
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
  margin-left: 30px;
  margin-right: 30px;
  transform: translateY(10%);
  opacity: 0;
}
.info_main{
  align-items: center;
  height: auto;
}
.info_content_2{
  height: auto;
  justify-items: center;
  align-items: center;
  background-color: rgb(235, 235, 235);
  padding-bottom: 30px;
}
.info_content_2 .elrow2{
  display: flex;
  min-width: 80%;
  justify-content: center;
}
.elrow{
  display: flex;
  min-width: 80%;
  margin-top: 30px;
  justify-content: center;
}
.col_img{
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col_img2{
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.col_img2 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter:brightness(0.5)
}
.col_text{
  min-height: 210px;
  width: auto;
  padding: 30px;
}
.aboutus-divider{
  background-image: url(../img/divider/aboutus-divider.png);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
}
.solutions-divider{
  background-image: url(../img/divider/BusinessLine-divider.png);
  background-color: rgb(235, 235, 235);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
}
.test{
  background-color: red;
  height: 500px;
  width: 300px;
}
.col1diventer{
  max-width: 350px;
  height: 625px;
  background-color: white !important;
  flex: 1;
  transform: translateY(0%) !important;
  opacity: 1!important;
  transition: all .5s ease;
}
.col2diventer{
  max-width: 350px;
  height: 625px;
  background-color: white !important;
  flex: 1;
  /* box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8); */
  margin-left: 30px;
  margin-right: 30px;
  transform: translateY(0%) !important;
  opacity: 1!important;
  transition: all .5s ease;
}
.service-divider{
  background-image: url(../img/divider/fullprocessservices-divider.png);
  background-repeat: no-repeat;
  background-position: center;
  height:150px;
  width: 100%;
}
.servicebox{
  display: flex;
  min-width: 1200px;
  max-width: 1200px;
  height: 600px;
  justify-content: center;
  flex-wrap: wrap;
}
.info_content_3{
  height: 900px;
  justify-items: center;
  align-items: center;
}
.servicebox-content{
  color: black;
  background-color: rgb(210, 235, 245);
  border: 1px solid rgba(116, 116, 116, 0.8);
  box-shadow: 10px 10px 5px -4px rgba(116, 116, 116, 0.8);
  width: 300px;
  height: 250px;
  margin-left: 30px;
  margin-right: 30px;
  align-content: center;
}
.checkMore{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-content: center; */
  background-color: black;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  transition: color 0.3s, background-color 0.3s;
}
.checkMore:hover{
  color: black;
  background-color: white;
}
.headImg{
  position: relative;
  width: 100%;
  height: 800px;
  background-image: url('../img/Background5.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bigContent{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}
.bigContent div{
  color: black;
  width: 200px;
  height: 250px;
  margin-left: 20px;
  margin-right: 20px;
  opacity: 1;
  /* background-color: red; */
}
.bigContent .box1{
  margin-top: 500px;
  position: relative;
}
.bigContent .box1 .show1{
  position: absolute;
}
.bigContent .box1 .show1:hover{
  opacity: 0;
}
.bigContent .box1 .target1{
  color: white;
  position: absolute;
  opacity: 0;
  background-color: rgb(52, 149, 206);
  transition: opacity 0.5s ease;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding-top: 15px;
}
.bigContent .box1 .target1:hover{
  opacity: 1;
}
.bigContent .box1 .target2:hover{
  opacity: 1;
}
.bigContent .box1 .show2{
  position: absolute;
}
.bigContent .box1 .show2:hover{
  opacity: 0;
}
.bigContent .box1 .target2{
  color: white;
  position: absolute;
  opacity: 0;
  background-color: rgb(52, 149, 206);
  transition: opacity 0.5s ease;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding-top: 15px;
}
.bigContent .box1 .target3:hover{
  opacity: 1;
}
.bigContent .box1 .show3{
  position: absolute;
}
.bigContent .box1 .show3:hover{
  opacity: 0;
}
.bigContent .box1 .target3{
  color: white;
  position: absolute;
  opacity: 0;
  background-color: rgb(52, 149, 206);
  transition: opacity 0.5s ease;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  padding-top: 15px;
}

</style>
