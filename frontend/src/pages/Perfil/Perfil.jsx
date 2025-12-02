import React, { useEffect, useState } from 'react'
import { useUser } from '../../context/user-context.jsx'
import { useNavigate } from 'react-router-dom'
import api from '../../api/api.js' //
import styles from './perfil.module.css'

export default function Perfil() {
  const { user, logout } = useUser()
  const navigate = useNavigate()
  
  const [agendamentos, setAgendamentos] = useState([])
  const [historico, setHistorico] = useState([])
  const [terapiasMap, setTerapiasMap] = useState({})
  const [loading, setLoading] = useState(true)

  // Redireciona se não estiver logado
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  // Busca dados ao carregar
  useEffect(() => {
    if (user && user.id) {
      const fetchData = async () => {
        try {
          // Busca agendamentos do usuário
          const agendamentosReq = api.get(`/api/agendamentos/${user.id}`)
          
          // Busca histórico do usuário
          const historicoReq = api.get(`/api/historico/${user.id}`)
          
          // Busca terapias para mapear ID -> Nome
          const terapiasReq = api.get('/api/terapias')

          const [agendamentosRes, historicoRes, terapiasRes] = await Promise.all([
            agendamentosReq,
            historicoReq,
            terapiasReq
          ])

          // Cria um mapa de ID: Nome da terapia
          const map = {}
          if (terapiasRes.data && terapiasRes.data.terapias) {
            terapiasRes.data.terapias.forEach(t => {
              map[t.idTerapia] = t.nomeTerapia
            })
          }
          setTerapiasMap(map)

          if (agendamentosRes.data.success) {
            setAgendamentos(agendamentosRes.data.agendamentos)
          }
          
          if (historicoRes.data.success) {
            setHistorico(historicoRes.data.historicos)
          }

        } catch (error) {
          console.error("Erro ao carregar dados do perfil:", error)
        } finally {
          setLoading(false)
        }
      }

      fetchData()
    }
  }, [user])

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  // Função auxiliar para formatar data (YYYY-MM-DD -> DD/MM/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return '-'
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
  }

  if (!user) return null

  const inicial = user.nomeCompleto ? user.nomeCompleto.charAt(0).toUpperCase() : 'U'

  return (
    <div className={`header-gradient ${styles.perfilWrapper}`}>
      <div className={styles.perfilBox}>
        {/* Seção de Dados Pessoais */}
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

        {/* Seção de Agendamentos */}
        <div className={styles.sectionDivider}></div>
        <h3 className={styles.sectionTitle}>Meus Agendamentos</h3>
        
        {loading ? (
          <p>Carregando...</p>
        ) : agendamentos.length > 0 ? (
          <div className={styles.listContainer}>
            {agendamentos.map((item) => (
              <div key={item.idAgendamento} className={styles.card}>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Data:</span>
                  <span className={styles.cardValue}>
                    {formatDate(item.dataPreferencial)} às {item.horaAgendamento}
                  </span>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Terapia:</span>
                  <span className={styles.cardValue}>
                    {terapiasMap[item.idTerapia] || 'Terapia não identificada'}
                  </span>
                </div>
                {item.queixa && (
                  <div className={styles.cardRowColumn}>
                    <span className={styles.cardLabel}>Queixa:</span>
                    <span className={styles.cardValueSmall}>{item.queixa}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyMessage}>Nenhum agendamento encontrado.</p>
        )}

        {/* Seção de Histórico */}
        <div className={styles.sectionDivider}></div>
        <h3 className={styles.sectionTitle}>Meu Histórico</h3>

        {loading ? (
          <p>Carregando...</p>
        ) : historico.length > 0 ? (
          <div className={styles.listContainer}>
            {historico.map((item) => (
              <div key={item.idHistorico} className={styles.card}>
                <div className={styles.cardRow}>
                  <span className={styles.cardLabel}>Data da Consulta:</span>
                  <span className={styles.cardValue}>{formatDate(item.dataConsulta)}</span>
                </div>
                <div className={styles.cardRowColumn}>
                  <span className={styles.cardLabel}>Diagnóstico/Notas:</span>
                  <span className={styles.cardValueSmall}>{item.diagnostico}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.emptyMessage}>Nenhum histórico registrado.</p>
        )}

        {/* Botões de Ação */}
        <div className={styles.buttonGroup}>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Sair da Conta
          </button>
          
          <button onClick={() => navigate('/')} className={styles.backButton}>
            Voltar para Início
          </button>
        </div>
      </div>
    </div>
  )
}