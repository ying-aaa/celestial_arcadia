<template>
  <div class="consumer backdrop-fit">
    <div class="filter-container" :class="{ 'cut-place': cut }" v-if="!cut">
      <!-- 左侧图片 -->
      <div class="left-floorplan backdrop-fit"></div>
      <!-- 右侧from表单 -->
      <div class="right-info-enter">
        <Login @skip-register="cutManner"></Login>
      </div>
    </div>

    <div class="filter-container" v-else>
      <div class="right-info-enter">
        <Register @skip-register="cutManner"></Register>
      </div>
      <!-- 左侧图片 -->
      <div class="left-floorplan backdrop-fit"></div>
      <!-- 右侧from表单 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import Login from "@/views/login/common/Login.vue";
import Register from "@/views/login/common/Register.vue";

let cut: Ref<Boolean> = ref(false);
function cutManner() {
  cut.value = !cut.value;
}
</script>

<style lang="scss">
.consumer {
  width: 100vw;
  height: 100vh;
  background-image: url("https://image.meiye.art/pic_1628403859912");

  display: flex;
  justify-content: center;
  align-items: center;

  .filter-container {
    max-width: 100vw;
    height: 500px;
    border-radius: 20px;
    background-size: cover;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border: 1px solid #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    display: flex;
    overflow: hidden;
    & > :nth-child(n) {
      width: 400px;
      height: 500px;
      transition: all 0.8s ease;
    }
    .left-floorplan {
      background-image: url("https://image.meiye.art/pic_1631337782001WY1RkVSfXGWWR9Uo7HJ47?imageMogr2/thumbnail/470x/interlace/1");
      flex: 1;
    }
    .right-info-enter {
      display: flex;
      align-items: center;
    }
    @media screen and (max-width: 500px) {
      .left-floorplan {
        display: none;
      }
    }
  }

  .cut-place {
    flex-direction: row-reverse;
  }
}
</style>