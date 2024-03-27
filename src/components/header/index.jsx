import './style.css';

export default function Header() {
  return (
    <>
      <header className='container_header'>
        <div className='container_header_menu'>
          <div className='container_header_menu_rectangle_1'></div>
          <div className='container_header_menu_rectangle_2'></div>
          <div className='container_header_menu_rectangle_3'></div>
        </div>
        <div className='container_header_title'>
          <a className='container_header_title_link' href='#'>
            vielas
          </a>
        </div>
        <div className='container_header_login'>
          <div className='container_header_login_text'>login</div>
        </div>
        <div className='container_header_circle'>
          <div className='container_header_circle_figure'></div>
        </div>
      </header>
    </>
  );
}
