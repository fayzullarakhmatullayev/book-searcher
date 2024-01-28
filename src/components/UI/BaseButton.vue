<template>
  <button class="btn" :type="type" @click="emit('click')" v-bind="$attrs"><slot /></button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
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
  &:active,
  &:hover {
    background-color: var(--color-blue);
  }
}
</style>
