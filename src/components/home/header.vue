<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between" align="middle" style="height:50px;">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span class="el-icon-s-unfold" style="font-size:20px;vertical-align:middle"></span>
          江苏传智播客教育科技股份有限公司
        </div>
      </el-col>
      <el-col :span="8" class="layout-right">
        <!-- 搜索框 -->
        <div class="grid-content bg-purple">
          <el-input placeholder="请输入内容" v-model="searchWords">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <!-- 用户头像 -->
        <img :src='circleUrl' alt />
        <!-- 右侧下拉菜单 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">个人信息</el-dropdown-item>
            <el-dropdown-item command="b">git地址</el-dropdown-item>
            <el-dropdown-item command="c">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchWords: '',
      circleUrl: require('../../assets/images/avatar.jpg')
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style lang='less' scoped>
.layout-right {
  display: flex;
  align-items: center;
  img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: red;
      margin: 0 10px;

  }
}
</style>
