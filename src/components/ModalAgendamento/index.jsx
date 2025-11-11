import React from 'react'
import { useModal } from '../../context/modal-context.jsx'
import SelectTherapy from './select-therapy.jsx'
import ModalTextarea from './textarea.jsx'
import DatePicker from './date-picker.jsx'
import styles from './agendamento-modal.module.css'
import { X } from 'lucide-react'

export default function AgendamentoModal() {
  const { isModalOpen, closeModal } = useModal()

  if (!isModalOpen) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          <X size={24} />
        </button>
        <form>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Agendar Consulta</h2>
            <p className={styles.modalDescription}>
              Preencha os dados para agendar sua consulta.
            </p>
          </div>
          <div className={styles.modalBody}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name-1">
                Nome Completo
              </label>
              <input
                className={styles.input}
                id="name-1"
                name="name"
                defaultValue="Seu Nome Completo"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                defaultValue="SeuEmail@exemplo.com"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">
                Telefone
              </label>
              <input
                className={styles.input}
                id="phone"
                name="phone"
                type="tel"
                defaultValue="(00) 00000-0000"
              />
            </div>
            <SelectTherapy />
            <DatePicker />
            <ModalTextarea />
          </div>
          <div className={styles.modalFooter}>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonOutline}`}
              onClick={closeModal}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}