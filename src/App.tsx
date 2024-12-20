import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { useEffect } from "react";
import AddCart from "./component/reservation/AddCart";
import { loadProductosData } from "./features/products/productsSlice";
import { loadCartsData, setOpenAddCart } from "./features/cart/cartsSlice";
import Products from "./pages/product";
import ProductDetailPage from "./pages/productDetails";
import ShoppingCartPage from "./pages/shoppingCart";
import OrderPage from "./pages/order";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector(
    (state: RootState) => state.cart.openAddCart
  );
  useEffect(() => {
    dispatch(loadProductosData());
    dispatch(loadCartsData());
  }, [dispatch]);

  const setOpen = (value?:number) => {
    dispatch(setOpenAddCart(value || 0));
  };

  return (
    <>
      <BrowserRouter>
        <div className="overflow-auto">
          <Routes>
            <>
              <Route path="/" element={<Home />} />
            </>
          </Routes>
        </div>
        
        <div className="overflow-auto">
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <div className="overflow-auto">
          <Routes>
            <>
              <Route path="/products/details/:id" element={<ProductDetailPage />} />
            </>
          </Routes>
        </div>
        <div className="overflow-auto">
          <Routes>
            <>
              <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            </>
          </Routes>
        </div>
        <div className="overflow-auto">
          <Routes>
            <>
              <Route path="/order" element={<OrderPage />} />
            </>
          </Routes>
        </div>
        {open != 0 && (
        <AddCart
          style={`${
            open ? "opacity-100 animate-fade z-20" : "opacity-0 z-0 hidden "
          }`}
          modalopen={open}
          setModalOpen={setOpen}
        />
      )}
      </BrowserRouter>
      
    </>
  );
}

export default App;
