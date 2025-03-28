import 'tailwindcss-gradients';

const Header = () => {
  return (
    <header className="text-white py-4">
      <nav className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="flex-initial mb-4 sm:mb-0">
            <h1 className="text-white font-mono text-xl sm:text-2xl">Bennicode</h1>
            <div className="w-24 sm:w-36 h-0.5 bg-gradient-to-r from-blue-800 via-purple-500 to-fuchsia-600 mt-1"></div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-grow justify-center sm:justify-end">
            <div className="flex flex-wrap space-x-2 sm:space-x-4 md:space-x-8 font-sans gap-2 sm:gap-4 md:gap-8">
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300">
                <a href="/">Home</a>
              </button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300">
                <a href="/tecnologias">Tecnologias</a>
              </button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300">
                <a href="/projetos">Projetos</a>
              </button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300">
                <a href="/contato">Contato</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;