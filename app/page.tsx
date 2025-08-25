"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Partners from "@/components/partners"
import Dashboard from "@/components/dashboard"
import AuthModals from "@/components/auth-modals"

export default function HomePage() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (modalId: string) => {
    setActiveModal(modalId)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = "auto"
  }

  const handleShowDashboard = () => {
    setShowDashboard(true)
  }

  const handleHideDashboard = () => {
    setShowDashboard(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white overflow-x-hidden">
      <Header onOpenModal={openModal} />

      {!showDashboard ? (
        <>
          <Hero onOpenModal={openModal} onShowDashboard={handleShowDashboard} />
          <Features />
          <Partners />
        </>
      ) : (
        <Dashboard onHideDashboard={handleHideDashboard} />
      )}

      <AuthModals activeModal={activeModal} onCloseModal={closeModal} />
    </div>
  )
}
