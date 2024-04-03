import './style.css';
import lupa_busca_icon from '../../assets/ícones/lupa_busca.svg';

export default function Search() {
  return (
    <>
      
        <ul className='container_search'>
          <li className='container_search_lupa'>
            <img
              src={lupa_busca_icon}
              alt='icone_lupa'
              className='container_search_lupa_img'
            />
          </li>
          <ul className='container_search_input'>
            <li >
              <input
                className='container_search_input_input'
                type='text'
                placeholder='Busca'
              />
            </li>
          </ul>
        </ul>
    </>
  );
}
