import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
  const clients = ref([])
  function setClients(clientsModel) {
    clients.value = clientsModel
  }

  return { clients, setClients }
})
