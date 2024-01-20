<template>
  <div class="input__container">
    <label v-if="label" for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      class="input"
      @input="$emit('update:model-value', $event.target.value)"
    />
  </div>
</template>
<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.input__container {
  display: flex;
  justify-content: flex-end;
}
.input {
  border: 1px solid black;
}
</style>
