import whatsapp from '../assets/whatsapp.svg';
import email from '../assets/email.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-full w-full p-4 sm:p-8">
      <div className="bg-[#3b2a5e] text-white rounded-lg p-6 sm:p-8 max-w-full sm:max-w-lg w-full">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Entre em contato</h2>
        <p className="text-sm sm:text-base mb-6">
          Sinta-se à vontade para enviar um e-mail. Siga-me nas redes sociais ou simplesmente preencha o formulário de consulta.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl">
              <img src={whatsapp} alt="WhatsApp" />
            </span>
            <p className="text-sm sm:text-base">WhatsApp</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl">
              <img src={email} alt="Email" />
            </span>
            <p className="text-sm sm:text-base">contatobennicode@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl">
              <img src={instagram} alt="Instagram" />
            </span>
            <p className="text-sm sm:text-base">@bennicode</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl">
              <img src={linkedin} alt="LinkedIn" />
            </span>
            <p className="text-sm sm:text-base">Brena Paiva</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-lg sm:text-xl">
              <img src={youtube} alt="YouTube" />
            </span>
            <p className="text-sm sm:text-base">Brena Paiva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;