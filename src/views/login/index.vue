<template>
<div class="login">
    <el-card class="box-card">
        <div>
            <img src="../../assets/images/logo_index.png" alt="">
        </div>
				<el-form ref="loginForm" :rules="rules" :model="ruleForm">
					<el-form-item label="手机号码" label-width="80px" prop="phoneNumber">
    				<el-input placeholder="请输入手机号" v-model="ruleForm.phoneNumber"></el-input>
  				</el-form-item>
					<el-form-item label="验证码" label-width="80px" prop="code">
    				<el-input style="width:60%;float:left" placeholder="请输入验证码" v-model="ruleForm.code"></el-input>
						 <el-button style="float:right">发送验证码</el-button>
  				</el-form-item>
					<el-form-item prop="checked">
						<el-checkbox v-model="ruleForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
					</el-form-item>
					<el-form-item>
					<el-button @click="toSubmit" type="primary" style="width:100%">提交</el-button>
					</el-form-item>
				</el-form>
    </el-card>
</div>
</template>

<script>
export default {
  data () {
    let check = function (rule, value, callback) {
      if (!value) {
        return callback(new Error('请仔细阅读'))
      }
    }
    return {
      ruleForm: {
        phoneNumber: '',
        code: '',
        checked: false
      },
      rules: {
        phoneNumber: [
          { required: true, message: '不可为空', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的格式', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '不可为空', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入6位数验证码', trigger: 'blur' }
        ],
        checked: [
          { validator: check }

        ]

      }
    }
  },
  methods: {
    toSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('登录成功')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
    width:100%;
    height: 100vh;
    background-image: url('../../assets/images/login_bg.jpg');
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
