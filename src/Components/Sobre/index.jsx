export default function Sobre() {
  return (
    <section className="bg-[#f5f1e6] text-[#243b2a] text-center font-['Poppins',_sans-serif] flex flex-col gap-8 py-12 px-16" id="sobre">
      <h2 className="text-3xl font-semibold text-[#24442e] m-0">Sobre a Clínica</h2>

      <div className="flex flex-col w-full items-center justify-center">
        <p className="text-justify text-[1.1rem] max-w-[1000px] m-0">
            A Roberto Watanabe Clínica Holística é um espaço dedicado ao cuidado da saúde e do bem-estar.
            Fundada a partir da experiência pessoal de seu idealizador, Roberto Watanabe, a clínica nasceu
            do desejo de compreender e tratar, de forma natural, dores persistentes que o afetavam.
            Movido por essa busca, Roberto se aprofundou nos estudos das terapias holísticas e realizou
            cursos de formação técnica no Japão, onde teve contato direto com práticas tradicionais e
            recursos terapêuticos.
        </p>
        <br />
        <p className="text-justify text-[1.1rem] max-w-[1000px] m-0">
            Hoje, a clínica oferece atendimentos que unem conhecimento técnico a uma escuta acolhedora.
            A proposta é promover não apenas o alívio de sintomas, mas também um processo contínuo de
            reconexão, permitindo que cada pessoa tenha um estado mais profundo de equilíbrio e
            bem-estar duradouro.
        </p>
      </div>
    </section>
  );
}