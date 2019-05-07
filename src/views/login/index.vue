<template>
  <div class="login-container">
    <!--登录框-->
    <div class="login-box">
      <h2 class="title">宁波市急救中心智慧急救平台</h2>
      <div class="form-box">
        <div class="demo-input-suffix">
          <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.username" placeholder="请输入用户名">
                <i slot="prefix" class="el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" @keyup.enter.native="handleLogin" type="password" placeholder="请输入密码">
                <i slot="prefix" class="el-icon-lock"></i>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <!--登录成功的话，需要检测数据是否加载完毕-->
        <div class="login-btn" @click="handleLogin">立即登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      notes: {
        backgroundImage:require('../../assets/login-bg.jpg')
      },
      form:{
        username:'',
        password:'',
      },
      loginForm: {
        username: 'admin',
        password: 'admin'
      },
    }
  },
  watch: {
    $route: {
      handler: function(route) {

      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      if(this.form.username === 'admin' && this.form.password === '123456') {
        this.$message({
          type:'success',
          message:'登录成功'
        })
        setTimeout(() => {
          this.$router.push({
            name:'dashboard'
          })
        },1000)
      }else{
        this.$message({
          type:'error',
          message:'用户名或密码错误,登录失败'
        })
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.login-container{
  width:100%;
  height:100%;
  background-size: cover;
  background-position: center;
  overflow:hidden;
  background:url('../../assets/login-bg.jpg');
}
.login-box{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  .title{
    width:100%;
    text-align:center;
    color:#fff;
    font-size:24px;
    font-weight:normal;
  }
  .form-box{
    width:400px;
    padding:20px;
    box-sizing:border-box;
    background:rgba(0,0,0,0.3);
    border-radius:4px;
  }
}
.login-btn{
  width:100%;
  height:40px;
  line-height:40px;
  border-radius:4px;
  font-size:16px;
  color:#fff;
  text-align:center;
  background:#409EFF;
  cursor:pointer;
}
</style>
