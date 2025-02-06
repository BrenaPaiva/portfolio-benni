import me from '../assets/eu.svg'
import coffee from '../assets/coffee.svg'

const AboutMe = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-yellow">
      <div className="relative max-w-4xl h-full">
        {/* Primeira Caixa (direita) */}
        <div className="absolute top-16 left-0 w-max h-32 bg-gradient-to-r from-[#2A0F4A] to-[#1C273D] rounded-xl bg-opacity-90 p-6 font-sans text-[#D1D5DB] shadow-md text-lg">
          Tenho 24 anos e sou Desenvolvedora de Software, também gosto <br />de UI/UX.
        </div>

        {/* Segunda Caixa (esquerda) */}
        <div className="relative">
          <div className="absolute top-52 right-0 w-max h-40 bg-gradient-to-r from-[#2A0F4A] to-[#1C273D] rounded-xl bg-opacity-90 p-6 font-sans text-[#D1D5DB] shadow-md text-lg">
            Minhas stacks são C# e Javascript. Trabalho no mercado com as <br /> duas linguagens pouco mais de 2 anos e meio.<br />
            Meu foco em desenvolvimento é na construção de APIs em .NET <br />e interfaces com javascript utilizando React.
          </div>

          {/* Imagem 1 */}
          <div className="relative">
            <div className="absolute left-0 top-52 w-max h-40">
              <img src={me} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>


        {/* Imagem 2 */}
        <div className="relative">
          <div className="absolute right-0 top-96 w-max h-40">
            <img src={coffee} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        {/* Terceira Caixa (direita) */}
        <div className="absolute top-96 left-0 w-max h-32 bg-gradient-to-r from-[#2A0F4A] to-[#1C273D] rounded-xl bg-opacity-90 p-6 font-sans text-[#D1D5DB] shadow-md text-lg">
          Sou exclusivamente apaixonada por cafés, amo um cafezinho <br />especial com um cookie. 🍪
        </div>
      </div>
    </div>















  );
};

export default AboutMe;