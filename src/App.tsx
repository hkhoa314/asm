import "./App.css";
import Home from "./components/home";
import Detail from "./components/detail";
import Dashboard from "./components/dashboard";
import Client from "./layout/client";
import ProductList from "./components/productlist";

import EditProduct from "./components/editProduct";
import CartContext from "./context/cart";
import ProductContext from "./context/product";
import { useRoutes } from "react-router-dom";
import ActionContext from "./context/action";
import Addproduct from "./components/addproduct";
import AddCategory from "./components/addcategory";
import CategoryList from "./components/categorylist";
import EditCategory from "./components/editcategory";

import Search from "./components/header/search";
import Register from "./components/user/register";
import Login from "./components/user/login";
import CategoryPage from "./components/Category";

function App() {
  const element = useRoutes([
    {
      path: "",
      element: (
        <CartContext>
          <ActionContext>
            <Client />
          </ActionContext>
        </CartContext>
      ),
      children: [
        {
          path: "",
          element: (
            <ProductContext>
              <Home />
            </ProductContext>
          ),
        },
        { path: "detail/:id", element: <Detail /> },
        { path: "search", element: <Search /> },
        // {
        //   path: "category/:id",
        //   element: <CategoryPage />,
        // },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <ProductContext>
          <Dashboard />
        </ProductContext>
      ),
      children: [
        { path: "product", element: <Home /> },
        { path: "product-list", element: <ProductList /> },
        { path: "product/add", element: <Addproduct /> },
        { path: "product/edit/:id", element: <EditProduct /> },
        { path: "category/add", element: <AddCategory /> },
        { path: "category/list", element: <CategoryList /> },
        { path: "category/edit/:id", element: <EditCategory /> },
      ],
    },
  ]);
  return element;
}

export default App;
