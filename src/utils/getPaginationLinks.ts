import { PaginationDirection } from '@/enum'
import type { PaginationLink } from '@/types/pagination'

export function getPaginationLink(
  paginationDirection: PaginationDirection,
  paginationLinks?: PaginationLink[]
): PaginationLink | null {
  return paginationLinks?.find((link) => link.rel === paginationDirection) || null
}
