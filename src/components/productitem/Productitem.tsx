import { Products } from "../../servers/Server"

type Productitem = Products
function Productitem({title,price,image}:Products) {
  return (
    <div className=''>
      <div className=''>
        <img className="" src={image} alt="" />
        <p className="">{title}</p>
        <p className=''>{price}</p>
      </div>
    </div>

  )
}

export default Productitem