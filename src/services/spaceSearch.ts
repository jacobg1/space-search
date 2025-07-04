import type { SearchResponse } from '@/types/search'
import axios from 'axios'

// export global event store
// export const GlobalEventStore = new Vue()

const API_URL = 'https://03pzs8yfhl.execute-api.us-east-1.amazonaws.com/prod/search'

export default {
  install: (app: any) => {
    const getSpaceSearch = async (term: string): Promise<SearchResponse> => {
      try {
        const response = await axios<SearchResponse>({
          method: 'GET',
          url: `${API_URL}/${term}`,
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
