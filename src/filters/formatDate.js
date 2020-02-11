export default function (timestamp) {
  if (timestamp === undefined) {
    return '沒有時間'
  }
  const val = (JSON.parse(timestamp)) * 1000
  const date = new Date(val)// 時間戳為10位需*1000，時間戳為13位的話不需乘1000
  const Y = date.getFullYear() + '-'
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  const D = date.getDate() + ' '
  const h = date.getHours() + ':'
  const m = date.getMinutes() + ':'
  const s = date.getSeconds()
  return Y + M + D + h + m + s
}
