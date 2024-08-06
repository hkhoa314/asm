

import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct, FormData } from '../interface/product';
import { ICategory, CategoryFormData } from '../interface/product';
import { GetAllProducts, DeleteProductById, AddProduct, UpdateProduct } from '../services/product';
import { GetAllCategories, AddCategory, DeleteCategoryById, UpdateCategory } from '../services/category';

type Props = {
  children: React.ReactNode;
};

export const ProductCT = createContext({} as any);

const ProductContext = ({ children }: Props) => {
  const [products, setProduct] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await GetAllProducts();
      const categoriesData = await GetAllCategories();
      setProduct(productsData);
      setCategories(categoriesData);
    };
    fetchData();
  }, []);

  // Product methods
  const deleteProduct = async (id: string | number) => {
    if (confirm('Bạn chắc chứ?')) {
      try {
        await DeleteProductById(id);
        alert('Xóa thành công');
        const newProducts = products.filter((product) => product.id !== id);
        setProduct(newProducts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onAddProduct = async (data: FormData) => {
    try {
      const product = await AddProduct(data);
      alert('Thêm mới thành công');
      setProduct([...products, product]);
      navigate('/dashboard/product-list');
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateProduct = async (data: FormData, id: number | string) => {
    try {
      const updatedProduct = await UpdateProduct(data, id);
      alert('Cập nhật thành công');
      const newProducts = products.map((product) =>
        product.id === id ? updatedProduct : product
      );
      setProduct(newProducts);
      navigate('/dashboard/product-list');
    } catch (error) {
      console.log(error);
    }
  };

  // Category methods
  const onAddCategory = async (data : CategoryFormData) => {
    try {
      const newCategory = await AddCategory(data);
      alert('Thêm danh mục thành công');
      setCategories([...categories, newCategory]);
      navigate('/dashboard/category/list');
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateCategory = async (data: CategoryFormData, id: number | string) => {
    try {
      const updatedCategory = await UpdateCategory(data, id);
      alert('Cập nhật danh mục thành công');
      const newCategories = categories.map((category) =>
        category.id === id ? updatedCategory : category
      );
      setCategories(newCategories);
      navigate('/dashboard/category/list');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCategory = async (id: string | number) => {
    if (confirm('Bạn chắc chứ?')) {
      try {
        await DeleteCategoryById(id);
        alert('Xóa danh mục thành công');
        const newCategories = categories.filter((category) => category.id !== id);
        setCategories(newCategories);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <ProductCT.Provider
      value={{
        products,
        categories,
        onUpdateProduct,
        onAddProduct,
        deleteProduct,
        onAddCategory,
        onUpdateCategory,
        deleteCategory
      }}
    >
      {children}
    </ProductCT.Provider>
  );
};

export default ProductContext;
