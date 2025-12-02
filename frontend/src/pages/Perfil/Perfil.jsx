import React from 'react'
import { useUser } from '../../context/user-context.jsx'
import { useNavigate } from 'react-router-dom'
import styles from './perfil.module.css'

export default function Perfil() {
  const { user, logout } = useUser()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return null
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const inicial = user.nomeCompleto ? user.nomeCompleto.charAt(0).toUpperCase() : 'U'

  return (
    <div className={`header-gradient ${styles.perfilWrapper}`}>
      <div className={styles.perfilBox}>
        <div className={styles.avatar}>{inicial}</div>
        <h2 className={styles.title}>Meu Perfil</h2>

        <div className={styles.infoGroup}>
          <span className={styles.label}>Nome Completo</span>
          <p className={styles.value}>{user.nomeCompleto}</p>
        </div>

        <div className={styles.infoGroup}>
          <span className={styles.label}>E-mail</span>
          <p className={styles.value}>{user.email}</p>
        </div>

        {user.telefone && (
          <div className={styles.infoGroup}>
            <span className={styles.label}>Telefone</span>
            <p className={styles.value}>{user.telefone}</p>
          </div>
        )}

        <div className={styles.infoGroup}>
          <span className={styles.label}>Tipo de Usuário</span>
          <p className={styles.value} style={{ textTransform: 'capitalize' }}>
            {user.tipoUsuario}
          </p>
        </div>

        <button onClick={handleLogout} className={styles.logoutButton}>
          Sair da Conta
        </button>
        
        <br />
        
        <button onClick={() => navigate('/')} className={styles.backButton}>
          Voltar para Início
        </button>
      </div>
    </div>
  )
}