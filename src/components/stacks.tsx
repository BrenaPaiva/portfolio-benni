import planet from '../assets/planet.svg';
import quebracabeca from '../assets/quebracabeca.svg';
import roadmap from '../assets/roadmap.svg';
import duvidas from '../assets/duvidas.svg';

const Stacks = () => {
  return (
    <div className="flex justify-center h-screen w-full bg-pink">
      <div className="relative text-white text-xl sm:text-2xl font-bold flex flex-col items-center mt-10 px-4 sm:px-8">
        {/* Texto que ficará atrás da imagem e centralizado */}
        <span className="relative z-10 text-2xl sm:text-4xl text-center mt-16 sm:mt-32">
          Bem vindo(a) ao meu curso de mentoria para iniciantes
        </span>
        <span className="relative z-4 text-xl sm:text-4xl text-center font-normal mt-6 sm:mt-10">
          O que você vai aprender
        </span>

        {/* Imagens organizadas em 3 em cima e 2 embaixo */}
        <div className="flex flex-col items-center gap-4 mt-6 sm:mt-10">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <img src={roadmap} alt="" className="w-20 sm:w-64" />
            <img src={quebracabeca} alt="" className="w-20 sm:w-64" />
            <img src={duvidas} alt="" className="w-20 sm:w-64" />
          </div>
        </div>
        <div>
          <img
            src={planet}
            alt=""
            className="animate-float z-10 absolute bottom-[-40px] sm:bottom-[-80px] right-[-50px] sm:right-[-100px] w-32 sm:w-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Stacks;
