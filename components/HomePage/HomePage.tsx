import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useWalletClient } from "wagmi"
import DeployButton from "../DeployButton"
import { useDeploy } from "../../providers/DeployContext"
import CoverArtUploadButton from "../CoverArtUploadButton"
import TituloYDescripcion from "../TituloYDescripcion/TituloYDescripcion"
import AnimationUpload from "../AnimationUpload"
import FundsRecipient from "../FundsRecipient"
import MobileLogin from "../MobileLogin"
import usePWA from "../../hooks/usePWA"
import useMagic from "../../hooks/useMagic"

const HomePage = () => {
  const { cubierta, animationFile } = useDeploy()
  const { data: walletClient } = useWalletClient()
  const { isMobile } = usePWA()
  const { address } = useMagic()

  return (
    <div className="min-h-screen flex items-center justify-center text-white flex flex-col gap-10">
      {isMobile ? <MobileLogin /> : <ConnectButton />}
      <div className="text-white">{address}</div>
      {walletClient && <CoverArtUploadButton />}
      {walletClient && animationFile && <AnimationUpload />}
      {walletClient && <TituloYDescripcion />}
      {walletClient && <FundsRecipient />}
      {cubierta && <DeployButton />}
    </div>
  )
}

export default HomePage
