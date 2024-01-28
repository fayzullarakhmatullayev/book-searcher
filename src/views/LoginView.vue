<template>
  <div class="login">
    <div class="login__block">
      <h2 class="login__block--title">Login</h2>
      <form @submit.prevent="submitHandler" class="login__form">
        <BaseInput
          type="text"
          placeholder="Username"
          maxlength="16"
          v-model="userName"
          @input="validateUsername"
        />
        <BaseButton type="submit">Submit</BaseButton>
        <div v-if="usernameError" class="login__form--error">{{ usernameError }}</div>
        <BaseSpinner class="login__form--spinner" v-if="isLoading" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/store'
import { useRouter } from 'vue-router'
import { sleep } from '@/utils'

import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

const store = useAuthStore()
const router = useRouter()

const userName = ref('')
const usernameError = ref('')
const isLoading = ref(false)

const validateUsername = () => {
  const isValid = /^[a-zA-Z]{16}$/.test(userName.value)
  usernameError.value = isValid
    ? ''
    : 'Username must be exactly 16 characters and contain only letters.'
}

const submitHandler = async () => {
  if (!usernameError.value) {
    isLoading.value = true
    await sleep(3000)
    store.setToken(userName.value)
    router.push('/')
    isLoading.value = false
  }
}
</script>

<style lang="scss">
.login {
  min-height: 100dvh;
  display: grid;
  place-items: center;
  &__block {
    padding: 30px 50px;
    background-color: var(--color-teal);
    min-height: 255px;
    border-radius: 20px;
    max-width: 350px;
    width: 100%;
    position: relative;
    @media (max-width: 575px) {
      padding: 32px 20px;
    }
    &--title {
      text-align: center;
      font-size: 26px;
      margin-bottom: 16px;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &--error {
      font-size: 12px;
      color: var(--color-danger);
      max-width: 200px;
      text-align: center;
      margin: 0 auto;
    }
    &--spinner {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
