<template>
  <button class="my_button" :style="{ 'background-color': color }"><slot></slot></button>
</template>
<script setup>
defineProps({
  color: {
    type: String,
    default: '#74aee9'
  }
})
</script>
<style lang="scss" scoped>
.my_button {
  padding: 5px 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    filter: contrast(150%);
  }
}
</style>
