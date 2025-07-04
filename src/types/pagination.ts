export interface PaginationLink {
  rel: string
  prompt: string
  href: string
  page: string
  searchTerm: string
}

export interface GetPaginationLinks {
  prevLink: PaginationLink | null
  nextLink: PaginationLink | null
}
