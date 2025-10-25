import { terapias } from '../../assets/data';

export default function Terapias() {
    return(    
        <section className="bg-[#f8f3e6] py-12 px-16 text-center flex items-center justify-center flex-col gap-8" id="terapias">
            <h1 className="text-[2.4rem] font-bold text-[#2d472e] m-0">Terapias Oferecidas</h1>

            <div className="max-w-[1200px] flex flex-row flex-wrap items-center justify-center gap-6">
                {terapias.map((terapia) => (
                    <div key={terapia.id} className="group w-[280px] h-[230px] rounded-xl bg-cover bg-center text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="bg-[rgba(0,50,20,0.75)] w-full h-full rounded-xl flex flex-col justify-center items-center transition-colors duration-300 ease-in-out group-hover:bg-[rgba(0,60,25,0.85)]">
                            <h3 className="text-[1.4rem] m-0">{terapia.titulo}</h3>
                            <p className="text-base max-w-[80%] text-[#f2f2f2] m-0">{terapia.subtitulo}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a className="py-[14px] px-8 bg-[#243b2a] text-white rounded-full no-underline shadow-lg transition-all duration-300 ease-in-out hover:bg-[#b3872c] hover:-translate-y-1.5 cursor-pointer">
                Agende sua consulta
            </a>
        </section>
    );
}