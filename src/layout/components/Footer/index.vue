<template>
    <div class="footer">
        <el-divider />
        <el-footer class="text-center">
            <p>Released under the MIT License.</p>
            <p>© 2024 BJTU SE - All Rights Reserved</p>
        </el-footer>
    </div>

</template>

<script setup lang="ts">
import { ElFooter } from 'element-plus';

</script>
<style scoped>
.footer{
    margin: auto;
    width: 100%;
}
.text_center{
    text-align: center;
}
p{
    text-align: center;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(60, 60, 67, .75);
    font-family: "Chinese Quotes", "Inter var", "Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";;
}
</style>