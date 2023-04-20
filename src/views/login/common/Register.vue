<template>
  <div class="content">
    <div class="text">注册</div>
    <form action="#">
      <qy-wave-group label="手机号" v-model="fromValue.phone"></qy-wave-group>
      <qy-auth-code></qy-auth-code>
      <qy-wave-group
        type="password"
        label="密码"
        v-model="fromValue.password"
      ></qy-wave-group>
      <qy-wave-group
        type="password"
        label="密码验证"
        v-model="fromValue.password"
      ></qy-wave-group>
      <button class="button" @click="$emit('skip-register')">登录</button>
    </form>
  </div>
</template>
  <script setup lang="ts">
import { reactive } from "vue";
import QyWaveGroup from "@/views/login/components/QyWaveGroup.vue";
import QyAuthCode from "@/views/login/components/QyAuthCode.vue";

interface Data {
  phone: string | number;
  password: string;
}

const fromValue: Data = reactive({
  phone: "",
  password: "",
});
defineEmits(["skip-register"]);
</script>
  <style scoped>
.content {
  width: 100%;
  height: 100%;
  padding: 40px 30px;
  border-radius: 10px;
  box-shadow: -3px -3px 7px #ffffff73, 2px 2px 5px rgba(94, 104, 121, 0.288);
}

.content .text {
  font-size: 33px;
  font-weight: 600;
  margin-bottom: 35px;
  color: #ffffff;
}

.forgot-pass {
  text-align: left;
  margin: 10px 0 10px 5px;
}

.forgot-pass a {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
}

.forgot-pass:hover a {
  text-decoration: underline;
}

.button {
  margin: 15px 0;
  width: 100%;
  height: 50px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 600;
  background: #ffffff;
  border-radius: 25px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #595959;
  /* box-shadow: 2px 2px 5px #babecc, -5px -5px 10px #ffffff73; */
}

.button:focus {
  color: #3498db;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #ffffff73;
}

.sign-up {
  margin: 10px 0;
  color: #595959;
  font-size: 16px;
}

.sign-up a {
  color: #3498db;
  text-decoration: none;
}

.sign-up a:hover {
  text-decoration: underline;
}
</style>