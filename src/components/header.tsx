import React from 'react';
import 'tailwindcss-gradients';
import ThemeToggle from '../components/themeToggle';

const Header = () => {
  return (
    <header className="text-white py-4">
      <nav className="container mx-auto">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex-initial">
            <h1 className="text-white font-mono text-2xl">Bennicode</h1>
            <div className="w-36 h-0.5 bg-gradient-to-r from-blue-800 via-purple-500 to-fuchsia-600 mt-1"></div>
          </div>
          <div className="flex flex-grow justify-center">
            <div className="flex space-x-8 font-sans gap-36">
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300"><a href="/">Home</a></button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300"><a href="/tecnologias">Tecnologias</a></button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300"><a href="/projetos">Projetos</a></button>
              <button className="rounded-md relative hover:transform hover:text-purple-700 hover:scale-105 transition-transform duration-300"><a href="/contato">Contato</a></button>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>

  );
};

export default Header;