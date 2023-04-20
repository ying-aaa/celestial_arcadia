<template>
  <div class="content">
    <div class="text">登录</div>
    <form action="javascript:void(0);">
      <qy-wave-group label="手机号" v-model="fromValue.phone"></qy-wave-group>
      <qy-wave-group
        type="password"
        label="密码"
        v-model="fromValue.password"
      ></qy-wave-group>
      <div class="forgot-pass">
        <a href="#">忘记密码？</a>
      </div>
      <button class="button" @click="loginID">登录</button>
      <div class="sign-up">
        没有账号?
        <a href="#" @click="$emit('skip-register')">注册</a>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import QyWaveGroup from "@/views/login/components/QyWaveGroup.vue";
import { validatePassword, validatePhone } from "@/utils/validation";
import { ElMessage } from "element-plus";

interface Data {
  phone: String | Number;
  password: String;
}
defineEmits(["skip-register"]);
const fromValue: Data = reactive({
  phone: "",
  password: "",
});

function loginID() {
  if (!validatePhone(fromValue.phone))
    return ElMessage({
      message: "请输入正确的手机号",
      type: "warning",
    });
  if (!validatePassword(fromValue.password))
    return ElMessage({
      message: "密码要求不少于8位数，必须有字母大小写和数字",
      type: "warning",
    });
  console.log("登录 了正好");
}
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