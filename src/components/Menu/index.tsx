import { useState, useEffect } from 'react';
import {
  HistoryIcon,
  HouseIcon,
  LoaderIcon,
  MoonIcon,
  RefreshCwIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes;
    return storageTheme ?? 'dark';
  });

  const nextThemeIcon = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  }
  function test(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para a Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Ir para Configurações'
        title='Configurações'
        onClick={test}
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme] ?? <RefreshCwIcon />}
      </a>
    </nav>
  );
}
