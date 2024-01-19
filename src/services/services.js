import { useAppStore } from '@/stores/AppStore'

export default class Services {
  static async getClients() {
    const { setClients } = useAppStore()
    try {
      const response = await fetch('../data/clients.json')

      const data = await response.json()
      console.log(data)
      setClients(data)
    } catch (error) {
      throw new Error('Запрос завершился с ошибкой')
    }
  }
}
