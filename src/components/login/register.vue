<template>
    <div class="register">
        <Navbar/>
    </div>
    <div class="registerForm">
        <el-form ref="registerForm" :model="registerForm" :rules="registerRules" label-width="100px">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="手机" prop="phone">
                <el-input v-model="registerForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { register } from '../../api/user';
import { Navbar } from '../../layout/components';
import { ElMessage } from 'element-plus';
export default defineComponent({
    name: 'Register',
    components: {
        Navbar,
    },
    data() {
        return {
            registerForm: {
                username: '',
                phone: '',
                password: '',
            },
            registerRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min:11, message: '请输入正确的手机号', trigger: ['blur', 'change'] },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, message: '密码长度最少六位', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        async register() {
            try {
                const response = await register(this.registerForm); 
                if(response.status == 200){
                    ElMessage({
                        message: '注册成功',
                        type: 'success',
                    })
                    setTimeout(() => {
                        this.$router.push('/login');
                    }, 3000);
                }else{
                    ElMessage({
                        message: '注册失败',
                        type: 'error',
                    })
                }
            } catch (error) {
                ElMessage({
                    message: '注册失败',
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
.register {
    margin: 0 150px;
}
.registerForm {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}
</style>