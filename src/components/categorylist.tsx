import React, { useContext } from "react";
import { ProductCT } from "../context/product";
import { ICategory } from "../interface/product";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { categories, deleteCategory } = useContext(ProductCT);

  const handleDelete = (id: number | string) => {
    if (confirm("Bạn chắc chắn muốn xóa danh mục này?")) {
      deleteCategory(id);
    }
  };

  return (
    <>
      <h1>Danh sách danh mục</h1>
      <table className="w-full">
        <thead className="bg-gray-800 text-white"     >
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Hình ảnh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: ICategory) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <img width={90} src={category.image} />
              </td>
              <td>
                <button onClick={() => handleDelete(category.id)}>Xóa</button>
                <Link
                  to={`/dashboard/category/edit/${category.id}`}
                  className="btn btn-primary"
                >
                  Sửa
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryList;
