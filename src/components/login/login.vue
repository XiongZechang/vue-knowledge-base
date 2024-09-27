<template>
    <div class="login-container">
      <div class="left-panel">
        <img src="../../assets/login-bg.svg" alt="Welcome Image" class="welcome-image"/>
        <h2>欢迎使用知识库</h2>
        <p>探索知识的海洋，开启智慧的世界</p>
      </div>
      <div class="right-panel">
        <el-form v-if="login" ref="loginForm" :model="loginForm" label-width="0px" class="login-form">
          <h2 style="font-size: 35px;">知识库</h2>
          <el-form-item>
            用户名
            <el-input style="height: 40px;" v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item>
            密码
            <el-input style="height: 40px;" v-model="loginForm.password" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <!-- <el-link class="forgot-password" @click="handleForgotPassword">忘记密码</el-link> -->
          <el-form-item>
            <el-checkbox v-model="loginForm.remember">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Login" style="width: 500px; height: 40px;">登录</el-button>
          </el-form-item>
          <el-form-item>
            <!-- <el-button @click="login = !login" style="width: 500px; height:40px">注册</el-button> -->
          </el-form-item>
        </el-form>
        <el-form v-if="!login" ref="registerForm" :model="registerForm" :rules="registerRules" label-width="0" class="register-form">
        <h2>注册</h2>
        <el-form-item prop="username">
          用户名
          <el-input style="height:40px" v-model="registerForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item  prop="phone">
          手机号
          <el-input style="height:40px" v-model="registerForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          密码
          <el-input style="height:40px" v-model="registerForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
          确认密码
          <el-input style="height:40px" v-model="registerForm.repassword" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register" style="width: 500px; height:40px; margin-top: 20px;">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="login = !login" style="width: 500px; height:40px">已有账号？去登录</el-button>
        </el-form-item>
        
      </el-form>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { login, register } from '../../api/user'; // Assuming you have an API module for user-related requests
  import { setToken, setName } from '../../utils/auth'; // Assuming you have a utility function to set cookies
  import { ElMessage } from 'element-plus'
  
  export default defineComponent({
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: '123456',
          remember: true,
        },
        login: true,
        registerForm: {
          username: '',
          phone: '',
          password: '',
          repassword: '',
        },
        registerRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 11, message: '请输入正确的手机号', trigger: ['blur', 'change'] },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少六位', trigger: 'blur' },
          ],
          repassword: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度最少六位', trigger: 'blur' },
          ],
        },
      };
    },
    methods: {
      async Login() {
        try {
          const response = await login(this.loginForm); 
          if(response.status === 200){
            ElMessage({
              message: '登录成功',
              type: 'success',
            });
            const token = response.data.data.token;
            console.log(token);
            console.log(this.loginForm.username)
            setName(this.loginForm.username);
            setToken(token);
            setTimeout(() => {
              this.$router.push('/index');
            }, 1500);
          } else {
            ElMessage({
              message: '登录失败',
              type: 'error',
            });
          }
        } catch (error) {
          ElMessage({
            message: '登录失败',
            type: 'error',
          });
          console.log('error');
          console.error(error);
        }
      },
      handleForgotPassword() {
        // 处理忘记密码逻辑
        console.log('忘记密码');
      },
      handleRegister() {
        // 处理注册逻辑
        console.log('注册');
      },
      async register() {
        try {
          const response = await register(this.registerForm);
          if (response.status === 200) {
            ElMessage({
              message: '注册成功',
              type: 'success',
            });
            setTimeout(() => {
              this.$router.push('/login');
              this.login = true;
            }, 1500);
          } else {
            ElMessage({
              message: '注册失败',
              type: 'error',
            });
          }
        } catch (error) {
          ElMessage({
            message: '注册失败',
            type: 'error',
          });
          console.log('error');
          console.error(error);
        }
      },
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    height: 100vh;
  }
  
  .left-panel {
    flex: 1;
    background-color: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .left-panel .welcome-image {
    width: 400px;
    margin-bottom: 0px;
  }
  
  .right-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 450px;
  }

  .right-panel el-button{
    width: 450px;
  }
  
  .login-form {
    width: 450px;
  }
  
  .login-form h2 {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .forgot-password {
    float: right;
    margin-top: 10px;
  }
  
  .other-login-methods {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .other-login-methods span {
    margin-right: 10px;
  }
  
  .iconfont {
    font-size: 24px;
    margin: 0 5px;
  }

  .register-form {
  width: 450px;
}

.register-form h2 {
  margin-bottom: 20px;
  text-align: center;
}

  </style>
  