import styles from './sobre.module.css'

export default function Sobre() {
  return (
    <section className={styles.sobreSection} id="sobre">
      <h2 className={styles.title}>Sobre a Clínica</h2>
      <p className={styles.description}>
        A Roberto Watanabe Clínica Holística é um espaço dedicado ao cuidado da
        saúde e do bem-estar. Fundada a partir da experiência pessoal de seu
        idealizador, Roberto Watanabe, a clínica nasceu do desejo de compreender
        e tratar, de forma natural, dores persistentes que o afetavam. Movido
        por essa busca, Roberto se aprofundou nos estudos das terapias
        holísticas e realizou cursos de formação técnica no Japão, onde teve
        contato direto com práticas tradicionais e recursos terapêuticos.
        <br />
        <br />
        Hoje, a clínica oferece atendimentos que unem conhecimento técnico a uma
        escuta acolhedora. A proposta é promover não apenas o alívio de
        sintomas, mas também um processo contínuo de reconexão, permitindo que
        cada pessoa tenha um estado mais profundo de equilíbrio e bem-estar
        duradouro.
      </p>
    </section>
  )
}