import { useState } from "react"
import { toast } from "react-toastify"
import { getMagicWallet, loginWithSMS } from "../../lib/magic/magic"

const MobileLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (!phoneNumber || !phoneNumber.startsWith("+")) {
      toast.error("Please enter a valid phone number including the country code")
      return
    }

    setIsLoading(true)

    try {
      await loginWithSMS(phoneNumber)
      const account = await getMagicWallet()
      // eslint-disable-next-line no-console
      console.log("SWEETS account", account)
    } catch (error) {
      toast.error("Error connecting. Please try again.")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <label htmlFor="phoneNumber" className="text-gray-600">
        Phone Number (include country code)
      </label>
      <input
        id="phoneNumber"
        type="text"
        placeholder="+1 555-555-5555"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="p-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="text-xs text-gray-500">e.g. +1 for US, +54 for ARG</p>
      <button
        type="button"
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="animate-spin w-4 h-4 border-t-2 border-white rounded-full" />
        ) : (
          "Connect"
        )}
      </button>
    </div>
  )
}

export default MobileLogin
