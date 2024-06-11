<template>
    <div class="base">
        <Navbar />
        <el-row>
            <el-col :span="24">
                <div class="breadcumb">
                    <el-breadcrumb :separator-icon="ArrowRight">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>知识库</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </el-col>
        </el-row>

        <el-container class="main">
            <el-aside width="200px">
                <div class="spliter"> 筛选 </div>
                <ul class="choice">
                    <li v-for="item in choice">
                        <el-checkbox>{{ item }}</el-checkbox>
                    </li>
                </ul>
            </el-aside>
            <el-container>
                <el-main>
                    <div class="search">
                        <div class="searchDiv">
                            <el-input v-model="searchText" placeholder="请输入搜索关键字"
                                style="margin: 0 95px; width: 600px; padding-right: 0 !important" clearable>
                                <template #suffix>
                                    <el-button @click="handleSearch" style="padding: 10px" type="primary">搜索</el-button>
                                </template>
                            </el-input>
                        </div>
                    </div>
                    <article class="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44">
                        <ul
                            class="flex flex-wrap items-center justify-center py-6 sm:px-20 lg:px-36 xl:px-20 sm:justify-start lg:justify-start">
                            <li v-for="(item, index) in data" :key="index * 1.1"
                                class="px-3 pt-4 md:px-4 sm:pt-5 md:pb-8">
                                <figure class="flex-none shadow-lg rounded-xl w-200 md:w-200">
                                    <figcaption
                                        :class="`text-lg flex items-center p-6 space-x-4 leading-6 text-white md:px-10 md:py-6 rounded-b-xl `">
                                        <div class="flex-auto">
                                            <div class="text-base font-semibold text-slate-700" style="color: #409eff">
                                                {{ item.title }}
                                                <p>{{ item.author }}</p>
                                            </div>
                                        </div>
                                    </figcaption>
                                    <blockquote
                                        class="px-6 py-8 text-lg font-semibold leading-8 bg-white rounded-t-xl md:p-5 md:text-base md:leading-8 text-slate-700 dark:text-slate-300 dark:bg-slate-800 dark:highlight-white/5">
                                        <p v-html="item.content"></p>
                                    </blockquote>
                                </figure>
                            </li>
                        </ul>
                    </article>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { Navbar } from '../../layout/components';
import { ArrowRight } from '@element-plus/icons-vue';
import 'element-plus/dist/index.css';
const data = {
    title: '构建工具',
    author: '作者',
    title: 'JS框架',
};
const searchText = '';
const choice = ['构建工具', 'JS框架'];
const handleSearch = () => {
    // Handle search logic
    console.log('Search:', searchText);
};
</script>

<style lang="less">
.base {
    background: #fff;

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
        margin: 20px;
        font-size: 20px;
    }
}
</style>