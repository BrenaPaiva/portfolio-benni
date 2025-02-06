import { useEffect, useState } from 'react';

function useDarkMode(): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    const currentTheme = theme === 'dark' ? 'light' : 'dark';

    // Remove a classe do tema atual e adiciona o novo tema
    root.classList.remove(currentTheme);
    root.classList.add(theme);

    // Armazena o tema selecionado no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default useDarkMode;
