import { createContext, useContext, useEffect, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Login } from "../services/api"
import { useNavigate } from "react-router-dom"
type child = {
  children: React.ReactNode,
 
}
type CartItem = {
  id: number,
  qty: number,
   
}
type item = {
  cartItems: CartItem[],
  handelQty: (id: number) => void
  deHandelQty: (id: number) => void
  handelRemove: (id: number) => void
  handelLogin: (username: string, password: string) => void
  handelOut: () => void
  bascetTotal: number
  bascetprice:number
  isLogin: boolean
  getQty: (id: number) => number
}

export const ShoppingCartContext = createContext({} as item)

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)
}

function ShoppingCartProvider({ children }: child) {
  const [cartItems, setcartItems] = useLocalStorage<CartItem[]>("cartItems", []);
   const handelQty = (id: number) => {
    setcartItems((currentItem) => {
      let selectedItem = cartItems.find((item) => item.id == id)
      if (selectedItem == null) {
        return [...currentItem, { id: id, qty: 1 }]
      } else {
        return cartItems.map(item => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 }
          } else {
            return item
          }
        })
      }
    })

  }
 function price(){
  
 }
  const deHandelQty = (id: number) => {
    setcartItems((currentItem) => {
      let selectedItem = cartItems.find((item) => item.id == id)
      if (selectedItem?.qty === 1) {
        return currentItem.filter((item) => item.id !== id)
      } else {
        return cartItems.map((item)=> {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const getQty = (id: number) => {
    return cartItems.find(item => item.id == id)?.qty || 0
  }
  const handelRemove = (id: number) => {
    setcartItems(currentItems =>
      currentItems.filter(item => item.id != id)
    );
  }
  const bascetTotal = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const bascetprice = cartItems.reduce((totalQty, price) => totalQty + price.id * price.qty, 0)

  const [isLogin, setIsLogin] = useState(false);
 const navigate = useNavigate()
  const handelLogin = (username:string,password:string) => {

    Login(username,password).finally(()=>{
      let token = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae illum perspiciatis, optio beatae fuga eum itaque quidem consectetur officiis amet cumque mollitia ut! Nisi, illo id? Doloribus dicta eligendi inventore?"
      localStorage.setItem("token",token)    
      setIsLogin(true)
      navigate("/")
    })
  }

  useEffect(() => {
   let token = localStorage.getItem("token")
   if(token){
     setIsLogin(true)

   }
  }, []);
  const handelOut = () => {
    setIsLogin(false)
    navigate("/Log")
    localStorage.removeItem("token")
  }
  return (
    <ShoppingCartContext.Provider value={{ handelOut,handelLogin, isLogin, cartItems, handelQty, deHandelQty, getQty, handelRemove, bascetTotal,bascetprice }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider