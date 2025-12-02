import React, { useEffect } from 'react'
import { useModal } from '../../context/modal-context.jsx'
import SelectTherapy from './select-therapy.jsx'
import ModalTextarea from './textarea.jsx'
import { useForm, FormProvider } from 'react-hook-form' 
import DatePicker from './date-picker.jsx'
import styles from './agendamento-modal.module.css'
import api from '../../api/api.js'
import { X } from 'lucide-react'
import { useUser } from '../../context/user-context.jsx'
import { toast } from 'react-toastify'

export default function AgendamentoModal() {
  const { isModalOpen, closeModal } = useModal()
  const { user } = useUser()
  const methods = useForm() 

  useEffect(() => {
    if (user && isModalOpen) {
      methods.setValue('idUsuario', user.id);
    }
  }, [user, isModalOpen, methods]);

  if (!isModalOpen) {
    return null
  }
  
  const onSubmit = async (data) => {
    const payload = {
        ...data,
        idUsuario: user ? user.id : toast.error("Usuário não autenticado."), 
    };
    try {
        const response = await api.post('/api/criar-agendamento', payload);
        if (response.status === 201 && response.data.success) {
          toast.success('Agendamento criado com sucesso!');
          closeModal();
          methods.reset();
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
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Agendar Consulta</h2>
              <p className={styles.modalDescription}>
                Preencha os dados para agendar sua consulta.
              </p>
            </div>
            <div className={styles.modalBody}>
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
        </FormProvider>
      </div>
    </div>
  )
}