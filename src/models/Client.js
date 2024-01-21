import { formatDate, getRandomNumber } from '@/utils/functions'

export default class Client {
  constructor(data = {}) {
    this.id = data.id || getRandomNumber(0, 1000)
    this.fullname = data?.fullname || ''
    this.created_at = data?.created_at || formatDate(new Date())
    this.phone = data?.phone || ''
    this.region = data?.region || ''
    this.status = data?.status || 'Активен'
  }
}
