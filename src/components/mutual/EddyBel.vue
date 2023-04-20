<template>
  <label class="switch">
    <input
      type="checkbox"
      class="input__check"
      ref="themeRef"
      v-model="checked"
    />
    <span class="slider" v-bind="$attrs" @click.stop="toggleDark()"></span>
  </label>
  {{ checked }}
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { getStorageItem } from "@/utils/storage";
import { onMounted, ref } from "vue";

// 主题色
// let theme: "dark" | "light";
let checked: boolean;

interface Theme {
  checked: boolean;
  // 其他属性...
}
// 切换按钮
const themeRef = ref<Theme>({ checked: false });
const isDark = useDark();
// 切换主题色
const toggleDark = useToggle(isDark);
// // 获取当前本地主题色
function getLocalTheme() {
  const checked =
    getStorageItem("vueuse-color-scheme") === "dark" ? true : false;
  // 初始化设置主题颜色
  themeRef.value.checked = checked;
}
onMounted(() => {
  getLocalTheme();
  // 在挂载阶段将当前按钮开关设为历史开关
});
</script>
<style>
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-perspective: 500px;
  perspective: 500px;
  -webkit-animation: toggle__animation 3s infinite;
  animation: toggle__animation 3s infinite;
  z-index: 1;
}

.switch::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  z-index: -1;
  border-radius: 50px;
  background-color: #d8ff99;
  background-image: radial-gradient(
      at 21% 46%,
      hsla(183, 65%, 60%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 23% 25%, hsla(359, 74%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 20% 1%, hsla(267, 83%, 75%, 1) 0px, transparent 50%),
    radial-gradient(at 86% 87%, hsla(204, 69%, 68%, 1) 0px, transparent 50%),
    radial-gradient(at 99% 41%, hsla(171, 72%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 55% 24%, hsla(138, 60%, 62%, 1) 0px, transparent 50%);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fdfefedc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.3em;
  bottom: 0.35em;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
  -webkit-box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
    rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
    rgba(0, 0, 0, 0.09) 0px -1px 15px -8px;
  background-color: #ff99fd;
  background-image: radial-gradient(
      at 81% 39%,
      hsla(327, 79%, 79%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 11% 72%, hsla(264, 64%, 79%, 1) 0px, transparent 50%),
    radial-gradient(at 23% 20%, hsla(75, 98%, 71%, 1) 0px, transparent 50%);
}

.input__check:checked + .slider {
  background-color: #17202a;
}

.input__check:checked + .slider:before {
  -webkit-transform: translateX(1.5em);
  -ms-transform: translateX(1.5em);
  transform: translateX(1.5em);
}

@-webkit-keyframes toggle__animation {
  0%,
  100% {
    -webkit-transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
    transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
  }

  50% {
    -webkit-transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
    transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
  }
}

@keyframes toggle__animation {
  0%,
  100% {
    -webkit-transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
    transform: translateY(-10px) rotateX(15deg) rotateY(-20deg);
  }

  50% {
    -webkit-transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
    transform: translateY(0px) rotateX(15deg) rotateY(-20deg);
  }
}
</style>