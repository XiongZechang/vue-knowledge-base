<template>
  <div class="index">
      <Navbar/>
      <Breadcrumb/>
      <RouterView></RouterView>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Navbar } from '../../layout/components';
import { Breadcrumb } from '../../layout/components';

export default defineComponent({
  components: {
    Navbar,
    Breadcrumb
  }
});
</script>
<style lang="less" scoped>
.index{
  margin: 0 150px;
}
</style>
