<template>
  <div class="main__container">
    <TheFilters @update-filters="updateFilters" />
    <iTableGrid
      :body="clients"
      :headers="tableHeaders"
      :search-term="filters?.searchTerm"
      :filter="filters?.filter"
    />
    <TheAddForm />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import iTableGrid from '@/components/ui/iTableGrid.vue'
import TheFilters from '@/components/layouts/TheFilters.vue'
import TheAddForm from '@/components/layouts/TheAddForm.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/AppStore'
const { tableHeaders, clients } = storeToRefs(useAppStore())
const filters = ref({ filter: { field: 'status', value: 'all' }, searchTerm: '' })
function updateFilters(filter) {
  filters.value = filter
}
</script>
<style lang="scss" scoped>
.main__container {
  padding: 25px 20px;
  flex: 1;
}
</style>
