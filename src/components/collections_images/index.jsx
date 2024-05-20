import style from './collections_images.module.css';

const Collections_images = () => {
  const data = [
    {
      id: '1',
      image: 'src/assets/imagens_resultColection/49813905103_c420219e1d_k.jpg',
    },
    {
      id: '2',
      image: 'src/assets/imagens_resultColection/51116374422_632fb80f17_k.jpg',
    },
    {
      id: '3',
      image: 'src/assets/imagens_resultColection/51485029310_326341b0a8_k.jpg',
    },
    {
      id: '4',
      image: 'src/assets/imagens_resultColection/51973255132_5b8ba0677b_k.jpg',
    },
    {
      id: '5',
      image: 'src/assets/imagens_resultColection/51996434332_b7d54f8313_k.jpg',
    },
    {
      id: '6',
      image: 'src/assets/imagens_resultColection/52782009235_93c29029e2_k.jpg',
    },
  ];

  return (
    <>
      <div className={style.wrapper}>
        {data.map((item) => (
          <div key={item.id} className={style.images_}>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Collections_images;
