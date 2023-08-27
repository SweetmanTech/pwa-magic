import { createContext, useContext } from "react"

const MagicContext = createContext<any>(undefined)

export const useMagicContext = () => {
  const context = useContext(MagicContext)
  if (!context) {
    throw new Error("useMagic must be used within a MagicProvider")
  }
  return context
}

export default MagicContext
