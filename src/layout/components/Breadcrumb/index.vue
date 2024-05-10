<template>
    <div class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }"><el-text size="large">首页</el-text></el-breadcrumb-item>
            <el-breadcrumb-item>公开知识库</el-breadcrumb-item>
            <el-breadcrumb-item>数学知识库</el-breadcrumb-item>
            <el-breadcrumb-item>勾股定理</el-breadcrumb-item>
        </el-breadcrumb>
        
    </div>
    
    
  </template>

  <script lang="ts" setup>
  import { ArrowRight } from '@element-plus/icons-vue'
  </script>
  
<style lang="less" scoped> 
.breadcrumb{
    margin: 15px 20px;
}
</style>