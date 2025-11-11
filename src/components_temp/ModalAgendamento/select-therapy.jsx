import React from 'react'
import styles from './agendamento-modal.module.css'
import { terapias } from '@/data/terapias'

export default function SelectTherapy() {
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
      </select>
    </div>
  )
}