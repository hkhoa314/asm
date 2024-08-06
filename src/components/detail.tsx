import React, { useEffect, useState } from 'react'
import sp9 from '../image/ffef 4.png'
import { FaStar } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IProduct } from '../interface/product'
import { GetProductByID } from '../services/product'
import { useParams } from 'react-router-dom'


type Props = {}

const Detail = (props: Props) => {
  const [quantity, setQuantity] = useState(3);
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await GetProductByID(id as string);
        setProduct(data);
      } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
      }
    })();
  }, [id]);

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    if (!product) {
        return <p>Đang tải thông tin sản phẩm...</p>;
      }
  return (
    <div><div className='ml-20 pt-20 grid grid-cols-2'>
    <div>
    <img src={product.image} alt={product.name} className='ml-28' />
        <div className='flex space-x-1 ml-20 mt-4'>
            <img src={product.image} alt={product.name} className='w-20 h-20' />
            <img src={product.image} alt={product.name} className='hover:border hover:border-gray-500 rounded-lg w-20 h-20' />
            <img src={product.image} alt={product.name} className='hover:border hover:border-gray-500 rounded-lg w-20 h-20' />

        </div>
    </div>
    <div>
        
        <h1 className='text-4xl font-kumbh font-bold mt-4 mb-4'>{product.name} <br />
            0.27 to 2 litres</h1>
        <span className='text-[#68707D] mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. Lorem Ipsum has been the industry's standard dummy <br />
            text ever since the</span>
        <div className='flex space-x-4 mt-4'>
            <p className='font-bold text-xl'>${product.price}</p>
            <span className='bg-[#FFEDE0] text-[#4E7C32] text-center rounded-lg w-12'>50%</span>
        </div>
        <del className='mt-4 text-sm font-bold'>$250.00</del>
        <div className='flex space-x-10 mt-4'>
            <div className="flex items-center justify-between w-40 p-2 bg-gray-50 rounded-lg">
                <button
                    className=""
                    onClick={handleDecrement}
                >
                    <span className='text-2xl'>-</span>
                </button>
                <span className="text-2xl font-bold">{quantity}</span>
                <button
                    className=""
                    onClick={handleIncrement}
                >
                    <span className='text-2xl'>+</span>

                </button>
            </div>
            <div className='flex bg-[#4E7C32] w-44 py-2 pl-6 rounded-lg'>
                <AiOutlineShoppingCart className='text-white mt-2 mr-2 text-xl' />
                <button className='text-white'>Add to cart</button>
            </div>
        </div>
    </div>


</div>
<div className='ml-32 mt-10'>
    <div>
        <p className='text-[#4E7C32] text-2xl'>Discription</p>
        <span className='text-[#665345]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br />
            type and scrambled i</span>
    </div>
    <div className='mt-6'>
        <p className='text-[#4E7C32] text-2xl'>About</p>
        <span className='text-[#665345]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of <br />
            type and scrambled i</span>
    </div>
</div>
<div className='flex ml-32 mt-10'>
    <img src={sp9} alt="" />
    <p className='absolute right-96 text-white bg-[#4E7C32] p-2 rounded-lg'>Write reviews</p>
    <div className='flex mt-24 text-2xl text-gray-500'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
    </div>
    <span className='mt-32 ml-48 text-[#4E7C32] text-xl  absolute'>5.0 (388)</span>
</div>
<div className='flex ml-32 mt-14 space-x-1'>
    1 <FaStar className='mt-1 border- border-gray-300' />
    <div className="relative w-3/6 h-4 mt-1 ">
        <div className="absolute top-0 left-0 h-4 bg-[#A2A0A0] rounded" style={{ width: '75%' }}></div>
    </div>
</div>
<div className='flex ml-32 mt-2 space-x-1'>
    2 <FaStar className='mt-1 border- border-gray-300' />
    <div className="relative w-3/6 h-4 mt-1 ">
        <div className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded" style={{ width: '15%' }}></div>
    </div>
</div>
<div className='flex ml-32 mt-2 space-x-1'>
    3 <FaStar className='mt-1 border- border-gray-300' />
    <div className="relative w-3/6 h-4 mt-1 ">
        <div className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded" style={{ width: '15%' }}></div>
    </div>
</div>
<div className='flex ml-32 mt-2 space-x-1'>
    4 <FaStar className='mt-1 border- border-gray-300' />
    <div className="relative w-3/6 h-4 mt-1 ">
        <div className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded" style={{ width: '15%' }}></div>
    </div>
</div>
<div className='flex ml-32 mt-2 space-x-1'>
    5 <FaStar className='mt-1 border- border-gray-300' />
    <div className="relative w-3/6 h-4 mt-1 ">
        <div className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded" style={{ width: '15%' }}></div>
    </div>
</div>
<div className='mt-10 ml-32 w-3/5 grid grid-cols-2 gap-10'>
    <div className=' p-4 mt-44'>
        <div className='flex items-center'>
            <p className='text-[#4E7C32] mr-4 text-xl'>Aman Gupta</p>
            <FaStar className='mt-2' />
            <FaStar className='mt-2' />
            <FaStar className='mt-2' />
            <FaStar className='mt-2' />
            <FaStar className='mt-2' />
        </div>
        <p className='text-sm text-[#665345] mt-2'>I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
    </div>
    <div className='ml-40 w-full'>
        <div className=' p-4'>
            <div className='flex items-center'>
                <p className='text-[#4E7C32] mr-4 text-xl'>Aman Gupta</p>
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
            </div>
            <p className='text-sm text-[#665345] mt-2'>I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
        </div>
        <div className=' p-4'>
            <div className='flex items-center'>
                <p className='text-[#4E7C32] mr-4 text-xl'>Aman Gupta</p>
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
                <FaStar className='mt-2' />
            </div>
            <p className='text-sm text-[#665345] mt-2'>I've been using this cleanser for about five or six months now and my acne is almost completely gone. I really struggled for years with my skin and tried everything possible but this is the only thing that managed to clear up my skin. 100% recommend and will continue to use is for sure.</p>
        </div>
    </div>
</div>
<button className='text-white bg-[#4E7C32] p-2 px-4 rounded-lg text-center block mx-auto mb-10'>
    See all
</button></div>
  )
}

export default Detail