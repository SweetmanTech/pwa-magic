import { Magic } from "magic-sdk"

const createMagic = (key: string) => typeof window !== "undefined" && new Magic(key)

export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)

export const loginWithSMS = async (phoneNumber) =>
  magic.auth.loginWithSMS({
    phoneNumber,
  })

export const getMagicWallet = async () => {
  const accounts = await magic.wallet.connectWithUI()
  return accounts[0]
}
