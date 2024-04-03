import './style.css';
import circle_icon from '../../assets/ícones/circle-solid.svg';
export default function Header() {
  return (
    <>
      <header>
        <div className='container_header'>
          <div className='box'>
            <ul className='container_menu'>
              <li>
                <div className='container_menu_ret1'></div>
                <div className='container_menu_ret2'></div>
                <div className='container_menu_ret3'></div>
              </li>
            </ul>
            <ul className='container_title'>
              <li>
                <a className='container_title_text' href='#'>
                  vielas
                </a>
              </li>
            </ul>
          </div>
          <div className='box'>
            {' '}
            <ul className='container_login'>
              <li>login</li>
            </ul>
            <ul className='container_circle'>
              <li>
                <img
                  src={circle_icon}
                  alt='user_icon'
                  className='container_circle_img'
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
