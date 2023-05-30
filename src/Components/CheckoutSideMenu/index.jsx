import {XCircleIcon} from '@heroicons/react/24/outline' 
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context/index'
import './styles.css'

const CheckoutSideMenu = () => {

  const { isCheckoutMenuOpen, closeCheckoutMenu } = useContext(ShoppingCartContext)

  const productDetailClasses = () => {
    return `${isCheckoutMenuOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-0 top-[68px] border border-black rounded z-10 transition-all`
  }

  return (
    <aside className={productDetailClasses()}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          onClick={() => closeCheckoutMenu()}
        ><XCircleIcon className='w-[24px] h-[24px] cursor-pointer'/></div>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
