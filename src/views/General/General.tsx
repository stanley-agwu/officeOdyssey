import styles from './General.module.scss';

const General = () => (
  <div className={styles.welcome}>
    <div className={styles.container}>
      <div className={styles.welcomeText}>
        The grand Hall of Beginnings welcomes you into the realm of Prosperitas. As you step through
        the ornate doors, the echoes of past legends and the promise of restored financial magic
        fill the air. This is where your epic journey commences.
      </div>
      <div className={styles.instruction}>
        Find your first location marked as <span>Number 1</span> on your <span>Journey map</span>.
      </div>
    </div>
  </div>
);

export default General;
