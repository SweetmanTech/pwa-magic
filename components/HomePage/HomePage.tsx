import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useWalletClient } from "wagmi"
import { formatEther } from "ethers/lib/utils"
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
  const { address, balanceInWei } = useMagic()

  return (
    <div className="min-h-screen flex items-center justify-center text-white flex flex-col gap-10">
      {!address && <div>{isMobile ? <MobileLogin /> : <ConnectButton />}</div>}
      <div className="text-white">{address}</div>
      <div className="text-white">Balance: {balanceInWei && formatEther(balanceInWei)} ETH</div>
      {walletClient && <CoverArtUploadButton />}
      {walletClient && animationFile && <AnimationUpload />}
      {walletClient && <TituloYDescripcion />}
      {walletClient && <FundsRecipient />}
      {cubierta && <DeployButton />}
    </div>
  )
}

export default HomePage
