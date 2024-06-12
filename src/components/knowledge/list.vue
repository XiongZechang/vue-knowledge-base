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
            <el-breadcrumb-item>知识库</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
    </el-row>
    <el-container class="main">
      <el-aside width="180px" class="aside">
        <div class="spliter"> 筛选 </div>
        <el-checkbox-group v-model="checkedChoices">
          <el-checkbox v-for="itemc in choice" :key="itemc" :label="itemc" class="choice">
            {{ itemc }}
          </el-checkbox>
        </el-checkbox-group>
      </el-aside>
      <el-container>
        <el-main>
          <div class="article-list">
            <el-row :gutter="20">
              <el-col :span="20" class="article-item">
                <el-collapse v-model="activeNames">
                  <el-collapse-item
                    v-for="(item, index) in filteredData"
                    :key="index"
                    :name="index"
                  >
                  <template #title>
                    <!-- <span @click.native="navigateToKb(item.id)">{{ item.kbname }}</span> -->
                    <span>{{ item.kbname }}</span>
                    </template>
                    <p class="knowledge" v-for="(item1, index1) in item.knowledge" :key="index1" @click.stop="navigateToDetail(item.id, item1.id)">
                      {{ item1.name }}
                    </p>
                  </el-collapse-item>
                </el-collapse>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Navbar } from '../../layout/components';
import { Footer } from '../../layout/components';
import { ArrowRight } from '@element-plus/icons-vue';
import { getKnowledge } from '../../api/knowledge';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'KnowledgeList',
  components: {
    Navbar,
    ArrowRight,
    Footer
  },
  data() {
    return {
      data: [],
      searchText: '',
      choice: [],
      checkedChoices: [],
      activeNames: [],
    };
  },
  computed: {
    filteredData() {
      return this.data.filter(item => this.checkedChoices.includes(item.kbname));
    }
  },
  methods: {
    handleSearch() {
      // Handle search logic
      console.log('Search:', this.searchText);
    },
    async fetchData() {
      const res = await getKnowledge();
      if (res.status !== 200) {
        ElMessage({
          message: '数据获取失败！',
          type: 'error',
        });
      } else {
        this.data = res.data.data;
        for (let i = 0; i < res.data.data.length; i++) {
          this.choice.push(res.data.data[i].kbname);
          this.checkedChoices.push(res.data.data[i].kbname);
        }
      }
    },
    navigateToKb(kbId) {
      this.$router.push(`/kb/kid=${kbId}`);
    },
    navigateToDetail(kbId, detailId) {
      this.$router.push(`/detail/kid=${kbId}?id=${detailId}`);
    },
  },
  mounted() {
    this.fetchData();
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
    margin: 20px 20px 20px 100px;
    font-weight: normal;
    color: #eee;
  }

  .main {
    margin: 20px 80px;
  }

  .spliter {
    margin: 20px;
    font-size: 20px;
  }

  .choice {
    font-size: 20px;
    text-decoration: none;
  }
  .choice:hover {
    color: #409eff;
  }

  .aside {
    // background: #f0f0f0;
    margin: 20px;
    padding: 30px;
  }
  .article-list {
    margin: 20px 0;
    width: 100%;
  }

  .article-item {
    margin-bottom: 20px;
  }

  .card-header {
    padding: 16px;
    background-color: #f5f7fa;
    border-bottom: 1px solid #ebeef5;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
  }

  .card-author {
    margin-top: 8px;
    color: #909399;
  }

  .card-content {
    padding: 16px;
  }

  .knowledge:hover {
    color: #409eff;
    cursor: pointer;
  }
}
</style>
