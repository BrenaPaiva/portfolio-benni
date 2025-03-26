import circles from '../assets/circletop.svg';
import img from '../assets/img.svg';
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
    <div className="flex justify-center h-full w-full">
      <div className="flex ">
        <div className="bg-red- text-white w-96 h-96 flex place-items-center justify-center">
          {/* Círculo centralizado */}
          <img src={circles} alt="Circles" className="w-[320px]" />
        </div>

        {/* Texto e botões */}
        <div className="bg-purple- text-white w-96 h-96 flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold mb-6 text-center">
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
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r bg-[#5A5662] text-white py-3 px-6 rounded-full">
              Sobre mim
            </button>
            <button className="bg-gradient-to-r from-[#C961DE] to-[#2954A3]  text-white py-3 px-6 rounded-full ">
              Garanta sua vaga
            </button>

          </div>
        </div>

        <div className="bg-blue justify-center items-center text-white w-auto h-96 overflow-hidden flex">
          <img
            src={img}
            alt="Perfil"
            className="w-96 h-96 object-cover rounded-full"
          />
        </div>


      </div>
    </div >
  );
};

export default Home;
