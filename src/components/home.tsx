import justgirl from '../assets/justgirl.svg';
import { useState, useEffect } from "react";

const Home = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const typingDuration = 4000; // Tempo da animação de digitação (4s)

    setTimeout(() => {
      setShowSecondLine(true);
    }, typingDuration);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full w-full p-4 bg-">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl">
        {/* Círculo centralizado */}
        <div className="bg-red- text-white w-64 h-64 lg:w-96 lg:h-96 flex items-center justify-center mb-6 lg:mb-0">
          <img src={justgirl} alt="Circles" className="w-[200px] lg:w-[320px]" />
        </div>

        {/* Texto e botões */}
        <div className="bg-purple- text-white w-full lg:w-96 h-auto flex flex-col items-center justify-center p-4">
          <p className="text-2xl lg:text-4xl font-semibold mb-6 text-center">
            <span className="typing-effect">Olá, meu nome é Brena. :)</span>
            {showSecondLine && (
              <span className="fade-in font-normal"> Mas pode me chamar de Benni</span>
            )}
            <style>{`
              .fade-in {
                opacity: 0;
                animation: fadeIn 2s forwards;
              }

              @keyframes fadeIn {
                from {
                  opacity: 0;
                }
                to {
                  opacity: 1;
                }
              }
            `}</style>

            <style>{`
              .typing-effect {
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                animation: typing 4s steps(40, end), blink 0.5s step-end infinite;
                border-right: 2px solid;
              }

              @keyframes typing {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }

              @keyframes blink {
                from,
                to {
                  border-color: transparent;
                }
                50% {
                  border-color: white;
                }
              }
            `}</style>
          </p>
          <div className="flex flex-wrap justify-center space-x-4">
            <button className="bg-gradient-to-r bg-[#5A5662] text-white py-3 px-6 rounded-full mb-4 lg:mb-0">
              Sobre mim
            </button>
            <button className="bg-gradient-to-r from-[#7D5FBB] to-[#a67bc9] text-white py-3 px-6 rounded-full">
              Garanta sua vaga
            </button>
          </div>
        </div>

        {/* Imagem adicional */}
        <div className="bg-blue justify-center items-center text-white w-64 h-64 lg:w-auto lg:h-96 overflow-hidden flex mt-6 lg:mt-0">
          {/* <img
            src={img}
            alt="Perfil"
            className="w-64 h-64 lg:w-96 lg:h-96 object-cover rounded-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
