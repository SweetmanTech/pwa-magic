import Image from "next/image"
import React from "react"

const MobileDownloadModal = () => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-60" />
    <div className="relative bg-white p-4 rounded-md shadow-lg w-4/5 z-10 text-center">
      <Image src="/images/savePhoneIcon.png" alt="save phone icon" width={100} height={100} />
      <h2 className="text-lg font-bold mb-2">Add to Home Screen</h2>
      <p>To install the app, you need to add this website to your home screen.</p>
      <p className="mt-2">
        In your browser, tap the More button and choose Install App in the options.
      </p>
    </div>
  </div>
)

export default MobileDownloadModal
