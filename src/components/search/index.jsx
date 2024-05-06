import style from './style.module.css'
import lupa_busca_icon from '../../assets/ícones/lupa_busca.svg';

function Search() {
  return (
    <>
      <div className={style.container_search}>
        <div className={style.box_search}>
          <div id={style.img}>
            <img src={lupa_busca_icon} alt='icone_lupa' />
          </div>
    
          <div id={style.input}>
            <input
              type='text'
              placeholder='Busca'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
