import style from './style.module.css';


function Hashtags() {
  return (
    <>
      <div className='container'>
        <ul className={style.box}>
          <li>
            <a className={style.tags} href='#'>
              #Paraisopolis
            </a>
          </li>
          <li>
            <a className={style.tags} href='#'>
              #Saúde
            </a>
          </li>{' '}
          <li>
            <a className={style.tags} href='#'>
              #hospitais
            </a>
          </li>{' '}
          <li>
            <a className={style.tags} href='#'>
              #Coperifa
            </a>
          </li>{' '}
          <li>
            <a className={style.tags} href='#'>
              #CasaDeCultura
            </a>
          </li>
          <li>
            <a className={style.tags} href='#'>
              #Eleições2022
            </a>
          </li>
          <li>
            <a className={style.tags} href='#'>
              #Urnas
            </a>
          </li>{' '}
        </ul>
      </div>
    </>
  );
}

export default Hashtags;
