<template>
    <div class="k_index">
        <Navbar/>
        <Breadcrumb/>
        <div class="k_container">
          <el-row>
            <el-col :span="24">
            
            </el-col>
            <el-col :span="6">
            
            </el-col>
            <el-col :span="18">
         
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
  