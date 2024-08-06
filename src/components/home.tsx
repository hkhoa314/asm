import React, { useContext } from "react";
import { ICategory, IProduct } from "../interface/product";
import ProductItem from "./product/productItem";
import { ProductCT } from "../context/product";
import { FiChevronLeft } from "react-icons/fi";
import anh1 from "../image/fwfqq 1.png";

import anh6 from "../image/AdobeStock_204287225_Preview 1.png";
import anh7 from "../image/gtgre 1.png";
import anh8 from "../image/gggrrr 1.png";
import anh9 from "../image/ffgdsa 1.png";
import anh10 from "../image/bfdsA 1.png";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ProductCT);
  const { categories } = useContext(ProductCT);
  return (
    <>
      {/* <div className='grid grid-cols-4 gap-6'>
            {products.map((product:IProduct)=>(
              <ProductItem product={product}/>
            ))}
        </div> */}
      <div className="bg-gradient-to-r from-[#B6DDB0] to-[#E6EDDE]">
        <div className="max-w-[1200px] mx-auto flex items-center p-8 relative">
          <div className="ml-10 py-16 grid grid-cols-2 gap-8 z-10">
            <div className="pr-8">
              <p className="font-baloo text-[#505F4E] text-4xl">
                Wir kümmern uns um Ihre <br /> schöner Garten und Haus
              </p>
              <FiChevronLeft
                size={30}
                color="#000"
                className="relative -ml-40"
              />
              <p className="text-[#665345]">
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been the industry's <br />
                standard dummy text ever since the 1500s,
              </p>
              <button className="text-[#505F4E] border-solid border-[#505F4E] border-2 mt-5 p-2">
                Lern mehr
              </button>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <img src={anh1} className="w-full h-full object-cover" alt="Anh1" />
          </div>
        </div>
      </div>
      <div className="p-2 bg-[#F8F4F0]">
        <p className="font-baloo text-2xl mt-4 text-[#505F4E] ml-20">
          sản phẩm
        </p>
      </div>
      <div className="grid grid-cols-4 gap-12">
        {products.map((product: IProduct) => (
          <ProductItem product={product} />
        ))}
      </div>
      <div className="bg-[#F5F5F5] flex space-x-5 justify-center py-20">
        <div className="relative inline-block group">
          <img src={anh6} alt="Garten Spaten" className="block" />
          <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black  text-[25px] font-semibold font-['Poppins'] p-1 group-hover:opacity-100 ">
            Garten Spaten
          </p>
        </div>
        <div className="">
          <div className="relative group ">
            <img src={anh7} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black  text-[25px] font-semibold font-['Poppins'] p-1 group-hover:opacity-100">
              Sand
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh8} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black  text-[25px] font-semibold font-['Poppins'] p-1 group-hover:opacity-100">
              Schlammkuchen
            </p>
          </div>
        </div>
        <div className="">
          <div className="relative group ">
            <img src={anh9} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black  text-[25px] font-semibold font-['Poppins'] p-1 group-hover:opacity-100">
              Pflanzer
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh10} alt="Garten Spaten" className="block" />
            <p className="opacity-0 transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black  text-[25px] font-semibold font-['Poppins'] p-1 group-hover:opacity-100">
              Klemmen
            </p>
          </div>
        </div>
      </div>
      <p className="font-baloo text-2xl text-[#505F4E] bg-[#F5F5F5] pl-20">
        danh mục
      </p>
      <hr className="bg-[#F5F5F5] w-full mx-auto hidden md:block" />
      <div className="bg-[#F5F5F5] pt-10">
        <div className=" grid grid-cols-4 justify-between ml-14">
          {categories.map((category: ICategory) => (
            <div key={category.id} className="relative">
              <img src={category.image} alt={category.name} className="block" />
              <Link
                to={`/category/${products.id}`} // Sử dụng query parameter cho lọc
                className="absolute inset-0 ml-40 mb-72 flex flex-col justify-center bg-opacity-50 text-black text-lg font-semibold font-['Poppins'] hover:underline"
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
