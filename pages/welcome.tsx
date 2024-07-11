import styles from '../styles/WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => window.location.href = '/edit-profile'}>Edit Profile</button>
        <button className={styles.button} onClick={() => window.location.href = '/about'}>About</button>
      </div>
    </div>
  );
};

export default WelcomePage;
