import {XCircleIcon} from '@heroicons/react/24/outline' 
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context/index'

const ProductDetail = () => {

  const { isProductDetailOpen, closeProductDetail, selectedProduct } = useContext(ShoppingCartContext)

  const productDetailClasses = () => {
    return `${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-0 top-[68px] border border-black rounded z-10 transition-all`
  }

  return (
    <aside className={productDetailClasses()}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div
          onClick={() => closeProductDetail()}
        ><XCircleIcon className='w-[24px] h-[24px] cursor-pointer'/></div>
      </div>
      {
        !selectedProduct
        ? 'No tienes productos en tu carrito.'
        : <div className='p-4' >
            <figure>
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
                className='w-full h-full rounded'
              />
            </figure>
            <p className='flex justify-between my-2 gap-4 items-center'>
              <span className='font-medium text-md'>{ selectedProduct.title }</span>
              <span className='font-medium text-2xl'>${ selectedProduct.price }</span>
            </p>
            <p className='font-light text-sm'>{ selectedProduct.description }</p>
          </div>
      }
    </aside>
  )
}

export default ProductDetail
