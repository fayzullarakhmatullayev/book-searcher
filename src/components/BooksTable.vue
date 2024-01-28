<template>
  <table class="books">
    <thead>
      <tr>
        <th>Thumbnail</th>
        <th>Title</th>
        <th>Authors</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book?.id" @click="$router.push(`/book/${book?.id}`)">
        <td>
          <img
            :src="book?.volumeInfo?.imageLinks?.smallThumbnail"
            :alt="book?.volumeInfo?.title"
            loading="lazy"
            class="books__thumbnail"
          />
        </td>
        <td>
          <div class="books__title">{{ book?.volumeInfo?.title }}</div>
        </td>
        <td>
          <ul class="books__list">
            <li class="books__list--item" v-for="author in book?.volumeInfo?.authors" :key="author">
              {{ author }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  books: Array
})
</script>

<style lang="scss">
.books {
  width: 100%;
  margin: 16px 0;
  border: 1px solid var(--color-gray);
  border-collapse: collapse;
  background-color: var(--color-white);

  th,
  td {
    border: 1px solid var(--color-gray);
    padding: 10px 15px;
    @media (max-width: 575px) {
      padding: 5px;
      font-size: 14px;
    }
  }

  tbody tr {
    &:hover {
      background-color: var(--color-background);
      cursor: pointer;
    }
  }
  &__thumbnail {
    max-width: 128px;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  &__title {
    text-align: center;
    font-weight: 700;
  }
  &__list {
    list-style: disc;
    padding-left: 15px;
    margin: 0 auto;
  }
}
</style>
