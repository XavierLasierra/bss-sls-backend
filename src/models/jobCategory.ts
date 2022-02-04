import { PaginationResponse } from "./api";

export interface SWJobCategory {
  id: number;
  name: string;
  imageUrl: string;
}

export interface SWJobCategoryFilterParams {
  name?: string;
}

export interface SWJobCategoryListResult {
  list: SWJobCategory[];
  total: number;
}

export interface SWJobCategoryListResponse {
  data: SWJobCategory[];
  pagination: PaginationResponse;
}
