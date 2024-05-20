<template>
    <div class="login"> 
        <Navbar/>
        <div class="loginForm">
            <el-form ref="loginForm" :model="loginForm" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { login } from '../../api/user'; // Assuming you have an API module for user-related requests
import { setToken } from '../../utils/auth'; // Assuming you have a utility function to set cookies
import { Navbar } from '../../layout/components';
import { ElMessage } from 'element-plus'

export default defineComponent({
    components: {
        Navbar,
    },
    data() {
        return {
            loginForm: {
                username: 'admin',
                password: '123456',
            },
        };
    },
    methods: {
        async login() {
            try {
                const response = await login(this.loginForm); 
                if(response.status == 200){
                    ElMessage({
                        message: '登录成功',
                        type: 'success',
                    })
                    const token = response.data.data.token;
                    console.log(token)
                    setToken(token);
                    setTimeout(() => {
                        this.$router.push('/knowledge/list');
                    }, 3000);
                }else{
                    ElMessage({
                        message: '登录失败',
                        type: 'error',
                    })
                }
            } catch (error) {
                ElMessage({
                    message: '登录失败',
                    type: 'error',
                })
                console.log('error');
                console.error(error);
            }
        },
    },
});
</script>

<style scoped>
.loginForm {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}
.login{
    margin: 0 150px;
}
</style>