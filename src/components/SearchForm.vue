<template>
  <p class="form-error" v-if="noTerm && !searchTerm">Please enter search term in input field</p>
  <p class="form-error" v-if="!noTerm && resultLength === 0">No results please try again</p>
  <div class="search-form">
    <form @submit.prevent>
      <input
				id="form-input" 
				type="text"
				placeholder="Enter search"
				autocomplete="off"
				v-model="searchTerm"
			/>
    </form>
		<ShutterButton
			className="search-button"
			type="submit"
			:loading="loading"
			:onClick="() => getSearch(searchTerm)"
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
  props: {
    makeSearch: Function
  },

	components: {
		ShutterButton
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
	.loading-container {
		padding: 0 14.455px;
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
