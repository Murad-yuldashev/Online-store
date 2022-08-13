import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
  { path: `/favorites`, element: <Favorites/> },
  { path: `/cart`, element: <Cart/> },
];
export default routes;
