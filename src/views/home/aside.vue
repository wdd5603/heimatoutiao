<template>
  <div class="layout-con">
    <div class="layout-aside">
      <img src="../../assets/images/logo_admin.png" alt />
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document-copy"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-house"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-con {
  background-color:#323745;
  height: 100vh;
  .layout-aside {
    padding: 15px 0;
    text-align: center;
    img {
      width: 120px;
    }
  }
}
</style>
