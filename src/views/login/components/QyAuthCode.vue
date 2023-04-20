<template>
  <div class="box">
    <div class="text-area">
      <input class="input" type="text" maxlength="1" v-model="authCode.a" />
      <input class="input" type="text" maxlength="1" v-model="authCode.b" />
      <input class="input" type="text" maxlength="1" v-model="authCode.c" />
      <input class="input" type="text" maxlength="1" v-model="authCode.d" />
    </div>
    <div class="text-title" @click="getAuthCode">验证码</div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
interface AuthCode {
  a: number | string;
  b: number | string;
  c: number | string;
  d: number | string;
}
const authCode = reactive<AuthCode>({
  a: "",
  b: "",
  c: "",
  d: "",
});

const authCodeCount = computed(() => {
  const { a, b, c, d } = authCode;
  return `${a}${b}${c}${d}`;
});

function getAuthCode() {
  console.log(authCodeCount.value);
}
</script>
<style scoped>
.box {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-area {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.input {
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(235, 235, 235);
  box-shadow: inset 3px 3px 6px #d1d1d1, inset -3px -3px 6px #ffffff;
  /* padding-left: 15px; */
  transition: 0.4s ease-in-out;
  text-align: center;
}

.input:hover {
  box-shadow: inset 0px 0px 0px #d1d1d1, inset 0px 0px 0px #ffffff;
  background-color: lightgrey;
}

.input:focus {
  box-shadow: inset 0px 0px 0px #d1d1d1, inset 0px 0px 0px #ffffff;
  background-color: lightgrey;
}

.text-title {
  font-size: 20px;
  color: #fff;
  width: 100px;
  text-align: center;
}
</style>