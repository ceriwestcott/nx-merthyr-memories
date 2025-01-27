export interface ApiResponse<T = unknown> {
  data: T;
  error: string;
  message: string;
}

export interface ApiError {
  error: string;
  message: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}


