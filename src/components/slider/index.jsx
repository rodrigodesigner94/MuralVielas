import styles from './slides.module.css';

import { Carousel } from "react-bootstrap";





function Slider(){
    const data = [
        {id: '1', image: 'src/assets/imagens/carrossel/49429680688_1d231ce3f2_k.jpg'},
        {id: '2', image: 'src/assets/imagens/carrossel/50353559883_3e64f146b7_k.jpg'},
        {id: '3', image: 'src/assets/imagens/carrossel/52080799375_f5a586e412_k.jpg'},
        {id: '4', image: 'src/assets/imagens/carrossel/52098983475_d4f7fa0293_k.jpg'},
    ]
    return(
        <div className={styles.containerCarousel}>
            <div className={styles.txtbox}>
                <h1 className={styles.titleVielas}>VIELAS</h1>
                <p className={styles.txtVielas}>Um bando de imagens pensado para mostar
                    a diversidade das periferias de São Paulo.
                    Nascido nas quebracas e fomentado por quem
                    vive e pensa nelas.
                </p>
            </div>
        
        <Carousel 
        controls= {false}
        indicators = {false}
        className={styles.carousel}
        
        >
        {data.map((item) => (
            <Carousel.Item key={item.id}>                 
                <img
                    
                    src={item.image}
                    className={styles.slideItem}
                />
            </Carousel.Item>
            
        ))}
    </Carousel>
        
        </div>
    )
}

export default Slider