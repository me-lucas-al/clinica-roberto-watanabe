import React, { createContext, useState, useContext } from 'react'

const ModalContext = createContext()

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const value = {
    isModalOpen,
    openModal,
    closeModal,
  }

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  )
}