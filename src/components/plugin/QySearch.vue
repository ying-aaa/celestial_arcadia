<template>
  <div class="qy-search">
    <input
      placeholder="Username"
      type="text"
      class="input"
      required
      v-model="value"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    console.log(value);
    emits("update:modelValue", value);
  },
});
</script>

<style lang="scss" scoped>
.qy-search {
  // height: 60px;
  display: flex;
  align-items: center;
  .input {
    line-height: 28px;
    border: 2px solid transparent;
    border-bottom-color: #777;
    padding: 0.2rem 0;
    outline: none;
    background-color: transparent;
    transition: 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .input:focus,
  input:hover {
    outline: none;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    border-color: #7a9cc6;
  }

  .input::placeholder {
    color: #777;
  }

  .input:focus::placeholder {
    opacity: 0;
    transition: opacity 0.3s;
  }
}
</style>