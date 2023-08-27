import { useState } from "react"
import { toast } from "react-toastify"
import { loginWithSMS } from "../../lib/magic/magic"
import { useMagicContext } from "../../providers/MagicContext"
import Spinner from "../Spinner"

const MobileLogin = () => {
  const { fetchMagicInfo } = useMagicContext()
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
    } catch (error) {
      toast.error("Error connecting. Please try again.")
      /* eslint-disable no-console */
      console.error(error)
    } finally {
      await fetchMagicInfo()
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
        {isLoading ? <Spinner /> : "Connect"}
      </button>
    </div>
  )
}

export default MobileLogin
