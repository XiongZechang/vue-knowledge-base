<template>
  <div class="home-page">
    <header class="header">
      <div class="logo">fast-vue3</div>
      <nav class="nav">
        <a href="#">介绍</a>
        <a href="#">加入我们</a>
        <el-switch v-model="darkMode" @change="toggleDarkMode"></el-switch>
        <a href="https://github.com/" target="_blank" class="github-icon">
          <!-- <el-icon><GithubFilled /></el-icon> -->
        </a>
      </nav>
    </header>
    <main class="main">
      <h1>Fast-Vue3</h1>
      <h2>一个快速开发的Vue PC端脚手架</h2>
      <div class="buttons">
        <el-button type="primary">开始</el-button>
        <el-button>Github仓库</el-button>
      </div>
      <div class="features">
        <div class="feature">
          <!-- <el-icon><Lightbulb /></el-icon> -->
          <h3>开箱即用</h3>
          <p>PC端vue3开发模版，集成必要的技术栈，方便你的快速开发</p>
        </div>
        <div class="feature">
          <!-- <el-icon><Box /></el-icon> -->
          <h3>代码规范</h3>
          <p>完整的eslint、prettier、stylelint规范，助你更好的管理代码</p>
        </div>
        <div class="feature">
          <!-- <el-icon><Wrench /></el-icon> -->
          <h3>配置优化</h3>
          <p>完整配置的vue脚手架插件和优化，让你专注于业务开发，更高效</p>
        </div>
        <div class="feature">
          <!-- <el-icon><More /></el-icon> -->
          <h3>More</h3>
          <p>加入我们，更多能力等你挖掘....</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import { GithubFilled, Lightbulb, Box, Wrench, More } from '@element-plus/icons-vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
  ElMessage({
    message: `Dark mode is ${darkMode.value ? 'on' : 'off'}`,
    type: 'info',
  });
};
</script>

<style scoped>
.home-page {
  font-family: 'Arial, sans-serif';
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
}

.github-icon {
  margin-left: 10px;
}

.main {
  padding: 50px 20px;
}

h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #666;
}

.buttons {
  margin-bottom: 40px;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.feature {
  width: 200px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  text-align: left;
}

.feature h3 {
  font-size: 18px;
  margin-top: 10px;
}

.feature p {
  color: #666;
  font-size: 14px;
}
</style>
