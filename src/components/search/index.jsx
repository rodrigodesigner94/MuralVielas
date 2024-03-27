import './style.css';
import lupa_busca_icon from '..//..//assets/ícones/lupa_busca.svg';

export default function Search() {
  return (
    <>
      <div className='container_search'>
        <div className='container_search_lupa'>
          <img
            src={lupa_busca_icon}
            alt=''
            className='container_search_lupa_img'
          />
        </div>
        <div className='container_search_input'>
            <input
              className='container_search_input_input'
              type='text'
              placeholder='Busca'
            />
          </div>
      </div>
    </>
  );
}
