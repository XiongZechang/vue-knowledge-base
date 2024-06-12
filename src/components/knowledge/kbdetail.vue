<template>
    <div class="base">
        <div class="header">
            <Navbar />
        </div>
        <el-row>
            <el-col :span="24">
                <div class="breadcumb">
                    <el-breadcrumb :separator-icon="ArrowRight">
                        <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>知识库详情</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>
        <el-container class="main">
            <el-main>
                <div v-if="kbData" class="kb-details">
                    <h1>{{ kbData.title }}</h1>
                    <p>{{ kbData.content }}</p>
                </div>
                <div v-else class="loading">
                    <el-spinner type="pulse" />
                </div>
            </el-main>
        </el-container>
        <Footer />
    </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { Navbar, Footer } from '../../layout/components';
  import { ArrowRight } from '@element-plus/icons-vue';
  // import { getKnowledgeById } from '../../api/knowledgebase';
  import { ElMessage } from 'element-plus';
  
  export default defineComponent({
    name: 'KbDetail',
    components: {
      Navbar,
      ArrowRight,
      Footer,
    },
    data() {
      return {
        kbData: null,
      };
    },
    async mounted() {
      const route = useRoute();
      const kbId = route.params.kid;
      try {
        const res = await getKnowledgeById(kbId);
        if (res.status === 200) {
          this.kbData = res.data.data;
        } else {
          ElMessage.error('数据获取失败！');
        }
      } catch (error) {
        ElMessage.error('数据获取失败！');
      }
    },
  });
</script>