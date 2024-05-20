import style from './hashtags.module.css';

const Hashtags = () => {
  const dataLi = [
    { id: '1', tag: '#Paraisópolis' },
    { id: '2', tag: '#Saúde' },
    { id: '3', tag: '#Hospitais' },
    { id: '4', tag: '#Coperifa' },
    { id: '5', tag: '#CasaDeCultura' },
    { id: '6', tag: '#Eleições2022' },
    { id: '7', tag: '#Urnas' },
  ];
  return (
    <>
      <div className={style.container}>
        {dataLi.map((text) => (
          <ul key={text.id} className={style.box}>
            <li>{text.tag}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Hashtags;
