<template>
  <div v-if="paginationLinks?.length" class="switch-page-container">
    <div class="switch-page">
      <div>
        <button
          v-if="prevLink"
          @click="() => getSearch(prevLink)"
          :disabled="loading"
          class="shutter-button new-background"
        >
          Prev
        </button>
      </div>
      <div>
        <button
          v-if="nextLink"
          @click="() => getSearch(nextLink)"
          :disabled="loading"
          class="shutter-button"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, type PropType, computed } from 'vue'

import type { SearchResponse, SpaceSearch } from '@/types/search'
import type { PaginationLink } from '@/types/pagination'

import { getPaginationLink } from '@/utils/getPaginationLinks'
import { PaginationDirection } from '@/enum'

export default defineComponent({
  name: 'SwitchPage',
  props: {
    makeSearch: Function,
    paginationLinks: Array as PropType<PaginationLink[]>
  },

  setup(props) {
    const loading = ref(false)
    const getSpaceSearch: SpaceSearch = inject('getSpaceSearch')

    const prevLink = computed<PaginationLink | null>(() =>
      getPaginationLink(PaginationDirection.PREV, props.paginationLinks)
    )
    const nextLink = computed<PaginationLink | null>(() =>
      getPaginationLink(PaginationDirection.NEXT, props.paginationLinks)
    )

    return { getSpaceSearch, loading, prevLink, nextLink }
  },
  methods: {
    async getSearch(link: PaginationLink | null) {
      if (link && this.getSpaceSearch && this.makeSearch) {
        this.loading = true

        const results: SearchResponse = await this.getSpaceSearch(link.searchTerm, link.page)

        this.loading = false
        window.scrollTo(0, 0)

        this.makeSearch(results)
      }
    }
  }
})
</script>

<style lang="scss">
.switch-page {
  max-width: 400px;
  margin: 65px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 445px) {
    max-width: 80%;
  }
}
</style>
