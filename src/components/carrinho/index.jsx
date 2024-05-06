
import styles from './carrinho.module.css'

function Carrinho(){
    const data = [
        {id: '1', image: 'src/assets/imagens/carrossel/49429680688_1d231ce3f2_k.jpg', name: 'Imagem do Creative', size: "1088 x 570", license: 'direitos de Vielas'}
       
    ]
    return(
        <div className={styles.main}>
        <h3 className={styles.ttlClt}>Carrinho de Compras</h3>
        
        <div className={styles.imgSection}>
            {data.map((item) => (
                <div key={item.id} className={styles.section}>
                    <img src={item.image}/>
                    <div>
                    <h3>Nome: {item.name}</h3>
                    <p> Tamanho: {item.size}</p>
                    </div>
                </div>
        ))}
        </div>
        
    </div>
    )

}

export default Carrinho;