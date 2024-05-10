<template>
  <div class="navbar">
    <el-affix>
        <el-menu
            :default-active="activeIndex"
            class="menu"
            mode="horizontal"
            
            :ellipsis="false"
            @select="handleSelect"
        >
  
            <el-menu-item index="0">
                <img
                style="width: 50px"
                src="../../../assets/icon/logo.png"
                alt="Element logo"
                />
            </el-menu-item>
            <el-sub-menu index="1">
                <template #title>知识库</template>
                <el-menu-item index="1-1">社区知识库</el-menu-item>
                <el-menu-item index="1-2">团队知识库</el-menu-item>
                <el-menu-item index="1-3">私人知识库</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2">问答服务</el-menu-item>
                <div class="inputContainer">
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

                </div>
            
        
            <div class="flex-grow" />
            <el-menu-item index="4">登录</el-menu-item>
            <!-- </div> -->

        
        </el-menu>
    </el-affix>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const activeIndex = ref('1')
  const searchInput = ref('')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
    if(key == '2'){
        console.log('11111')
    }
  }

</script>

<style lang="less" scoped>
  .navbar{
    // padding: 0px 50px
    // margin : 0px 50px
    // left: 50px;
  }
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