import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { CategoryFormData } from "../interface/product";
import { ProductCT } from "../context/product";

const AddCategory = () => {
  const { onAddCategory } = useContext(ProductCT);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>();

  const onSubmit = async (data: CategoryFormData) => {
    onAddCategory(data);
  };

  return (
    <>
      <h1 className="text-slate-700">Thêm danh mục mới</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className='border border-solid p-2'
          {...register("name", { required: true, minLength: 3 })}
          placeholder="Tên danh mục"
        />
        {errors.name && (
          <span className="text-red-700 text-[12px]">
            Tên danh mục là bắt buộc và phải ít nhất 3 ký tự
          </span>
        )}
        <input type="text" className='border border-solid p-2' {...register("image")} placeholder="Ảnh sản phẩm" />
        <button type="submit">Thêm mới</button>
      </form>
    </>
  );
};

export default AddCategory;
