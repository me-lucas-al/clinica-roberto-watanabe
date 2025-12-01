import React from 'react'
import styles from './agendamento-modal.module.css'
import { useFormContext } from 'react-hook-form'

export default function DatePicker() {
  const { register, formState: { errors } } = useFormContext()

  const generateTimeSlots = () => {
    const slots = []
    for (let i = 7; i <= 19; i++) {
      const hour = i.toString().padStart(2, '0')
      slots.push(`${hour}:00`)
      if (i !== 19) {
        slots.push(`${hour}:30`)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  return (
    <>
      <div className={styles.formGroup}>
        <label htmlFor="dataPreferencial" className={styles.label}>
          Data Preferencial
        </label>
        <input
          type="date"
          id="dataPreferencial"
          className={styles.input}
          {...register("dataPreferencial", { required: "Data é obrigatória" })}
        />
        {errors.dataPreferencial && (
          <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
            {errors.dataPreferencial.message}
          </p>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="horaAgendamento" className={styles.label}>
          Horário Preferencial
        </label>
        <select
          id="horaAgendamento"
          className={styles.select}
          {...register("horaAgendamento", { required: "Horário é obrigatório" })}
        >
          <option value="">Selecione um horário</option>
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.horaAgendamento && (
          <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
            {errors.horaAgendamento.message}
          </p>
        )}
      </div>
    </>
  )
}