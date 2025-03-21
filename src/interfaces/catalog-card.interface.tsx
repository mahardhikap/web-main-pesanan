export interface CardProps {
  id?: string;
  product?: string;
  disc?: number;
  desc?: string;
  price?: number;
  image?: string[];
  stock?: boolean;
  category?: string;
}

export interface CatalogParamsI {
  limit: number;
  page: number;
  search?: string;
  searchby?: string;
  sortby?: string;
  sort?: string;
}

export interface FilterCatalogResI {
  list: List[];
  pagination: PaginationI;
}

export interface List {
  id: string;
  product: string;
  disc: number;
  description: string;
  price: number;
  image: string[];
  stock: boolean;
  category: string;
  created_at: string;
}

export interface PaginationI {
  totalPage: number;
  totalData?: number;
  pageNow: number;
}

export interface ProductI {
  id:string
  product: string;
  disc: number;
  description: string;
  price: number;
  image: string[];
  stock: boolean;
  category_id: string;
  created_at: string;
}