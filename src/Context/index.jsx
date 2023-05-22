import { createContext } from "react"

// Creamos un contexto
const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  return (
    // Crear un proveedor que encapsula a los compoenentes y proveerles la info
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}