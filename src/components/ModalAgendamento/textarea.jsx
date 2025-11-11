import React from 'react'
import styles from './agendamento-modal.module.css'

export default function ModalTextarea() {
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="queixa" className={styles.label}>
          Queixa
        </label>
        <textarea className={styles.textarea} id="queixa" name="queixa" />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="informacao">
          Alguma Informação Adicional
        </label>
        <textarea
          className={styles.textarea}
          id="informacao"
          name="informacao"
        />
      </div>
    </>
  )
}