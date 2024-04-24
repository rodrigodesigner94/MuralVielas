import image_1 from '../../assets/imagens_resultColection/51116374422_632fb80f17_k.jpg';
import image_2 from '../../assets/imagens_resultColection/49813905103_c420219e1d_k.jpg';
import image_3 from '../../assets/imagens_resultColection/51485029310_326341b0a8_k.jpg';
import image_4 from '../../assets/imagens_resultColection/51973255132_5b8ba0677b_k.jpg';
import image_5 from '../../assets/imagens_resultColection/51996434332_b7d54f8313_k.jpg';
import image_6 from '../../assets/imagens_resultColection/52080799375_f5a586e412_k.jpg';
import image_7 from '../../assets/imagens_resultColection/52098715999_b42633adc1_k.jpg';
import image_8 from '../../assets/imagens_resultColection/52736918680_81f8790ad0_k.jpg';
import image_9 from '../../assets/imagens_resultColection/52782009235_93c29029e2_k.jpg';
import image_10 from '../../assets/imagens_resultColection/53061302652_7af6813e54_k.jpg';
import style from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResultColection() {
  return (
    <>
      <div className={style.container_colection}>
        <div>
          <div className={style.box_1}>
            <ul className={style.container_result_title}>
              <li>
                <h3>Resultado em Coleções</h3>
              </li>
            </ul>
          </div>
          <div className={style.box_2}>
            <ul className={style.container_result}>
              <li>
                <img src={image_1} alt='image_1' />
              </li>
            </ul>
            <ul className={style.container_result_2}>
              <li>
                <h3>Crise Financeira</h3>
              </li>
              <li id={style.description}>
                Como a alta dos preços impacta as famílias das periferias
              </li>
            </ul>
          </div>
        </div>
        <h3 id={style.title_2}>Outros Resultados</h3>
        <div className='container'>
        <div className='container text-center'>
          <div className='row' id={style.images}>          
            <div className='col-md-4'>
              <img src={image_2} alt='image_2' />
            </div>
            <div className='col'>
              <img src={image_3} alt='image_3' />
            </div>
            <div className='col'>
              <img src={image_4} alt='image_4' />
            </div>
            <div className='col'>
              <img src={image_5} alt='image_5' />
            </div>
            <div className='col'>
              <img src={image_6} alt='image_6' />
            </div>
            <div className='col'>
              <img src={image_7} alt='image_7' />
            </div>
            <div className='col'>
              <img src={image_8} alt='image_8' />
            </div>
            <div className='col'>
              <img src={image_9} alt='image_9' />
            </div>
            <div className='col'>
              <img src={image_10} alt='image_10' />
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default ResultColection;
