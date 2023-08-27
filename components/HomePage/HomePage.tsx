import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useWalletClient } from "wagmi"
import { Magic } from "magic-sdk"
import DeployButton from "../DeployButton"
import { useDeploy } from "../../providers/DeployContext"
import CoverArtUploadButton from "../CoverArtUploadButton"
import TituloYDescripcion from "../TituloYDescripcion/TituloYDescripcion"
import AnimationUpload from "../AnimationUpload"
import FundsRecipient from "../FundsRecipient"
import { magic } from "../../lib/magic/magic"

const HomePage = () => {
  const { cubierta, animationFile } = useDeploy()
  const { data: walletClient } = useWalletClient()

  const handleClick = async () => {
    const DID = await magic.auth.loginWithSMS({
      phoneNumber: "+5491161923578",
    })
    console.log("SWEETS ACCOUNTS", DID)

    const accounts = await magic.wallet.connectWithUI()
    console.log("SWEETS ACCOUNTS", accounts)
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-white flex flex-col gap-10">
      <ConnectButton />
      <button type="button" onClick={handleClick}>
        Connect
      </button>
      {walletClient && <CoverArtUploadButton />}
      {walletClient && animationFile && <AnimationUpload />}
      {walletClient && <TituloYDescripcion />}
      {walletClient && <FundsRecipient />}
      {cubierta && <DeployButton />}
    </div>
  )
}

export default HomePage
