export function formatDate(dateString) {
  let date = new Date(dateString)
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  day = day < 10 ? '0' + day : day
  month = month < 10 ? '0' + month : month

  return day + '/' + month + '/' + year
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
