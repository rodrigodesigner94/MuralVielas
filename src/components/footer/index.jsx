import facebook_icon from '../../assets/ícones/icones_footer/facebook-f.svg';
import instagram_icon from '../../assets/ícones/icones_footer/instagram.svg';
import twitter_icon from '../../assets/ícones/icones_footer/twitter.svg';
import whatsapp_icon from '../../assets/ícones/icones_footer/whatsapp.svg';
import linkedin_icon from '../../assets/ícones/icones_footer/linkedin-in.svg';
import style from './style.module.css';

function Footer() {
  return (
    <>
      <footer>
        <div className= "container">
          <div className={style.box}>
            <ul id={style.box_title}>
              <li>vielas</li>
            </ul>
            <ul id={style.box_redes}>
              <li>
                <img src={facebook_icon} alt='facebook' />
              </li>
              <li>
                <img src={instagram_icon} alt='instagram' />
              </li>
              <li>
                <img src={twitter_icon} alt='twitter' />
              </li>
              <li>
                <img src={whatsapp_icon} alt='whatsapp' />
              </li>
              <li>
                <img src={linkedin_icon} alt='linkedin' />
              </li>
            </ul>
          </div>
          <div>
            <ul id={style.box_social}>
              <li>Quem Somos</li>
              <li>Equipe</li>
              <li>Apoie</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div className={style.box}>
           
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
