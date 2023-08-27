import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import {
  base,
  baseGoerli,
  goerli,
  mainnet,
  optimism,
  optimismGoerli,
  zora,
  zoraTestnet,
} from "@wagmi/core/chains"
import { ToastContainer } from "react-toastify"
import { SessionProvider } from "next-auth/react"
import * as React from "react"
import { Analytics } from "@vercel/analytics/react"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import MobileDownloadModal from "../components/MobileDownloadModal/ModalDownloadModal"
import usePWA from "../hooks/usePWA"
import MagicProvider from "../providers/MagicProvider"

const myChains = [mainnet, zora, optimism, base, goerli, zoraTestnet, optimismGoerli, baseGoerli]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "Onchain Magic",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains,
})

const connectors = connectorsForWallets(wallets)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  const { showModal } = usePWA()

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <SessionProvider>
          <MagicProvider>
            <Component {...pageProps} />
            <ToastContainer />
            {/* {showModal && <MobileDownloadModal />} */}
            <Analytics />
          </MagicProvider>
        </SessionProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default MyApp
