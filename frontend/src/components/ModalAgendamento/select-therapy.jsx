import React from 'react'
import styles from './agendamento-modal.module.css'
import { terapias } from '@/data/terapias'
import { useForm } from 'react-hook-form'

export default function SelectTherapy() {
  const { register, formState: { errors } } = useForm()
  
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="select-therapy">
        Terapia Desejada
      </label>
      <select id="select-therapy" className={styles.select}>
        <option value="">Selecione uma Terapia</option>
        {terapias.map((terapia) => (
          <option key={terapia.id} value={terapia.id}>
            {terapia.titulo}
          </option>
        ))}
        {...register("selectTherapy", { required: "Terapia é obrigatória" })}
      </select>
      {errors.selectTherapy && (<p style={{ color: "#ef4444", fontSize: "0.8rem" }}>{errors.selectTherapy.message}</p>)}
    </div>
  )
}