<template>
  <el-container>
    <!-- 左侧导航容器 -->
    <el-aside width="200px">
      <aside-view></aside-view>
    </el-aside>
    <el-container>
      <el-header>
        <header-view></header-view>
      </el-header>
      <el-main style="padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang='less'>
</style>
