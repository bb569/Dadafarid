import { Products } from "../../../servers/Server"

type Productitem = Products
function Productitem({title,price,image}:Products) {
  return (
    <div className='bg-black'>
      <div className='text-end flex  flex-col justify-end border cursor-pointer'>
        <img className="w-screen h-64" src={image} alt="" />
        <p className="line-clamp-1">{title}</p>
        <p className='text-red-700'>{price}</p>
      </div>
    </div>

  )
}

export default Productitem