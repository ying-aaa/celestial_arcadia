<template>
  <div class="home">
    <Header></Header>

    <el-container class="content">
      <Menu class="menu"></Menu>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>jhh </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Header from "@/components/common/Header.vue";
import Menu from "@/components/common/Menu.vue";
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  position: relative;
  .content {
    position: absolute;
    padding-top: 60px;
    top: 0;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
    .menu {
      display: none;
    }
  }
}
</style>