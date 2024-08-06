import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { ProductCT } from "../context/product";
import { FormData, ICategory } from "../interface/product";
import { GetProductByID } from "../services/product";

const EditProduct = () => {
  const { onUpdateProduct, categories } = useContext(ProductCT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const product = await GetProductByID(parseInt(id, 10));
          reset({
            name: product.name,
            image: product.image,
            price: product.price,
            category: product.category.id, // Assuming `category` is an object with `id`
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, reset]);

  const onSubmit = async (data: FormData) => {
    try {
      if (id) {
        await onUpdateProduct(data, parseInt(id, 10));
        navigate("/dashboard/product-list"); // Redirect to the product list after update
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
      <h1>Cập nhật sản phẩm</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Tên sản phẩm
          <input
            type="text"
            className='border border-solid p-2'
            {...register("name", {
              required: "Tên sản phẩm là bắt buộc",
              minLength: {
                value: 6,
                message: "Tên sản phẩm phải lớn hơn 6 kí tự",
              },
            })}
            placeholder="Tên sản phẩm"
          />
        </label>
        {errors.name && (
          <span className="text-red-700 text-[12px]">
            {errors.name.message}
          </span>
        )}

        <label>
          Ảnh sản phẩm
          <input
          className='border border-solid p-2'
            type="text"
            {...register("image", { required: "Ảnh sản phẩm là bắt buộc" })}
            placeholder="Ảnh sản phẩm"
          />
        </label>
        {errors.image && (
          <span className="text-red-700 text-[12px]">
            {errors.image.message}
          </span>
        )}

        <label>
          Giá
          <input
            type="number"
            
            className='border border-solid p-2'
            {...register("price", {
              required: "Giá là bắt buộc",
              min: { value: 0, message: "Giá không được âm" },
            })}
            placeholder="Giá"
          />
        </label>
        {errors.price && (
          <span className="text-red-700 text-[12px]">
            {errors.price.message}
          </span>
        )}

        <label>
          Danh mục
          <select
          className='border border-solid p-2'
            {...register("category", { required: "Danh mục là bắt buộc" })}
          >
            <option value="">Chọn danh mục</option>
            {categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        {errors.category && (
          <span className="text-red-700 text-[12px]">
            {errors.category.message}
          </span>
        )}

        <button type="submit">Cập nhật</button>
      </form>
    </>
  );
};

export default EditProduct;
