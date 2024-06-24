/* eslint-disable */
import type { SearchResult } from '@/types/search'
import axios from 'axios'

// export global event store
// export const GlobalEventStore = new Vue()

export default {
  install: (app: any) => {
    const getSpaceSearch = async (term: string): Promise<SearchResult[]> => {
      try {
        const response = await axios<SearchResult[]>({
          method: 'GET',
          url: 'https://03pzs8yfhl.execute-api.us-east-1.amazonaws.com/prod/search/' + term,
          headers: {
            'Content-Type': 'application/json'
          }
        })

        return response.data
      } catch (err) {
        console.log(err)
        return []
      }
    }

    app.provide('getSpaceSearch', getSpaceSearch)
  }
}
