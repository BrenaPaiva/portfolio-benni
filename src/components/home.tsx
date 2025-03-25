import circles from '../assets/circletop.svg';
import img from '../assets/img.svg';

const Home = () => {
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
            Olá, meu nome é Brena. Mas pode me chamar de Benni.
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
