import { getMagicWallet, loginWithSMS } from "../../lib/magic/magic"

const MobileLogin = () => {
  const handleClick = async () => {
    await loginWithSMS("+16143496576")
    const account = await getMagicWallet()
    // eslint-disable-next-line no-console
    console.log("SWEETS account", account)
  }
  return (
    <button type="button" onClick={handleClick}>
      Connect
    </button>
  )
}

export default MobileLogin
