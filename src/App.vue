<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:37:14
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-12-15 16:02:20
-->
<template>
    <div class="EntirePage">
        <div class="container">
            <div class="header" :class="{ sticky: flag}">
                <img style="width: 250px"
                :src="headerLogo"
                alt="Enterprise Logo"
                class="LogoPic"/>
                <el-menu
                :default-active="activeIndex"
                class="el-menu-cus"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
                >
                    <el-menu-item :class="{ sticky2 : flag}" index="/">首页</el-menu-item>
                    <el-menu-item :class="{ sticky2 : flag}" index="/solution">解决方案</el-menu-item>
                    <el-menu-item :class="{ sticky2 : flag}" index="/case">客户案例</el-menu-item>
                    <el-menu-item :class="{ sticky2 : flag}" index="/part">生态与合作</el-menu-item>
                    <el-menu-item :class="{ dropdown:true, sticky2 : flag}" index="/aboutus" disabled>
                        <span :class="{ dropbtn:true, sticky2 : flag}">关于我们</span>
                        <div class="dropdown-content">
                            <a href="#" @click.prevent="handleSelect('/aboutus',['/aboutus'])">介绍</a>
                            <a href="#" @click.prevent="handleSelect('/qualify',['/qualify'])">资质荣誉</a>
                            <!-- <a href="#" @click.prevent="handleSelect('/response',['/response'])">社会责任</a> -->
                        </div>
                    </el-menu-item>
                    <el-menu-item :class="{ sticky2 : flag}" index="/contactus">联系我们</el-menu-item>
                </el-menu>
            </div>
            <div class="main">
                <router-view v-slot="{ Component }" @son-click="clickEven">
                    <transition name="scale" mode="out-in">
                        <div :key="$route.fullPath">
                            <component :is="Component" />
                        </div>
                    </transition>
                </router-view>
            </div>
        </div>
        <div class="footer">
            <div class="footer_info">
                <div class="footer_header" style="color: black; font-size: 20pt; display: flex;">
                    <span style="float: left;">关注我们</span>
                    <img class="footer_img wechat" src="./img/icon/微信_wechat.svg" />
                    <img class="footer_img" src="./img/icon/微博_weibo.svg" />
                    <img class="footer_img" src="./img/icon/抖音_tiktok.svg" />
                </div>
                <el-divider style="float: left;" />
                <div class="footer_content" style=" color: black; float: left; display: flex;">
                    <div class="content_place">
                        <div><span style="font-size: 15pt;">加入我们</span></div>
                        <div style="margin-top: 10px;"><a href="#/contactus" @click="pageReload">社会招聘</a></div>
                        <div style="margin-top: 10px;"><a href="#/contactus" @click="pageReload">校园招聘</a></div>
                        <div style="margin-top: 10px;"><a href="#/contactus" @click="pageReload">国际招聘</a></div>
                    </div>
                    <div class="content_place">
                        <div><span style="font-size: 15pt;">联系我们</span></div>
                        <div style="margin-top: 10px;"><a href="#/contactus" @click="pageReload">客户服务</a></div>
                        <div style="margin-top: 10px;"><a href="#/contactus" @click="pageReload">合作洽谈</a></div>
                    </div>
                    <div class="content_place">
                        <div><span style="font-size: 15pt;">法律信息</span></div>
                        <div style="margin-top: 10px;"><a href="#" @click="openError">服务协议</a></div>
                        <div style="margin-top: 10px;"><a href="#" @click="openError">知识产权</a></div>
                    </div>
                </div>
                <el-divider style="float: left;" />
                <div style="width: 100%; height: 50px; color: black; float: left; text-align: center;">
                    <div><span>Copyright © 2024 - 2024 All Rights Reserved. 广州铭城计算机科技有限公司 版权所有</span></div>
                    <div><a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">粤ICP备10044164号-1</a></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus';
import { onMounted, onBeforeMount } from 'vue';
import { onUnmounted } from 'vue';
const result = ref('')

const flag = ref(false)
const router = useRouter()
const activeIndex = ref('');
var headerLogo = new URL('./img/logo2-white.png', import.meta.url).href

/**
 * 处理菜单选择事件的函数
 * 当用户在菜单中选择项目时，调用此函数根据选择的项目执行相应的操作
 * @param {string} key - 被选中的菜单项的索引
 * @param {string[]} keyPath - 被选中的菜单项的路径
 * @returns {void} 无返回值
 */
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  // 根据选中的菜单项执行相应的操作
  switch (key) {
    case '/':
      // 当选中第一个菜单项时，导航到名为 'homePage' 的路由
      router.push({ name: 'homePage' })
      break
    case '/solution':
      // 当选中第二个菜单项时，导航到名为 'solutionPage' 的路由
      router.push({ name: 'solutionPage'})
      break
    case '/case':
      // 当选中第二个菜单项时，导航到名为 'casePage' 的路由
      router.push({ name: 'casePage'})
      break
    case '/part':
        router.push({ name: 'partPage'})
        break
    case '/aboutus':
        router.push({ name: 'aboutusPage'})
        activeIndex.value = '/aboutus'
        setTimeout(() => {
            location.reload()
        },1)
        break
    case '/contactus':
        router.push({ name: 'contactusPage'})
        break
    case '/qualify':
        router.push({ name: 'qualifyPage'})
        activeIndex.value = '/aboutus'
        setTimeout(() => {
            location.reload()
        },1)
        break
    case '/response':
        router.push({ name: 'responsePage'})
        activeIndex.value = '/aboutus'
        setTimeout(() => {
            location.reload()
        },1)
        break
  }
}


const scrollEvent = () => {
  const dis = document.documentElement.scrollTop || document.body.scrollTop
//   const dis = (e.target instanceof HTMLElement) ? e.target.scrollTop : 10; // 明确声明 e.target 的类型
//   console.log('scrollTop:', dis);
  // 使用 flag 的方式要通过 ref
  flag.value = dis > 150;
  if (dis > 150) {
    headerLogo = new URL('./img/logo2.png', import.meta.url).href
  } else {
    headerLogo = new URL('./img/logo2-white.png', import.meta.url).href
  }
}

onBeforeMount(() => {
  setTimeout(() => {
    activeIndex.value = router.currentRoute.value.fullPath;
    switch(activeIndex.value){
        case '/qualify':
            activeIndex.value = '/aboutus'
            break
        case '/response':
            activeIndex.value = '/aboutus'
            break
        case '/caseOne':
            activeIndex.value = '/case'
            break
        case '/caseTwo':
            activeIndex.value = '/case'
            break
        case '/caseThird':
            activeIndex.value = '/case'
            break
        case '/caseFour':
            activeIndex.value = '/case'
            break
    }
    console.log(activeIndex)
  }, 0);
})

onMounted(() => {
    window.addEventListener('scroll', scrollEvent)

})

onUnmounted(() => {
    window.removeEventListener('scroll', scrollEvent)
})

/**
 * 显示错误信息的函数
 * 当用户点击未开发完成的功能时，调用此函数弹出错误提示
 * @returns {void} 无返回值
 */
const openError = () => {
  // 使用 Element Plus 的 Message 组件显示错误信息
  ElMessage.error('噢，你点击的地方还没有开发完成呢！')
}

interface ValType {
  key: string;
}

const clickEven = (val: ValType) => {
    result.value=val.key
    activeIndex.value = result.value
}

const pageReload = () => {
  setTimeout(() => {
    window.location.reload()
  }, 0)
}

</script>

<style>
@import './assets/font.css';
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin: 0;
  padding: 0;
  min-width: 100%;
  min-height: 100vh;
}
body{
    width: 100%;
    min-width: 1500px;
    /* height: 2000px; */
}
html{
    overflow: scroll;
}
.EntirePage{
    /* height: 100vh; */
    overflow: auto;
}
.container{
    background-color: white;
    position: relative;
    width: 100%;
    min-height: auto;
    /* background-image: url(./img/Background1.jpg); */
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
.header{
    /* background-color: transparent !important; */
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 7vh;
    /* color: white !important; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    backdrop-filter: saturate(50%) blur(4px);
    /* background-image: radial-gradient(transparent 1.6px, black 1px);
    background-size: 4px 4px; */
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
}
.header.sticky{
    background-color: white;
    backdrop-filter: none;
    background-image: none;
    background-size: none;
}
.header > .LogoPic{
    margin-left: 200px;
}
.main{
    background-color: transparent !important;
    height: auto;
}
.footer{
    background-color: white;
    height: 400px;
}
.el-menu > .el-menu-item{
    font-size: 12pt;
    color: white !important;
    background-color: transparent !important;
    width: 100px;
    border-bottom: none !important;
}
.el-menu > .el-menu-item.is-active{
    border-bottom: none !important;
}
.el-menu > .el-menu-item.is-active::after{
    content: '';
    position: absolute;
    left: auto;
    /* top: 10px; */
    bottom: 15px;
    right: auto;
    height: 2px;
    width: 30px;
    background-color: #459cf6;
}
.el-menu > .el-menu-item.sticky2{
    color: black !important;
}
.menutitle{
    font-size: 12pt;
    color: white !important;
    background-color: transparent !important;
    width: 100px;
    border-bottom: none !important;
}

.sticky3{
    color: black !important;
}
.el-menu-cus{
    background-color: transparent !important;
    border-bottom: 0 !important;
    width: auto;
    padding-right: 200px;
}
.footer_info{
    height: 240px;
    background-color: white !important;
    width: auto;
    margin-left: 20vh;
    margin-right: 20vh;
    padding: 30px;
}
.footer_img{
    margin-left: 30px;
    width: 40px;
}
a:link {
	color:black;
}
a:visited {
	color:black;
}
a:hover {
	color:black;
}
.content_place{
    margin-right: 40px;
}
.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.3s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}
.dropdown{
    position: relative;
    display: inline-block;
}
#app > div > div.container > div.header > ul > li.el-menu-item.is-disabled.dropdown{
    opacity: 1;
}
.dropdown-content {
    color: black;
    display: block;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    top:70px;
    border-radius: 10px;
    overflow: hidden;
    transition: opacity 0.3s ease, visibility 0s 0.3s;
}
.dropdown:hover .dropdown-content {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s 0s;
}
.dropbtn {
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.dropbtn.sticky2{
    color: black;
}
.dropdown-content a {
    height: 50px;
    color: black;
    text-decoration: none;
    display: block;
    transition: background-color 0.3s ease;
}
.dropdown-content a:hover {
    background-color: #bebebe
}
</style>
