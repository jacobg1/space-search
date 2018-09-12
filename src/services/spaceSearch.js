import axios from 'axios'

const spaceSearch = {}
spaceSearch.install = function (Vue, options) {
  
    Vue.prototype.$getSpaceSearch = function () {
    let xxx = 'search!'
    return xxx
  }
}

export default spaceSearch
