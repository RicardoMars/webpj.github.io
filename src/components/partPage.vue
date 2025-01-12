<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-18 16:41:32
-->
<template>
  <div class="Header">
    <div class="content">
      <p>Ecosystem Partners</p>
      <p style="font-size: 30px;">生态合作伙伴</p>
    </div>
  </div>
  <div class="divider">
    <div class="left_place">生态合作伙伴</div>
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>生态合作伙伴</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
  <div class="beforeContent">
    <div class="bigContent">
      <div class="contentTitle">合作伙伴</div>
      <div class="beforePart">
        <div class="partPage" v-for="item in items2">
          <img :src="item.logo" style="width: 70%;">
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="customer">
      <div class="contentTitle">重点客户 + 产业合作伙伴</div>
      <div class="customer_in" v-for="item in images">
        <div class="left_logo">
          <img :src="item.src" style="width: 120px;">
          <p>{{ item.title }}</p>
        </div>
        <div class="right_content">
          <div class="inside_content" v-for="item in images1"><img :src="item.logo"></div>
        </div>
      </div>
      <div class="customer_in" v-for="item in images2">
        <div class="left_logo">
          <img :src="item.src" style="width: 120px;">
          <p>{{ item.title }}</p>
        </div>
        <div class="right_content">
          <div class="inside_content" v-for="item in images2_1"><img :src="item.logo"></div>
        </div>
      </div>
      <div class="customer_in" v-for="item in images3">
        <div class="left_logo">
          <img :src="item.src" style="width: 120px;">
          <p>{{ item.title }}</p>
        </div>
        <div class="right_content">
          <div class="inside_content" v-for="item in images3_1"><img :src="item.logo"></div>
        </div>
      </div>
      <div class="customer_in" v-for="item in images4" style="height: 300px;">
        <div class="left_logo">
          <img :src="item.src" style="width: 120px;">
          <p>{{ item.title }}</p>
        </div>
        <div class="right_content">
          <div class="inside_content" v-for="item in images4_1"><img :src="item.logo"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const images1 = [
  {
    logo: new URL('../img/customer/gov/1.1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.2.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.3.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.4.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.5.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.6.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.7.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.8.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.9.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/gov/1.10.png', import.meta.url).href,
  }
]

const images = [
  {
    title: '政府公共事业',
    src: new URL('../img/customer/gov.svg', import.meta.url).href,
  },
]

const images2 = [
  {
    title: '金融行业',
    src: new URL('../img/customer/finance.svg', import.meta.url).href,
  },
]
const images2_1 = [
  {
    logo: new URL('../img/customer/finance/1.1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.2.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.3.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.4.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.5.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.6.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.7.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.8.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.9.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/finance/1.10.png', import.meta.url).href,
  }
]

const images3 = [
  {
    title: '教育行业',
    src: new URL('../img/customer/edu.svg', import.meta.url).href,
  },
]
const images3_1 = [
  {
    logo: new URL('../img/customer/edu/1.1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/edu/1.2.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/edu/1.3.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/edu/1.4.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/edu/1.5.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/edu/1.6.png', import.meta.url).href,
  }
]

const images4 = [
  {
    title: '企业',
    src: new URL('../img/customer/company.svg', import.meta.url).href,
  },
]
const images4_1 = [
  {
    logo: new URL('../img/customer/company/1.1.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.2.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.3.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.4.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.5.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.6.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.7.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.8.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.9.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.10.png', import.meta.url).href,
  },
  {
    logo: new URL('../img/customer/company/1.11.png', import.meta.url).href,
  }
]

let items2 = [] as any[]

// const files = import.meta.glob('../img/partners/logo*')
// for (const path in files) {
//   items2.push({
//     logo: new URL(path, import.meta.url).href
//   })
// }
// console.log(items2);

items2 = [
  {
    logo: new URL('../img/partners/logo1.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo2.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo3.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo4.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo5.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo6.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo7.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo8.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo9.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo10.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo11.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo12.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo13.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo14.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo15.png', import.meta.url).href
  },
  {
    logo: new URL('../img/partners/logo16.png', import.meta.url).href
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
.beforeContent{
  width: 100%;
  height: auto;
  justify-items: center;
}
.bigContent{
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  max-width: 1200px;
  height: auto;
  justify-items: center;
  padding-top: 30px;
  flex-wrap: wrap;
}
.partPage{
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  width: 170px;
  height: 70px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.partPage:last-child{
  margin-right: auto;
}
.contentTitle{
  color: black;
  width: 100%;
  font-size: 20pt;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  position: relative;
  display: flex;
  justify-content: center;
}
.contentTitle::after{
    content: '';
    position: absolute;
    /* 去掉多余的 left 和 right 属性 */
    top: 48px;
    height: 4px;
    width: 130px;
    background-color: #347bc7;
}
.el-menu > .customer{
  width: 100%;
  justify-items: center;
}
.customer_in{
  width: 1300px;
  height: 200px;
  background-color: blue;
  position: relative;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
  margin-top: 30px;
}
.left_logo{
  position: absolute;
  width: 200px;
  height: 100%;
  background-color: #2095E4;
  align-content: center;
  border-top-left-radius: 20%;
  border-bottom-left-radius: 20%;
}
.left_logo p{
  font-size: 15pt;
  color: white;
  line-height: 0;
}
.right_content{
  display: flex;
  justify-content: center;
  float: right;
  width: 1100px;
  height: 100%;
  background-color: #eff4ff;
  flex-wrap: wrap;
}
.inside_content{
  margin-top: 20px;
}
.inside_content img{
  width: 200px;
  margin-right: 15px;
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
.beforePart{
  margin-left: 55px;
  min-width: 1200px;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
}
</style>
