<!--
 * @Descripttion: 
 * @version: 
 * @Author: Ricardo_Mars
 * @Date: 2024-11-20 15:31:35
 * @LastEditors: Ricardo_Mars
 * @LastEditTime: 2024-11-21 17:21:49
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
    <div class="right_place"><a href="#/" @click="pageReload">首页</a>>关于我们>社会责任</div>
  </div>
  <el-divider width="100px" id="header_divider"></el-divider>
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
</style>
