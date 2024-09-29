<template>
  <div class="row justify-center items-center auth-page">
    <div class="column auth-block q-gutter-md">
      <div class="header-text">DISC-R</div>
      <input v-model="username" class="input-item" placeholder="username"/>
      <input v-model="password" class="input-item" placeholder="password"/>
      <div class="row justify-between">
        <q-btn label="SIGN IN" class="sign-btn"></q-btn>
        <q-btn label="SIGN UP" class="sign-btn"></q-btn>
      </div>
    </div>
    <div class="auth-page_gradient"></div>
    <div class="auth-girl">
      <div class="auth-girl_block">Hi there! Haven't seen you in a while</div>
      <img src="../assets/auth_sign_in_girl.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref<string>('');
const password = ref<string>('');
</script>

<style lang="scss" scoped>
.auth-page {
  height: 100vh;
  background: #D9D9D9;
}

.auth-page_gradient {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 28rem;
  background: linear-gradient(0deg, rgba(86,86,86,1) 0%, rgba(129,129,129,1) 21%, rgba(217,217,217,1) 81%);
}

.auth-block {
  width: 22%;
  z-index: 1;
}

.auth-girl_block {
  background-color: $secondary;
  color: #DDDDDD;
  font-size: 24px;
  font-weight: 800;
  width: fit-content;
  padding: 1rem;
  border-radius: 12px;
  position: absolute;
  right: -10rem;
}

.auth-girl {
  position: absolute;
  left: 10rem;
  z-index: 1;
}

.input-item {
  border: none;
  outline: none;
  background-color: $accent;
  box-shadow: inset 0px -3px 8px 2px black;
  height: 4rem;
  padding: 1rem;
  color: #DDDDDD;
  font-size: 24px;
  font-weight: 800;
}

.header-text {
  font-size: 48px;
  font-weight: 800;
  color: $secondary;
  text-align: center;
}

.sign-btn {
  border-radius: 12px;
  font-size: 24px;
  font-weight: 600;
  border: 2px solid $secondary;
  background-color: transparent !important;
  color: $secondary;
  width: 9rem;
  height: 2rem;
  margin-top: 1rem;
}
// </style>