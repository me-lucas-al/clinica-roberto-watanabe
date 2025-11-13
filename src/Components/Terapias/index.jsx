import { useState } from 'react'
import { terapias } from '../../data/terapias'
import { useModal } from '../../context/modal-context.jsx'
import styles from './terapias.module.css'
import { X } from 'lucide-react'

export default function Terapias() {
  const { openModal } = useModal()
  const [selectedTerapia, setSelectedTerapia] = useState(null)

  const openTerapiaModal = (terapia) => {
    setSelectedTerapia(terapia)
  }

  const closeTerapiaModal = () => {
    setSelectedTerapia(null)
  }

  return (
    <section className={styles.terapiasSection} id="terapias">
      <h2 className={styles.title}>Terapias Oferecidas</h2>

      <div className={styles.grid}>
        {terapias.map((terapia) => (
          <div
            key={terapia.id}
           style={{ background: `linear-gradient(to bottom, rgba(45, 71, 46, 0.8), rgba(45, 71, 46, 0.8)), url(${terapia.imagem}) center center / cover no-repeat`,}}
            className={`${styles.card} therapy-card`}
            onClick={() => openTerapiaModal(terapia)}
          >
            <h3 className={styles.cardTitle}>{terapia.titulo}</h3>
            <p className={styles.cardSubtitle}>{terapia.subtitulo}</p>
          </div>
        ))}
      </div>

      <button onClick={openModal} className={styles.agendaButton}>
        Agende sua consulta
      </button>

      {selectedTerapia && (
        <div className={styles.modalOverlay} onClick={closeTerapiaModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeTerapiaModal}>
              <X size={24} />
            </button>
            <div className={styles.modalHeader}>
              <img
                src={selectedTerapia.imagem}
                alt={selectedTerapia.titulo}
                className={styles.modalImage}
              />
              <h3 className={styles.modalTitle}>{selectedTerapia.titulo}</h3>
              <p className={styles.modalDescription}>
                {selectedTerapia.descricao}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}