import whatsapp from '../assets/whatsapp.svg';
import email from '../assets/email.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-full w-full p-4 sm:p-8 bg-yellow">
      <div className="bg-[#3b2a5e] text-white rounded-lg p-6 sm:p-8 max-w-full sm:max-w-lg w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Entre em contato</h2>
        <p className="text-sm sm:text-base mb-6 text-center">
          Sinta-se à vontade para enviar um e-mail. Siga-me nas redes sociais ou simplesmente preencha o formulário de consulta.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 flex-shrink-0">
              <img src={whatsapp} alt="WhatsApp" className="w-full h-full object-contain" />
            </span>
            <p className="text-sm sm:text-base">WhatsApp</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 flex-shrink-0">
              <img src={email} alt="Email" className="w-full h-full object-contain" />
            </span>
            <p className="text-sm sm:text-base break-all">contatobennicode@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 flex-shrink-0">
              <img src={instagram} alt="Instagram" className="w-full h-full object-contain" />
            </span>
            <p className="text-sm sm:text-base">@bennicode</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 flex-shrink-0">
              <img src={linkedin} alt="LinkedIn" className="w-full h-full object-contain" />
            </span>
            <p className="text-sm sm:text-base">Brena Paiva</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="w-8 h-8 flex-shrink-0">
              <img src={youtube} alt="YouTube" className="w-full h-full object-contain" />
            </span>
            <p className="text-sm sm:text-base">Brena Paiva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;