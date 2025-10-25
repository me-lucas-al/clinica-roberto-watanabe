import imgFacebook from "../../assets/facebook.png";
import imgGmail from "../../assets/gmail.png";
import imgMaps from "../../assets/iconMaps.png";
import imgRoberto from "../../assets/Roberto-Perfil.png";
import imgWhatsapp from "../../assets/whatsapp.png";

export default function Contato() {
  return (
    <section className="bg-gradient-to-br from-[#009b3a] to-[#0e4123] text-[#f4f4f4] p-8 flex flex-col items-center gap-3" id="contato">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white tracking-wide m-0">Contato</h2>
      </div>

      <div className="flex justify-evenly items-center flex-wrap w-full max-w-[1200px] mt-3">

        <div className="flex justify-center items-center">
          <img className="w-[300px] h-[300px] object-cover rounded-full border-4 border-[#c49b33] shadow-[0_4px_20px_rgba(0,0,0,0.4)]" src={imgRoberto} alt="Sr. Roberto Watanabe" />
        </div>

        <div className="flex flex-col gap-4 min-w-[350px]">

          <div className="flex items-center gap-4">
            <img src={imgGmail} alt="Ícone email" className="w-[35px] h-[35px] object-contain" />
            <div>
              <p className="text-[#f0a500] text-[1.4rem] font-semibold m-0">Email:</p>
              <a href="mailto:robertowatanabetao@hotmail.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-[1.2rem] transition-colors duration-300 ease-in-out hover:text-[#c49b33]">
                robertowatanabetao@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src={imgWhatsapp} alt="Ícone WhatsApp" className="w-[35px] h-[35px] object-contain" />
            <div>
              <p className="text-[#f0a500] text-[1.4rem] font-semibold m-0">WhatsApp:</p>
              <a href="https://wa.me/5511970514020" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-[1.2rem] transition-colors duration-300 ease-in-out hover:text-[#c49b33]">
                (11) 97051-4020
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src={imgFacebook} alt="Ícone Facebook" className="w-[35px] h-[35px] object-contain" />
            <div>
              <p className="text-[#f0a500] text-[1.4rem] font-semibold m-0">Facebook:</p>
              <a href="https://web.facebook.com/roberto.watanabe.148" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-[1.2rem] transition-colors duration-300 ease-in-out hover:text-[#c49b33]">
                Roberto Watanabe
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <img src={imgMaps} alt="Ícone Maps" className="w-[35px] h-[35px] object-contain" />
            <div>
              <p className="text-[#f0a500] text-[1.4rem] font-semibold m-0">Endereço:</p>
              <a href="https://maps.app.goo.gl/tvhnLLzaqHwPpK4V9" target="_blank" rel="noopener noreferrer" className="text-white no-underline text-[1.2rem] transition-colors duration-300 ease-in-out hover:text-[#c49b33]">
                R. Alberto Grasson, 155 - São Lourenço, Bragança Paulista
              </a>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}