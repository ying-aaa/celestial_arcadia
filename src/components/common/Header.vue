<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/login">跳转登录页</router-link>
      </el-menu-item>

      <el-menu-item index="2" class="strut-height">
        <qy-search v-model="SearchContext"></qy-search>
      </el-menu-item>

      <div class="flex-grow" />
      <el-menu-item index="3">{{ SearchContext }}</el-menu-item>

      <el-menu-item index="4" class="strut-height">
        <div>
          <eddy-bel></eddy-bel>
        </div>
      </el-menu-item>
      <el-menu-item index="5">Orders</el-menu-item>
    </el-menu>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import EddyBel from "@/components/mutual/EddyBel.vue";
import QySearch from "@/components/plugin/QySearch.vue";
let SearchContext = ref<string>("");
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
  
  <style lang="scss">
.header {
  .el-menu {
    z-index: 999;
  }
  .el-menu--horizontal > .el-menu-item {
    height: auto;
  }
}
</style>