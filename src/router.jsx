import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home";
import { Basket } from "./pages/basket";
import { Product } from "./pages/product";
import { NotFound } from "./pages/notFound";
import { ProductDetail } from "./pages/productDetail";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "/product",
                element: <Product />
            },
            {
                path: '/product/:id',
                element: <ProductDetail />,
            },
            {
                path: "/*",
                element: <NotFound />
            }
        ]
    }
])