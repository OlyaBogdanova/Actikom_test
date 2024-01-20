import { useAppStore } from '@/stores/AppStore'

export default class Services {
  static async getClients() {
    const { setClients, setTableHeaders } = useAppStore()
    try {
      const response = await fetch('../public/data/clients.json', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })

      const { data } = await response.json()
      console.log(data)
      const tableHeaders = data.map((el) => Object.keys(el))[0]

      setClients(data)
      setTableHeaders(tableHeaders)
    } catch (error) {
      console.log(error)
    }
  }
}
