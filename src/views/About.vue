<template>
  <div class="about">
    <div class="add">不知道页面</div>
    <button @click="HomeCountAdd">添加+++</button>
  </div>
</template>
  
<script setup lang="ts">
import eventBus from "@/utils/eventBus";
function HomeCountAdd() {
  eventBus.emit("add");
}
</script>
  
  <style lang="scss">
.about {
  width: 100px;
  .add {
    font-size: 30px;
  }
}
</style>