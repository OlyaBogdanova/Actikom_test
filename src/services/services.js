import { useAppStore } from '@/stores/AppStore'
import { formatDate } from '@/utils/functions'

export default class Services {
  static async getClients() {
    const { setClients, setTableHeaders } = useAppStore()
    try {
      const response = await fetch('../data/clients.json', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      const { data } = await response.json()

      const tableHeaders = data.map((el) => Object.keys(el))[0]

      setClients(data.map((el) => ({ ...el, created_at: formatDate(el.created_at) })))
      setTableHeaders(tableHeaders)
    } catch (error) {
      console.log(error)
    }
  }

  static async getClient(id) {
    try {
      const response = await fetch('../data/clients.json', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      const { data } = await response.json()

      return data
        .filter((el) => el.id === +id)
        .map((el) => ({ ...el, created_at: formatDate(el.created_at) }))[0]
    } catch (error) {
      console.log(error)
    }
  }
}
