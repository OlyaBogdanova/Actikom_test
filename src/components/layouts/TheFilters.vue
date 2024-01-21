<template>
  <div class="filters__container">
    <i-drop-down :options="statusOptions" v-model="statusValue" />

    <i-input v-model="inputValue" placeholder="Поиск" icon="fas fa-search" />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import iDropDown from '@/components/ui/iDropDown.vue'
import iInput from '@/components/ui/iInput.vue'
import { useAppStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'
const { statusOptions } = storeToRefs(useAppStore())
const statusValue = ref('all')
const inputValue = ref('')

const emit = defineEmits(['updateFilters'])
watch(
  () => [inputValue.value, statusValue.value],
  () => {
    emit('updateFilters', {
      searchTerm: inputValue.value,
      filter: { field: 'status', value: statusValue.value }
    })
  }
)
</script>
<style lang="scss" scoped>
.filters__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
@media (max-width: 400px) {
  .filters__container {
    flex-direction: column;
    gap: 10px;
    div {
      width: 100%;
    }
  }
}
</style>
