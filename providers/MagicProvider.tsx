import { useMemo } from "react"
import MagicContext from "./MagicContext"
import useMagic from "../hooks/useMagic"

const MagicProvider = ({ children }) => {
  const hook = useMagic()

  const contextValue = useMemo(
    () => ({
      ...hook,
    }),
    [hook],
  )

  return <MagicContext.Provider value={contextValue}>{children}</MagicContext.Provider>
}

export default MagicProvider
