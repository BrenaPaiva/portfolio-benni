import { FiSun, FiMoon } from 'react-icons/fi';
import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md focus:outline-none text-base font-extrabold text-gray-900 dark:text-gray-300 bg-blue-500"
    >
      {theme === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />}
    </button>
  );
};

export default ThemeToggle;
