import { createContext, useState } from "react"

// Creamos un contexto
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Cart count
  const [count, setCount] = useState(0)

  // Side Product Detail * Open Close
  const [isProductDetailOpen, setIsProductDetailOpen] =  useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    // Crear un proveedor que encapsula a los compoenentes y proveerles la info
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setSelectedProduct,
      selectedProduct,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}