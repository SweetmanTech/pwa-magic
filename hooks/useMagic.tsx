import { useEffect, useState } from "react"
import { disconnect, getMagicWallet, magicEthersProvider, isLoggedIn } from "../lib/magic/magic"

const useMagic = () => {
  const [address, setAddress] = useState("")
  const [balanceInWei, setBalanceInWei] = useState("" as any)
  const [loading, setLoading] = useState(true)

  const fetchMagicInfo = async () => {
    setLoading(true)
    const connected = await isLoggedIn()
    console.log("SWEETS connected", connected)

    if (connected) {
      console.log("SWEETS PROVIDER", magicEthersProvider())
      const magicWallet = await getMagicWallet()
      console.log("SWEETS magicWallet", magicWallet)
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
    console.log("SWEETS LOGGING OUT")
    await disconnect()
    await fetchMagicInfo()
    console.log("SWEETS LOGGED OUT")
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
