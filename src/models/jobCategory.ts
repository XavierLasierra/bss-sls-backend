import { IJobCategoryEntity } from "src/db/models/jobCategory";
import { PaginationResponse } from "./api";

export interface SWJobCategory {
  id: number;
  name: string;
  imageUrl: string;
}

export interface SWJobCategoryFilterParams {
  name?: string;
}

export interface SWJobCategoryListResponse {
  data: IJobCategoryEntity[];
  pagination: PaginationResponse;
}
