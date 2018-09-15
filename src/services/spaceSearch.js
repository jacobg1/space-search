/* eslint-disable */
import axios from 'axios'

// create search plugin object
const spaceSearch = {}

spaceSearch.install = function (Vue, options) {

  // create search instance
  Vue.prototype.$getSpaceSearch = function (term) {

    // create empty array that will hold search results
    var dataArray = []

    // make get request with axios, passing in search term
    axios({
      method: 'GET',
      url: `http://localhost:3001/search/${term}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {

        // loop through result and push each item to the dataArray
        response.data.forEach(element => {
          dataArray.push(element)
        })
      })
      
    return dataArray
  }
}

export default spaceSearch
