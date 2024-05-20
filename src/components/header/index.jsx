import style from './header.module.css';
import user_circle from '../../assets/ícones/circle-user.svg';
import x_icon from '../../assets/ícones/icone_modal/Colebemis-Feather-X.svg';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => setOpenModal(false);
  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <header>
        <div className={style.header}>
          <div className={style.navMenu}>
            <div className={style.b1}></div>
            <div className={style.b2}></div>
            <div className={style.b3}></div>
          </div>
          <div className={style.boxTitle}>
            <button>vielas</button>
          </div>
          <div className={style.boxLogin}>
            <button href='#' onClick={handleOpen}>
              login
            </button>
          </div>
          <div className={style.boxUser}>
            <img src={user_circle} />
          </div>
        </div>
      </header>
      <Modal show={openModal} onHide={handleClose}>
        <div className={style.container__modal}>
          <div className={style.header_modal}>
            <h1>Bem Vindo ;)</h1>
            <button onClick={handleClose}>
              <img src={x_icon} alt='Botão para fechar o modal' />
            </button>
          </div>
          <div className={style.form_modal}>
            <form>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Senha' />
              <div className={style.checkbox}>
                <input type='checkbox' name='conected' id='conected' />
                <label htmlFor='conected'>me mantenha conectado</label>
              </div>
              <input onClick={handleClose} type='button' value='ENTRAR' />
            </form>
            <p>
              Esqueceu a senha?{' '}
              <a onClick={handleClose} href='#'>
                Clique aqui
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
