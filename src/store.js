import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || null)

  const isAuthenticated = computed(() => !!token.value)

  const setToken = (payload) => {
    localStorage.setItem('token', payload)
    token.value = payload
  }

  return {
    token,
    isAuthenticated,
    setToken
  }
})
