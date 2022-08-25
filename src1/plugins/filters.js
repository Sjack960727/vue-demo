import dayjs from 'dayjs'

const filters = {
  toLower(str) {
    return str.toLowerCase()
  },
  formatTime(time) {
    return dayjs(time).format('YYYY/MM/DD HH:mm:ss')
  }
}

function registerFilters(Vue) {
  for (let filerName in filters) {
    Vue.filter(filerName, filters[filerName])
  }
}
export default registerFilters
