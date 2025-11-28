import React, { useState } from 'react'
import styles from './agendamento-modal.module.css'
import { useForm } from 'react-hook-form'

export default function DatePicker() {
  const [date, setDate] = useState('')
  const { register, formState: { errors } } = useForm()

  return (
    <div className={styles.formGroup}>
      <label htmlFor="date" className={styles.label}>
        Data Preferencial
      </label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.input}
        {...register("date", { required: "Data é obrigatória" })}
      />
      {errors.date && (<p style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.date.message}</p>)}
    </div>
  )
}