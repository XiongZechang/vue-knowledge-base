<template>
  <div class="k_index">
      <Navbar/>
      <!-- <Breadcrumb/> -->
      <div class="k_container">
        <el-row>
          <el-col :span="24">
            <el-card style="max-width: 100%">
              <template #header>
                <div class="card-header">
                  <span>知识列表</span>
                </div>
              </template>
              <p v-for="(knowledgebase, index) in knowledgeList" :key="index">
                <span @click="getKnowledgeBaseDetail(index)">+</span> {{ (knowledgebase as any).kbname }}
                <div v-for="knowledge in (knowledgebase as any).knowledge" :key="knowledge.name" style="margin-left: 20px;">
                  {{ knowledge.name }}
                </div>
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
import { getKnowledge, getKnowledgeDetail, getKnowledgeBaseDetail } from '../../api/knowledge';
import { ElMessage } from 'element-plus';


export default defineComponent({
  components: {
    Navbar,
    Breadcrumb
  },
  data() {
    return {
      knowledgeList: []
    }
  },
  async mounted() {
    const res = await getKnowledge();
    this.knowledgeList = res.data.data;
    if(res.status != 200){
      ElMessage({
            message: '数据获取失败！',
            type: 'error',
        })
    }
  },
  methods:{
    async getKnowledgeDetail(id: number){
      const res = await getKnowledgeDetail(id);
      if(res.status != 200){
        ElMessage({
            message: '数据获取失败！',
            type: 'error',
        })
      }
    },
    async getKnowledgeBaseDetail(id: number){
      console.log('id is:'+id)
      const res = await getKnowledgeBaseDetail(id);
      if(res.status != 200){
        ElMessage({
            message: '数据获取失败！',
            type: 'error',
        })
      }
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