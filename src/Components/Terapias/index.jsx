import { terapias } from '../../data/terapias'
import { ModalAgendamento } from '../ModalAgendamento/index.jsx'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function Terapias() {
  return (
    <section className="py-20 px-5 max-w-6xl mx-auto text-center" id="terapias">
      <h2 className="text-4xl mb-8 text-tema2 font-semibold">Terapias Oferecidas</h2>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {terapias.map((terapia) => (
          <Dialog key={terapia.id}>
            <DialogTrigger asChild>
              <div
                className="therapy-card hover:cursor-pointer w-[250px] py-16 px-10 rounded-lg text-center transition-transform duration-300 hover:-translate-y-3 text-white"
                style={{ backgroundImage: `url(${terapia.imagem})` }}
              >
                <h3 className="text-2xl mb-3 font-semibold">{terapia.titulo}</h3>
                <p className="text-sm text-white">{terapia.subtitulo}</p>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-fundo">
              <DialogHeader className="text-center items-center">
                <img 
                  id="terapiaImagemModal" 
                  src={terapia.imagem} 
                  alt={terapia.titulo} 
                  className="w-64 h-64 object-cover border-2 border-tema mb-6"
                />
                <DialogTitle id="terapiaTitulo" className="text-2xl font-bold mb-4 text-tema2">{terapia.titulo}</DialogTitle>
                <DialogDescription id="terapiaDescricao" className="text-base text-tema2 leading-relaxed text-left">
                  {terapia.descricao}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <ModalAgendamento>
        <button
          className="mt-16 inline-block px-12 py-5 rounded-full text-white font-bold text-xl bg-tema2 hover:bg-tema2/90 border-2 border-tema hover:bg-tema hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline shadow-md"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)' }}
        >
          Agende sua consulta
        </button>
      </ModalAgendamento>
    </section>
  )
}