
import { Magic } from "magic-sdk"

// Initialize the Magic instance
export const magic = new Magic("pk_live_559EFECDF9C84C8A", {
  network: {
    rpcUrl: "https://eth-sepolia.g.alchemy.com/v2/demo",
    chainId: 11155111,
  },
})