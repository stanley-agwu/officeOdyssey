import Logo from 'common/assets/logo.png';

import styles from './Header.module.scss';

const Header = () => (
  <section className={styles.header}>
    <span>
      <img src={Logo} alt="Logo" width={80} height="auto" />
    </span>
    <span className={styles.text}>OFFICE ODYSSEY</span>
  </section>
);

export default Header;
