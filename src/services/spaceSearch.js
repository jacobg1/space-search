/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
export const EventBus = new Vue();

// create search plugin object
const spaceSearch = {}

spaceSearch.install = function (Vue, options) {

  // create search instance
  Vue.prototype.$getSpaceSearch = function (term) {
// console.log(term)
    // create empty array that will hold search results
    var dataArray = []

    // make get request with axios, passing in search term
    axios({
      method: 'GET',
      url: process.env.VUE_APP_ROOT_API + term,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {

        // loop through result and push each item to the dataArray
        response.data.forEach(element => {
          dataArray.push(element)
        })
        // console.log(dataArray.length)
        EventBus.$emit('check-length', dataArray.length);

      })
      .catch(function(error) {

        console.log(error)
      })
      
    return dataArray
  }
}

export default spaceSearch
