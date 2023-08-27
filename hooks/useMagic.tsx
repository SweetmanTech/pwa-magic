import { useEffect, useState } from "react"
import { getMagicWallet, getProvider } from "../lib/magic/magic"

const useMagic = () => {
  const [address, setAddress] = useState("")
  const [balanceInWei, setBalanceInWei] = useState("" as any)

  useEffect(() => {
    const init = async () => {
      const magicWallet = await getMagicWallet()
      setAddress(magicWallet)
      const provider = await getProvider()
      const balanceWei = await provider.getBalance(magicWallet)
      setBalanceInWei(balanceWei)
    }

    init()
  }, [])

  return { address, balanceInWei }
}

export default useMagic
