import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Bank from './pages/bank/Bank'
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import { useShoppingCartContext } from "./context/ShoppingCartContext"
import Store1 from "./pages/products/accessoris/page"
import Store2 from "./pages/products/assemblies/page"
import Store3 from "./pages/products/battery/page"
import Store4 from "./pages/products/bracelet/page"
import Store5 from "./pages/products/car/page"
import Store6 from "./pages/products/carpet/page"
import Store7 from "./pages/products/clothes/page"
import Store8 from "./pages/products/decorations/page"
import Store9 from "./pages/products/digital/page"
import Store10 from "./pages/products/earrings/page"
import Store11 from "./pages/products/glasses/page"
import Store12 from "./pages/products/home/page"
import Store13 from "./pages/products/industrial/page"
import Store14 from "./pages/products/laptop/page"
import Store15 from "./pages/products/legal/page"
import Store16 from "./pages/products/matrial/page"
import Store17 from "./pages/products/necklace/page"
import Store18 from "./pages/products/ornaments/page"
import Store19 from "./pages/products/personal/page"
import Store20 from "./pages/products/phone/Phone"
import Store21 from "./pages/products/ring/page"
import Store22 from "./pages/products/service/page"
import Store23 from "./pages/products/shoes/page"
import Store24 from "./pages/products/sofa/page"
import Store25 from "./pages/products/spare/page"
import Store26 from "./pages/products/stationery/page"
import Store27 from "./pages/products/tablet/page"
import Store28 from "./pages/products/tool/page"
import Login from "./pages/Log/Login"
import { Cart } from "./pages/cart/Cart"
function App() {
  const { isLogin } = useShoppingCartContext()
  return (
    <>


      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/Log" element={isLogin ? <Navigate to="/cart" /> : <Login />}></Route>
            <Route path="/Log" element={<Login />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/bank" element={isLogin ? <Bank /> : <Navigate to="/Log" />}></Route>
          <Route path="/products/accessoris" element={<Store1 />}></Route>
          <Route path="/products/assemblies" element={<Store2 />}></Route>
          <Route path="/products/battery" element={<Store3 />}></Route>
          <Route path="/products/bracelet" element={<Store4 />}></Route>
          <Route path="/products/car" element={<Store5 />}></Route>
          <Route path="/products/carpet" element={<Store6 />}></Route>
          <Route path="/products/clothes" element={<Store7 />}></Route>
          <Route path="/products/decorations" element={<Store8 />}></Route>
          <Route path="/products/digital" element={<Store9 />}></Route>
          <Route path="/products/earrings" element={<Store10 />}></Route>
          <Route path="/products/glasses" element={<Store11 />}></Route>
          <Route path="/products/home" element={<Store12 />}></Route>
          <Route path="/products/industrial" element={<Store13 />}></Route>
          <Route path="/products/laptop" element={<Store14 />}></Route>
          <Route path="/products/legal" element={<Store15 />}></Route>
          <Route path="/products/matrial" element={<Store16 />}></Route>
          <Route path="/products/necklace" element={<Store17 />}></Route>
          <Route path="/products/ornaments" element={<Store18 />}></Route>
          <Route path="/products/personal" element={<Store19 />}></Route>
          <Route path="/products/phone" element={<Store20 />}></Route>
          <Route path="/products/ring" element={<Store21 />}></Route>
          <Route path="/products/service" element={<Store22 />}></Route>
          <Route path="/products/shoes" element={<Store23 />}></Route>
          <Route path="/products/sofa" element={<Store24 />}></Route>
          <Route path="/products/spare" element={<Store25 />}></Route>
          <Route path="/products/stationery" element={<Store26 />}></Route>
          <Route path="/products/tablet" element={<Store27 />}></Route>
          <Route path="/products/tool" element={<Store28 />}></Route>
          <Route path="/products/watch" element={<Store28 />}></Route>
        </Routes>
      </Layout>

    </>
  )
}

export default App
