import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      Feed Legal
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  );
}