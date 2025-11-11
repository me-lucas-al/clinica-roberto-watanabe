import imgRoberto from '../../assets/Roberto-Perfil.png'
import imgGmail from '../../assets/gmail.png'
import imgWhatsapp from '../../assets/whatsapp.png'
import imgFacebook from '../../assets/facebook.png'
import imgMaps from '../../assets/iconMaps.png'
import styles from './contato.module.css'

export default function Contato() {
  return (
    <section className={`${styles.contatoSection} header-gradient`} id="contato">
      <div className={styles.header}>
        <h2 className={styles.title}>Contato</h2>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={imgRoberto}
            alt="Sr. Watanabe"
            className={styles.profileImage}
          />
        </div>

        <div className={styles.infoWrapper}>
          <div className={styles.infoItem}>
            <img className={styles.icon} src={imgGmail} alt="Ícone email" />
            <div>
              <p className={styles.infoTitle}>Email:</p>
              <a
                href="mailto:robertowatanabetao@hotmail.com"
                className={styles.infoLink}
              >
                robertowatanabetao@hotmail.com
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <img
              className={styles.icon}
              src={imgWhatsapp}
              alt="Ícone WhatsApp"
            />
            <div>
              <p className={styles.infoTitle}>WhatsApp:</p>
              <a
                href="https://wa.me/5511970514020"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                (11) 97051-4020
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <img
              className={styles.icon}
              src={imgFacebook}
              alt="Ícone Facebook"
            />
            <div>
              <p className={styles.infoTitle}>Facebook:</p>
              <a
                id="linkFacebook"
                href="https://web.facebook.com/roberto.watanabe.148"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                Roberto Watanabe
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <img className={styles.icon} src={imgMaps} alt="Ícone Maps" />
            <div>
              <p className={styles.infoTitle}>Endereço:</p>
              <a
                id="linkMaps"
                href="https://maps.app.goo.gl/tvhnLLzaqHwPpK4V9"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
              >
                R. Alberto Grasson, 155 - São Lourenço, Bragança Paulista
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}