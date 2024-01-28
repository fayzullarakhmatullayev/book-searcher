<template>
  <button
    class="btn"
    :class="{ rounded, icon }"
    :type="type"
    @click="emit('click')"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  rounded: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
</script>

<style lang="scss">
.btn {
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &.rounded {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    padding: 0;
    svg {
      max-width: 30px;
      width: 100%;
      height: 30px;
      display: block;
    }
    @media (max-width: 767px) {
      width: 40px;
      height: 40px;
      svg {
        max-width: 16px;
        height: 16px;
      }
    }
  }
  &:active,
  &:hover {
    background-color: var(--color-blue);
  }
}
</style>
