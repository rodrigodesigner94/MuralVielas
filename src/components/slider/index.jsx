
// import './style.css';

import { Carousel} from 'bootstrap';





function Slider(){
    const data = [
        {id: '1', image: 'src/assets/imagens/49429680688_3cb15f2f43_c.jpg'},
        {id: '2', image: 'src/assets/imagens/50353559883_8fef4f202e_c.jpg'},
        {id: '3', image: 'src/assets/imagens/52080799375_da14f33d82_c.jpg'},
        {id: '4', image: 'src/assets/imagens/52098983475_b0ffb9db6e_c.jpg'},
    ]
    return(
        <div className='containerCarousel'>
            <div className='txtbox'>
                <h1 className='titleVielas'>VIELAS</h1>
                <p className='txtVielas'>Um bando de imagens pensado para mostar
                    a diversidade das periferias de São Paulo.
                    Nascido nas quebracas e fomentado por quem
                    vive e pensa nelas.
                </p>
            </div>
        <div className='container'> 
        
      
        <Carousel>
        {data.map((item) => (
            <Carousel.Item key={item.id}>                 
                <img
                    
                    src={item.image}
                    className='slideItem'
                />
            </Carousel.Item>
            
        ))}
    </Carousel>           
            {/* <Swiper
            slidesPreview={1}           
            loop            
            >                
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        className='slideItem'
                        />
            
                    </SwiperSlide>
                ))}
            </Swiper> */}
        </div>
        </div>
    )
}

export default Slider