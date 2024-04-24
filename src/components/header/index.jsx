import styles from './style.module.css';
import user_circle from '../../assets/ícones/circle-user.svg';

function Header() {
  return (
    <>
      <header>
        <div className="container">
        <div className={styles.header}>
          <div  className={styles.navMenu} >
           <div className={styles.b1}></div>
           <div className={styles.b2}></div>
           <div className={styles.b3}></div>
          </div>
          <div className={styles.boxTitle}>
            <a href='#'>vielas</a>
          </div>
          <div className={styles.boxLogin}>
            <a href="#">login</a>

          </div>
          <div className={styles.boxUser}>
            <img
              src={user_circle}             
            />
          </div>
        </div>
        </div>
      </header>
    </>
  );
}

export default Header;
