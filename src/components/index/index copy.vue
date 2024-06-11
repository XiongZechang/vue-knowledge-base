<template>
    <div class="index dark:text-slate-400 dark:bg-slate-900">
    <Navbar />
    <main class="max-w-5xl px-4 mx-auto pb-22 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
      <div class="pt-8 pb-7 sm:pb-8 sm:text-center">
        <h1 class="relative mb-4 text-4xl tracking-tight font-blimone sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-200">
          知识库
        </h1>
        <p class="text-2xl text-slate-800 dark:text-slate-400">知识共享，探索知识的海洋，开启智慧的世界</p>
      </div>
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </main>
    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
      <ul class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20 sm:justify-start lg:justify-start">
        <li v-for="(item, index) in data" :key="index * 1.1" class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8">
          <figure class="flex-none shadow-lg rounded-xl w-80 md:w-100">
            <blockquote
              class="px-6 py-8 text-lg font-semibold leading-8 bg-white rounded-t-xl md:p-5 md:text-base md:leading-8 text-slate-700 dark:text-slate-300 dark:bg-slate-800 dark:highlight-white/5"
            >
              <p v-html="item.kbname"></p>
            </blockquote>
            <figcaption :class="`text-lg flex items-center p-6 space-x-4 leading-6 text-white md:px-10 md:py-6 rounded-b-xl `">
              <div class="flex items-center justify-center flex-none bg-white rounded-full w-14 h-14">
              </div>
              <div class="flex-auto">
                <div class="text-base font-semibold text-slate-700">
                  {{ item.knowledge }}
                  <p>{{ item.author }}</p>
                </div>
              </div>
            </figcaption>
          </figure>
        </li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Navbar } from '../../layout/components';
import { getKnowledge, getKnowledgeDetail, getKnowledgeBaseDetail } from '../../api/knowledge';
import { ElMessage } from 'element-plus';

export default defineComponent({
    name: 'Index',
    components: {
        Navbar,
    },
    data() {
        return {
            data: [],
        };
    },
    methods: {},
    async mounted() {
        const res = await getKnowledge();
        this.data = res.data.data;
        console.log(this.data)
        if(res.status != 200){
        ElMessage({
                message: '数据获取失败！',
                type: 'error',
            })
        }
    }
});
</script>

<style lang="less" scoped>
.index {
    margin: 0 150px;
}
.el-carousel__item h3 {
color: #475669;
opacity: 0.75;
line-height: 150px;
margin: 0;
text-align: center;
}

.el-carousel__item:nth-child(2n) {
background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
background-color: #d3dce6;
}
</style>