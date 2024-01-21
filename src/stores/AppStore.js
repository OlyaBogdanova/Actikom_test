import { ref, computed } from 'vue'
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

  function addClient(clientModel) {
    clients.value.push(clientModel)
  }

  function deleteClient(id) {
    clients.value = clients.value.filter((elem) => elem.id !== id)
  }

  function findClient(id) {
    return clients.value.find((el) => el.id === +id)
  }
  const statusOptions = computed(() => {
    const clientStatusList = new Set(clients.value.map((el) => el.status))
    let result = []
    clientStatusList.forEach((value) => {
      result.push({
        label: value,
        value
      })
    })
    return [...result, { label: 'Выбрать все', value: 'all' }]
  })

  return {
    clients,
    setClients,
    tableHeaders,
    setTableHeaders,
    addClient,
    statusOptions,
    deleteClient,
    findClient
  }
})
