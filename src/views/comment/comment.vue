<template>
  <el-card>
    <bread-crum slot="header">
      <template slot="breadTitle">评论列表</template>
    </bread-crum>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="title" label="标题" width="300"></el-table-column>
      <el-table-column :formatter="format" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="评论总数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column prop="address" label="操作" width="200">
        <el-row>
          <el-button size="mini" round>修改</el-button>
          <el-button size="mini" round>{{cellValue?'关闭评论':'打开评论'}}</el-button>
        </el-row>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getTableList () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.tableData = result.data.results
      })
    },
    format (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getTableList()
  }
}
</script>

<style>
</style>
