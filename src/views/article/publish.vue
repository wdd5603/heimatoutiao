<template>
  <el-card>
    <bread-crum slot="header">
      <template slot="breadTitle">内容发布</template>
    </bread-crum>
    <div class="text item">
      <el-form label-width="100px">
        <el-form-item label="标题：">
          <el-input v-model="input" style="width:500px" placeholder="请输入内容" clearable></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            style="height: 300px;"
            :options="editorOption"
          ></quill-editor>
        </el-form-item>
        <el-form-item label="封面：">
          <el-radio-group v-model="radio">
            <el-radio :label="1">单图</el-radio>
            <el-radio :label="2">三图</el-radio>
            <el-radio :label="3">无图</el-radio>
            <el-radio :label="4">自动</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components: {
    quillEditor
  },
  data () {
    return {
      input: '',
      radio: '',
      content: null,
      editorOption: {}
    }
  }
}
</script>

<style>
</style>
