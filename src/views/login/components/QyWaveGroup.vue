<template>
  <div class="wave-group">
    <input
      required
      :type="props.type"
      class="input"
      autocomplete="off"
      v-model.number="value"
    />
    <span class="bar"></span>
    <label class="label">
      <span
        v-for="(str, key) of props.label"
        :key="key"
        class="label-char"
        :style="`--index: ${key}`"
        >{{ str }}</span
      >
    </label>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed, ComputedRef } from "vue";
interface Props {
  type: string;
  label: string;
  modelValue: number | string | undefined;
}
interface Emits {
  "update:modelValue": (value: number | string) => void;
}
// 接收类型 提示 表单值
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "提示值",
  },
  modelValue: {
    type: [Number, String],
  },
});
const emits = defineEmits(["update:modelValue"]);
// 监听表单值的变化发送给父元素
const value: ComputedRef<number | string | undefined> = computed({
  get(): number | string | undefined {
    return props.modelValue;
  },
  set(value: number | string) {
    emits("update:modelValue", value);
  },
});
</script>
<style scoped>
.wave-group {
  width: 100%;
  position: relative;
  margin-bottom: 30px;
}

.wave-group .input {
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ffffff;
  background: transparent;
  color: #fff;
}

.wave-group .input:focus {
  outline: none;
}

.wave-group .label {
  color: #ffffff;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.wave-group .label-char {
  -webkit-transition: 0.2s ease all;
  transition: 0.2s ease all;
  -webkit-transition-delay: calc(var(--index) * 0.05s);
  transition-delay: calc(var(--index) * 0.05s);
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px);
  font-size: 14px;
  color: #ffffff;
}

.wave-group .bar {
  position: relative;
  display: block;
  width: 100%;
}

.wave-group .bar:before,
.wave-group .bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #ffffff;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}
</style>