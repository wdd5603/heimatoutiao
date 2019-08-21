<template>
  <el-container>
    <!-- 左侧导航容器 -->
    <el-aside width="200px">
      <aside-view></aside-view>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import aside from './aside'
export default {
  components: {
    'aside-view': aside
  }
}
</script>

<style lang='less'>

</style>
