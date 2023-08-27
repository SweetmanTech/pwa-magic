import { useEffect, useState } from "react"

const usePWADownload = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone

    if (isMobile && !isStandalone) {
      setShowModal(true)
    }
  }, []) // The empty dependency array ensures this useEffect only runs once, after the component mounts.

  return {
    showModal,
  }
}

export default usePWADownload
