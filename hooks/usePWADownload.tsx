import { useEffect, useState } from "react"

const usePWADownload = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone

    if (isMobile && !isStandalone) {
      setShowModal(true)
    }
  }, [])

  return {
    showModal,
  }
}

export default usePWADownload
