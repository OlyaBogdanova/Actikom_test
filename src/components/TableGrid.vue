<template>
  <div class="table__container">
    <i-input v-model="inputValue" placeholder="Поиск" />
    <table class="table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="element in body" :key="element.id">
          <td v-for="key in element" :key="key">{{ key }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import iInput from '@/components/iInput.vue'
import { ref } from 'vue'
defineProps({
  headers: {
    type: Array,
    required: true
  },
  body: {
    type: Array,
    required: true
  }
})
const inputValue = ref('')
</script>
<style lang="scss" scoped>
.table__container {
  display: flex;
  flex-direction: column;
}
.table {
  width: 100%;
  font-size: 12px;
  border: 1px solid black;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid grey;
  }
  td:not(:nth-child(2)) {
    text-align: center;
  }
}
</style>
