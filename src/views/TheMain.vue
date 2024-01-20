<template>
  <div class="main__container">
    <TableGrid :body="clients" :headers="tableHeaders" />
  </div>
</template>
<script setup>
import TableGrid from '@/components/TableGrid.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/AppStore'
const { tableHeaders, clients } = storeToRefs(useAppStore())
</script>
<style lang="scss" scoped>
.main__container {
  padding: 10px;
  flex: 1;
}
</style>
