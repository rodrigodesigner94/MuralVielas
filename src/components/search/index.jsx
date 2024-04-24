import style from './style.module.css'
import lupa_busca_icon from '../../assets/ícones/lupa_busca.svg';

function Search() {
  return (
    <>
      <div className='container'>
        <ul className={style.box_search}>
          <li id={style.img}>
            <img src={lupa_busca_icon} alt='icone_lupa' />
          </li>
    
          <li id={style.input}>
            <input
              type='text'
              placeholder='Busca'
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Search;
