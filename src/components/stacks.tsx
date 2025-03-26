import elipse from '../assets/elipse.svg';
import sombreado from '../assets/sombreado.svg';
import planet from '../assets/planet.svg';
import tasks from '../assets/tasks.svg';

const Stacks = () => {
  return (
    <div className="flex justify-center  h-screen bg-blue-">
      <div className="relative text-white text-2xl font-bold flex flex-col items-center mt-10">
        <img src={sombreado} alt="" className="absolute items-center object-center z-0 translate-y-10" />

        {/* Imagem posicionada acima e um pouco à direita do texto, com z-index maior */}
        {/* <img src={elipse} alt="" className="absolute items-center object-center z-20 translate-y-0" /> */}

        {/* Texto que ficará atrás da imagem e centralizado */}
        <span className="relative z-10 text-4xl text-center mt-32">Bem vindo(a) ao meu curso de mentoria para iniciantes</span>
        <span className="relative z-4 text-4xl text-center font-normal mt-10">O que você vai aprender</span>

        {/* Outras imagens */}
        <img src={planet} alt="" className="absolute top-36 left-15 right-0 bottom-0 m-auto animate-float z-10" />
        <img src={tasks} alt="" className="mt-10" />
      </div>

    </div>
  );
};

export default Stacks;