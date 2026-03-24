<template>
  <p v-if="noTerm && !searchTerm" class="form-error">
    Please enter search term in input field
  </p>
  <p v-if="!noTerm && resultLength === 0" class="form-error">
    No results please try again
  </p>
  <div class="search-form">
    <form @submit.prevent>
      <input
        id="form-input"
        v-model="searchTerm"
        type="text"
        placeholder="Enter search"
        autocomplete="off"
      />
    </form>
    <ShutterButton
      class-name="search-button"
      type="submit"
      :loading="loading"
      :on-click="() => getSearch(searchTerm)"
    >
      Go!
    </ShutterButton>
  </div>
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

import type { SpaceSearch, SearchFormProps, SearchResponse } from '@/types/search'
import ShutterButton from './ShutterButton.vue'

export default defineComponent({
  name: 'SearchForm',

  components: {
    ShutterButton
  },

  props: {
    makeSearch: {
      type: Function,
      default: () => null
    }
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

        const results: SearchResponse = await this.getSpaceSearch(searchTerm)

        this.loading = false

        this.resultLength = results?.items?.length || 0

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
  display: inline-flex;
  .search-button {
    width: 28px;
  }
  .loading-container {
    width: 54px;
    .loading-spinner {
      margin: auto;
    }
  }
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
