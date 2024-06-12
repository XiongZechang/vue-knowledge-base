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
            <el-breadcrumb-item :to="{ path: '/knowledge/list'}">知识库</el-breadcrumb-item>
            <el-breadcrumb-item>{{detailData.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-container class="main">
      <el-main>
        <el-card v-if="detailData" style="max-width: 1000px">
          <template #header>
            <div class="card-header">
              <span>{{ detailData.name }}</span>
            </div>
          </template>
          <p>{{ detailData.dataContent }}</p>
        </el-card>
        <!-- <div v-if="detailData" class="detail">
          <h1>{{ detailData.name }}</h1>
          <p>{{ detailData.dataContent }}</p>
        </div> -->
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
import { getKnowledgeDetail } from '../../api/knowledge';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'Detail',
  components: {
    Navbar,
    ArrowRight,
    Footer,
  },
  data() {
    return {
      detailData: {
        name: '',
        dataContent: '',
      },
    };
  },
  async mounted() {
    const route = useRoute();
    const kbId = route.params.kid;
    const detailId = route.query.id;
    try {
      const res = await getKnowledgeDetail(kbId, detailId);
      if (res.status === 200) {
        this.detailData = res.data.data;
        console.log(this.detailData);
      } else {
        ElMessage.error('数据获取失败！');
      }
    } catch (error) {
      ElMessage.error('数据获取失败！');
    }
  },
});
</script>
<style lang="less" scoped>
.base {
  background: #fff;
  padding: 0 150px;
  height: 100vh;
  overflow-y: auto;
  .breadcumb {
    margin: 20px 20px 10px 100px;
    font-weight: normal;
    color: #eee;
  }
  .main {
    margin: 0px 100px 20px 100px;
    .detail {
      h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
        line-height: 1.8;
      }
    }
    .loading {
      text-align: center;
      margin-top: 20px;
    }
  }
}
</style>