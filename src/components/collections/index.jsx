import styles from './collections.module.css';
import { Link } from 'react-router-dom';

function Collections () {
    const data = [
        {id: '1', image: 'src/assets/imagens/coleçoes/49394513773_3451285418_w.jpg', title: 'Lazer na Infancia', info: 'Situação dos parques publicos nas comunidades'},
        {id: '2', image: 'src/assets/imagens/coleçoes/52098715999_c1be5a8403_w.jpg', title: 'Arte e Cultura', info: 'Exposições de arte que acontecem nas periferias'},
        {id: '3', image: 'src/assets/imagens/coleçoes/49395055583_917d3598c5_w.jpg', title: 'Economia', info: 'Como a situação de moradia é reflexo da renda'}
    ]
    return(
        
        <div className={styles.main}>
            <h3 className={styles.ttlClt}>Coleções</h3>
            <Link to= 'resultado_da_coleçao'>
            <div className={styles.imgSection}>
                {data.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <img src={item.image}/>
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                    </div>
            ))}
            </div>
            </Link>
        </div>
    )
}
export default Collections