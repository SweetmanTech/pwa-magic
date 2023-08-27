import { useEffect, useState } from "react"

const usePWA = () => {
  const [showModal, setShowModal] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const isMobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    setIsMobile(isMobileCheck)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone

    if (isMobileCheck && !isStandalone) {
      setShowModal(true)
    }
  }, [])

  return {
    isMobile,
    showModal,
  }
}

export default usePWA
