<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>内容修改</span>
    </div>
    <div class="text item">
      <el-form label-width="100px">
        <el-form-item label="标题：">
          <el-input v-model="input" style="width:500px" placeholder="请输入内容" clearable></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            style="height: 500px;"
            :options="editorOption"
          ></quill-editor>
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
      content: null,
      editorOption: {}
    }
  }
}
</script>

<style>
</style>
