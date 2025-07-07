import type { SearchResponse } from '@/types/search'
import Axios from 'axios'
import { setupCache } from 'axios-cache-interceptor'

const instance = Axios.create()
const axios = setupCache(instance)

export default {
  install: (app: any) => {
    const getSpaceSearch = async (term: string, page: string): Promise<SearchResponse> => {
      const pageNumber = page || 1
      try {
        const response = await axios<SearchResponse>({
          method: 'GET',
          url: `${import.meta.env.VITE_API_URL}/${term}?page=${pageNumber}`,
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
