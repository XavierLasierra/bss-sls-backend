import { PaginationResponse } from "./api";
import { SWJobCategory } from "./jobCategory";

export enum JobStatus {
  OFFERS_PENDING = 1,
  OFFER_ACCEPTED = 2,
  JOB_DONE_REQUEST_BY_POSTER = 3,
  JOB_DONE_REQUEST_BY_SEEKER = 4,
  JOB_DONE_CONFIRMED_BY_SEEKER = 5,
  JOB_DONE_CONFIRMED_BY_POSTER = 6,
  JOB_CANCELLED = 7,
}

export interface SWJob {
  id: string;
  userId: string;
  createdTs: Date;
  title: string;
  description: string;
  budget: number;
  imageUrl: string;
  location?: GeoPoint;
  distance?: number;
  fakeLocation?: GeoPoint;
  address?: string;
  expectedStartDate?: Date;
  expectedDuration?: number;
  status: JobStatus;
  categories: SWJobCategory[];
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface SWJobFilterParams {
  location?: GeoPoint;
  distance?: number;
  userId?: string;
  status?: JobStatus;
}

export interface SWJobListResponse {
  data: JobDTO[];
  pagination: PaginationResponse;
}

export interface JobDTO {
  id: string;
  posterDetails?: PosterDetails;
  createdTs: Date;
  title: string;
  description: string;
  budget: number;
  imageUrl: string;
  location?: GeoPoint;
  distance?: number;
  address?: string;
  expectedStartDate?: Date;
  expectedDuration?: number;
  status: JobStatus;
  categories: SWJobCategory[];
}

export interface PosterDetails {
  userId: string;
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  isPremium: boolean;
}

export interface SWJobJobCategory {
  id: number;
  jobId: string;
  jobCategoryId: number;
}

export interface SWJobJobCategoryFilterParams {
  jobId?: string;
}

export interface SWJobJobCategoryListResult {
  list: SWJobJobCategory[];
  total: number;
}
