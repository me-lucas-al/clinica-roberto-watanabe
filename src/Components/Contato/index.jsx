import imgRoberto from '../../assets/Roberto-Perfil.png'
import imgGmail from '../../assets/gmail.png'
import imgWhatsapp from '../../assets/whatsapp.png'
import imgFacebook from '../../assets/facebook.png'
import imgMaps from '../../assets/iconMaps.png'

export default function Contato() {
  return (
    <section
      className="flex flex-col bg-gradient-to-r from-green-600 via-tema2 to-green-900 text-white px-6 py-10"
      id="contato"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl mb-4 text-white font-semibold">Contato</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-8 max-w-6xl mx-auto w-full lg:justify-around">
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <img
            src={imgRoberto}
            alt="Sr. Watanabe"
            className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[260px] lg:h-[260px] rounded-full object-cover border-4 border-tema transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="space-y-6 text-left text-base sm:text-lg md:text-xl text-white">
          <div className="flex items-center gap-4">
            <img className="w-11 h-11" src={imgGmail} alt="Ícone email" />
            <div>
              <p className="text-tema font-semibold">Email:</p>
              <a href="mailto:robertowatanabetao@hotmail.com" className="hover:text-red-500">
                robertowatanabetao@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img className="w-9 h-9" src={imgWhatsapp} alt="Ícone WhatsApp" />
            <div>
              <p className="text-tema font-semibold">WhatsApp:</p>
              <a
                href="https://wa.me/5511970514020"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-500 transition"
              >
                (11) 97051-4020
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src={imgFacebook} alt="Ícone Facebook" />
            <div>
              <p className="text-tema font-semibold">Facebook:</p>
              <a
                id="linkFacebook"
                href="https://web.facebook.com/roberto.watanabe.148"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                Roberto Watanabe
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img className="w-10 h-10" src={imgMaps} alt="Ícone Maps" />
            <div>
              <p className="text-tema font-semibold">Endereço:</p>
              <a
                id="linkMaps"
                href="https://maps.app.goo.gl/tvhnLLzaqHwPpK4V9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 transition"
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