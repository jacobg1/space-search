export interface SearchResult {
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

export interface SearchFormProps {
  searchTerm: string
  resultLength: number | null
  loading: boolean
  noTerm: boolean
}

export type SpaceSearch = ((searchTerm: string) => Promise<SearchResult[]>) | undefined

export interface SearchPageProps {
  results: SearchResult[]
  keywords: null
  isList: boolean
}
