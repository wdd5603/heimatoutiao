<template>
  <el-card>
    <bread-crum slot="header">
      <template slot="breadTitle">评论列表</template>
    </bread-crum>
    <el-table :data="tableData" stripe style="width: 100%" border>
        <el-table-column prop="title" label="标题" width="300" align="center"></el-table-column>
        <el-table-column :formatter="format" prop="comment_status" label="评论状态" align="center"></el-table-column>
        <el-table-column prop="total_comment_count" label="评论总数" align="center"></el-table-column>
        <el-table-column prop="fans_comment_count" label="粉丝评论数" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" width="200" align="center">
          <template slot-scope="obj">
            <el-button size="mini" round>修改</el-button>
            <el-button size="mini" round @click="swichStatus(obj.row)">{{ obj.row.comment_status?'关闭评论':'打开评论' }}</el-button>
          </template>
        </el-table-column>
    </el-table>
  <el-row class="block" type="flex" justify="center" style="margin:20px 0;">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPpage"
      :page-sizes=pageSizes
      :page-size=pageSizes
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </el-row>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      currentPpage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40],
      totalCount: 0,
      tableData: []
    }
  },
  methods: {
    getTableList () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.currentPpage,
          per_page: this.pageSize
        }
      }).then(result => {
        this.tableData = result.data.results
        this.totalCount = result.data.total_count
      })
    },
    format (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    swichStatus (row) {
      this.$confirm(`确定要${row.comment_status ? '关闭' : '打开'}评论吗？`, '提示')
        .then(() => {
          this.$axios({
            method: 'put',
            url: '/comments/status',
            params: {
              article_id: row.id.toString()
            },
            data: {
              allow_comment: !row.comment_status
            }
          }).then(result => {
            this.getTableList()
          })
        })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getTableList()
    },
    handleCurrentChange (val) {
      this.currentPpage = val
      this.getTableList()
    }
  },
  created () {
    this.getTableList()
  }
}
</script>

<style>
</style>
