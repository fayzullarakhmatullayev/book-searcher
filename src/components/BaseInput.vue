<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    class="input"
    v-bind="$attrs"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
})

const emit = defineEmits(['update:value'])
</script>

<style lang="scss">
.input {
  background-color: var(--color-background);
  border: 1px solid var(--color-gray);
  padding: 10px 15px;
  border-radius: 8px;
  &:focus {
    border-color: var(--color-primary);
  }
}
</style>
