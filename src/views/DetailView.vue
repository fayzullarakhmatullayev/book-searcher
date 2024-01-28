<template>
  <div class="detail">
    <h2 class="title">Book Detail</h2>
    <BaseSpinner v-if="isLoading" />
    <div class="detail__block" v-else>
      <div class="detail__block--thumbnail">
        <img
          :src="bookDetail?.volumeInfo?.imageLinks?.thumbnail"
          :alt="bookDetail?.volumeInfo?.title"
          loading="lazy"
        />
      </div>
      <div class="detail__block--info">
        <h3 class="detail__block--title">{{ bookDetail?.volumeInfo?.title }}</h3>
        <div class="detail__block--authors">
          <span>Authors:</span>
          <ul>
            <li v-for="author in bookDetail?.volumeInfo?.authors" :key="author">{{ author }}</li>
          </ul>
        </div>
        <div class="detail__block--description">
          <span>Description:</span>
          <div v-html="bookDetail?.volumeInfo?.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useBooksStore } from '@/store'

import BaseSpinner from '@/components/UI/BaseSpinner.vue'

const store = useBooksStore()
const route = useRoute()

const { bookDetail, isLoading } = storeToRefs(store)
const { getBookDetail } = store

getBookDetail(route.params?.bookId)
</script>

<style lang="scss">
.detail {
  padding-bottom: 20px;
  &__block {
    display: flex;
    gap: 20px;
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }

    &--thumbnail {
      width: 30%;
      @media (max-width: 767px) {
        width: 60%;
      }
      img {
        width: 100%;
        display: block;
      }
    }
    &--info {
      width: 70%;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    &--title {
      text-align: center;
      font-size: 25px;
      margin-bottom: 10px;
      @media (max-width: 575px) {
        font-size: 18px;
      }
    }
    &--authors {
      & > span {
        font-size: 14px;
        font-style: italic;
        display: block;
        font-weight: 700;
      }
      ul {
        list-style: disc;
        padding-left: 16px;
        margin-bottom: 14px;
      }
    }
    &--description {
      & > span {
        font-size: 14px;
        font-style: italic;
        display: block;
        font-weight: 700;
      }
      & > div p {
        margin: 10px 0;
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
}
</style>
