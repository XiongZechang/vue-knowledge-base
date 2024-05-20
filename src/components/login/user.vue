<template>
    <div>
        <!-- User form -->
        <el-form ref="userForm" :model="user" :rules="rules" label-width="100px">
            <el-form-item label="Name" prop="name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="Email" prop="email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="saveUser">Save</el-button>
            </el-form-item>
        </el-form>

        <!-- User list -->
        <el-table :data="users" style="width: 100%">
            <el-table-column prop="name" label="Name"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            user: {
                name: '',
                email: '',
            },
            users: [] as User[],
            rules: {
                name: [
                    { required: true, message: 'Please enter the name', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: 'Please enter the email', trigger: 'blur' },
                    { type: 'email', message: 'Please enter a valid email', trigger: 'blur' },
                ],
            },
        };
    },
    methods: {
        saveUser() {
            (this.$refs.userForm as any).validate((valid: boolean) => {
                if (valid) {
                    // Save user logic here
                    this.users.push(this.user);
                    this.user = {
                        name: '',
                        email: '',
                    };
                }
            });
        },
    },
});

interface User {
    name: string;
    email: string;
}
</script>