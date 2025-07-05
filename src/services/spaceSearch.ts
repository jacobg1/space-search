import type { SearchResponse } from '@/types/search'
import axios from 'axios'

export default {
  install: (app: any) => {
    const getSpaceSearch = async (term: string, page: string): Promise<SearchResponse> => {
      const pagination = page ? `?page=${page}` : ''
      try {
        const response = await axios<SearchResponse>({
          method: 'GET',
          url: `${import.meta.env.VITE_API_URL}/${term}${pagination}`,
          headers: {
            'Content-Type': 'application/json'
          }
        })

        return response.data
      } catch (err) {
        console.log(err)
        return { items: [], paginationLinks: [] }
      }
    }

    app.provide('getSpaceSearch', getSpaceSearch)
  }
}
