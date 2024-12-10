

import Button from "../../components/button/Button"
import Cartitem from "../../components/cartitem/Cartitem"
import Container from "../../components/container/container"
import  { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Cart() {

  const {cartItems} = useShoppingCartContext()


  return (
    <Container>
      <div>
        {cartItems.map((item)=>(
           <Cartitem {...item}/>
       ))}
       
      </div>
      <div className="text-right bg-stone-200 mx-36 rounded-md">
        <p className="mt-5">قیمت</p>
        <p className="mt-5">تخفیف شما :2,000</p>
        <p className="mt-5">قیمت نهایی :2,000</p>
      </div>
      <Button className="bg-green-800 text-white w-20 rounded-md">
        ثبت نهایی
      </Button>
    </Container>
  )
}

export default Cart