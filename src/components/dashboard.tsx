import React from 'react'
import { Link, Outlet } from 'react-router-dom'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <>
    <div className="flex">
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        Sidebar Title
      </div>
      <nav className="flex-1">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/dashboard/category/add">Add Category</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/dashboard/category/list">Category List</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/dashboard/product/add">Add Product</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link to="/dashboard/product-list">Product List</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>


    
    </>
  )
}

export default Dashboard