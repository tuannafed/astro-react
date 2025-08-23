import { useState, useCallback } from 'react'

export function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

export function useMultiModal() {
  const [modals, setModals] = useState<Record<string, boolean>>({})

  const openModal = useCallback((modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: true }))
  }, [])

  const closeModal = useCallback((modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: false }))
  }, [])

  const toggleModal = useCallback((modalName: string) => {
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }))
  }, [])

  const isModalOpen = useCallback(
    (modalName: string) => {
      return modals[modalName] || false
    },
    [modals]
  )

  const closeAllModals = useCallback(() => {
    setModals({})
  }, [])

  return {
    modals,
    openModal,
    closeModal,
    toggleModal,
    isModalOpen,
    closeAllModals,
  }
}
