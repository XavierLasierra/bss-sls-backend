export interface SortParam {
  name: string;
  direction: string;
}

export interface PaginationParams {
  page: number;
  size: number;
}

export interface PaginationResponse {
  page: number;
  size: number;
  total: number;
}

export interface LimitOffsetParams {
  offset: number;
  limit: number;
}

export interface APIMethodResult<T> {
  status: number;
  data: T;
}

export enum ContentType {
  TEXT_PLAIN = "text/plain",
  APPLICATION_JSON = "application/json",
}
