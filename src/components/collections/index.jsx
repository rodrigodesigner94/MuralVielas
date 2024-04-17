import styles from './collections.module.css'
import { Card } from 'react-bootstrap'



function Collections () {
    const data = [
        {id: '1', image: 'src/assets/imagens/coleçoes/49394513773_3451285418_w.jpg', title: 'Lazer na Infancia', info: 'Situação dos parques publicos nas comunidades'},
        {id: '2', image: 'src/assets/imagens/coleçoes/52098715999_c1be5a8403_w.jpg', title: 'Arte e Cultura', info: 'Exposições de arte que acontecem nas periferias'},
        {id: '3', image: 'src/assets/imagens/coleçoes/49395055583_917d3598c5_w.jpg', title: 'Economia', info: 'Como a situação de moradia é reflexo da renda'}
    ]
    return(
        
        <div>
            <h3 className={styles.ttlClt}>Coleções</h3>
            <div className={styles.imgSection}>
                {data.map((item) => (

                    <Card 
                    key={item.id}
                    style={{ width: '18rem' }}
                    >
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.info}                
                    </Card.Text>        
                </Card.Body>
            </Card>
            ))}
            </div>
        </div>
    )
}
export default Collections