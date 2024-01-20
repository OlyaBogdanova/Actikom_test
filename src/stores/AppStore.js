import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const clients = ref([])
  const tableHeaders = ref([])
  function setClients(clientsModel) {
    clients.value = clientsModel
  }
  function setTableHeaders(headers) {
    tableHeaders.value = headers
  }

  return { clients, setClients, tableHeaders, setTableHeaders }
})
