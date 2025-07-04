interface SearchResult {
  href: string
  rel: string
  render: string
  album: string[]
  center: string
  title: string
  keywords: string
  location: string
  nasa_id: string
  date_created: string
  media_type: string
  description: string
  description_508: string
}

interface PaginationLinks {
  rel: string
  prompt: string
  href: string
}

export interface SearchResponse {
  items: SearchResult[]
  paginationLinks: PaginationLinks[]
}

export interface SearchFormProps {
  searchTerm: string
  resultLength: number | null
  loading: boolean
  noTerm: boolean
}

export type SpaceSearch = ((searchTerm: string) => Promise<SearchResponse>) | undefined

export interface SearchPageProps {
  results: SearchResult[]
  paginationLinks: PaginationLinks[]
  keywords: null
  isList: boolean
}
