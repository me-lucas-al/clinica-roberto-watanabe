import React, { useState } from 'react'
import styles from './agendamento-modal.module.css'

export default function DatePicker() {
  const [date, setDate] = useState('')

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
      />
    </div>
  )
}