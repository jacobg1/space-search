<template>
  <p class="form-error" v-if="noTerm && !searchTerm">Please enter search term in input field</p>
  <p class="form-error" v-if="!noTerm && resultLength === 0">No results please try again</p>
  <div class="search-form">
    <form @submit.prevent>
      <input type="text" v-model="searchTerm" placeholder="Enter search" />
      <button
        :disabled="loading"
        class="shutter-button no-active"
        type="submit"
        @click="getSearch(searchTerm)"
      >
        Go!
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

import type { SearchResult, SpaceSearch, SearchFormProps } from '@/types/search'

export default defineComponent({
  name: 'SearchForm',
  props: {
    makeSearch: Function
  },

  setup() {
    const getSpaceSearch: SpaceSearch = inject('getSpaceSearch')
    return { getSpaceSearch }
  },

  data() {
    return {
      searchTerm: '',
      resultLength: null,
      noTerm: false,
      loading: false
    } as SearchFormProps
  },
  methods: {
    async getSearch(searchTerm: string) {
      this.noTerm = false

      if (searchTerm && this.getSpaceSearch && this.makeSearch) {
        this.loading = true

        const results: SearchResult[] = await this.getSpaceSearch(searchTerm)

        this.loading = false

        this.resultLength = results.length

        this.makeSearch(results)
      } else {
        this.noTerm = true
      }
    }
  }
})
</script>

<style lang="scss">
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
    content: '';
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
}
.form-error {
  position: absolute;
  top: 105px;
  left: 0;
  right: 0;
  text-align: center;
  color: #e3c4ff;
}
</style>
