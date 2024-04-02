<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import axios from 'axios'; // 假设你已经导入并全局注册了axios

const username = ref('');
const password = ref('');
const errorMessage = ref('');

// 添加一个用于提交前验证的函数
function validateForm() {
  if (!username.value || !password.value) {
    errorMessage.value = '用户名和密码不能为空';
    return false;
  }
  return true;
}

async function handleSubmit() {
  if (!validateForm()) return;

  try {
    // 这里模拟发送登录请求，实际项目中需要替换为真实的登录接口调用
    await axios.post('/api/admin/login', {username: username.value, password: password.value});

    // 登录成功后操作，如跳转到主页
    // const router = useRouter();
    // router.push('/home');
  } catch (error) {
    if (error.response && error.response.status === 401) {
      errorMessage.value = '用户名或密码不正确';
    } else {
      errorMessage.value = '登录失败，请稍后尝试';
    }
  }
}
</script>

<template>
  <div class="login-background">
    <img src="@/assets/images/login/login_back.png" alt="">
  </div>
  <div id="login" class="container">
    <h1>登录</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="username" required placeholder="请输入用户名"/>
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="password" required placeholder="请输入密码"/>
      </div>

      <button type="submit" class="btn btn-primary">登入</button>
    </form>

    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

#login {
  max-width: 350px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-background {
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* 确保背景在表单后面 */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin-top: 15px;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.error-message {
  color: red;
  font-size: 14px;
}
</style>