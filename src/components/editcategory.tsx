import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryFormData, ICategory } from "../interface/product";
import { ProductCT } from "../context/product";

const EditCategory = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const { categories, onUpdateCategory } = useContext(ProductCT);
  const navigate = useNavigate();

  // Form hooks
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CategoryFormData>();

  // Khi component render lần đầu tiên, tìm danh mục hiện tại và set giá trị vào form
  useEffect(() => {
    const category = categories.find((cat) => cat.id === Number(id));
    if (category) {
      setValue("name", category.name);
      setValue("image", category.image || "");
    }
  }, [id, categories, setValue]);

  const onSubmit = async (data: CategoryFormData) => {
    if (id) {
      await onUpdateCategory(data, Number(id)); // Cập nhật danh mục
      navigate("/dashboard/category/list"); // Chuyển hướng về danh sách danh mục sau khi cập nhật
    }
  };

  return (
    <>
      <h1 className="text-slate-700">Chỉnh sửa danh mục</h1>
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
        <input type="text" className='border border-solid p-2' {...register("image")} placeholder="Ảnh danh mục" />
        <button type="submit">Cập nhật</button>
      </form>
    </>
  );
};

export default EditCategory;
