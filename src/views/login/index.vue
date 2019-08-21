<template>
    <div class="login">
      <el-card class="box-card">
        <div>
          <img src="../../assets/images/logo_index.png" alt />
        </div>
        <el-form ref="loginForm" :rules="rules" :model="ruleForm">
          <el-form-item label="手机号码" label-width="80px" prop="phoneNumber">
            <el-input placeholder="请输入手机号" v-model="ruleForm.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="验证码" label-width="80px" prop="code">
            <el-input style="width:60%;float:left" placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
            <el-button style="float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="checke">
            <el-checkbox v-model="ruleForm.checke">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button @click="toSubmit" type="primary" style="width:100%">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    let check = function (rule, value, callback) {
      if (!value) {
        return callback(new Error('请仔细阅读'))
      }
      callback()
    }

    return {
      ruleForm: {
        phoneNumber: '',
        code: '',
        checke: false
      },
      rules: {
        phoneNumber: [
          { required: true, message: '不可为空', trigger: 'blur' }, // trigger: 'blur'为默认，可不写
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的格式' }

        ],
        code: [
          { required: true, message: '不可为空' },
          { pattern: /^\d{6}$/, message: '请输入6位数验证码' }
        ],
        checke: [{ validator: check }]
      }
    }
  },
  methods: {
    toSubmit () {
      // 将表单所有数据进行校验
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          debugger
          axios
            .post('/authorizations', this.ruleForm)
            .then(result => {
              this.$router.push('/home')
              window.localStorage.setItem('user_info', JSON.stringify(result.data.data))
            })
            .catch(() => {
              this.$message({
                message: '输入有误',
                type: 'warning'
              })
            })
        }
      })
    }
    // toSubmit () {
    //   // validate  手动校验表单数据
    //   // isOK是 当前表单是否通过了校验
    //   // result是当前的校验结果
    //   this.$refs.loginForm.validate(isOK => {
    //     if (isOK) {
    //       // 通过了校验
    //       this.$axios({
    //         method: 'post',
    //         url: '/authorizations',
    //         data: this.formData // post参数是在data中写入的
    //       }).then(result => {
    //         window.localStorage.setItem('user-info', JSON.stringify(result.data))
    //         // 编程式导航
    //         this.$router.push('/home')
    //       })
    //     }
    //   })
    // }
  }
}
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/login_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 430px;
    height: 330px;
    text-align: center;
    img {
      width: 200px;
      margin-bottom: 20px;
    }
  }
}
</style>
