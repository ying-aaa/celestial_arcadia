<template>
  <div class="qy-tabs flex-s-b">
    <!-- 左侧标题 -->
    <div class="tab-title">
      <div
        v-for="(tab, index) of Props.tabs"
        :key="index"
        class="qy-tab"
        :class="{ activeTab: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </div>
    </div>
    <!-- 移动端自适应 -->
    <div class="more">
      <vinod-jang></vinod-jang>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import VinodJang from "@/components/mutual/VinodJang.vue";
import { ref } from "vue";

interface Tab {
  title: string;
}
let activeTab = ref<number>(0);

const Props = defineProps({
  tabs: {
    type: Array as () => Tab[],
    default: () => [
      { title: "第几个" },
      { title: "第几个" },
      { title: "第几个" },
      { title: "第几个" },
      { title: "第几个" },
    ],
  },
});
</script>
  
  <style lang="scss">
.qy-tabs {
  height: 40px;
  line-height: 40px;
  .tab-title {
    display: flex;
  }
  .qy-tab {
    margin-right: 15px;
    color: var(--un-text-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: var(--text-color);
    }
  }
  .activeTab {
    font-size: 24px;
    color: var(--on-text-color);
    font-weight: 700;
  }

  .more {
    display: none;
  }
  @media screen and (max-width: 500px) {
    & {
      flex-direction: row-reverse;
    }
    .tab-title {
      display: none;
    }
    .more {
      display: block;
      float: right;
    }
  }
}
</style>
  