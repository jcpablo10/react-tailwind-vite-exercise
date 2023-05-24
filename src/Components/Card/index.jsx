import { useContext } from "react"
import {ShoppingCartContext} from '../../Context/index'
import { PlusIcon } from "@heroicons/react/24/outline";

const Card = ({category, images, price, title, description}) => {

  const {count, setCount, openProductDetail, setSelectedProduct} = useContext(ShoppingCartContext)

  const selectProduct = (product) => {
    openProductDetail()
    setSelectedProduct(product)
  }

  return (
    <div
      onClick={() => selectProduct({category, images, price, title, description})}
      className="bg-white cursor-pointer w-56 h-60"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span
          className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"
        >
          {category.name}
        </span>
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className="w-6 h-6" />
        </div>
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  )
}

export default Card