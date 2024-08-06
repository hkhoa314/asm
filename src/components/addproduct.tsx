import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductCT } from "../context/product";
import { FormData, ICategory } from "../interface/product";

const AddProduct = () => {
  const { onAddProduct, categories } = useContext(ProductCT);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    onAddProduct(data);
  };

  return (
    <>
      <h1>Thêm mới sản phẩm</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className='border border-solid p-2'
          {...register("name", { required: true, minLength: 6 })}
          placeholder="Tên sản phẩm"
        />
        {errors.name && (
          <span className="text-red-700 text-[12px]">
            Tên không để trống và lớn hơn 6 kí tự
          </span>
        )}

        <input type="text" className='border border-solid p-2' {...register("image")} placeholder="Ảnh sản phẩm" />

        <input
          type="text"
          className='border border-solid p-2'
          {...register("price", { required: true, pattern: /^\d*$/ })}
          placeholder="Giá"
        />
        {errors.price && (
          <span className="text-red-700 text-[12px]">
            Giá phải là số và không âm
          </span>
        )}

        <select  className='border border-solid p-2' {...register("category", { required: true })}>
          <option value="">Chọn danh mục</option>
          {categories.map((category: ICategory) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className="text-red-700 text-[12px]">Danh mục là bắt buộc</span>
        )}

        <button type="submit">Thêm mới</button>
      </form>
    </>
  );
};

export default AddProduct;
