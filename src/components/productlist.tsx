import React, { useContext, useState } from "react";
import { IProduct } from "../interface/product";
import { ProductCT } from "../context/product";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, deleteProduct } = useContext(ProductCT);
  const [searchTerm, setSearchTerm] = useState("");

  // Hàm tìm kiếm
  const filteredProducts = products.filter((product: IProduct) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1 className="text-slate-700">Danh sách sản phẩm</h1>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        className="mb-4 p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="w-full">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th>STT</th>
            <th>Ảnh</th>
            <th>Tên SP</th>
            <th>Giá tiền</th>
            <th>Danh mục</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product: IProduct, index: number) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <img width={90} src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <Link
                  to={`/dashboard/product/edit/${product.id}`}
                  className="mr-2 text-blue-500"
                >
                  Sửa
                </Link>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="text-red-500"
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;
