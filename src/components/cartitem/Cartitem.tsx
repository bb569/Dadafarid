
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { Products } from "../../servers/Server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

type cart = {
    id: number,
    qty: number
}
function Cartitem({ id, qty }: cart) {
    const { deHandelQty, handelQty, handelRemove } = useShoppingCartContext()
    const [product, setproduct] = useState<Products>();
    useEffect(() => {
        getProduct(id).then((data) => {
            setproduct(data)
        })
    }, []);
    return (
        <div className="flex flex-row-reverse">
            <Link to={`/product/${id}`}>
                <img className="mr-36 ml-4 w-32 my-5 h-32 " src={product?.image} alt="" />
            </Link>
            <div>
                <h1>{product?.title}</h1>
                <h1>{product?.price}</h1>
                <div className="flex ">
                    <Button onClick={() => handelQty(id)} className="text-white bg-blue-500 w-5 h-5 rounded-sm flex justify-center items-center ">+</Button>
                    <span className="w-6 flex justify-center">{qty}</span>
                    <Button onClick={() => deHandelQty(id)} className="text-white bg-red-500 w-5 h-5 rounded-sm flex justify-center items-center">-</Button>
                </div>               <Button onClick={() => handelRemove(id)} className="text-white bg-red-700 w-16 h-5 rounded-sm flex justify-center items-center">Remove</Button>


            </div>

        </div>
    )
}

export default Cartitem