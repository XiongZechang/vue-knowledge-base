<template>
  <div class="navbar">
    <el-affix>
        <el-menu
            :default-active="activeIndex"
            class="menu"
            mode="horizontal"
            router="true"
            :ellipsis="false"
            @select="handleSelect"
        >
            <el-menu-item index="/index">
                <img
                style="width: 50px"
                src="../../../assets/icon/logo.png"
                alt="Element logo"
                />
            </el-menu-item>
            <el-sub-menu index="/knowledge/list">
                <template #title>知识库</template>
                <el-menu-item index="/knowledge/list">知识列表</el-menu-item>
                <el-menu-item index="/knowledge/add">添加知识</el-menu-item>
                <el-menu-item index="/knowledge/update">修改知识</el-menu-item>
                <!-- <el-menu-item index="/knowledge/detail">详情</el-menu-item> -->
            </el-sub-menu>
            <el-menu-item index="/chat">问答服务</el-menu-item>
                <!-- <div class="inputContainer">
                    <el-input
                        v-model="searchInput"
                        class="searchInput"
                        placeholder="搜索..."
                    >
                        <template #append>
                            <el-button >
                                <el-icon class="input_icon"><Search /></el-icon>
                            </el-button>
                        </template>
                    </el-input>
                </div> -->
            <div class="flex-grow"/>
            <div>

            </div>
            <el-menu-item style="width: 20px;">
              <el-icon><Search /></el-icon>
            </el-menu-item>
            <el-sub-menu index="/login">
                <template #title>你好，{{ username }}</template>
                <el-menu-item @click="logout">登出</el-menu-item>
                <!-- <el-menu-item index="/user">用户信息</el-menu-item> -->
            </el-sub-menu>
            <!-- </div> -->
        </el-menu>
    </el-affix>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { removeToken, getName } from '../../../utils/auth';
  const activeIndex = ref('1')

  let username:string | undefined = ''
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if(key == '2'){
        console.log('11111')
    }
  }
  const logout = () => {
    console.log('logout')
    removeToken()
    window.location.href = '/login'
  }  

  onMounted(() => {
    username = getName()
    console.log(username)
    console.log('mounted')
  })
</script>

<style lang="less" scoped>
  .flex-grow {
    flex-grow: 1;
  }
  .inputContainer{
    height: 100%;
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .searchInput{
        width: 240px; 
        height: 40px;
    }
  }
//   .menu_container{
//     display: flex;
//     .flex-grow{
//         justify-content: flex-end;
//     }
//   }
</style>