import axios from "axios";
import { toast } from "react-toastify";
import { CatalogParamsI } from "@/interfaces/catalog-card.interface";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const listProductFilter = async (params: CatalogParamsI) => {
  try {
    const response = await apiClient.get("/product/filtered", { params });
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const detailProduct = async (id: string) => {
  try {
    const response = await apiClient.get(`/product/${id}/detail`);
    return response.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};