<template>
  <div class="home-page">
    <div class="navbar">
      <Navbar/>
    </div>
    <main class="main">
      <h1>知识库</h1>
      <h2>探索知识的海洋，开启智慧的世界</h2>
      <div class="buttons">
        <el-button size="large" round type="primary">
          <router-link to="/knowledge/list" style="text-decoration: none; color: white;">
            进入知识库
          </router-link>
        </el-button>
        <el-button size="large" round>
          <router-link to="/chat" style="text-decoration: none; color: grey;">
            问答服务
          </router-link>
        </el-button>
      </div>
      <div class="features">
        <div class="feature">
          <el-icon><HelpFilled /></el-icon>
          <h3>排序算法</h3>
          <p>排序算法是将一组数据按照特定顺序排列的方法，例如快速排序、归并排序。</p>
        </div>
        <div class="feature">
          <el-icon><Box /></el-icon>
          <h3>查找算法</h3>
          <p>查找算法用于在数据集中快速定位特定元素，如二分查找、哈希查找。</p>
        </div>
        <div class="feature">
          <el-icon><Brush /></el-icon>
          <h3>字符串匹配算法</h3>
          <p>字符串匹配算法用于在文本中查找子串或模式，比如KMP算法、Rabin-Karp算法。</p>
        </div>
        <div class="feature">
          <el-icon><More /></el-icon>
          <h3>图算法</h3>
          <p>图算法处理图结构数据，解决路径搜索、网络流等问题，例如Dijkstra算法、A*搜索算法。</p>
        </div>
      </div>
    </main>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import 'element-plus/theme-chalk/index.css';
import { Navbar } from '../../layout/components';
import { Footer } from '../../layout/components';
</script>

<style scoped>
.navbar {
  margin: 0 75px;
}

.home-page {
  font-family: 'Arial, sans-serif';
  text-align: center;
}

.main {
  padding: 50px 20px;
}

h1 {
  font-size: 48px;
  margin-bottom: 10px;
  color: rgb(105, 106, 168);
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
  background-color: rgb(246, 246, 247);
}

.feature h3 {
  font-size: 18px;
  margin-top: 10px;
}

.feature p {
  color: #666;
  font-size: 14px;
}

.feature:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s;
  background-color: #fff;
}
</style>
