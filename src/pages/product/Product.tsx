import { useParams } from "react-router-dom"
import Container from "../../components/container/container"
import Button from "../../components/button/Button"
import { SetStateAction, useEffect, useState } from "react"
import { getProduct } from "../../services/api"
import { Products } from "../../servers/Server"
import { useShoppingCartContext } from "../../context/ShoppingCartContext"

function Product() {
    const { handelQty, deHandelQty, getQty, handelRemove } = useShoppingCartContext()


    const params = useParams<{ id: string }>()
    const [product, setproduct] = useState<Products>();
    useEffect(() => {
        getProduct(params.id as string).then((data: SetStateAction<Products | undefined>) => {
            setproduct(data)
        })
    }, []);
    return (
        <>
            <div>
                <Container>
                    <div className="flex flex-col  lg:flex-row h-screen">
                        <div className="lg:hidden flex flex-row ml-10 basis-5/12 mt-20 h-fit">
                            <img className="w-80 h-96" src={product?.image} alt="" />
                        </div>
                        <div className="flex flex-col basis-5/12 mt-20 h-full text-end">
                            <p className="text-3xl">{product?.title}</p>
                            <p className="text-2xl text-red-500">{product?.price}</p>
                            <p className=""> 30 کاربران در حال مشاهده این هستند</p>
                            <div className="flex flex-row justify-end h-14 ">
                                <div className="flex flex-row basis-11/12">
                                    <div onClick={() => handelRemove(parseInt(params.id as string))} className=" border border-stone-500 basis-1/12 mx-1 flex items-center justify-center cursor-pointer">
                                        <img className="w-2/4" src="https://img.icons8.com/?size=100&id=11705&format=png&color=000000" alt="" /></div>
                                    <div className="border border-stone-500 basis-1/12 mx-1 flex items-center justify-center cursor-pointer">
                                        <img className="w-2/4" src="https://img.icons8.com/?size=100&id=16076&format=png&color=000000" alt="" />
                                    </div>
                                    <Button className="border border-stone-500 basis-7/12 mx-1 bg-black text-white flex items-center justify-center cursor-pointer">افزودن به سبد خرید</Button>

                                    <div className="border border-stone-500 basis-3/12 mx-1 flex items-center justify-around cursor-pointer">
                                        <img onClick={() => handelQty(parseInt(params.id as string))} className="w-1/4" src="https://img.icons8.com/?size=100&id=3220&format=png&color=000000" alt="" />
                                        <p className="text-xl">{getQty(parseInt(params.id as string))}</p>
                                        <img onClick={() => deHandelQty(parseInt(params.id as string))} className="w-1/4" src="https://img.icons8.com/?size=100&id=95833&format=png&color=000000" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end">
                                <Button className="flex flex-row basis-11/12 mx-1 mt-5  justify-center item-center h-14 border border-black">اکنون خرید کنید</Button>

                            </div>
                        </div>
                        <div className="hidden lg:flex flex-row ml-10 basis-5/12 mt-20 h-fit">
                            <img className="w-80 h-96" src={product?.image} alt="" />
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Product