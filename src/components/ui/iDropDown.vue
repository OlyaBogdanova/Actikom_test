<template>
  <div class="select__container">
    <label v-if="label" class="select__label">{{ label }}</label>
    <select
      :value="modelValue"
      class="my_select"
      @change="$emit('update:model-value', $event.target.value)"
    >
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
<script setup>
defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
@import '../../scss/variables.scss';
.select__container {
  display: flex;
}
.my_select {
  border: 1px solid $grayColor;
  padding: 5px 30px 5px 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  flex: 1;
  &:hover {
    border: 1px solid $baseColor;
  }
}
.select__label {
  margin-right: 5px;
}
</style>
