import image_1 from '../../assets/imagens_resultColection/51116374422_632fb80f17_k.jpg';

import style from './resultColection.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultColection = () => {
  const dataImages = [
    {
      id: '1',
      image: 'src/assets/imagens_resultColection/51116374422_632fb80f17_k.jpg',
      alt: 'Imagem 01',
    },
    {
      id: '2',
      image: 'src/assets/imagens_resultColection/51485029310_326341b0a8_k.jpg',
      alt: 'Imagem 02',
    },
    {
      id: '3',
      image: 'src/assets/imagens_resultColection/51973255132_5b8ba0677b_k.jpg',
      alt: 'Imagem 03',
    },
    {
      id: '4',
      image: 'src/assets/imagens_resultColection/51996434332_b7d54f8313_k.jpg',
      alt: 'Imagem 04',
    },
    {
      id: '5',
      image: 'src/assets/imagens_resultColection/52080799375_f5a586e412_k.jpg',
      alt: 'Imagem 05',
    },
    {
      id: '6',
      image: 'src/assets/imagens_resultColection/52098715999_b42633adc1_k.jpg',
      alt: 'Imagem 06',
    },
    {
      id: '7',
      image: 'src/assets/imagens_resultColection/52736918680_81f8790ad0_k.jpg',
      alt: 'Imagem 07',
    },
    {
      id: '8',
      image: 'src/assets/imagens_resultColection/52782009235_93c29029e2_k.jpg',
      alt: 'Imagem 08',
    },
    {
      id: '9',
      image: 'src/assets/imagens_resultColection/53061302652_7af6813e54_k.jpg',
      alt: 'Imagem 09',
    },
  ];

  return (
    <>
      <div className='container'>
        <div className={style.wrapper}>
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
                  <img src={image_1} alt='imagem' />
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
          <ul>
            <li>
              <h3 id={style.title_2}>Outros Resultados</h3>
            </li>
          </ul>
          <div className={style.container_images}>
            {dataImages.map((item) => (
              <div key={item.id} className={style.box_images}>
                <img src={item.image} alt={item.alt} className={style.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultColection;
