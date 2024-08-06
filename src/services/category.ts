import api from "../config/axios";
import { CategoryFormData } from "../interface/product";


// Lấy tất cả các danh mục
export const GetAllCategories = async () => {
  try {
    const { data } = await api.get(`categories`);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh mục');
  }
};

// Lấy danh mục theo ID
export const GetCategoryByID = async (id: number | string) => {
  try {
    const { data } = await api.get(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi lấy danh mục');
  }
};

// Thêm mới danh mục
export const AddCategory = async (categoryData: CategoryFormData) => {
  try {
    const { data } = await api.post(`categories`, categoryData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi thêm danh mục');
  }
};

// Cập nhật danh mục theo ID
export const UpdateCategory = async (categoryData: CategoryFormData, id: number | string) => {
  try {
    const { data } = await api.put(`categories/${id}`, categoryData);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi cập nhật danh mục');
  }
};

// Xóa danh mục theo ID
export const DeleteCategoryById = async (id: number | string) => {
  try {
    const { data } = await api.delete(`categories/${id}`);
    return data;
  } catch (error) {
    throw new Error('Lỗi khi xóa danh mục');
  }
};
