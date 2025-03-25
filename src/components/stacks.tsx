import elipse from '../assets/elipse.svg';
import sombreado from '../assets/sombreado.svg';
import planet from '../assets/planet.svg';
import tasks from '../assets/tasks.svg';

const Stacks = () => {
  return (
    <div className="flex justify-center  h-screen bg-blue-">
      <div className="relative text-white text-2xl font-bold flex flex-col items-center">
        {/* Imagem do sombreado que ficará atrás das outras imagens */}
        <img src={sombreado} alt="" className="absolute items-center object-center z-0 -translate-y-10" />

        {/* Imagem posicionada acima e um pouco à direita do texto, com z-index maior */}
        <img src={elipse} alt="" className="absolute items-center object-center z-20 -translate-y-10" />

        {/* Texto que ficará atrás da imagem e centralizado */}
        <span className="relative z-10 text-4xl text-center">Bem vindo(a) ao meu curso de mentoria para iniciantes</span>
        <span className="relative z-4 text-4xl text-center font-normal">O que você vai aprender</span>

        {/* Outras imagens */}
        <img src={tasks} alt="" />
        <img src={planet} alt="" className="ml-auto animate-float" />
      </div>

    </div>
  );
};

export default Stacks;