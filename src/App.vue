<template>
  <div>
    <Home></Home>
    <hr />
    <About></About>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
onMounted(() => {});
</script>

<style scoped>
</style>
