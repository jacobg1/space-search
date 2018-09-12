// import axios from 'axios'

// create search plugin object
const spaceSearch = {}
spaceSearch.install = function (Vue, options) {
  // create search instance
  Vue.prototype.$getSpaceSearch = function () {
    let xxx = 'search!'
    return xxx
  }
}

export default spaceSearch
