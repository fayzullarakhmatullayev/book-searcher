<template>
  <div class="container">
    <router-view />
    <BaseButton icon rounded v-if="store.isAuthenticated" class="logout" @click="logoutHandler">
      <LogoutIcon />
    </BaseButton>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/store'

import BaseButton from '@/components/UI/BaseButton.vue'
import LogoutIcon from '@/components/icons/LogoutIcon.vue'

const store = useAuthStore()
const router = useRouter()

const logoutHandler = () => {
  store.logout()
  router.push('/login')
}
</script>

<style lang="scss">
.logout {
  position: fixed;
  bottom: 30px;
  right: 30px;
  @media (max-width: 767px) {
    bottom: 16px;
    right: 16px;
  }
}
</style>
