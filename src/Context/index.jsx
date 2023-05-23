import { createContext, useState } from "react"

// Creamos un contexto
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0)

  return (
    // Crear un proveedor que encapsula a los compoenentes y proveerles la info
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}