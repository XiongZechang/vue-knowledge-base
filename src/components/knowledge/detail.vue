<template>
    <div class="k_index">
        <Navbar/>
        <Breadcrumb/>
        <div class="k_container">
          <el-row>
            <el-col :span="24">
              <h1 class="k_title">勾股定理</h1>
            </el-col>
            <el-col :span="6">
              <el-card>
                <img src="../../assets/gougu.jpg" style="width: 100%;"/>
                <template #footer>
                  
                  <p>创建日期：2024-01-01</p>
                </template>
              </el-card>
            </el-col>
            <el-col :span="18">
              <el-card>
                <template #header><p>ID:1234-5689-10</p></template>
                <p id="abstract">摘要：勾股定理（英语：Pythagorean theorem / Pythagoras' theorem）
                  是平面几何中一个基本而重要的定理。勾股定理说明，平面上的直角三角形的两条直角边的长度（
                  较短直角边古称勾长、较长直角边古称股长）的平方和等于斜边长（古称弦长）的平方。反之，若
                  平面上三角形中两边长的平方和等于第三边边长的平方，则它是直角三角形（直角所对的边是第三
                  边）。勾股定理是人类早期发现并证明的重要数学定理之一。 </p>
                <template #footer>
                  <el-button type="primary">
                    详细内容<el-icon class="el-icon--right"><ArrowRight /></el-icon>
                  </el-button>
                </template>
              </el-card>
         
            </el-col>
            <el-col :span="24">
              <el-affix position="bottom">
                <!-- 页脚信息 -->
              </el-affix>
            </el-col>
          </el-row>
        </div>
        <!-- <router-view></router-view>
        <router-link :to="{path:'/knowledge/detail'}">detail</router-link>
        <router-link :to="{path:'/knowledge/list'}">list</router-link>
        <router-link :to="{path:'/knowledge/add'}">add</router-link>
        <router-link :to="{path:'/knowledge/update'}">update</router-link> -->
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { Navbar } from '../../layout/components';
  import { Breadcrumb } from '../../layout/components';
  
  export default defineComponent({
    components: {
      Navbar,
      Breadcrumb
    }
  });
  </script>
  <style lang="less" scoped>
  .k_index{
    margin: 0 150px;
    .k_container{
      margin: 10px 20px;
      .k_title{
        line-height: 1;
        font-weight: 500;
        font-size: 3rem;
      }
    }
  }
  </style>
  