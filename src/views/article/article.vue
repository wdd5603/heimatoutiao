<template>
  <div v-loading="loading">
    <el-card class="nav_card">
      <bread-crum slot="header">
        <template slot="breadTitle">内容列表</template>
      </bread-crum>
      <el-form label-width="100px">
        <el-form-item label="文章状态：">
          <el-tabs v-model="formData.activeName" @tab-click="conditionChange">
            <el-tab-pane label="全部" name="4"></el-tab-pane>
            <el-tab-pane label="草稿" name="0"></el-tab-pane>
            <el-tab-pane label="待审核" name="1"></el-tab-pane>
            <el-tab-pane label="审核通过" name="2"></el-tab-pane>
            <el-tab-pane label="审核失败" name="3"></el-tab-pane>
          </el-tabs>
        </el-form-item>
        <el-form-item label="频道列表：">
          <el-select
            v-model="formData.channelId"
            placeholder="请选择"
            clearable
            @clear="clearSelect"
            @change="conditionChange"
          >
            <el-option
              v-for="item in channelOption"
              :key="item.id.toString()"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间选择：">
          <el-date-picker
            v-model="formData.dateRange"
            type="daterange"
            range-separator="—"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="conditionChange"
            clearable
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="content_card">
      <div slot="header" class="clearfix">
        <span>共找到{{totleCount}}条符合条件的内容</span>
      </div>

      <el-row
        v-for="item in contentList"
        :key="item.id.toString()"
        class="text_item"
        type="flex"
        justify="space-between"
        align="top"
      >
        <el-row type="flex">
          <img :src="item.cover.images" alt width="150" height="160" />
          <div>
            <p>{{item.title}}</p>
            <el-tag>{{item.status | toFliterStatus}}</el-tag>
            <p style="font-size:12px;">{{item.pubdate}}</p>
          </div>
        </el-row>
        <el-row type="flex" justify="end" class="font_icon">
          <i class="el-icon-edit" @click="editItem(item.id)" style="cursor:pointer">修改</i>
          <i class="el-icon-delete" @click="delItem(item.id)" style="cursor:pointer">删除</i>
        </el-row>
      </el-row>
      <el-row type="flex" justify="center">
        <el-pagination
          @current-change="currentChange"
          :current-page="formData.page"
          background
          layout="prev, pager, next"
          :total="totleCount"
        ></el-pagination>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        activeName: '4',
        channelId: null,
        dateRange: [],
        pageSize: 10,
        page: 1
      },
      channelOption: [],
      contentList: [],
      totleCount: 0,
      loading: false
    }
  },
  methods: {
    // 当前页发生变化
    currentChange (val) {
      this.formData.page = val
      this.getContentList()
    },
    // 编辑内容
    editItem (id) {
      this.$router.push(`/home/contlistedit/${id}`)
    },
    // 删除内容
    delItem (id) {
      this.$confirm('确定删除此条内容吗？', '提示').then(() => {
        this.$axios({
          method: 'delete',
          url: `/articles/${id.toString()}`
        }).then(result => {
          this.getContentList()
        })
      })
    },
    // 当频道列表点击清空时触发
    clearSelect () {
      this.formData.channelId = null
      this.getContentList()
    },
    // 获取频道列表
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channelOption = result.data.channels
      })
    },
    getContentList () {
      this.loading = true
      let { activeName, channelId, dateRange, pageSize, page } = this.formData
      this.$axios({
        url: '/articles',
        params: {
          status: activeName === '4' ? null : activeName,
          channel_id: channelId,
          begin_pubdate: dateRange && dateRange.length ? dateRange[0] : '',
          end_pubdate: dateRange && dateRange.length > 1 ? dateRange[1] : '',
          page: page,
          per_page: pageSize
        }
      }).then(result => {
        this.contentList = result.data.results
        this.totleCount = result.data.total_count
        this.loading = false
      })
    },
    // 此方法用于查询条件变化时将分页重置到第一页
    conditionChange () {
      this.formData.page = 1
      this.getContentList()
    }
  },

  filters: {
    toFliterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '审核通过'
        case 3:
          return '审核失败'
      }
    }
  },
  created () {
    // 获取频道列表
    this.getChannels()
    // 获取内容列表
    this.conditionChange()
  }
}
</script>

<style lang="less" scoped>
.nav_card {
  margin: 10px;
}
.content_card {
  margin: 0 10px 10px;
  .text_item {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding: 0 10px 10px;
    img {
      margin-right: 15px;
    }
    .font_icon {
      font-size: 12px;
      .el-icon-edit {
        margin-right: 20px;
      }
    }
  }
}
</style>
