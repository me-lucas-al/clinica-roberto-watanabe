import React from 'react'
import { useModal } from '../../context/modal-context.jsx'
import SelectTherapy from './select-therapy.jsx'
import ModalTextarea from './textarea.jsx'
import { useForm } from 'react-hook-form'
import DatePicker from './date-picker.jsx'
import styles from './agendamento-modal.module.css'
import api from '../../api/api.js'
import { X } from 'lucide-react'
import PrimaryInfos from './primary-infos.jsx'
import { toast } from 'react-toastify'

export default function AgendamentoModal() {
  const { isModalOpen, closeModal } = useModal()
  const { handleSubmit } = useForm()
  if (!isModalOpen) {
    return null
  }

  const onSubmit = async (data) => {
    try {
        const response = await api.post('/api/criar-agendamento', data);
        if (response.status === 201 && response.data.success) {
          toast.success('Agendamento criado com sucesso!');
          closeModal();
        } else {
          toast.error("Erro ao criar agendamento.");
          console.error('Resposta inesperada:', response);
        }
    } catch (error) {
      toast.error("Erro ao criar agendamento.");
      console.error('Erro ao enviar o agendamento:', error);
    }
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>Agendar Consulta</h2>
            <p className={styles.modalDescription}>
              Preencha os dados para agendar sua consulta.
            </p>
          </div>
          <div className={styles.modalBody}>
            <PrimaryInfos />
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