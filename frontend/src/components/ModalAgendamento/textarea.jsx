import React from 'react'
import styles from './agendamento-modal.module.css'
import { useFormContext } from 'react-hook-form'

export default function ModalTextarea() {
  const { register, formState: { errors } } = useFormContext()
  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="queixa" className={styles.label}>
          Queixa
        </label>
        <textarea className={styles.textarea} id="queixa" name="queixa"
        {...register("queixa")} />
        
      {errors.queixa && (<p style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.queixa.message}</p>)}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="informacao">
          Alguma Informação Adicional
        </label>
        <textarea
          className={styles.textarea}
          id="informacao"
          name="informacao"
          {...register("info")}
        />
        {errors.info && (<p style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.info.message}</p>)}
      </div>
    </>
  )
}