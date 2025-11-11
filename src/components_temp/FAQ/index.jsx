import React, { useState } from 'react'
import { faqData } from '../../data/faq'
import styles from './faq.module.css'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="questions" className={styles.faqSection}>
      <h2 className={styles.title}>Perguntas Frequentes</h2>
      <div className={styles.accordion}>
        {faqData.map((item) => {
          const isOpen = openItem === item.id
          return (
            <div
              key={item.id}
              className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}
            >
              <button
                className={styles.accordionTrigger}
                onClick={() => toggleItem(item.id)}
              >
                <span className={styles.triggerText}>{item.pergunta}</span>
                <ChevronDown className={styles.chevron} />
              </button>
              {isOpen && (
                <div className={styles.accordionContent}>
                  <p>{item.resposta}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}