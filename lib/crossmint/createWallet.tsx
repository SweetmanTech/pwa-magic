import fetch from "node-fetch"

const createWallet = async () => {
  const body = {
    email: "myrandomstring",
    chain: "base",
  }

  const response = await fetch(`https://staging.crossmint.com/api/v1-alpha1/wallets`, {
    method: "POST",
    headers: {
      "X-PROJECT-ID": "425871f2-9b99-45d6-9c9c-8b1825f28bcd",
      "X-CLIENT-SECRET": "sk_test.RzT2Uz77.G5KPYzcapJJFOSnV3uDTFhRn0GzflCDm",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const wallet = await response.json()
  console.log("SWEETS WALLET CREATED", wallet)
}

export default createWallet
