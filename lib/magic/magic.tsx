import { providers } from "ethers"
import { Magic } from "magic-sdk"

const customNodeOptions = {
  rpcUrl: "https://goerli.base.org", // your ethereum, polygon, or optimism mainnet/testnet rpc URL
  chainId: 84531, // corresponding chainId for your rpc url
}

const createMagic = (key: string) =>
  typeof window !== "undefined" &&
  new Magic(key, {
    network: customNodeOptions, // connected to Polygon Mainnet!
  })

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)

export const loginWithSMS = async (phoneNumber) =>
  magic.auth.loginWithSMS({
    phoneNumber,
  })

export const disconnect = async () => magic.wallet.disconnect()

export const isLoggedIn = async () => magic.user.isLoggedIn()

export const getMagicWallet = async () => {
  if (await isLoggedIn()) {
    const accounts = await magic.wallet.connectWithUI()
    return accounts[0]
  }
  return null
}

export const getProvider = async () => {
  const provider = await magic.wallet.getProvider()

  return new providers.Web3Provider(provider)
}
