import { Link } from "react-router-dom"
import Container from "../container/container"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"
import Menu from "./drawerMenu"
import GreenBar from "./menuGreenBar/GreenBar"
function Navbar() {
  const { bascetTotal } = useShoppingCartContext()
  const { handelOut } = useShoppingCartContext()
return (
<Container>

    <div className="border-b h-auto md:h-80 w-full flex justify-around items-center "><button onClick={handelOut}>خروج</button>
      <Link to="/cart">
        <img src="https://img.icons8.com/?size=100&id=shc3pNfcCbuG&format=png&color=000000" alt=""
          className="md:w-14 w-8 cursor-pointer" />
      </Link>

      <span className="bg-green-500 relative right-32 bottom-5 text-xs px-1 rounded-full text-white ">{bascetTotal}</span>

      <div className="hidden lg:flex items-center w-5/12 h-14 rounded-2xl border border-black relative left-20">
        <img src="https://img.icons8.com/ios-glyphs/30/search--v1.png" className="w-7 h-7 relative left-10" />
        <input type="text" className="m-auto w-3/5 h-3/5 border-r border-black p-2" dir="rtl"
          placeholder="جستوجوی محصولات..." />
        <div className="flex w-1/4 justify-around">

          <div className="bb div cursor-pointer flex xl:text-sm text-xs">

            <div className="flex">
              <p className=" relative bottom-1 text-xs mr-3" dir="rtl">^</p>همه‌دسته‌بندی‌ها
            </div>
            <div className="w-52 a h-96 overflow-auto bg-white hidden top-10 right-3 absolute z-20 duration-1000">
              <ul className="flex flex-col justify-center" dir="rtl">
                <Menu />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="sm:w-3/12 w-2/12 lg:w-2/12 cursor-pointer">
        <img src="https://dadafarid.com/wp-content/uploads/2024/10/222.jpg" alt=""
        />
      </Link>
      <div className="lg:hidden">...</div>

    </div>
    <GreenBar />
  </Container>
  )

}
export default Navbar