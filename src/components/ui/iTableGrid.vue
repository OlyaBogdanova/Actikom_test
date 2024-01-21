<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody v-if="computedData.length">
      <tr v-for="element in computedData" :key="element.id">
        <td v-for="(value, key) in element" :key="key">
          <router-link
            v-if="key === 'fullname'"
            :to="{ name: 'UserPage', params: { userId: element.id } }"
            >{{ value }}</router-link
          >
          <span v-else>{{ value }}</span>
        </td>
      </tr>
    </tbody>
    <div v-else>Записей нет</div>
  </table>
</template>
<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  body: {
    type: Array,
    required: true
  },
  searchTerm: {
    type: String,
    default: ''
  },
  filter: {
    type: Object,
    default: () => {}
  }
})

function filterArrayByValue(array, searchString, filter) {
  return array.filter(
    (elem) =>
      Object.values(elem).some((value) =>
        String(value).toLowerCase().includes(searchString.toLowerCase())
      ) &&
      (elem[filter?.field] === filter?.value || filter?.value === 'all')
  )
}

const computedData = computed(() => {
  if (props.searchTerm.trim() || props.filter.value !== 'all') {
    return filterArrayByValue(props.body, props.searchTerm.trim(), props.filter)
  }
  return props.body
})
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';
.table {
  width: 100%;
  font-size: 12px;
  border: 1px solid $grayColor;
  border-collapse: collapse;
  border-radius: 10px;

  th,
  td {
    border: 1px solid $grayColor;
  }
  td:not(:nth-child(2)) {
    text-align: center;
  }
}
@media (max-width: 600px) {
  .table {
    font-size: 10px;
  }
}
</style>
