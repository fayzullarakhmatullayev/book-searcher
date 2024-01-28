<template>
  <div class="home">
    <h2 class="title">Books</h2>
    <BaseInput
      type="search"
      placeholder="Search for books (detective, lyrics, history, etc.)"
      @input="searchHandler"
      v-model="query"
    />
    <main class="home__table">
      <BooksTable :books="books" v-if="store.books.length > 0" />
      <BaseSpinner v-if="isLoading" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useBooksStore } from '@/store'
import { useDebounce } from '@/utils'

import BaseInput from '@/components/UI/BaseInput.vue'
import BooksTable from '@/components/BooksTable.vue'
import BaseSpinner from '@/components/UI/BaseSpinner.vue'

const store = useBooksStore()
const query = ref('')

const { books, isLoading } = storeToRefs(store)
const { searchBooks } = store

const debouncedSearch = useDebounce(searchBooks, 500)

const searchHandler = () => {
  debouncedSearch(query.value)
}
</script>

<style lang="scss"></style>
