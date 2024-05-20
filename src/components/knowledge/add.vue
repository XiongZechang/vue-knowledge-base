<template>
    <div class="k_index">
        <Navbar/>
        <Breadcrumb/>
        <div class="k_container">
          <!-- 为el-form添加验证 -->
          
          <el-row>
            <el-col :span="24">
            <el-card>
              <p class="k_title">新建知识</p>
              <p>
                <el-form :model="knowledge" ref="knowledgeForm" :rules="knowledgeRules">
                  <el-form-item label="知识名称" prop="name">
                    <el-input v-model="knowledge.name"></el-input>
                  </el-form-item>
                  <el-form-item label="知识类型" prop="type">
                    <el-select v-model="knowledge.dataType" placeholder="请选择">
                      <el-option label="前端" value="0"></el-option>
                      <el-option label="后端" value="1"></el-option>
                      <el-option label="数据库" value="2"></el-option>
                      <el-option label="其他" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="知识内容" prop="content">
                    <el-input v-model="knowledge.dataContent" type="textarea"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="addKnowledge">提交</el-button>
                  </el-form-item>
                </el-form>
              </p>
            </el-card>
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
  import { ElMessage } from 'element-plus';
  import { addKnowledge } from '../../api/knowledge';
  
  export default defineComponent({
    components: {
      Navbar,
      Breadcrumb
    },
    data() {
      return {
        knowledgeRules: {
          name: [
            { required: true, message: '请输入知识名称', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '请选择知识类型', trigger: 'change' }
          ],
          content: [
            { required: true, message: '请输入知识内容', trigger: 'blur' }
          ]
        },
        knowledge: {
          dataContent: "",
          dataType: 0,
          kbaseId: 0,
          name: "",
          userId: 0
        }
      }
    },
    methods: {
      addKnowledge() {
        addKnowledge(this.knowledge).then(res => {
          if(res.status == 200){
            ElMessage({
              message: '添加成功！',
              type: 'success',
            })
          }else{
            ElMessage({
              message: '添加失败！',
              type: 'error',
            })
          }
        })
      }
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
  