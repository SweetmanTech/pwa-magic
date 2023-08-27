import { useEffect, useState } from "react"
import { getMagicWallet } from "../lib/magic/magic"

const useMagic = () => {
  const [address, setAddress] = useState("")

  useEffect(() => {
    const init = async () => {
      const magicWallet = await getMagicWallet()
      setAddress(magicWallet)
    }

    init()
  }, [])

  return { address }
}

export default useMagic
