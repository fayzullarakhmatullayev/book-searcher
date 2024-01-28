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

export const useBooksStore = defineStore('books', () => {
  const books = ref([])
  const bookDetail = ref({})
  const isLoading = ref(false)

  const searchBooks = async (query) => {
    if (!query) {
      books.value = []
      return
    }
    try {
      isLoading.value = true
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      const { items } = await res.json()
      books.value = items
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const getBookDetail = async (bookId) => {
    try {
      isLoading.value = true
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      const data = await res.json()
      bookDetail.value = data
    } catch (err) {
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    books,
    bookDetail,
    isLoading,
    searchBooks,
    getBookDetail
  }
})
