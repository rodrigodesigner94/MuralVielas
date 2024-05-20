import style from './search.module.css';
import lupa_busca_icon from '../../assets/ícones/lupa_busca.svg';

const Search = () => {
  return (
    <>
      <div className={style.box_search}>
        <div id={style.img}>
          <img src={lupa_busca_icon} alt='icone_lupa' />
        </div>

        <div id={style.input}>
          <input type='text' placeholder='Busca' />
        </div>
      </div>
    </>
  );
};

export default Search;
