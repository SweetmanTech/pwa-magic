import { useEffect, useState } from "react"
import { disconnect, getMagicWallet, magicEthersProvider, isLoggedIn } from "../lib/magic/magic"

const useMagic = () => {
  const [address, setAddress] = useState("")
  const [balanceInWei, setBalanceInWei] = useState("" as any)
  const [loading, setLoading] = useState(true)

  const fetchMagicInfo = async () => {
    setLoading(true)
    const connected = await isLoggedIn()

    if (connected) {
      const magicWallet = await getMagicWallet()
      setAddress(magicWallet)
      const balanceWei = await magicEthersProvider().getBalance(magicWallet)
      setBalanceInWei(balanceWei)
      setLoading(false)
      return
    }
    setAddress("")
    setBalanceInWei(0)
    setLoading(false)
  }

  const logout = async () => {
    await disconnect()
    await fetchMagicInfo()
  }

  useEffect(() => {
    const init = async () => {
      await fetchMagicInfo()
    }

    init()
  }, [])

  return { address, balanceInWei, loading, logout, fetchMagicInfo }
}

export default useMagic
