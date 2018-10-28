<template>

    <div class="search-form">
        <p class="form-error" v-if="noTerm && resultLength !== 0">Please enter search term in input field</p>
        <p class="form-error" v-if="resultLength === 0">No results please try again</p>

        <form @submit.prevent>
            <input type="text" v-model="searchTerm" placeholder="Enter search">
            <button class="shutter-button no-active" type="submit" @click="getSearch(searchTerm)">Go!</button>
        </form>

    </div>
</template>

<script>

import { GlobalEventStore } from '../services/spaceSearch'

export default {

  // name of component, this is the child component
  name: 'SearchForm',

  // need this in order to pass down a function as props
  props: {
    makeSearch: Function
  },

  data () {
    // create variable to hold the search term
    // this will be passed up to parent component in makeSearch callback
    return {

      // variable to hold search form input
      searchTerm: '',

      // variable to hold result length
      resultLength: '',

      // boolean switch for no search term
      noTerm: false
    }
  },
  methods: {
    getSearch (searchTerm) {
      // reset noTerm
      this.noTerm = false

      // reset resultLength
      this.resultLength = ''

      // only fire if search term is not null
      if (searchTerm) {
        // make the search with search term
        let results = this.$getSpaceSearch(searchTerm)

        // send results to search view
        this.makeSearch(results)

        // listen for check length event and call checkLength
        GlobalEventStore.$on('check-length', this.checkLength)
      } else {
        // if no search term set noTerm to true
        this.noTerm = true
      }
    },

    // check result length
    checkLength (length) {
    // stop listening to event until another search is made
      GlobalEventStore.$off('check-length')

      // if searchterm, store length in result length
      if (!this.noTerm) {
        this.resultLength = length
      }
    }
  }
}
</script>

<style scoped lang="scss">

.search-form {
    input {
        width: 191px;
        background-color: #17182f;
        border: 1px solid #ffffff;
        color: #ffffff;
        font-size: 16px;

        &::placeholder {
            color: #ffffff;
        }
    }

    .no-active {
        display: inline-block;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        background: #17182f;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }

    .no-active:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #f39294;
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .no-active:hover {
        color: #17182f;
    }

    .no-active:hover:before {
        -webkit-transform: scaleY(1);
        transform: scaleY(1);
    }
    .form-error {

      color: #e3c4ff;
      position: absolute;
      left: 0;
      right: 0;
      top: 79px;
      margin-left: auto;
      margin-right: auto;

      @media(min-width: 440px) {
          top: 104px;
      }
  }

}
</style>
