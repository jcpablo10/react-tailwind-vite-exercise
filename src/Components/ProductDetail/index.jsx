import {XCircleIcon} from '@heroicons/react/24/outline' 

const ProductDetail = () => {
  return (
    <aside className="w-[360px] h-[calc(100vh-80px)] flex flex-col fixed bg-white right-0 top-[68px] border border-black rounded z-10">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div><XCircleIcon className='w-[24px] h-[24px]'/></div>
      </div>
    </aside>
  )
}

export default ProductDetail
