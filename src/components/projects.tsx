

const Projects = () => {
  return (
    <div className="flex justify-center items-center h-full w-full bg-[#1e1b30] p-8">
      {/* Título acima */}
      <span className=" text-white text-xl font-bold">Meu projetos recentes</span>
      <div className="flex space-x-8">
        {/* Cartão à esquerda */}
        <div className="w-64 h-40 bg-gray-500 rounded-lg opacity-60 flex items-end justify-center p-4">
          <span className="text-white">Projects</span>
        </div>

        {/* Cartão do meio com destaque */}
        <div className="w-72 h-48 bg-purple-700 rounded-lg shadow-lg flex items-end justify-center p-4">
          <span className="text-white font-bold">Designs</span>
        </div>

        {/* Cartão à direita */}
        <div className="w-64 h-40 bg-gray-500 rounded-lg opacity-60 flex items-end justify-center p-4">
          <span className="text-white">APIs</span>
        </div>
      </div>


    </div>

  );
};

export default Projects;
